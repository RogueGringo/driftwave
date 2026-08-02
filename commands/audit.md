---
description: "Artifacts-only re-verification of a run: schema + pin + hash checks from what's on disk, no re-analysis. The cheapest possible third-party check."
argument-hint: "[artifact dir, default .dw/artifacts]"
---

# /driftwave:audit

Re-verify a run from its artifacts alone — never by re-running the analysis.
If the artifacts can't prove the run, the run isn't proven.

## What to do

1. Run the audit MECHANISM — the cross-checks and the final verdict line are
   computed, never composed by you:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_audit.py
   ```
   (optional argument: a specific state dir; default is the canonical one)
2. Report its output **verbatim** — the leveled `fail:/warn:/info:` findings
   and the final computed line (`AUDIT: PASS …` or `AUDIT: FAIL n finding(s)`).
   You may add context around the output; you never replace or restate the
   AUDIT: line in your own words. A failed audit means the run's conclusions
   are unsupported by its own record.

What the tool checks from disk alone: every artifact against schema + pin,
every frozen prereg's hash, every `prereg_sha256` reference resolving to a
frozen prereg, CLOSED findings carrying witnesses, and legacy (pre-0.2)
artifacts downgraded to warnings rather than failed retroactively.

## What this is not

Not a re-analysis, not a second opinion, not a vibe check. It answers exactly
one question: *does the on-disk record support what the run claimed?* That is
what makes it cheap enough to always run — and strict enough to matter.
