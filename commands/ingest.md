---
description: "L0 — Scan the codebase (or any adapted domain) and produce a RawCloud artifact. No interpretation, just measurement."
arguments: "[path]"
---

# /driftwave:ingest

Run the L0 ingestion layer. Scans the project (or specified path) and produces a typed RawCloud artifact.

## What to do

1. Create `.dw/artifacts/` if it doesn't exist (state dir resolution: `$DW_STATE_DIR` → `$CLAUDE_PROJECT_DIR/.dw` → git toplevel `/.dw` → `./.dw`)
2. Dispatch the `dw-ingest` agent, OR fall back to `topo.sh scan` (writes a summary manifest to `.dw/topo-scan.json` — the fallback emits counts, not a per-file cloud; say so rather than pretending)
3. The agent scans files via Glob/Grep, classifies by language/size/staleness
4. Output saved to `.dw/artifacts/raw.json`
5. Validate — actually run it, this is not prose:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/raw.json
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
