# driftwave

Look at what's there. Parse what's asked. Compute the gap. Execute. Log. Verify.

## Quick Start

```bash
claude plugin add gh:RogueGringo/driftwave
```

Then in any Claude Code session:

```
/driftwave:directive build the authentication system
```

Three subagents launch in parallel:
1. **WHAT IS** — scans your codebase, git state, running processes
2. **WHAT'S ASKED** — parses intent, scope, success criteria
3. **THE GAP** — diffs those two, produces a numbered action list

You approve. It executes. It logs. It verifies.

## Commands

| Command | What It Does |
|---------|-------------|
| `/driftwave:directive` | **The core process.** Three subagents → gap analysis → execute → verify |
| `/driftwave:run` | Full L0→L3 pipeline with persistence computation |
| `/driftwave:status` | Pipeline state + artifact inventory + GPU/LLM health |
| `/driftwave:dashboard` | Three.js topology visualization |
| `/driftwave:meta` | Cross-session analysis — what ideas keep coming back? |

Layer commands (for manual pipeline control):
| `/driftwave:ingest` | L0 — scan and measure |
| `/driftwave:filter` | L1 — persistent clustering |
| `/driftwave:synthesize` | L2 — design synthesis |
| `/driftwave:review` | L3 — sheaf consistency verdict |

## How It Works

The directive is the atomic unit. Everything else is the directive applied at scale.

**Simple requests** → `/driftwave:directive` scans, gaps, executes, verifies.

**Complex requests** → `/driftwave:run` runs the full pipeline: typed artifacts flow through four layers, each handled by a specialized agent, with real persistence computation (the same math that finds structure in prime numbers).

**Ongoing work** → `/driftwave:meta` tracks what ideas persist across sessions. Long bars = real structure. Short bars = noise. The barcode of your development process.

## The Five Axioms

These aren't rules. They're what happens naturally when you look before you act:

1. **NO_AVERAGING** — Report facts, not summaries. Don't collapse the signal.
2. **UPWARD_FLOW** — Look before you act. Scan before you filter. Filter before you synthesize.
3. **WAYPOINT_ROUTING** — Stop if verification fails. Route on reality, not assumption.
4. **SHAPE_OVER_COUNT** — What matters most, not what's easiest. Structure over volume.
5. **ADAPTIVE_SCALE** — Match the scope of scanning to the scope of the request.

## Compute Stack

Driftwave auto-detects your hardware:

| GPU State | What Happens |
|-----------|-------------|
| GPU free | Local LLM (Llama 3.2 3B) on CUDA for fast classification |
| GPU busy | Local LLM (LFM 1.2) on CPU — state-space model, fast without GPU |
| No GPU | CPU inference or deterministic fallback |
| API needed | Sonnet for synthesis, Opus for review — only when reasoning required |

```bash
# Start local inference (auto-detects GPU/CPU)
bash plugins/driftwave/scripts/start_local_llm.sh
```

## What This Actually Is

A process discipline that turns AI capability into reliable outcomes. The gap between "the model can do this" and "the model reliably does this" is not intelligence — it's the habit of looking, logging, and routing at the right intervals.

Today's tools are sufficient. The models reason. The subagents parallelize. The typing prevents drift. What's missing is the process. That's driftwave.

See [VISION.md](VISION.md) for the deeper geometry.
See [PROTOCOL.md](PROTOCOL.md) for the full operationalization spec.

## References

- *Adaptive Topological Field Theory* (Jones, 2026)
- *A Unified Topological Framework for System Abstraction via Reverse Engineering* (Jones, 2025)
- *Computational Topology and the Riemann Hypothesis* (Jones, 2026)

All work is non-published private minus the public repos associated with company and name. All rights reserved.
