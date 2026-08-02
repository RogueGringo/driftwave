---
description: "The instrument, not a demo: run the whole pipeline headless on planted fixtures with known ground truth. Exits non-zero on any failure."
---

# /driftwave:selftest

Prove the pipeline works — on synthetic data with planted structure it MUST
recover, planted noise it MUST reject, and a tamper it MUST refuse. "The
commands ran" is not verification; this is.

## What to do

1. Run:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_selftest.py
   ```
2. Report the PASS/FAIL table verbatim (G1–G8) and the final `VERDICT:` line.
3. Exit meanings:
   - `0` — all instrument checks green
   - `1` — a check FAILED: the pipeline is broken; stop and report, do not run
     analyses on a broken instrument
   - `2` — numpy missing: only G6 (the verdict spine, stdlib) ran; everything
     touching the persistence scripts — including the G8 pin-conformance check
     on their emissions — was SKIPPED. A skipped instrument check is not a
     pass — say so, and offer `pip install -r ${CLAUDE_PLUGIN_ROOT}/scripts/requirements.txt`

## What it checks

| ID | Check | Ground truth |
|----|-------|--------------|
| G1 | L1 artifact strict-JSON + schema + pin valid | dw_validate --strict |
| G2 | Planted clusters recovered exactly | exact planted distance matrix |
| G3 | Planted noise identified | 3 scattered singletons |
| G4 | Aliveness — emitted numerics vary | a dead instrument reports constants |
| G5 | Native structure beats its seeded decoy | column-shuffle negative control |
| G6 | Verdict spine: freeze → eval grammar → tamper refusal | toy prereg |
| G7 | Meta-persistence strict-valid over 2 sessions | synthetic sessions |
| G8 | Pin conformance in emissions | closed flag vocab, no prohibited lexicon |

Run this after changing anything under `scripts/` or `schemas/`, and before
trusting a pipeline result that matters.
