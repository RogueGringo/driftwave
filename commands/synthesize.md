---
description: "L2 — Build design sections from filtered clusters, monitor Gini trajectory via gini-watchdog, flag cross-section dependencies."
---

# /driftwave:synthesize

Run the L2 synthesis layer. Takes FilteredTopology and produces a coherent design.

## What to do

1. Verify `.dw/artifacts/filtered.json` exists (if not, run `/driftwave:filter` first)
2. Dispatch the `dw-synthesize` agent (sonnet tier) with:
   - The FilteredTopology artifact
   - Relevant source files (cluster members — read them for context)
3. Agent writes one design section per cluster; every section names its `baseline`
   (the cheapest existing alternative it beats, or 'none identified' — a red flag
   the review stage will see)
4. **After every 2 sections, dispatch the `gini-watchdog` agent** with the
   trajectory so far; obey its recommendation (ASCEND / REPROBE / HOLD / SPLIT)
5. If a prereg exists for this run, record its hash in the artifact
   (`prereg_sha256`) and disclose any divergence in `deviations[]` — empty array
   = attested no deviation
6. Output saved to `.dw/artifacts/synthesis.json`, stamped
   `not_acceptance: true` (L2 is LLM judgment — heuristic tier)
7. Validate — actually run it:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/synthesis.json --schema synthesis_map.json
   ```

## After synthesis

Report to the user:
- Section titles and coherence scores
- Gini trajectory direction (▲ hierarchifying / ▼ flattening / ─ stable) per the watchdog
- Open loops (cross-section consistency constraints — an H₁ analogy, LLM-judged)
- Any disclosed deviations
- Routing: ASCEND → `/driftwave:review`, REPROBE → `/driftwave:filter`, SPLIT → decompose, HOLD → await input
