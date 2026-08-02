#!/usr/bin/env python3
"""Artifacts-only audit as a MECHANISM: the AUDIT verdict is computed, never
minted by prose (stdlib only).

Before this tool, /driftwave:audit's cross-checks were instructions to the
LLM and the final AUDIT: PASS/FAIL line was model-written — the one
verdict-shaped token in the system that prose was still allowed to mint. Now
the command runs this and reports its output verbatim.

Checks, from what is ON DISK only (never by re-running any analysis):
  1. every artifact in <state>/artifacts validates (schema + pin, via
     dw_validate's own functions — one enforcer, no copy)
  2. every frozen prereg in <state>/prereg passes its hash check (dw_verdict)
  3. every artifact carrying prereg_sha256 resolves to a frozen prereg with
     that exact hash (a dangling reference = the run answers to criteria that
     don't exist)
  4. findings marked CLOSED carry a witness (also enforced at validate time;
     re-checked here because the audit must stand alone)
  5. legacy handling: artifacts with no provenance block are warned as
     pre-0.2.0 legacy, not failed — valid-when-produced is not retroactive FAIL
     (but they cannot claim 0.2 guarantees, and strict mode is not applied)

Output: leveled findings (fail/warn/info), then exactly one computed line:
  AUDIT: PASS <n> artifact(s), <p> prereg(s) verified
  AUDIT: FAIL <n> finding(s)
Exit codes: 0 PASS, 1 FAIL, 2 usage/environment error.

Usage: python3 dw_audit.py [state_dir]     # default: resolved state dir
"""
from __future__ import annotations

import sys
from pathlib import Path

from dw_common import load_pin, state_dir, strict_loads
import dw_validate
import dw_verdict


def audit(state: Path) -> int:
    if not state.is_dir():
        print(f"ERROR: {state} is not a directory — nothing was audited")
        return 2
    pin = load_pin()
    fails: list[str] = []
    warns: list[str] = []
    infos: list[str] = []

    # ── preregs: freeze hashes ──
    frozen: dict[str, Path] = {}
    prereg_dir = state / "prereg"
    preregs = sorted(prereg_dir.glob("*.json")) if prereg_dir.is_dir() else []
    for p in preregs:
        try:
            doc = strict_loads(p.read_text(encoding="utf-8"))
        except ValueError as e:
            fails.append(f"fail: {p}: prereg is not strict JSON ({e})")
            continue
        recorded = doc.get("frozen_sha256") if isinstance(doc, dict) else None
        if not recorded:
            warns.append(f"warn: {p}: prereg was never frozen — nothing can score against it")
            continue
        try:
            actual = dw_verdict.sha256_of(dw_verdict.frozen_view(doc))
        except ValueError:
            fails.append(f"fail: {p}: prereg no longer canonically serializable")
            continue
        if actual != recorded:
            fails.append(f"fail: {p}: freeze hash mismatch — criteria changed after freezing")
        else:
            frozen[recorded] = p

    # ── artifacts: schema + pin + cross-references ──
    art_dir = state / "artifacts"
    artifacts = sorted(art_dir.glob("*.json")) if art_dir.is_dir() else []
    n_ok = 0
    for f in artifacts:
        text = f.read_text(encoding="utf-8")
        try:
            doc = strict_loads(text)
        except ValueError as e:
            fails.append(f"fail: {f}: not strict JSON ({e})")
            continue
        if not isinstance(doc, dict):
            fails.append(f"fail: {f}: artifact is not a JSON object")
            continue

        legacy = "provenance" not in doc
        try:
            errs = dw_validate.validate_one(text, f.name, None, strict=False)
        except Exception as e:
            errs = [f"validator error: {type(e).__name__}: {e}"]
        if errs:
            if legacy and all("provenance" in e or "not_acceptance" in e or "heuristic-tier" in e
                              for e in errs):
                warns.append(f"warn: {f}: legacy (pre-provenance) artifact — "
                             "valid when produced, cannot claim 0.2 guarantees")
            else:
                for e in errs:
                    fails.append(f"fail: {f}: {e}")
                continue
        elif legacy:
            warns.append(f"warn: {f}: legacy (pre-provenance) artifact")

        ref = doc.get("prereg_sha256")
        if ref is not None:
            if ref not in frozen:
                fails.append(f"fail: {f}: prereg_sha256 {str(ref)[:16]}… matches no frozen "
                             "prereg in this state dir — the run answers to criteria that don't exist")
            else:
                infos.append(f"info: {f}: answers to frozen prereg {frozen[ref].name}")

        for i, item in enumerate(doc.get("findings") or []):
            if isinstance(item, dict) and item.get("status") == "CLOSED" and not item.get("witness"):
                fails.append(f"fail: {f}: findings[{i}] CLOSED without a witness")
        n_ok += 1

    if not artifacts and not preregs:
        warns.append(f"warn: no artifacts or preregs found under {state} (0 audited)")

    for line in fails + warns + infos:
        print(line)
    if fails:
        print(f"AUDIT: FAIL {len(fails)} finding(s)")
        return 1
    print(f"AUDIT: PASS {n_ok} artifact(s), {len(frozen)} prereg(s) verified")
    return 0


if __name__ == "__main__":
    try:
        target = Path(sys.argv[1]) if len(sys.argv) > 1 else state_dir()
        sys.exit(audit(target))
    except OSError as e:
        print(f"ERROR: {type(e).__name__}: {e}")
        sys.exit(2)
