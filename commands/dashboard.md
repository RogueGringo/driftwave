---
description: "Open the Three.js topology dashboard in the browser. Renders demo data today; a live .dw/ artifact feed is roadmap."
---

# /driftwave:dashboard

Launch the visual topology dashboard.

## What to do

1. Check if the docs-site has dependencies installed:
   ```bash
   ls ${CLAUDE_PLUGIN_ROOT}/docs-site/node_modules/.package-lock.json
   ```
   If not: `cd ${CLAUDE_PLUGIN_ROOT}/docs-site && npm install`

2. Start the dev server:
   ```bash
   cd ${CLAUDE_PLUGIN_ROOT}/docs-site && npx vite --base / --port 5174 &
   ```

3. Open in browser:
   ```bash
   xdg-open http://localhost:5174 2>/dev/null || open http://localhost:5174
   ```

4. Report: "Dashboard running at http://localhost:5174 — showing demo data"

The dashboard shows:
- **ForceGraph**: 3D artifact clusters (Three.js) — nodes colored by cluster, edges by similarity
- **Barcode**: Persistence barcode — long bars = real structure, short bars = noise
- **GiniChart**: Hierarchy trajectory — rising = converging, falling = scattering
- **Pipeline**: L0→L3 progress with routing decisions

**Honesty note:** the components fetch `/api/artifact/*` and fall back to demo
data; nothing serves that endpoint yet, so what you see is **demo data**, not
your pipeline's artifacts. Wiring the live `.dw/artifacts/` feed is on the
roadmap (ROADMAP.md) — say so if the user asks why the graph doesn't match
their project.
