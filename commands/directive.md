---
description: "The core process. Three subagents: WHAT IS, WHAT'S ASKED, THE GAP. Then route, execute, log, verify — with frozen criteria when the work is big enough to deserve them."
arguments: "<request>"
---

# /driftwave:directive

The fundamental operation. Everything else in driftwave is a specialization of this.

## State

All state lives in the per-project directory `.dw/` (resolve: `$DW_STATE_DIR` env
override → `$CLAUDE_PROJECT_DIR/.dw` → git toplevel `/.dw` → `./.dw`). Never `/tmp`
— it is wiped on reboot and shared across projects, which is why the 0.1.x memory
claims were dead wiring. Ensure `.dw/` is in the project's `.gitignore` (add it if
missing, telling the user).

## Process

You receive a request. You do this:

### Step 1: Launch three subagents IN PARALLEL

**Subagent A — WHAT IS** (Explore agent, quick)
```
Scan the current state relevant to this request:
- Read the last ~20 lines of .dw/directive.log (JSONL) — report what previous
  cycles did, what worked, and what FAILED. Mistakes repeat unless read.
- What files exist that this touches?
- What's the git state? Any uncommitted work?
- What docs/specs/plans exist? Any .dw/prereg/*.json still open?
- What's running? (servers, background tasks)
- Check rules/standing_rules.json (plugin) — any FALSIFIED entry that matches
  an approach this request implies? Report it.
Report facts only. No interpretation. No recommendations.
```

**Subagent B — WHAT'S ASKED** (haiku, fast)
```
Parse this request into:
- INTENT: What does the user want to happen? (one sentence)
- SCOPE: What files/systems does this touch?
- SUCCESS: How will we know it worked? (concrete check — name the command or
  observation; a machine-checkable predicate if one exists)
- BASELINE: What is the cheapest thing that already almost does this? (or
  'none identified')
- CONSTRAINTS: What must NOT change?
```

**Subagent C — THE GAP** (sonnet, after A and B return)
```
Given WHAT IS and WHAT'S ASKED:
- What specifically needs to change?
- What's the smallest set of actions to close the gap?
- What order? What depends on what?
- What could go wrong?
Return a numbered action list. Nothing else.
```

### Step 2: Present the gap to the user

Show them:
```
WHAT IS:     [2-3 line summary from Subagent A]
WHAT'S ASKED: [intent + success criteria from Subagent B]
THE GAP:     [numbered action list from Subagent C]

Proceed? (y/n/adjust)
```

### Step 2b: Freeze criteria when the work deserves them

If the gap has **more than 3 actions**, or the request is **evaluative** (an
analysis, an experiment, a "does X work?" question), freeze a pre-registration
BEFORE doing the work — criteria chosen after seeing results are not criteria:

1. Write `.dw/prereg/<id>.json` per `schemas/preregistration.json`: the question,
   success criteria (machine-checkable predicates wherever possible; `null` predicate
   = honest MANUAL), non-goals, baselines, and what follows PASS **and** what follows
   NULL — both branches committed now.
2. `python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_verdict.py freeze .dw/prereg/<id>.json`
3. Small gaps (≤3 actions, non-evaluative): skip this — the SUCCESS check from
   Subagent B is enough. Match the ceremony to the problem (ADAPTIVE_SCALE).

### Step 3: Execute

For each action in the gap list:
1. Do the action (write code, edit file, run command)
2. Log it — append one **JSONL** line (structured, because Subagent A reads this
   back next cycle):
   ```bash
   mkdir -p .dw && printf '%s\n' '{"ts":"<ISO-8601>","action":"<what>","result":"<happened>","verified":<true|false>}' >> .dw/directive.log
   ```
3. Check it worked (the SUCCESS criteria from Step 1B)
4. If it failed → stop, log `"verified":false`, report, ask
5. If you diverge from the plan or prereg → disclose it at the point of deviation
   (in the log line and in your report), never silently

### Step 4: Verify

- **With a prereg:** put measurable outcomes in a results JSON, then
  `python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_verdict.py eval .dw/prereg/<id>.json <results.json>`
  and report its printed grammar verbatim (`GATE:` / `CRITERION:` / `VERDICT:` lines).
  The verdict token comes from that computed output — you never mint one in prose.
  A NULL is a recorded result, not a failure to hide; a retry needs a NEW prereg.
- **Without one:** run the SUCCESS check from Subagent B and report:
```
✓ Done. [what changed]
  Verified: [how we know it worked]
  Logged: .dw/directive.log
```

## That's it.

For a small task, nothing above requires schemas, typed artifacts, or Python — just:

1. **Look** at what's there (including what the log says happened last time)
2. **Parse** what's asked
3. **Compute** the gap
4. **Execute** the actions
5. **Log** what happened (structured, so the next cycle can read it)
6. **Verify** it worked (computed verdict when criteria were frozen)

The driftwave axioms emerge naturally from this process:
- NO_AVERAGING: Subagent A reports facts, not summaries
- UPWARD_FLOW: You look before you act (A before C, C before execute)
- WAYPOINT_ROUTING: You stop if verification fails (route on reality, not assumption)
- SHAPE_OVER_COUNT: The gap list is ordered by what matters, not by what's easy
- ADAPTIVE_SCALE: The scope of scanning — and of ceremony — matches the request

## When to use the full pipeline instead

If the directive reveals complexity:
- Gap list has >5 actions → consider `/driftwave:run` (full L0→L3 with persistence)
- Multiple independent workstreams → consider parallel subagent dispatch
- Design decisions needed → consider the `topological-brainstorm` skill
- Need to check cross-session patterns → consider `/driftwave:meta`
- Want proof the pipeline itself works → `/driftwave:selftest`

The directive is the atomic unit. Everything else is the directive applied at scale.
