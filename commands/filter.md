---
description: "L1 — Run persistent homology on RawCloud, identify stable clusters, produce FilteredTopology artifact."
---

# /driftwave:filter

Run the L1 filtration layer. Takes the RawCloud artifact and finds persistent structure.

## What to do

1. Verify `.dw/artifacts/raw.json` exists (if not, run `/driftwave:ingest` first)
2. Run the actual persistence computation:
   ```bash
   cat .dw/artifacts/raw.json | python3 ${CLAUDE_PLUGIN_ROOT}/scripts/compute_persistence.py > .dw/artifacts/persistence.json
   ```
3. Dispatch the `dw-cluster` agent (sonnet tier) with raw.json + persistence.json
4. Agent labels clusters with human-readable descriptions
5. Output saved to `.dw/artifacts/filtered.json`
6. Validate — actually run it:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/filtered.json --schema filtered_topology.json
   ```

## After filtering

Report to the user:
- Number of clusters found and their labels
- Barcode summary (longest bars = real structure)
- The `null_check` result: did native structure beat its seeded decoy? (informational — a decoy win is necessary, not sufficient)
- Noise files (filtered out)
- Routing decision: ASCEND → `/driftwave:synthesize`, REPROBE → `/driftwave:ingest`, SPLIT → decompose
- The in-band `caveat`: this clustering is a descriptive map — on the dw-bench structure-recovery benchmark it did not beat standard community detection. Report it with the results, not instead of them.
