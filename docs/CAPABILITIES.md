# Driftwave — Capability Matrix

Every shipped capability, what it does, and its **operational status**. This is the
honest inventory: ✅ does what it says, 🟡 works but as an **LLM-driven heuristic**
framed in topological language (not computed math), 🔭 **planned / not yet wired**.
See [ROADMAP.md](../ROADMAP.md) for the planned items, [HARNESS.md](HARNESS.md) for
the dimensional map, and [README.md](../README.md) for the plain-language tour.

> **Start here:** `/driftwave:directive` and `/driftwave:status` are the only two you
> need. Everything else is for when a task grows big enough to want the analysis
> pipeline — or the verification spine.

## Commands

| Command | Layer | What it does | Status | Needs |
|---|---|---|---|---|
| `/driftwave:directive` | — | The core loop: LOOK → PARSE → GAP → DO → LOG → CHECK. Structured JSONL log, read back each cycle; freezes criteria for big/evaluative gaps. | ✅ | stock `python3` for freeze/verdict steps (stdlib only) |
| `/driftwave:status` | — | Session state: log tail, open preregs, artifact inventory, quick integrity check. | ✅ | nothing |
| `/driftwave:preregister` | spine | Freeze decision criteria (sha256) before the work runs; both verdict branches pre-committed. | ✅ | nothing |
| `/driftwave:selftest` | spine | Whole pipeline headless on planted fixtures with known ground truth (G1–G8); non-zero exit on failure. | ✅ | `numpy` for G1–G5/G7/G8 (G6, the verdict spine, is stdlib; skipped checks exit 2, never pass) |
| `/driftwave:audit` | spine | Artifacts-only re-verification: schema + pin + freeze hashes. No re-analysis. | ✅ | nothing |
| `/driftwave:ingest` | L0 | Raw artifact scan into an unaveraged point cloud (falls back to `topo.sh scan`, which emits counts only — and says so). | ✅ | optional |
| `/driftwave:filter` | L1 | H₀ persistent clustering (real Union-Find), with provenance, in-band dw-bench caveat, and a seeded decoy null check. | ✅ | `numpy` |
| `/driftwave:synthesize` | L2 | Design synthesis with per-section baselines, disclosed deviations, gini-watchdog checkpoints; "H₁ loop" detection. | 🟡 LLM heuristic (stamped `not_acceptance`) | nothing |
| `/driftwave:review` | L3 | "Sheaf consistency" check with named findings, witnesses for closures, and a standing-rules pass. | 🟡 LLM heuristic (stamped `not_acceptance`) | nothing |
| `/driftwave:run` | L0→L3 | Full pipeline orchestrator; validates artifacts between layers; ends with a computed verdict when a prereg exists. | 🟡 (L1 + spine real, L2/L3 heuristic) | `numpy` |
| `/driftwave:meta` | meta | Persistence across sessions — what patterns keep returning. Per-project `.dw/meta.json`. | 🟡 (H₀ real; trajectory heuristic) | `numpy` |
| `/driftwave:dashboard` | — | Local docs-site topology visualization. Renders **demo data**, not a live artifact feed. | 🟡 demo only | `node`/`npm` |

## Agents

| Agent | Tier | Role | Status |
|---|---|---|---|
| `dw-ingest` | haiku | L0 raw scan (local-LLM offload is 🔭, no longer claimed in frontmatter) | ✅ |
| `dw-cluster` | sonnet | L1 — labels H₀ clusters; preserves the computed provenance/null_check/caveat | ✅ |
| `dw-synthesize` | sonnet | L2 — design sections with baselines + deviations; stamps `not_acceptance` | 🟡 LLM heuristic |
| `dw-review` | opus | L3 — global consistency, named findings with witnesses, standing-rules check; stamps `not_acceptance` | 🟡 LLM heuristic |
| `gini-watchdog` | haiku | Trajectory monitor — dispatched by synthesize/run every 2 sections; ASCEND/REPROBE/HOLD/SPLIT (HOLD now representable in schemas) | 🟡 heuristic, wired |

## Skills

| Skill | Maps to | Status |
|---|---|---|
| `dw-map` | L0 boundary / ingest | ✅ |
| `dw-filter` | L1 H₀ clustering (median-bar-lifetime cut — text now matches the code) | ✅ |
| `dw-ascend` | L2/L3 synthesis + review (honest H₁/sheaf framing) | 🟡 LLM heuristic |
| `wavefront` | Full L0→L3 pipeline orchestrator; invoked per the directive's escalation triggers (the old "even trivial tasks pass through" is gone — it contradicted ADAPTIVE_SCALE) | 🟡 |
| `topological-brainstorm` | Brainstorming-as-filtration; hard gate now includes freezing the spec's acceptance criteria | 🟡 |
| `boundary-mode` | L3 abstract cross-system collaboration | 🟡 |

## Scripts

| Script | Purpose | Status | Needs |
|---|---|---|---|
| `scripts/dw_validate.py` | Strict-JSON + schema + pin validation of every artifact (the enforcement behind every "validate" step) | ✅ real | stdlib (`jsonschema` optional, structural fallback built-in) |
| `scripts/dw_verdict.py` | Prereg freeze (sha256) / tamper check / mechanical verdict eval / grammar parse | ✅ real | stdlib |
| `scripts/dw_selftest.py` | Planted-fixture end-to-end instrument (G1–G8) | ✅ real | `numpy` for G1–G5/G7 |
| `scripts/compute_persistence.py` | H₀ persistent homology (Union-Find); adapter features/distances input; provenance + decoy null check + in-band caveat | ✅ real | `numpy` |
| `scripts/compute_meta_persistence.py` | H₀ persistence across accumulated sessions | ✅ real | `numpy` |
| `scripts/topo.sh` | SessionStart hook + manual CLI; clusters by actual top-level dirs; writes only inside the per-project `.dw/` state dir, nothing else in your project | ✅ | bash |
| `scripts/test_artifact_json.py` | Regression tests: strict-valid artifacts, schema conformance, pin/lexicon enforcement, verdict spine | ✅ | `numpy`, optional `jsonschema` |
| `scripts/start_local_llm.sh` | Local-LLM server for L0/L1 routing | 🔭 planned — not wired into the loop | — |

## Data files

| File | Purpose | Status |
|---|---|---|
| `driftwave.pin.json` | Locked invariants: honesty tiers, verdict/routing/flag vocabularies, prohibited lexicon, gate thresholds, state-dir rule | ✅ enforced by dw_validate |
| `rules/standing_rules.json` | Append-only failure-mode memory (R1–R10) + FALSIFIED ledger (F1–F3), checked by L3 review | ✅ |

## Schemas

`schemas/` holds JSON-Schema (Draft 2020-12) definitions for each layer's artifact:
`raw_cloud` (L0, now with adapter `features`/`distances`), `filtered_topology` (L1,
now with provenance/null_check/caveat), `synthesis_map` (L2, now with baselines/
deviations), `sheaved_verdict` (L3, now with named findings + witnesses),
`meta_persistence`, and `preregistration` (new). `semantic_address.json` is a 🔭
planned schema — it exists but nothing emits or consumes it yet.

## Research

`experiments/structure-recovery/` — **dw-bench**, a benchmark that tests whether the
topology premise recovers real repository structure from git history. Result so far:
an **honest negative** (H₀ clustering did not beat Louvain/Ward). Isolated from the
plugin runtime — and since 0.2 carried **in-band**: the L1 artifact's `caveat` field
states it on every run. See its `README.md`.

## The honest summary

Real, computed machinery lives at **H₀** and in the **verification spine**
(dw_validate, dw_verdict, dw_selftest — stdlib+numpy code with hard exit codes).
Everything labelled 🟡 above works, but as LLM judgment dressed in topological
language — stamped `not_acceptance` so it can never impersonate a certified
result. The product is the **habit** (`/driftwave:directive`); the topology is
the basement, not the front door.
