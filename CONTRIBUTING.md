# Contributing to driftwave

Thanks for your interest! driftwave is a Claude Code plugin: a "look before you act"
coding loop (`/driftwave:directive`) with an optional persistent-homology analysis
pipeline.

## Reporting issues

Please open an issue: **https://github.com/RogueGringo/driftwave/issues**

Include what you ran, what you expected, and what happened (and your OS — Windows and
Unix are both supported). Issues are the contact channel for the project.

## Project layout

| Path | What it is |
|---|---|
| `commands/`, `agents/`, `skills/`, `hooks/` | the plugin itself (natural-language, no runtime deps) |
| `scripts/` | the optional Python analysis pipeline (persistent homology) |
| `schemas/` | JSON Schemas for the pipeline artifacts |
| `docs-site/` | the landing site (Vite + React), deployed to GitHub Pages |

## Dev setup

The core `/driftwave:directive` loop has **no dependencies** — it's natural-language
instruction to Claude.

**Analysis pipeline** (only if you touch `scripts/`):
```bash
pip install -r scripts/requirements.txt   # numpy
python scripts/test_artifact_json.py       # run the test suite
```

**Docs site** (only if you touch `docs-site/`):
```bash
cd docs-site
npm install
npm run dev      # local preview
npm run build    # production build -> dist/
```

## Pull requests

- Branch from `main`; keep PRs focused on one concern.
- If you change `scripts/` or the schemas, run `python scripts/test_artifact_json.py`
  and keep it green (it strict-parses output and validates against the JSON Schemas).
- If you change `docs-site/`, confirm `npm run build` succeeds.
- Match the surrounding style; explain the *why* in the PR description.

## License

By contributing you agree your contributions are licensed under the
[MIT License](LICENSE).
