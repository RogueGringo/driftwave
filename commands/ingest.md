---
description: "L0 — Scan the codebase (or any adapted domain) and produce a RawCloud artifact. No interpretation, just measurement."
argument-hint: "[path]"
---

# /driftwave:ingest

Run the L0 ingestion layer. Scans the project (or specified path) and produces a typed RawCloud artifact.

## What to do

1. Create `.dw/artifacts/` if it doesn't exist (state dir resolution: `$DW_STATE_DIR` → `$CLAUDE_PROJECT_DIR/.dw` → git toplevel `/.dw` → `./.dw`)
2. Dispatch the `dw-ingest` agent. **The fallback is honest but limited:** if
   agent dispatch is unavailable, `topo.sh scan` writes only a counts summary
   to `.dw/topo-scan.json` — it does NOT produce a RawCloud, so the pipeline
   stops at L0. Report that plainly ("scan summary only; L1 needs the
   dw-ingest agent or an adapter-emitted raw.json") instead of validating a
   file that doesn't exist.
3. The agent scans files via Glob/Grep, classifies by language/size/staleness
4. Output saved to `.dw/artifacts/raw.json`
5. Validate — actually run it, this is not prose:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/raw.json --schema raw_cloud.json
   ```
6. Report: file count, entropy, and whether the entropy gate passes (>0.1, pinned in driftwave.pin.json)

If an argument is provided, scan that path instead of the project root.

## Non-code domains

Any domain feeds this same pipeline through the adapter contract: emit a RawCloud
whose `files[]` entries carry a `features` array of numeric channels on one fixed
frame (all entries the same length; name the channels in `feature_names`), or a
precomputed `distances` matrix. See docs/HARNESS.md § Domain adapters.

## After ingestion

Tell the user:
- How many items were scanned
- The entropy value (variance across artifacts)
- Whether to proceed (`/driftwave:filter`) or provide more input (low entropy)
