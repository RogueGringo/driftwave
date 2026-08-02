---
description: "L3 — Sheaf-inspired consistency review with named findings and standing-rules check. ON_SHELL or OFF_SHELL."
---

# /driftwave:review

Run the L3 review layer. The consistency check — does the whole compose?

## What to do

1. Verify `.dw/artifacts/synthesis.json` exists (if not, run `/driftwave:synthesize` first)
2. Dispatch the `dw-review` agent (opus tier) with:
   - The SynthesisMap artifact
   - Any relevant spec documents
   - `${CLAUDE_PLUGIN_ROOT}/rules/standing_rules.json` — every finding is checked
     against every standing rule and every FALSIFIED entry
3. Agent checks pairwise section compatibility, estimates a consistency count
   (kernel-dimension analogy), and names its findings with stable IDs (F1, F2 …)
4. Output saved to `.dw/artifacts/verdict.json`, stamped `not_acceptance: true`
   (L3 consistency judgment is heuristic tier; only `dw_verdict.py eval` mints
   computed verdicts)
5. Validate — actually run it:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/artifacts/verdict.json
   ```

## After review

Report to the user:
- Verdict: **ON_SHELL** (all sections globally consistent) or **OFF_SHELL** (obstructions exist)
- Kernel dimension: how many sections compose (kernel_dim == total → fully consistent)
- Findings by ID, each with its verdict and — for anything CLOSED — its witness
  (a finding may not be closed without one)
- Obstructions: which section pairs contradict, and what specifically conflicts
- If OFF_SHELL: route back to `/driftwave:synthesize` with obstruction details (max 3 iterations, pinned)
