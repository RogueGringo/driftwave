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
    ok = {
        "==": actual == expected, "!=": actual != expected,
        ">": actual > expected, ">=": actual >= expected,
        "<": actual < expected, "<=": actual <= expected,
    }[op]
    return ok, f"{detail} {op} {expected!r}"


def frozen_view(prereg: dict) -> dict:
    return {k: v for k, v in prereg.items() if k != "frozen_sha256"}


def cmd_freeze(path: Path) -> int:
    prereg = strict_load_path(path)
    if prereg.get("frozen_sha256"):
        print("REFUSED: prereg already frozen — criteria may not be re-frozen; "
              "a retry requires a NEW pre-registration")
        return 1
    for key in ("prereg_id", "question", "criteria"):
        if key not in prereg:
            print(f"REFUSED: prereg missing required key '{key}'")
            return 1
    digest = sha256_of(frozen_view(prereg))
    prereg["frozen_sha256"] = digest
    path.write_text(json.dumps(prereg, indent=2, allow_nan=False) + "\n", encoding="utf-8")
    print(f"FROZEN: {path} sha256={digest}")
    return 0


def cmd_check(path: Path) -> int:
    prereg = strict_load_path(path)
    recorded = prereg.get("frozen_sha256")
    if not recorded:
        print("MISMATCH: prereg was never frozen (no frozen_sha256) — refusing to score")
        return 1
    actual = sha256_of(frozen_view(prereg))
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
    results = strict_load_path(results_path)

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
            "prereg_id": prereg.get("prereg_id"),
            "prereg_sha256": prereg["frozen_sha256"],
            "results_sha256": sha256_of(results),
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
    parsed = {"gates": [], "criteria": [], "verdict": None, "verdict_reason": None}
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
    if parsed["verdict"] is None:
        print(json.dumps(parsed, indent=2))
        print("(no VERDICT line found — nothing here is a computed verdict)", file=sys.stderr)
        return 1
    print(json.dumps(parsed, indent=2))
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
    sys.exit(main(sys.argv[1:]))
