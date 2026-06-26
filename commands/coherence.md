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
   (optional neural intent channel: `pip install torch transformers`).

2. Run the bench on the requested repos (or the default corpus):
   ```bash
   cd ${CLAUDE_PLUGIN_ROOT}/coherence
   python bench.py $ARGUMENTS                  # name=giturl name2=giturl2 ...
   INTENT_MODE=neural python bench.py $ARGUMENTS   # GPU embeddings -> out_neural/
   ```

3. Report:
   - the coherence ranking by **mean Mantel** (threshold-free headline metric),
   - the strongest channel pairs per repo (structure↔imports is the usual backbone),
   - and point to `out/refinement_scatter.png`, `out/agreement.png`,
     `out/barcodes.png`, and `out/fingerprints.json`.

4. Evolution view (temporal meta-persistence):
   ```bash
   python temporal.py     # -> out/evolution_coherence.png, out/evolution_gini.png
   ```

## How to read it

- **Mantel** is the headline coherence number; higher = channels agree more on
  the module structure.
- **structure ↔ imports** agreement is the design backbone; **cochange** is the
  evolution signal; **intent** is what files are about.
- Needs a real repo (≳ 40 files / hundreds of commits) — small repos read as noise.

See [`coherence/README.md`](../coherence/README.md) for full methodology, findings, and limitations.
