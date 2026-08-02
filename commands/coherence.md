---
description: "Topological design-coherence analysis of a codebase or corpus. Four channels — structure, co-change, imports, intent — scored by cross-channel sheaf-agreement (the wavefront pipeline pointed outward)."
argument-hint: "[name=giturl ...]  (default: a small mixed corpus)"
---

# /driftwave:coherence

Run driftwave's multi-channel coherence analysis on real repositories. It
measures whether a codebase's **layout, evolution, dependencies, and intent**
agree on the same module structure — agreement *is* coherence.

## What to do

1. Ensure deps:
   `pip install -r ${CLAUDE_PLUGIN_ROOT}/coherence/requirements.txt`
   (numpy + matplotlib; optional neural intent channel: `pip install torch transformers`).

2. Run the bench from the **project**, never from inside the plugin tree —
   clones and outputs go to the harness state dir:
   ```bash
   export DW_COHERENCE_DIR=.dw/coherence
   python3 ${CLAUDE_PLUGIN_ROOT}/coherence/bench.py $ARGUMENTS        # name=giturl ...
   INTENT_MODE=neural python3 ${CLAUDE_PLUGIN_ROOT}/coherence/bench.py $ARGUMENTS  # -> out_neural/
   ```

3. Report:
   - the coherence ranking by **mean Mantel** (threshold-free headline metric),
   - the strongest channel pairs per repo (structure↔imports is the usual backbone),
   - the paths under `.dw/coherence/out/` (`refinement_scatter.png`,
     `agreement.png`, `barcodes.png`, `fingerprints.json`),
   - and the `caveat` field from `fingerprints.json` VERBATIM — this module
     runs beside the pinned spine, not inside it, and its own artifact says so.

4. Evolution view (temporal meta-persistence) — analyzes the repos from step 2
   (pass names to override):
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/coherence/temporal.py [names...]
   ```

## How to read it

- **Mantel** is the headline coherence number; higher = channels agree more on
  the module structure.
- **structure ↔ imports** agreement is the design backbone; **cochange** is the
  evolution signal; **intent** is what files are about.
- Needs a real repo (≳ 40 files / hundreds of commits) — small repos read as noise.
- These are exploratory findings (`not_acceptance: true`): no prereg, no decoy
  control, unpinned thresholds. See coherence/README.md § honest scope.

See [`coherence/README.md`](../coherence/README.md) for full methodology, findings, and limitations.
