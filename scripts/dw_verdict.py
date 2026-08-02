#!/usr/bin/env python3
"""The verdict engine: pre-registration freezing and mechanical evaluation.

Criteria chosen after seeing results are not criteria. This tool enforces the
order: freeze the criteria, run the work, then let CODE — not narration —
decide what passed. Verdict tokens are only ever emitted by this script's
computed comparisons; an LLM paraphrasing a result cannot mint one.

Subcommands:
  freeze <prereg.json>            canonicalize + stamp frozen_sha256 (refuses
                                  to re-freeze: a retry requires a NEW prereg)
  check  <prereg.json>            recompute the hash; non-zero exit on mismatch
  eval   <prereg.json> <results.json> [--out verdict.json]
                                  evaluate gates then criteria mechanically and
                                  print the verdict grammar (below)
  parse  <file|->                 extract GATE:/CRITERION:/VERDICT: lines into
                                  JSON so the LOG step records, not paraphrases

Verdict grammar (one line each, machine-parseable):
  GATE: <name> PASS|FAIL <detail>
  CRITERION: <id> PASS|FAIL|MANUAL <detail>
  VERDICT: PASS|FAIL|NULL|CERTIFIED_NULL|NO_VERDICT <reason>

Semantics (both branches pre-committed in the prereg, fail-closed):
  - any GATE fails            -> NO_VERDICT (the instrument is broken; findings
                                 from a broken instrument are not findings)
  - all positive criteria PASS -> PASS
  - a positive criterion FAILS -> NULL when the prereg declares null_is_valid,
                                 else FAIL; NULL upgrades to CERTIFIED_NULL
                                 when a null_evidence criterion also passed
  - only MANUAL criteria       -> NO_VERDICT (nothing computable — the outcome
                                 is LLM judgment and must be labeled heuristic)

Predicates are {"field": "dotted.path", "op": OP, "value": X} evaluated
against the results JSON. OPs: == != > >= < <= in exists is_true is_false.
A criterion with "predicate": null is MANUAL by construction.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from dw_common import PLUGIN_VERSION, sha256_of, strict_load_path

OPS = {"==", "!=", ">", ">=", "<", "<=", "in", "exists", "is_true", "is_false"}


def lookup(results, dotted: str):
    cur = results
    for part in dotted.split("."):
        if isinstance(cur, list):
            try:
                cur = cur[int(part)]
                continue
            except (ValueError, IndexError):
                return None, False
        if not isinstance(cur, dict) or part not in cur:
            return None, False
        cur = cur[part]
    return cur, True


def eval_predicate(pred: dict, results) -> tuple[bool, str]:
    field, op, expected = pred["field"], pred["op"], pred.get("value")
    if op not in OPS:
        return False, f"unknown op {op!r}"
    actual, found = lookup(results, field)
    if op == "exists":
        return found, f"{field} {'present' if found else 'absent'}"
    if not found:
        # Unknown never certifies: an absent field fails the predicate.
        return False, f"{field} absent from results"
    detail = f"{field}={actual!r}"
    if op == "is_true":
        return actual is True, detail
    if op == "is_false":
        return actual is False, detail
    if op == "in":
        try:
            return actual in expected, f"{detail} in {expected!r}"
        except TypeError:
            return False, f"{detail}: 'in' needs a container value"
    if not isinstance(actual, (int, float)) or isinstance(actual, bool):
        if op in ("==", "!="):
            ok = (actual == expected) if op == "==" else (actual != expected)
            return ok, f"{detail} {op} {expected!r}"
        return False, f"{detail}: ordering op {op} needs a number"
    try:
        ok = {
            "==": actual == expected, "!=": actual != expected,
            ">": actual > expected, ">=": actual >= expected,
            "<": actual < expected, "<=": actual <= expected,
        }[op]
    except TypeError:
        # A number compared against a non-number expected value: the predicate
        # is malformed. Fail the predicate, never the process — unknown never
        # certifies, and a broken criterion must not crash the verdict.
        return False, f"{detail}: cannot compare against {expected!r} ({op})"
    return ok, f"{detail} {op} {expected!r}"


def frozen_view(prereg: dict) -> dict:
    return {k: v for k, v in prereg.items() if k != "frozen_sha256"}


def _shape_errors(prereg: dict) -> list[str]:
    """A prereg that freezes must also be evaluable — freezing a prereg whose
    predicates can only crash their own evaluation is worse than refusing."""
    errs = []
    for key in ("prereg_id", "question", "criteria"):
        if key not in prereg:
            errs.append(f"missing required key '{key}'")
    for kind, entries in (("gates", prereg.get("gates", [])),
                          ("criteria", prereg.get("criteria", []))):
        if not isinstance(entries, list):
            errs.append(f"{kind} must be a list")
            continue
        for i, e in enumerate(entries):
            if not isinstance(e, dict):
                errs.append(f"{kind}[{i}] must be an object")
                continue
            if kind == "gates" and ("name" not in e or not isinstance(e.get("predicate"), dict)):
                errs.append(f"gates[{i}] needs 'name' and an object 'predicate'")
            if kind == "criteria":
                if "id" not in e or "predicate" not in e:
                    errs.append(f"criteria[{i}] needs 'id' and 'predicate' (null = MANUAL)")
                elif e["predicate"] is not None and not isinstance(e["predicate"], dict):
                    errs.append(f"criteria[{i}].predicate must be an object or null")
            pred = e.get("predicate")
            if isinstance(pred, dict):
                if "field" not in pred or pred.get("op") not in OPS:
                    errs.append(f"{kind}[{i}].predicate needs 'field' and a known 'op'")
    return errs


def cmd_freeze(path: Path) -> int:
    prereg = strict_load_path(path)
    if not isinstance(prereg, dict):
        print("REFUSED: prereg must be a JSON object")
        return 1
    if prereg.get("frozen_sha256"):
        print("REFUSED: prereg already frozen — criteria may not be re-frozen; "
              "a retry requires a NEW pre-registration")
        return 1
    errs = _shape_errors(prereg)
    if errs:
        print("REFUSED: prereg is not evaluable as written:")
        for e in errs:
            print(f"    - {e}")
        return 1
    try:
        digest = sha256_of(frozen_view(prereg))
    except ValueError as e:
        print(f"REFUSED: prereg is not canonically serializable ({e}) — "
              "non-finite numbers cannot be frozen")
        return 1
    prereg["frozen_sha256"] = digest
    path.write_text(json.dumps(prereg, indent=2, allow_nan=False) + "\n", encoding="utf-8")
    print(f"FROZEN: {path} sha256={digest}")
    return 0


def cmd_check(path: Path) -> int:
    prereg = strict_load_path(path)
    if not isinstance(prereg, dict):
        print("MISMATCH: prereg is not a JSON object — refusing to score")
        return 1
    recorded = prereg.get("frozen_sha256")
    if not recorded:
        print("MISMATCH: prereg was never frozen (no frozen_sha256) — refusing to score")
        return 1
    try:
        actual = sha256_of(frozen_view(prereg))
    except ValueError:
        print("MISMATCH: prereg is no longer canonically serializable — refusing to score")
        return 1
    if actual != recorded:
        print(f"MISMATCH: recorded {recorded} != recomputed {actual} — "
              "the criteria changed after freezing; refusing to score")
        return 1
    print(f"INTACT: {path} sha256={recorded}")
    return 0


def cmd_eval(prereg_path: Path, results_path: Path, out: Path | None) -> int:
    if cmd_check(prereg_path) != 0:
        print("VERDICT: NO_VERDICT prereg hash mismatch")
        return 2
    prereg = strict_load_path(prereg_path)
    shape = _shape_errors(prereg)
    if shape:
        # A pre-0.2.1 freeze could stamp a malformed prereg; treat it as an
        # instrument failure, never a crash.
        print("VERDICT: NO_VERDICT prereg is not evaluable: " + "; ".join(shape))
        return 2
    results = strict_load_path(results_path)
    # Hash the results BEFORE any grammar prints: a results file that cannot
    # be canonically serialized (non-finite numbers) must yield NO_VERDICT
    # with no PASS line ever emitted — not a PASS transcript plus a crash.
    try:
        results_digest = sha256_of(results)
    except ValueError as e:
        print(f"VERDICT: NO_VERDICT results not canonically serializable ({e})")
        return 2

    lines = []
    gate_rows, crit_rows = [], []
    gates_ok = True
    for gate in prereg.get("gates", []):
        ok, detail = eval_predicate(gate["predicate"], results)
        gates_ok &= ok
        row = {"name": gate["name"], "passed": ok, "detail": detail}
        gate_rows.append(row)
        lines.append(f"GATE: {gate['name']} {'PASS' if ok else 'FAIL'} {detail}")

    n_pass = n_fail = n_manual = 0
    null_evidence_ok = False
    for crit in prereg.get("criteria", []):
        cid, kind = crit["id"], crit.get("kind", "positive")
        pred = crit.get("predicate")
        if pred is None:
            status, detail = "MANUAL", "no computable predicate — LLM judgment, heuristic tier"
            n_manual += 1
        else:
            ok, detail = eval_predicate(pred, results)
            status = "PASS" if ok else "FAIL"
            if kind == "null_evidence":
                null_evidence_ok |= ok
            elif ok:
                n_pass += 1
            else:
                n_fail += 1
        crit_rows.append({"id": cid, "kind": kind, "status": status, "detail": detail})
        lines.append(f"CRITERION: {cid} {status} {detail}")

    if not gates_ok:
        verdict, reason = "NO_VERDICT", "instrument gate failed — findings from a broken instrument are not findings"
    elif n_pass + n_fail == 0:
        verdict, reason = "NO_VERDICT", "no computable positive criteria — outcome is LLM judgment (heuristic)"
    elif n_fail == 0:
        verdict, reason = "PASS", f"all {n_pass} computable positive criteria passed"
    elif prereg.get("null_is_valid", False):
        if null_evidence_ok:
            verdict, reason = "CERTIFIED_NULL", "positive criteria failed AND null evidence passed — a certified negative, kept"
        else:
            verdict, reason = "NULL", "positive criteria failed; prereg declares NULL a valid recorded outcome"
    else:
        verdict, reason = "FAIL", f"{n_fail} positive criteria failed and prereg does not declare NULL valid"

    lines.append(f"VERDICT: {verdict} {reason}")
    print("\n".join(lines))

    if out:
        payload = {
            "artifact": "computed_verdict",
            "prereg_id": prereg.get("prereg_id"),
            "prereg_sha256": prereg["frozen_sha256"],
            "results_sha256": results_digest,
            "gates": gate_rows,
            "criteria": crit_rows,
            "verdict": verdict,
            "verdict_reason": reason,
            "provenance": {
                "producer": "dw_verdict.py",
                "plugin_version": PLUGIN_VERSION,
                "tier": "real",
            },
        }
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(json.dumps(payload, indent=2, allow_nan=False) + "\n", encoding="utf-8")
        print(f"(verdict artifact written to {out})")
    return 0 if verdict in ("PASS", "NULL", "CERTIFIED_NULL") else 1


GRAMMAR = re.compile(r"^(GATE|CRITERION|VERDICT): (\S+)(?: (.*))?$")


def cmd_parse(src: str) -> int:
    text = sys.stdin.read() if src == "-" else Path(src).read_text(encoding="utf-8")
    # parse extracts a RECORD of grammar lines from a transcript — it does not
    # certify them. The stamp below keeps a parsed transcript from ever
    # impersonating a computed_verdict artifact, and an out-of-vocabulary
    # token (something prose invented) is an error, not a verdict.
    from dw_common import load_pin
    vocabulary = set(load_pin()["verdict_vocabulary"])
    parsed = {
        "gates": [], "criteria": [], "verdict": None, "verdict_reason": None,
        "provenance": {"producer": "dw_verdict.py parse", "plugin_version": PLUGIN_VERSION,
                       "tier": "real", "params": {"note": "a parsed record, not an evaluation"}},
    }
    for line in text.splitlines():
        m = GRAMMAR.match(line.strip())
        if not m:
            continue
        kind, tok, rest = m.group(1), m.group(2), m.group(3) or ""
        if kind == "GATE":
            status, _, detail = rest.partition(" ")
            parsed["gates"].append({"name": tok, "passed": status == "PASS", "detail": detail})
        elif kind == "CRITERION":
            status, _, detail = rest.partition(" ")
            parsed["criteria"].append({"id": tok, "status": status, "detail": detail})
        else:
            parsed["verdict"], parsed["verdict_reason"] = tok, rest
    print(json.dumps(parsed, indent=2))
    if parsed["verdict"] is None:
        print("(no VERDICT line found — nothing here is a computed verdict)", file=sys.stderr)
        return 1
    if parsed["verdict"] not in vocabulary:
        print(f"(VERDICT token {parsed['verdict']!r} is not in the pinned verdict "
              "vocabulary — this line was not written by dw_verdict eval)", file=sys.stderr)
        return 1
    return 0


def main(argv: list[str]) -> int:
    if not argv:
        print(__doc__)
        return 2
    cmd, rest = argv[0], argv[1:]
    if cmd == "freeze" and len(rest) == 1:
        return cmd_freeze(Path(rest[0]))
    if cmd == "check" and len(rest) == 1:
        return cmd_check(Path(rest[0]))
    if cmd == "eval" and len(rest) >= 2:
        out = Path(rest[rest.index("--out") + 1]) if "--out" in rest else None
        return cmd_eval(Path(rest[0]), Path(rest[1]), out)
    if cmd == "parse" and len(rest) == 1:
        return cmd_parse(rest[0])
    print(__doc__)
    return 2


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except (OSError, IndexError, ValueError) as e:
        # Usage/environment errors (missing files, dangling flags, unparseable
        # JSON) exit 2 with a message — never a traceback, never a verdict.
        print(f"ERROR: {type(e).__name__}: {e}")
        sys.exit(2)
