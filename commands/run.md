---
description: "Full pipeline — runs L0→L1→L2→L3 sequentially with automatic routing. The `wavefront` skill as a single invocation."
argument-hint: "[task description]"
---

# /driftwave:run

Execute the full driftwave pipeline from ingestion to verdict.

## What to do

This is the operational form of the `wavefront` skill. All artifacts live in
`.dw/artifacts/`; every layer's output is validated with `dw_validate.py`
before the next layer may consume it (UPWARD_FLOW, enforced not aspirational).

0. **Prereg**: a full pipeline run is evaluative by definition — freeze a
   pre-registration first (`/driftwave:preregister`), or state explicitly that
   this run is exploratory and stamp its outputs accordingly.

1. **L0 — Ingest**: Scan the codebase, produce RawCloud
   - `mkdir -p .dw/artifacts`
   - Dispatch dw-ingest agent OR run topo.sh scan (summary-only fallback)
   - `python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/raw.json --schema raw_cloud.json`
   - Check entropy gate (pinned: >0.1)

2. **L1 — Filter**: Run persistence, identify clusters
   - Execute compute_persistence.py on the RawCloud
   - Dispatch dw-cluster agent for labeling; validate filtered.json
   - Report the null_check (native vs seeded decoy) and the dw-bench caveat in-band
   - Check routing: REPROBE → back to L0, SPLIT → decompose, ASCEND → continue

3. **L2 — Synthesize**: Build design from clusters
   - Dispatch dw-synthesize agent (sonnet) with FilteredTopology + source files
   - Dispatch gini-watchdog after every 2 sections; obey ASCEND/REPROBE/HOLD/SPLIT
   - Validate synthesis.json; confirm `not_acceptance: true` and disclosed deviations
   - Check loops: iterate if open (max 3), REPROBE → back to L1, ASCEND → continue

4. **L3 — Review**: Consistency check with named findings
   - Dispatch dw-review agent (opus) with SynthesisMap + standing_rules.json
   - Validate verdict.json
   - ON_SHELL → report success, implementation gate open
   - OFF_SHELL → report obstructions, route back to L2 (max 3 iterations, pinned)

5. **Verdict**: if a prereg was frozen, assemble the measurable outcomes into a
   results JSON and run
   `python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_verdict.py eval <prereg> <results>` —
   report its grammar verbatim. The computed VERDICT line is the run's verdict;
   your prose describes it, never replaces it.

6. **Meta**: Append this session to meta-persistence
   - Update `.dw/meta.json`, compute meta-persistence (see `/driftwave:meta`)

If a task description argument is provided, use it as context for the L2 synthesis (what are we building/analyzing?).

## Progress reporting

After each layer, report:
```
✓ L0: 47 files scanned, entropy=1.23
✓ L1: 3 clusters, routing=ASCEND, beats_decoy=true
  → Topology Engine (12 files)
  → Experiment Pipeline (8 files)
  → Visualization (5 files)
◐ L2: synthesizing...
```

## Axiom enforcement

The pipeline is guided by five axioms (enforced where a tool exists, guided elsewhere):
- NO_AVERAGING: RawCloud has no summary field
- UPWARD_FLOW: each stage validates with the expected --schema, so a wrong-layer artifact is rejected before the next stage consumes it
- WAYPOINT_ROUTING: Routing on ASCEND/REPROBE/SPLIT/HOLD, not on timers
- SHAPE_OVER_COUNT: gini-watchdog monitors trajectory, not section count
- ADAPTIVE_SCALE: Persistence cut from data geometry (median bar lifetime, pinned)
