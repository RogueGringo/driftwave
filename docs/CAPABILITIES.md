# Driftwave — Capability Matrix

Every shipped capability, what it does, and its **operational status**. This is the
honest inventory: ✅ does what it says, 🟡 works but as an **LLM-driven heuristic**
framed in topological language (not computed math), 🔭 **planned / not yet wired**.
See [ROADMAP.md](../ROADMAP.md) for the planned items and [README.md](../README.md)
for the plain-language tour.

> **Start here:** `/driftwave:directive` and `/driftwave:status` are the only two you
> need. Everything else is for when a task grows big enough to want the analysis
> pipeline.

## Commands

| Command | Layer | What it does | Status | Needs |
|---|---|---|---|---|
| `/driftwave:directive` | — | The core loop: LOOK → PARSE → GAP → DO → LOG → CHECK. Three subagents answer *what is / what's asked / the gap*, then route, execute, log, verify. | ✅ | nothing |
| `/driftwave:status` | — | Reports current session artifacts and pipeline state. | ✅ | nothing |
| `/driftwave:ingest` | L0 | Raw artifact scan into an unaveraged point cloud (falls back to `topo.sh scan`). | ✅ | optional local LLM |
| `/driftwave:filter` | L1 | H₀ persistent clustering of artifacts (real Union-Find homology). | ✅ | `numpy` (`python3`) |
| `/driftwave:synthesize` | L2 | Design synthesis; "H₁ loop" detection. | 🟡 LLM heuristic | nothing |
| `/driftwave:review` | L3 | "Sheaf consistency" check — does the whole compose? | 🟡 LLM heuristic | nothing |
| `/driftwave:run` | L0→L3 | Full pipeline orchestrator over the four layers. | 🟡 (L1 real, L2/L3 heuristic) | `numpy` |
| `/driftwave:meta` | meta | Persistence across sessions — what patterns keep returning. | 🟡 (H₀ real; trajectory heuristic) | `numpy` |
| `/driftwave:dashboard` | — | Local docs-site topology visualization. Renders **demo data**, not a live artifact feed. | 🟡 demo only | `node`/`npm` |

## Agents

| Agent | Tier | Role | Status |
|---|---|---|---|
| `dw-ingest` | haiku | L0 raw scan | ✅ |
| `dw-cluster` | sonnet | L1 — labels H₀ clusters with human-readable descriptions | ✅ |
| `dw-synthesize` | — | L2 — builds design sections; flags "H₁" cross-section loops | 🟡 LLM heuristic |
| `dw-review` | opus | L3 — global consistency review; reports a `kernel_dim` (count of consistent sections, **not** a computed `ker(L_F)`) | 🟡 LLM heuristic |
| `gini-watchdog` | — | Monitors the Gini trajectory for ASCEND/REPROBE/SPLIT routing | 🟡 heuristic |

## Skills

| Skill | Maps to | Status |
|---|---|---|
| `dw-map` | L0 boundary / ingest | ✅ |
| `dw-filter` | L1 H₀ clustering | ✅ |
| `dw-ascend` | L2/L3 synthesis + review (honest H₁/sheaf framing) | 🟡 LLM heuristic |
| `wavefront` | Full L0→L3 pipeline orchestrator | 🟡 |
| `topological-brainstorm` | Brainstorming-as-filtration | 🟡 |
| `boundary-mode` | L3 abstract cross-system collaboration | 🟡 |

## Scripts

| Script | Purpose | Status | Needs |
|---|---|---|---|
| `scripts/compute_persistence.py` | H₀ persistent homology (Union-Find) on an artifact distance matrix | ✅ real | `numpy` |
| `scripts/compute_meta_persistence.py` | H₀ persistence across accumulated sessions | ✅ real | `numpy` |
| `scripts/topo.sh` | SessionStart hook + manual `scan/cluster/synthesize/validate/serve` CLI | ✅ | bash |
| `scripts/test_artifact_json.py` | Regression tests: artifact JSON is strict-valid + schema-conforming | ✅ | `numpy`, optional `jsonschema` |
| `scripts/start_local_llm.sh` | Local-LLM server for L0/L1 routing | 🔭 planned — not wired into the loop | — |

## Schemas

`schemas/` holds JSON-Schema (Draft 2020-12) definitions for each layer's artifact:
`raw_cloud` (L0), `filtered_topology` (L1), `synthesis_map` (L2), `sheaved_verdict`
(L3), and `meta_persistence`. `semantic_address.json` is a 🔭 planned schema — it
exists but nothing emits or consumes it yet.

## Research

`experiments/structure-recovery/` — **dw-bench**, a benchmark that tests whether the
topology premise recovers real repository structure from git history. Result so far:
an **honest negative** (H₀ clustering did not beat Louvain/Ward). Isolated from the
plugin runtime; see its `README.md`.

## The honest summary

Real, computed math lives at **H₀** (Union-Find clustering, in `compute_persistence.py`).
Everything labelled 🟡 above works, but as LLM judgment dressed in topological language —
not computed H₁, Betti, or sheaf cohomology. The product is the **habit**
(`/driftwave:directive`); the topology is the basement, not the front door.
