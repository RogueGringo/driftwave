---
description: "Freeze decision criteria BEFORE the work runs. Question, predicates, baselines, non-goals, both verdict branches — sha256-frozen; eval refuses to score anything that drifted."
argument-hint: "<what is being tested/built>"
---

# /driftwave:preregister

Criteria chosen after seeing results are not criteria. This command writes and
freezes a pre-registration so the later verdict is computed against what you
*said* success meant, not what the results tempted you to mean.

## What to do

1. From the user's request, draft `.dw/prereg/<id>.json` conforming to
   `${CLAUDE_PLUGIN_ROOT}/schemas/preregistration.json`:
   - **question** — the one question this run answers
   - **criteria** — machine-checkable predicates (`{field, op, value}` against a
     results JSON) wherever possible; `"predicate": null` for judgment-only
     criteria (they'll be labeled MANUAL and can never mint a computed verdict)
   - **gates** — instrument-correctness checks (parse integrity, fixture
     recovery, aliveness). Gates can invalidate the run; findings never can.
   - **baselines** — the cheapest already-available alternative any positive
     claim must beat (standing rule R3)
   - **non_goals** — registered so the run cannot drift into them
   - **honest_prior** — the predicted outcome, written now
   - **verdict_semantics** — what follows PASS *and* what follows NULL, both
     committed before any outcome exists
   - **null_is_valid** — almost always `true`: a NULL is a recorded result
2. Show the draft to the user. Adjust until they approve.
3. Freeze it:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_verdict.py freeze .dw/prereg/<id>.json
   ```
4. Report the sha256. From here on:
   - the DO phase records this hash in its artifacts (`prereg_sha256`)
   - any divergence is disclosed in `deviations[]` at the point of deviation
   - the CHECK phase runs `dw_verdict.py eval` — which refuses on hash mismatch
   - a failed outcome is recorded permanently; a retry requires a NEW prereg

## When

`/driftwave:directive` invokes this automatically for gaps >3 actions or any
evaluative request. Invoke it directly when you're about to run an experiment,
an analysis, or any work whose conclusion you could be tempted to massage.
