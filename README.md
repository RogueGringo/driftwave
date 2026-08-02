# driftwave

You know that thing where you start coding, get halfway through, realize you missed something, undo half your work, start over, and end up worse than where you began?

Driftwave is the habit that stops that from happening.

## What It Does

Before you touch anything, it looks. Three questions, answered in parallel:

| Question | What It Checks |
|----------|---------------|
| **What's there?** | Your files, git state, what's running, what changed recently |
| **What's asked?** | What you actually want — not what you said, what you *meant* |
| **What's the gap?** | The specific actions to get from here to there |

Then it shows you the gap. You say yes. It does the work. It writes down what happened. It checks if it worked.

That's it. That's the whole thing.

```
/driftwave:directive add user authentication
```

```
WHAT IS:     Express app, 12 routes, no auth middleware, users table exists
WHAT'S ASKED: Add login/logout with session management
THE GAP:
  1. Add bcrypt + express-session deps
  2. Create auth middleware
  3. Add login/logout routes
  4. Protect existing routes
  5. Test login flow

Proceed? (y)
```

## Why It Works

Not because it's smart. Because it **looks before it acts.**

Most mistakes aren't intelligence failures. They're attention failures. You didn't check what was already there. You didn't scope what you were actually trying to do. You started coding before you understood the gap.

Driftwave forces the pause. Three subagents check three things simultaneously — takes seconds — and now you have a map instead of a guess.

## The Loop

Every action follows the same cycle:

```
  LOOK ──→ PARSE ──→ GAP ──→ DO ──→ LOG ──→ CHECK
    ↑                                          │
    └──────────── next cycle reads the log ────┘
```

The log is the key. Without it, each cycle starts from scratch. With it, each round knows what the last round did, what worked, what didn't. Mistakes don't repeat because the log remembers them — and as of 0.2, the LOOK step actually reads it back (before that, embarrassingly, the log was write-only; see CHANGELOG).

Over time, patterns emerge. Ideas that keep coming back session after session — those are real. Ideas that appeared once and disappeared — that was noise. The log tells you which is which.

### The verification spine

Since 0.2 the loop has teeth, borrowed from a set of sibling research projects that independently converged on the same discipline:

- **Frozen criteria.** For any real analysis, success criteria are frozen (sha256) *before* the work runs. The verdict is computed against them by `scripts/dw_verdict.py` — `PASS / FAIL / NULL / CERTIFIED_NULL`, fail-closed — and criteria edited after the fact refuse to score. A negative result is recorded permanently; a retry needs a new pre-registration.
- **A locked pin.** `driftwave.pin.json` holds the invariants no agent may retune: the honesty tiers, the closed flag vocabulary, the prohibited overclaim lexicon ("proves", "guarantees", …), gate thresholds. `scripts/dw_validate.py` enforces all of it on every artifact.
- **Gates vs findings.** Instrument-correctness checks can invalidate a run; findings never can — a null finding ships with a green build.
- **A self-proving pipeline.** `/driftwave:selftest` runs planted fixtures with known ground truth through everything and exits non-zero if any of its G1–G8 checks fail.
- **Standing rules.** `rules/standing_rules.json` — failure modes earned by real methodology catches (never gate on a p-value without an effect-size floor; agreement is not verification; unknown never certifies) — checked by the review stage against every new finding.

The dimensional map of the whole harness is in [docs/HARNESS.md](docs/HARNESS.md).

## Commands

**The basics:**

| Command | Plain English |
|---------|--------------|
| `/driftwave:directive` | "Here's what I want. Figure out the gap and do it." |
| `/driftwave:status` | "What's going on right now?" |

**The verification spine (new in 0.2):**

| Command | Plain English |
|---------|--------------|
| `/driftwave:preregister` | "Freeze what success means BEFORE doing the work." |
| `/driftwave:selftest` | "Prove the pipeline itself works — planted fixtures, hard exit codes." |
| `/driftwave:audit` | "Re-verify a run from its artifacts alone. No re-analysis." |

**When things get complex:**

| Command | Plain English |
|---------|--------------|
| `/driftwave:run` | "This is big. Run the full analysis pipeline." |
| `/driftwave:dashboard` | "Show me the topology visually." |
| `/driftwave:meta` | "What patterns keep showing up across sessions?" |

**Manual layer control (power users):**

| Command | What Layer |
|---------|-----------|
| `/driftwave:ingest` | Scan (what's there) |
| `/driftwave:filter` | Cluster (what's related) |
| `/driftwave:synthesize` | Design (what to build) |
| `/driftwave:review` | Check (does it all fit together) |

> Full capability matrix — every command, agent, skill, and script with its
> **operational status** (works / heuristic / planned): [docs/CAPABILITIES.md](docs/CAPABILITIES.md).

## Quickstart (5 minutes)

**1. Install** — no dependencies for the core loop:

```bash
claude plugin marketplace add RogueGringo/driftwave
claude plugin install driftwave@driftwave
```

**2. Run your first directive** — the only command you need to start:

```
/driftwave:directive add a /health endpoint that returns status JSON
```

**3. Read the map before anything changes.** Driftwave looks first and shows you the gap:

```
WHAT IS:      Express app, 12 routes, no /health route
WHAT'S ASKED: A GET /health returning 200 + { status, uptime }
THE GAP:
  1. Add GET /health route
  2. Return { status: "ok", uptime }
  3. Confirm it returns 200
Proceed? (y)
```

**4. Say `y`.** It does the work, logs each step to `.dw/directive.log` in your
project (structured JSONL — and the next cycle *reads it back*, so mistakes
don't repeat), and verifies it worked. Don't like the plan? Say `n` or `adjust`.

That's the whole loop — and it works on more than code:

```
/driftwave:directive figure out why the test in auth.spec.js is flaky
```

> **The only two commands you need to start are `/driftwave:directive` and `/driftwave:status`.** Everything in the **Commands** table above is for when a task grows big enough to want the full analysis pipeline — ignore it until then.

> **Optional — the analysis pipeline.** `/driftwave:run`, `/driftwave:filter`, and
> `/driftwave:meta` shell out to Python that computes H₀ persistent homology. Those
> need `numpy` (`pip install numpy`; pinned in `scripts/requirements.txt`). The core
> `/driftwave:directive` loop has no Python dependency.

## The Deeper Layer

Under the hood, driftwave borrows ideas from the mathematics that finds structure in prime numbers. One part is literal: the file/idea **clustering is H₀ persistent homology** — Union-Find on a distance matrix, real and runnable in `scripts/compute_persistence.py`. The layers above it — the "sheaf consistency" quality check and "H₁ loop" detection — are **LLM-driven heuristics inspired by** those ideas, not computed topology. So: real math at H₀, a useful metaphor above it.

You don't need to know any of that. The commands work whether you understand the math or not. But if you're curious:

- [docs/HARNESS.md](docs/HARNESS.md) — the dimensional map of the harness: phase × enforcement × honesty tier
- [VISION.md](VISION.md) — the geometric theory and vision (read as direction; includes ideas not yet built)
- [PROTOCOL.md](PROTOCOL.md) — the engineering spec
- [ROADMAP.md](ROADMAP.md) — what ships today vs. what's planned (H₁/Betti computation, speculative-reject capture, local-LLM routing, and the live dashboard are **not yet built**)

The short version: when you look at what's there, parse what's asked, and find the gap — you're finding the persistent structure (what's real) and filtering the noise. The H₀ math makes that one step precise; the rest is disciplined habit.

## Five Habits

Driftwave has five principles. They sound fancy but they're common sense:

1. **Don't summarize too early.** Get the facts first. Details matter.
2. **Look before you act.** Scan before you plan. Plan before you build.
3. **Stop when something's wrong.** Don't push through a failing check.
4. **Focus on what matters most.** Not what's easiest. What's most important.
5. **Match your effort to the problem.** Small ask, small scan. Big ask, full pipeline.

## What This Is Really About

The gap between "AI can do this" and "AI reliably does this" isn't intelligence. It's process.

Today's AI models can reason, write code, analyze data, design systems. What they can't do — without help — is consistently look before they act, log what they did, and verify it worked.

Driftwave is that help. Not new AI. New habits for existing AI.

The tools are ready. The models are ready. The process was missing. Now it's not.

---

*Built by B. Jones. Powered by algebraic topology and the habit of looking before you leap.*

*Licensed under the [MIT License](LICENSE).*
