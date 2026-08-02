#!/usr/bin/env python3
"""The instrument, not a demo: headless end-to-end selftest on planted fixtures.

Runs the whole pipeline against synthetic data with KNOWN ground truth —
planted clusters the H0 filter must recover, noise it must reject, a prereg
the verdict engine must freeze/evaluate/refuse-on-tamper — and exits non-zero
on any failure. This is what "the pipeline works" means; nothing else is.

Lettered acceptance criteria (each maps to one check below):
  G1  L1 artifact is strict JSON and schema+pin valid (via dw_validate)
  G2  planted clusters recovered (>=2 of 3 groups land majority-pure)
  G3  planted noise identified (scattered singletons flagged as noise)
  G4  aliveness: emitted numerics vary — a dead instrument reports constants
  G5  decoy control: native structure beats its seeded decoy
  G6  verdict spine: freeze -> eval grammar -> tamper refusal all behave
  G7  meta-persistence over 2 synthetic sessions emits strict-valid JSON
  G8  pin conformance: flags within vocabulary, no prohibited lexicon in
      claim fields (checked by dw_validate as part of G1, asserted here too)

G1-G5, G7, and G8 need numpy (G8 inspects the persistence script's emissions,
so it rides the numpy fixture); G6 — the verdict spine — is stdlib. Without
numpy the numpy-dependent checks are reported as SKIP and the exit code is 2 —
a skipped instrument check is not a pass.

Usage:  python3 scripts/dw_selftest.py
"""
from __future__ import annotations

import json
import subprocess
import sys
import tempfile
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPTS))

from dw_common import load_pin, strict_loads  # noqa: E402


def run_script(script: str, payload: dict) -> subprocess.CompletedProcess:
    return subprocess.run(
        [sys.executable, str(SCRIPTS / script)],
        input=json.dumps(payload), capture_output=True, text=True,
    )


def planted_feature_cloud() -> dict:
    """Three jittered groups + scattered noise in a 2-channel frame. Used for
    validity/aliveness/decoy checks, NOT for exact recovery: the median-
    lifetime cut lands inside the intra-group merge distribution when spacing
    varies, so jittered groups fragment — a real, documented property of the
    algorithm (see docs/HARNESS.md), which is why recovery is asserted on the
    exact distance fixture below instead."""
    files = []
    centers = {"A": (0.0, 0.0), "B": (10.0, 0.0), "C": (5.0, 12.0)}
    for group, (cx, cy) in centers.items():
        for i in range(8):
            files.append({"path": f"{group}{i}",
                          "features": [cx + 0.03 * i, cy + 0.02 * (i % 4)]})
    for i, (nx, ny) in enumerate([(40, 40), (-30, 25), (55, -35)]):
        files.append({"path": f"noise{i}", "features": [float(nx), float(ny)]})
    return {"files": files}


def planted_distance_fixture() -> tuple[dict, dict[str, str]]:
    """Exact planted distance matrix: every intra-group pair 0.1, inter-group
    0.7, noise 2.0. Deaths sort to 21x0.1 then 0.7/2.0, so the median cut is
    exactly 0.1 and single-linkage MUST recover all three groups bit-
    deterministically — no floating-point ambiguity."""
    truth: dict[str, str] = {}
    files = []
    for group in ("A", "B", "C"):
        for i in range(8):
            path = f"{group}{i}"
            files.append({"path": path})
            truth[path] = group
    for i in range(3):
        path = f"noise{i}"
        files.append({"path": path})
        truth[path] = "NOISE"
    n = len(files)
    D = [[0.0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1, n):
            gi, gj = truth[files[i]["path"]], truth[files[j]["path"]]
            if gi == "NOISE" or gj == "NOISE":
                d = 2.0
            elif gi == gj:
                d = 0.1
            else:
                d = 0.7
            D[i][j] = D[j][i] = d
    return {"files": files, "distances": D}, truth


def check_recovery(result: dict, truth: dict[str, str]) -> tuple[bool, str]:
    recovered = 0
    details = []
    for group in ("A", "B", "C"):
        members = {p for p, g in truth.items() if g == group}
        best = 0.0
        for c in result["clusters"]:
            cset = set(c["members"])
            if not cset:
                continue
            purity = len(cset & members) / len(cset)
            coverage = len(cset & members) / len(members)
            best = max(best, min(purity, coverage))
        details.append(f"{group}:{best:.2f}")
        if best >= 0.99:
            recovered += 1
    # The distance fixture is exact — anything short of perfect recovery is
    # an instrument failure, not noise.
    return recovered == 3, f"{recovered}/3 groups recovered exactly ({', '.join(details)})"


def main() -> int:
    checks: dict[str, tuple[str, bool | None, str]] = {}

    def record(gid: str, name: str, ok: bool | None, detail: str = ""):
        checks[gid] = (name, ok, detail)

    try:
        import numpy  # noqa: F401
        have_numpy = True
    except ImportError:
        have_numpy = False

    tmp = Path(tempfile.mkdtemp(prefix="dw-selftest-"))
    pin = load_pin()

    # ── G1, G4, G5, G8: feature-channel fixture (validity / aliveness / decoy) ──
    if have_numpy:
        proc = run_script("compute_persistence.py", planted_feature_cloud())
        if proc.returncode != 0:
            for gid, name in [("G1", "L1 artifact valid"), ("G4", "aliveness"),
                              ("G5", "decoy beaten"), ("G8", "pin conformance in emissions")]:
                record(gid, name, False, f"compute_persistence exited {proc.returncode}: {proc.stderr[:200]}")
        else:
            art_path = tmp / "filtered.json"
            art_path.write_text(proc.stdout, encoding="utf-8")
            val = subprocess.run(
                [sys.executable, str(SCRIPTS / "dw_validate.py"), str(art_path), "--strict"],
                capture_output=True, text=True)
            record("G1", "L1 artifact valid", val.returncode == 0,
                   val.stdout.strip().splitlines()[-1] if val.stdout else "")
            result = strict_loads(proc.stdout)

            finite_lifetimes = {round(b["death"] - b["birth"], 9)
                                for b in result["barcode"] if not b.get("infinite")}
            record("G4", "aliveness (numerics vary)",
                   len(finite_lifetimes) > 1,
                   f"{len(finite_lifetimes)} distinct finite lifetimes")

            nc = result.get("null_check") or {}
            native, decoy = nc.get("native_top_lifetime"), nc.get("decoy_top_lifetime")
            if native is None or decoy is None:
                # A REPROBE-shaped artifact carries no null_check — that is a
                # FAIL row, never a format-spec crash that eats the table.
                record("G5", "native beats seeded decoy", False,
                       f"no null_check in artifact (routing={result.get('routing')})")
            else:
                record("G5", "native beats seeded decoy", bool(nc.get("beats_decoy")),
                       f"native={native:.3f} decoy={decoy:.3f}")

            # G8 delegates to the real enforcer instead of a weaker inline
            # copy: pin_check scans every pinned claim field, not just
            # routing_reason, so the selftest certifies the property the
            # pipeline actually enforces.
            import dw_validate
            pin_errors: list[str] = []
            dw_validate.pin_check(result, pin, pin_errors)
            record("G8", "pin conformance in emissions", not pin_errors,
                   f"flags={result.get('flags')}" if not pin_errors else "; ".join(pin_errors[:3]))

        # ── G2, G3: exact distance fixture (deterministic recovery contract) ──
        raw2, truth = planted_distance_fixture()
        proc2 = run_script("compute_persistence.py", raw2)
        if proc2.returncode != 0:
            record("G2", "planted clusters recovered", False, f"exited {proc2.returncode}")
            record("G3", "noise identified", False, f"exited {proc2.returncode}")
        else:
            result2 = strict_loads(proc2.stdout)
            ok, detail = check_recovery(result2, truth)
            record("G2", "planted clusters recovered", ok, detail)
            planted_noise = {p for p, g in truth.items() if g == "NOISE"}
            found_noise = set(result2["noise"]) & planted_noise
            record("G3", "noise identified", len(found_noise) == 3,
                   f"{len(found_noise)}/3 planted noise files in noise list")
    else:
        for gid, name in [("G1", "L1 artifact valid"), ("G2", "planted clusters recovered"),
                          ("G3", "noise identified"), ("G4", "aliveness"),
                          ("G5", "decoy beaten"), ("G8", "pin conformance in emissions")]:
            record(gid, name, None, "numpy not installed")

    # ── G6: verdict spine (stdlib) ──
    prereg = {
        "prereg_id": "selftest",
        "question": "does the planted metric clear its frozen threshold?",
        "null_is_valid": True,
        "gates": [{"name": "alive", "predicate": {"field": "alive", "op": "is_true"}}],
        "criteria": [{"id": "C1", "kind": "positive",
                      "predicate": {"field": "metric", "op": ">", "value": 0.5}}],
    }
    p = tmp / "prereg.json"
    p.write_text(json.dumps(prereg), encoding="utf-8")
    res = tmp / "results.json"
    res.write_text(json.dumps({"alive": True, "metric": 0.9}), encoding="utf-8")

    def verdict(*args):
        return subprocess.run([sys.executable, str(SCRIPTS / "dw_verdict.py"), *args],
                              capture_output=True, text=True)

    froze = verdict("freeze", str(p))
    vout = tmp / "verdict_out.json"
    ev = verdict("eval", str(p), str(res), "--out", str(vout))
    grammar_ok = any(line.startswith("VERDICT: PASS") for line in ev.stdout.splitlines())
    # The spine must accept its own output: the --out artifact validates.
    val_out = subprocess.run(
        [sys.executable, str(SCRIPTS / "dw_validate.py"), str(vout), "--strict"],
        capture_output=True, text=True)
    refroze = verdict("freeze", str(p))
    tampered = json.loads(p.read_text(encoding="utf-8"))
    tampered["criteria"][0]["predicate"]["value"] = 0.1
    p.write_text(json.dumps(tampered), encoding="utf-8")
    tam = verdict("eval", str(p), str(res))
    g6 = (froze.returncode == 0 and ev.returncode == 0 and grammar_ok
          and val_out.returncode == 0
          and refroze.returncode != 0 and tam.returncode != 0
          and "NO_VERDICT" in tam.stdout)
    record("G6", "verdict spine (freeze/eval/out-validates/tamper-refusal)", g6,
           f"freeze={froze.returncode} eval={ev.returncode} out-valid={val_out.returncode} "
           f"refreeze={refroze.returncode} tamper={tam.returncode}")

    # ── G7: meta-persistence strict-valid ──
    if have_numpy:
        meta = {"sessions": [
            {"session_id": "s1", "timestamp": "2026-01-01T00:00:00Z",
             "artifacts": {"filtered_topology": {"clusters": [{"label": "A"}],
                           "barcode": [{"birth": 0, "death": 0.4, "dimension": 0}]},
                           "synthesis_map": {"trajectory": [0.3, 0.4]},
                           "sheaved_verdict": {"kernel_dim": 2}}},
            {"session_id": "s2", "timestamp": "2026-01-02T00:00:00Z",
             "artifacts": {"filtered_topology": {"clusters": [{"label": "A"}],
                           "barcode": [{"birth": 0, "death": 0.5, "dimension": 0}]},
                           "synthesis_map": {"trajectory": [0.35, 0.5]},
                           "sheaved_verdict": {"kernel_dim": 3}}}],
                "accumulated_verdicts": []}
        mp = run_script("compute_meta_persistence.py", meta)
        try:
            out = strict_loads(mp.stdout)
            record("G7", "meta-persistence strict-valid", mp.returncode == 0 and "meta_barcode" in out,
                   f"rc={mp.returncode}")
        except ValueError as e:
            record("G7", "meta-persistence strict-valid", False, str(e))
    else:
        record("G7", "meta-persistence strict-valid", None, "numpy not installed")

    # ── report ──
    print("driftwave selftest — planted-fixture instrument")
    print(f"{'ID':<4} {'CHECK':<42} RESULT")
    failed = skipped = 0
    for gid in sorted(checks):
        name, ok, detail = checks[gid]
        if ok is None:
            status, skipped = "SKIP", skipped + 1
        elif ok:
            status = "PASS"
        else:
            status, failed = "FAIL", failed + 1
        line = f"{gid:<4} {name:<42} {status}"
        if detail:
            line += f"  ({detail})"
        print(line)

    if failed:
        print(f"\nVERDICT: FAIL {failed} check(s) failed")
        return 1
    if skipped:
        print(f"\nVERDICT: NO_VERDICT {skipped} check(s) skipped (numpy missing) — a skipped instrument check is not a pass")
        return 2
    print("\nVERDICT: PASS all instrument checks green")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as e:  # the instrument must verdict, never traceback
        print(f"\nVERDICT: FAIL selftest crashed before completing: {type(e).__name__}: {e}")
        sys.exit(1)
