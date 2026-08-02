---
description: "Compute meta-persistence across accumulated sessions. The barcode of barcodes — what ideas keep coming back?"
---

# /driftwave:meta

Run meta-persistence analysis across session history.

## What to do

1. Check if `.dw/meta.json` exists (per-project state — this is what makes
   "across sessions" true; the 0.1.x `/tmp` location was wiped on reboot)
   - If not, create it with the current session's artifacts as the first entry
   - If yes, append the current session's artifacts as a new entry
   - Build each entry from the artifacts in `.dw/artifacts/` (session_id,
     timestamp, artifacts{...}, routing_trace assembled from each artifact's
     routing + routing_reason fields)

2. Run meta-persistence computation:
   ```bash
   cat .dw/meta.json | python3 ${CLAUDE_PLUGIN_ROOT}/scripts/compute_meta_persistence.py > .dw/meta_updated.json
   mv .dw/meta_updated.json .dw/meta.json
   ```

3. Validate — actually run it:
   ```bash
   python3 ${CLAUDE_PLUGIN_ROOT}/scripts/dw_validate.py .dw/meta.json --schema meta_persistence.json
   ```

4. Report the convergence signature:
   - **Dominant clusters**: ideas/patterns appearing in >50% of sessions
   - **Gini meta-trajectory**: is the project hierarchifying over time?
   - **Sheaf consistency rate**: fraction of sessions where L3 said ON_SHELL
   - **Meta-barcode**: which features have the longest bars across sessions?

## What this tells you

- Long bars in the meta-barcode = architectural decisions that keep proving right
- Short bars = ideas that were tried once and didn't persist
- Rising Gini meta-trajectory = the project is converging on its structure
- High sheaf consistency rate = the architecture is stable
