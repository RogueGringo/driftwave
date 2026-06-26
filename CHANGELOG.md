# Changelog

All notable changes to the **driftwave** plugin are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] — 2026-06-26

A coherence, honesty, and correctness release. The plugin's commands are unchanged —
but the project now tells the truth about what it is, ships under a real license, and
the pieces that claimed to work actually do.

### Added
- **LICENSE** (MIT) — the project is now legally installable; replaces the prior
  `UNLICENSED` / "All rights reserved" contradiction.
- **ROADMAP.md** — an explicit shipped / heuristic / planned breakdown (H₁/Betti,
  the sheaf Laplacian, speculative-reject capture, local-LLM routing, the live
  dashboard, and semantic addressing are labelled not-yet-built).
- **CONTRIBUTING.md** and a GitHub Pages deploy workflow.
- **Quickstart (5 minutes)** in the README, with the two starter commands
  (`/driftwave:directive`, `/driftwave:status`) called out explicitly and a SPA
  `404.html` for the docs site.
- `experiments/structure-recovery/` — **dw-bench**, a benchmark that tests the
  topology premise on real git history. It returned an honest negative: H₀ clustering
  did not beat Louvain/Ward at recovering repository structure.

### Changed
- **Honest topology framing everywhere.** "Literally" is reserved for H₀ Union-Find
  clustering; "sheaf consistency" and "H₁ loops" are now described as LLM-driven
  heuristics inspired by those ideas, not computed topology. Updated the README,
  `plugin.json`/`marketplace.json` descriptions (now lead with the directive-loop
  value proposition), the docs site, VISION.md/PROTOCOL.md (theory-and-vision
  banners), and the `dw-ascend` skill.
- **Canonical home.** `plugin.json` `homepage`/`repository` point to
  `RogueGringo/driftwave`; the `jtopo-plugins` marketplace now installs driftwave from
  here (the stale bundled copy was removed). Identity reconciled to "B. Jones" on the
  install / first-contact surfaces.
- Docs-site "95th percentile" corrected to "median persistence lifetime" to match
  `compute_persistence.py`.

### Fixed
- **Removed the unsupported "r = 0.935 validated" stat** — no data or code backed it.
- **Valid JSON artifacts.** The persistence scripts no longer emit a bare `Infinity`
  token (invalid JSON); infinite bars serialize as `death: null` + `"infinite": true`,
  the required `layer` field is emitted, and the schemas were updated to match.
- **Per-cluster persistence** — `bar_length` is each cluster's own bar, not the global
  maximum.
- **SessionStart hook** (`topo.sh`) no longer aborts with exit 128 in standalone
  installs — `PROJECT_ROOT` anchors to `CLAUDE_PROJECT_DIR` / git toplevel / cwd.
- **The `/driftwave:directive` loop creates its log directory** before appending, so
  the core loop's logging step can no longer fail on a fresh machine.
- **`/driftwave:dashboard`** dev server runs with `--base /` so `localhost:5174`
  resolves (previously a 404 against the `/driftwave/` base).
- Gini-slope divisor off-by-one (now `len-1`); `GiniChart` flat-trajectory
  divide-by-zero; `ForceGraph` edges now track moving nodes.
- Command portability: `/driftwave:filter` and `/driftwave:meta` invoke the scripts
  via `python3` (they worked only via a shebang before — broken on clone and on
  Windows).
- Removed a committed personal photo (PII) and 15 unused images; removed the personal
  email from the manifests.

## [0.1.0] — 2026-06-24

First packaged, installable release.

### Added
- Plugin manifest metadata: `version`, `license`, `homepage`, `repository`, `keywords`.
- `$id` identifiers on all artifact schemas (L0–L3 + meta-persistence).
- `CHANGELOG.md`, `.coderabbit.yaml`, and `.gitattributes` (LF for shell scripts).
- Marketplace + standalone install instructions in `README.md`.

### Fixed
- **Portability:** Python scripts now use `#!/usr/bin/env python3` instead of a
  hardcoded developer virtualenv path (`/home/wb1/.../.venv/bin/python`).
- **Portability:** `topo.sh` derives the Claude memory directory from the project
  path rather than a hardcoded machine-specific slug; override with `DW_MEMORY_DIR`.
- **Portability:** shell scripts normalized to LF so the SessionStart hook runs on
  Linux/macOS (CRLF previously broke the shebang).
- `gini-watchdog` agent given valid YAML frontmatter (`name`, `description`,
  `model`, `tools`).
- Corrected install instructions — the previous `gh:RogueGringo/driftwave-v0`
  reference did not resolve to this plugin.
- `run.md` / `directive.md` refer to `wavefront` and `topological-brainstorm` as
  skills rather than non-existent commands.
- `meta.md` validates its output against `meta_persistence.json` before reporting.
- Aligned author email between plugin and marketplace manifests.

[0.1.1]: https://github.com/RogueGringo/driftwave/releases/tag/v0.1.1
[0.1.0]: https://github.com/RogueGringo/JTopo/releases/tag/driftwave-v0.1.0
