---
name: wavefront
description: "Use when orchestrating a full analysis, design, or investigation from start to finish. The master pipeline — dispatches L0→L3 agents with typed artifacts, guided by the five axioms; runs real H₀ persistence at L1, with topology-inspired LLM heuristics above it."
---

# @wavefront: Full Pipeline Orchestrator (V2)

The wavefront skill orchestrates the 4-agent driftwave pipeline. Each layer is a specialized agent producing typed JSON artifacts, validated between layers by `scripts/dw_validate.py` — the routing protocol is enforced, not aspirational.

## The Five Axioms

1. **NO_AVERAGING** — Raw probes never averaged before filtration (enforced by RawCloud schema)
2. **UPWARD_FLOW** — L0 → L1 → L2 → L3, no layer skipping (enforced by dw_validate between layers)
3. **WAYPOINT_ROUTING** — Routing decisions are topological phase transitions (ASCEND/REPROBE/SPLIT/HOLD)
4. **SHAPE_OVER_COUNT** — Gini trajectory dominates raw feature count (gini-watchdog monitors slope)
5. **ADAPTIVE_SCALE** — the persistence cut is derived from data geometry (median bar lifetime, pinned in driftwave.pin.json)

## Pipeline — Agent Dispatch Protocol

```
@wavefront Pipeline (V2 — Agent Stack)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARTIFACTS_DIR = .dw/artifacts/   (create if not exists; state dir resolution:
                                  $DW_STATE_DIR > $CLAUDE_PROJECT_DIR/.dw >
                                  git toplevel/.dw > ./.dw — never /tmp)

0. FREEZE a prereg (/driftwave:preregister) — a full pipeline run is
   evaluative; or explicitly declare it exploratory and stamp accordingly.

1. DISPATCH dw-ingest agent (haiku)
   ├─ Input: project directory, user prompt
   ├─ Output: artifacts/raw.json (RawCloud schema)
   ├─ Validate: python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/raw.json
   ├─ entropy < 0.1? → ASK user for more input, re-dispatch
   └─ Save artifact, proceed to L1

2. RUN compute_persistence.py
   ├─ Input: cat artifacts/raw.json | compute_persistence.py
   ├─ Output: artifacts/persistence.json (barcode + distances + clusters
   │          + provenance + null_check + caveat)
   └─ This is REAL COMPUTATION (H₀ Union-Find) — and honestly bounded: the
      in-band caveat records the dw-bench negative (descriptive, not load-bearing)

3. DISPATCH dw-cluster agent (sonnet)
   ├─ Input: artifacts/raw.json + artifacts/persistence.json
   ├─ Output: artifacts/filtered.json (FilteredTopology schema)
   ├─ Validate: dw_validate.py .dw/artifacts/filtered.json
   ├─ routing == REPROBE → back to step 1
   ├─ routing == SPLIT → fork: create sub-pipelines, each starting at L2
   └─ routing == ASCEND → proceed to L2

4. DISPATCH dw-synthesize agent (sonnet)
   ├─ Input: artifacts/filtered.json + relevant source files
   ├─ Output: artifacts/synthesis.json (SynthesisMap schema, not_acceptance: true)
   ├─ Validate: dw_validate.py .dw/artifacts/synthesis.json
   ├─ DISPATCH gini-watchdog after every 2 sections; obey ASCEND/REPROBE/HOLD/SPLIT
   ├─ open loops > 0? → iterate within L2 (max 3)
   └─ all loops closed + positive slope → proceed to L3

5. DISPATCH dw-review agent (opus)
   ├─ Input: artifacts/synthesis.json + spec docs + rules/standing_rules.json
   ├─ Output: artifacts/verdict.json (SheavedVerdict schema, named findings,
   │          not_acceptance: true)
   ├─ Validate: dw_validate.py .dw/artifacts/verdict.json
   ├─ OFF_SHELL → report obstructions → human decides
   └─ ON_SHELL → implementation gate OPEN

6. WAYPOINT GATE
   ├─ prereg frozen? → dw_verdict.py eval <prereg> <results> — the computed
   │  VERDICT line is the run's verdict; prose describes, never replaces it
   ├─ verdict == ON_SHELL? → PROCEED to implementation
   └─ verdict == OFF_SHELL? → route back to appropriate layer
```

## Compute Stack

| Step | Where | Model | Cost |
|------|-------|-------|------|
| L0 ingest | agent (haiku) / fallback: topo.sh scan | haiku | API |
| Persistence | Python (numpy) | — | Free |
| L1 cluster | Python + sonnet labeling | Sonnet | API |
| L2 synthesize | API | Sonnet | API |
| L3 review | API | Opus | API |

Local-LLM offload for L0/L1 is **planned, not wired** (ROADMAP.md) — earlier
versions of this table claimed a local model that nothing dispatched.

## Controller Responsibilities (YOU, in the main session)

1. Create `.dw/artifacts/` directory
2. Dispatch each agent via the Agent tool with the artifact path as input
3. Run dw_validate.py on each artifact — an invalid artifact never reaches the next layer
4. Make routing decisions based on artifact routing field
5. Handle REPROBE loops (max 3 iterations per layer, pinned)
6. Present final verdict to user — computed grammar first, prose second

## When to Invoke

When the task is big enough to deserve it — the escalation triggers from
`/driftwave:directive`: a gap of more than 5 actions, multiple independent
workstreams, design decisions that need structured synthesis, or cross-session
pattern questions. For anything smaller, the directive alone is the right
tool: match the ceremony to the problem (ADAPTIVE_SCALE — the plugin's own
fifth habit). Running the full pipeline on a trivial task is the anti-pattern.

## On-Shell / Off-Shell

A process is **on-shell** when all five axioms are satisfied, the Gini trajectory is non-negative, and the sheaf verdict is ON_SHELL. A process is **off-shell** when any axiom is violated or an obstruction exists. Off-shell configurations are topological noise, not signal.

## Artifact Schema Locations

```
${CLAUDE_PLUGIN_ROOT}/schemas/raw_cloud.json
${CLAUDE_PLUGIN_ROOT}/schemas/filtered_topology.json
${CLAUDE_PLUGIN_ROOT}/schemas/synthesis_map.json
${CLAUDE_PLUGIN_ROOT}/schemas/sheaved_verdict.json
${CLAUDE_PLUGIN_ROOT}/schemas/preregistration.json
```

## Agent Spec Locations

```
${CLAUDE_PLUGIN_ROOT}/agents/dw-ingest.md
${CLAUDE_PLUGIN_ROOT}/agents/dw-cluster.md
${CLAUDE_PLUGIN_ROOT}/agents/dw-synthesize.md
${CLAUDE_PLUGIN_ROOT}/agents/dw-review.md
${CLAUDE_PLUGIN_ROOT}/agents/gini-watchdog.md
```
