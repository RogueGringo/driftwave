---
description: "Artifacts-only re-verification of a run: schema + pin + hash checks from what's on disk, no re-analysis. The cheapest possible third-party check."
arguments: "[state dir, default .dw]"
---

# /driftwave:audit

Re-verify a run from its artifacts alone — never by re-running the analysis.
If the artifacts can't prove the run, the run isn't proven.

## What to do

1. Validate every artifact in the state dir against its schema and the pin:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py --all .dw/artifacts --strict
   ```
2. For every prereg in `.dw/prereg/`, verify the freeze hash:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_verdict.py check .dw/prereg/<id>.json
   ```
3. Cross-checks from the artifacts (read, don't recompute):
   - every artifact carrying `prereg_sha256` matches a frozen prereg's hash
   - heuristic-tier artifacts carry `not_acceptance: true`
   - any `omitted` stages state a reason
   - findings marked CLOSED name a `witness`
4. Report findings leveled **fail / warn / info** with the artifact path for
   each, and end with one line:
   - `AUDIT: PASS` — everything on disk is internally consistent
   - `AUDIT: FAIL <n> finding(s)` — list them; a failed audit means the run's
     conclusions are unsupported by its own record

## What this is not

Not a re-analysis, not a second opinion, not a vibe check. It answers exactly
one question: *does the on-disk record support what the run claimed?* That is
what makes it cheap enough to always run — and strict enough to matter.
