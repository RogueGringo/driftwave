---
description: "Show current pipeline state — which artifacts exist, what layer is active, recent directive log, routing history."
---

# /driftwave:status

Report the current state of the driftwave harness for this project.

## What to do

Check the state dir (`$DW_STATE_DIR` → `$CLAUDE_PROJECT_DIR/.dw` → git toplevel `/.dw` → `./.dw`) and report:

1. **Directive log** (the loop's memory):
   - Last ~10 lines of `.dw/directive.log` (JSONL) — what recent cycles did,
     and especially any `"verified": false` entries
   - Open preregs in `.dw/prereg/` (frozen but not yet evaluated)

2. **Artifact inventory** (`.dw/artifacts/`):
   - `raw.json` exists? → L0 complete. Show: file count, entropy
   - `persistence.json` exists? → Persistence computed. Show: barcode length, cluster count
   - `filtered.json` exists? → L1 complete. Show: clusters, routing, null_check result
   - `synthesis.json` exists? → L2 complete. Show: sections, Gini slope, open loops, deviations
   - `verdict.json` exists? → L3 complete. Show: verdict (ON_SHELL/OFF_SHELL), findings by ID

3. **Pipeline progress indicator:**
   ```
   L0 ████████ L1 ████████ L2 ████░░░░ L3 ░░░░░░░░
   ```

4. **Integrity** (quick, artifacts-only):
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py --all .dw/artifacts
   ```
   For the full check, `/driftwave:audit`; to prove the pipeline itself, `/driftwave:selftest`.

5. **Meta-persistence:**
   - If `.dw/meta.json` exists, report: session count, dominant clusters, Gini meta-trajectory direction, sheaf consistency rate

6. **Standing rules:** mention any FALSIFIED entry in
   `${CLAUDE_PLUGIN_ROOT}/rules/standing_rules.json` relevant to what the user
   is currently doing (don't recite the whole file).
