# Changelog

All notable changes to the **driftwave** plugin are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] — 2026-08-02

The coherence-harness release: the loop gets a verification spine distilled
from the process patterns that kept independently re-emerging across the
author's sibling research projects — pre-registration, computed verdicts,
enforced honesty vocabularies, planted-fixture selftests — and the dead wiring
found by a full self-audit is fixed. The front door is unchanged:
`/driftwave:directive` and `/driftwave:status` are still all you need.

### Added
- **`coherence/`** — multi-channel codebase design-coherence analysis (driftwave's
  topology applied to real repositories). Encodes files under four distance
  channels (structure, git co-change, import graph, intent embeddings), runs H₀
  persistent homology per channel, and scores **cross-channel sheaf-agreement**
  (Mantel + ARI@k). Includes a temporal meta-persistence view (coherence over
  commit history) and an optional GPU neural intent channel (`INTENT_MODE=neural`).
- **`/driftwave:coherence`** command to run the analysis on any repo or corpus.
- Reference findings + figures from a 10-repo cross-language run (Python / JS /
  Rust) in `coherence/README.md`.
- **The verification spine.** `scripts/dw_verdict.py`: pre-registrations are
  sha256-frozen BEFORE work runs (`schemas/preregistration.json`,
  `/driftwave:preregister`); verdicts are computed mechanically against the
  frozen predicates — `PASS / FAIL / NULL / CERTIFIED_NULL / NO_VERDICT`,
  fail-closed, emitted as a machine-parseable `GATE:/CRITERION:/VERDICT:`
  grammar that prose can describe but never mint. Tampered criteria refuse to
  score; a retry requires a new prereg. Gates (instrument correctness, can
  invalidate the run) are disjoint from findings (reported as found — a null
  finding ships with a green build).
- **The pin.** `driftwave.pin.json` locks the invariants no agent may retune:
  honesty tiers, verdict/routing vocabularies, a closed flag vocabulary (the
  only significance channel), a prohibited overclaim lexicon, gate thresholds.
- **A real validator.** `scripts/dw_validate.py` enforces strict JSON + schema
  + pin on every artifact (jsonschema when installed, structural fallback
  otherwise) — every command's "validate" step now invokes an actual tool.
  Heuristic-tier artifacts must stamp `not_acceptance: true`.
- **The selftest instrument.** `/driftwave:selftest` (`scripts/dw_selftest.py`)
  runs the whole pipeline headless on planted fixtures with known ground truth
  (G1–G8) and exits non-zero on failure. Building it immediately caught a real
  property of the clustering (see FALSIFIED F3).
- **Artifacts-only audit.** `/driftwave:audit` re-verifies a run from what's on
  disk — schema, pin, freeze hashes — never by re-running the analysis.
- **Domain adapters.** `compute_persistence.py` accepts per-item `features`
  channels on a fixed frame, or a precomputed `distances` matrix — any domain
  feeds the same pipeline through one L0 contract (docs/HARNESS.md).
- **Decoy null check.** L1 scores native structure against a seeded
  column-shuffle decoy and reports it in-band (informational negative control,
  labeled as such).
- **Standing rules + falsified ledger.** `rules/standing_rules.json`: ten
  failure-mode rules earned by real methodology catches, plus FALSIFIED entries
  (including dw-bench's negative, now also carried as an in-band `caveat` on
  every L1 artifact). The L3 review checks findings against all of it.
- **Named findings with witnesses.** The L3 artifact assigns stable IDs; a
  finding may not be CLOSED without a witness.
- **docs/HARNESS.md** — the dimensional map: phase × enforcement × honesty tier.

### Changed
- **All state moved from `/tmp/dw-artifacts` to per-project `.dw/`** (env
  `DW_STATE_DIR` → `$CLAUDE_PROJECT_DIR/.dw` → git toplevel → cwd). `/tmp` was
  wiped on reboot and shared across projects — the 0.1.x cross-session memory
  claims were structurally unfulfillable (FALSIFIED F2).
- **The directive log is structured JSONL and READ BACK**: the LOOK subagent
  reports what previous cycles did and what failed. Before, the flagship
  "mistakes don't repeat because the log remembers" claim was write-only wiring.
- **`topo.sh` de-hardcoded**: clusters recent changes by the repo's actual
  top-level directories instead of the author's old monorepo layout; writes its
  scan manifest into the per-project `.dw/` state dir instead of dirtying the
  installed plugin's git tree; writes nothing outside `.dw/` (the
  EXPERIMENT_LOG stub-creation is gone); validates the pin + schemas as JSON;
  handles an unborn HEAD without emitting invalid JSON.
- **gini-watchdog is wired in** (dispatched by synthesize/run every 2 sections)
  and HOLD is representable in the L1/L2 routing enums.
- **Doc-vs-code drift reconciled**: the epsilon rule text now matches the code
  (median bar lifetime, not "95th percentile"); wavefront's "even trivial tasks
  pass through" removed (it contradicted README, directive.md, and the fifth
  axiom); dashboard command now states it renders demo data; dw-ingest's
  unhonored `local_llm:*` frontmatter keys removed (the capability is roadmap,
  not config).
- L2/L3 artifacts and agents stamp `not_acceptance: true` and carry provenance
  blocks; schemas gained provenance / flags / limits / deviations / findings /
  baseline fields (all optional — 0.1.x artifacts still validate).

### Hardened (stage consolidation — nine-angle adversarial review)

A nine-finder review pass (reuse / efficiency / simplification / altitude /
wrapper-correctness / language-pitfalls / cross-file-tracing / line-scan /
removed-behavior) ran against the consolidated stage branch; every reproduced
finding is fixed, with regression tests:

- **Lexicon check is word-boundary, not substring** — "provenance" no longer
  trips "proven", "improves" no longer trips "proves" (honest artifacts were
  hard-failing validation).
- **The meta recipe can no longer destroy accumulated memory** — the `mv` is
  `&&`-chained, and `compute_meta_persistence.py` derives the schema-required
  `accumulated_verdicts` itself (a by-the-book first run used to fail its own
  validate step).
- **Adapter inputs fail closed everywhere**: distances matrices are
  shape-checked against `files` (was an IndexError traceback), partial
  features REPROBE instead of silently clustering fabricated defaults, and a
  missing `path` key rejects cleanly.
- **Float verdict equality tolerates representation noise** (`0.1+0.2 == 0.3`
  PASSes via isclose) — a permanent wrong FAIL was one ulp away.
- **Layer-derived honesty tiers**: the pin maps L2/L3 → heuristic and
  dw_validate enforces it regardless of what the producing agent self-reports
  — the policed producers can no longer opt out by omitting provenance.
  (Compat note: L2/L3 artifacts without a heuristic provenance block now fail
  default validation; that is the point.)
- **One mechanism per concern**: the persistence scripts import dw_common
  (strict parse, pin, provenance, version — the version now reads from
  plugin.json, ending three private copies); state-dir resolution has a CLI
  (`dw_common.py state-dir`) that topo.sh and the command prose call instead
  of re-deriving; the directive log is written/read by `scripts/dw_log.py`
  (shell-quoting can no longer corrupt next cycle's memory).
- **`.dw/` self-gitignores** (a `.gitignore` containing `*` inside it), and
  topo.sh migrates live 0.1.x `/tmp/dw-artifacts` history on first scan
  instead of silently starting memory from zero.
- **topo.sh**: git<2.22 branch fallback, truly strict JSON checks (bare NaN
  now rejected; one interpreter spawn instead of 10–20 per session start),
  space-safe directory clustering, no contradictory ✓-after-✗ report line.
- **RawCloud schema honors the any-domain contract** — adapter (features) and
  distances-mode artifacts validate; before, the documented contract was
  schema-blocked at L0.
- **Selftest can no longer crash instead of verdicting** (G5 None-format
  guard, top-level guard) and G8 delegates to the real `pin_check` enforcer
  instead of a weaker inline copy.
- **Pin trimmed to reality**: the flag vocabulary lists only flags something
  emits; the gini REPROBE slope (-0.01) is pinned instead of living in prose;
  dead schema fields (`deviation_policy`, `intent`) removed.
- **coherence/ scoped honestly**: outputs/clones move out of the plugin tree
  (`DW_COHERENCE_DIR`, default `./coherence-out`); git failures warn and skip
  instead of publishing degenerate all-ones fingerprints; `temporal.py`
  analyzes the corpus you actually benched (was a hardcoded 7-repo list);
  dead scipy dependency dropped; `fingerprints.json` is stamped
  `not_acceptance: true` with an in-band caveat that the module runs beside
  the pinned spine, not inside it (convergence is roadmap).
- **docs/PORTING.md** — the host-neutral kit spec: what ports to any agentic
  system (pin, schemas, rules, stdlib CLIs), the four capabilities a host
  binding must provide, and machine-checkable conformance (selftest +
  regression suite + validate must pass in the port's environment).

### Optimized (opt-round-1 — pre-registered, computed VERDICT: PASS)

This round ran through the harness's own spine: criteria frozen
(`sha256 2d7f0cb0…`) BEFORE implementation, evaluated mechanically afterward.
The frozen prereg, results, computed verdict artifact, and the verbatim
baseline implementations used for equivalence proofs are committed under
`docs/verification/2026-08-02-optimization-round/`.

- **`scripts/dw_audit.py`** — the audit is now a mechanism: schema + pin
  validation, prereg freeze-hash checks, `prereg_sha256` cross-references,
  witness-on-CLOSED, legacy downgrades — ending in a computed
  `AUDIT: PASS/FAIL` line with a hard exit code. This closes the last place
  prose was allowed to mint a verdict-shaped token (C4: clean planted state
  PASSes; C5: all 4 planted violation classes detected).
- **Persistence hot path vectorized** with proven bit-identity: distance
  matrix by broadcasting, edge sort via `np.lexsort((j, i, d))` reproducing
  the old tuple sort's tie order exactly. Output hashes on the frozen
  fixtures are unchanged byte-for-byte (C1, C2); the 400-point cloud runs
  **2.1× faster** (1.917s → 0.92s, C3) — the decoy control doubles the win.
- **Coherence hot paths vectorized** with side-by-side equivalence against
  the snapshotted originals (C6: Jaccard exact to 0, kruskal exactly equal
  including planted ties, imports-cosine ≤ 1e-16): one `_kruskal` pass now
  serves both `h0` and `labels_k` (the duplicated union-find is gone), the
  co-change/temporal Jaccard blocks are three numpy lines, and the imports
  distance is one row-normalize + matmul. Combined battery: **9.6× faster**
  (C7).
- Two new regression tests pin all of it (`test_audit_mechanism`,
  `test_vectorized_persistence_unchanged`) — 15 total.

### Removed
- The stale committed `.topo-artifacts.json` (a scan snapshot of a different
  repo from 2026-03), plus its PLUGIN_ROOT write path.
- The dead `scipy` requirement in `coherence/requirements.txt` (nothing
  imports it), and the pin's five never-emitted flags.


## [0.1.2] — 2026-06-28

Continues the claims-to-reality work onto every surface, leads the site with the
product, and fixes a Windows-only hook false alarm found by installing and testing
the plugin.

### Changed
- **The landing site now leads with the directive loop, not topology.** New split
  hero ("Claude, but it looks before it codes" + a live `/driftwave:directive` run),
  a new "The Loop" section (`LOOK→PARSE→GAP→DO→LOG→CHECK`), and all topological
  visualizations moved under an explicit "The Deeper Layer" heading (#4).
- **Every per-file description rectified to reality** (#29): agent/skill/command/
  schema text no longer states LLM heuristics as literal computation — "computes
  kernel dimension" → "estimates a consistency count (a kernel-dimension analogy)",
  "detects H₁ loops" → "flags cross-section dependencies (an H₁-loop analogy)",
  "enforces all five axioms" → "guided by", "sheaf-valued" → "sheaf-inspired".
  "real/computes" is reserved for H₀.

### Fixed
- **SEO/social honesty + crawlability** (#5): `index.html` `<title>`/meta/OG still
  said "Topology as Cognition" / "sheaf-valued persistent homology" (served to every
  crawler). Now an honest title + value-prop meta, an `og:image`/`twitter:image` that
  actually backs the `summary_large_image` card, `canonical` + `og:url`, and a
  `<noscript>` fallback so non-JS clients see the real pitch instead of an empty div.
- **SessionStart hook false alarm on Windows:** `topo.sh` validate opened JSON with
  the platform default encoding (cp1252), so the `H₁` (U+2081) in `plugin.json`
  triggered a `UnicodeDecodeError` and the hook reported "plugin.json is INVALID JSON
  → OFF-SHELL" every session. All JSON reads now use `encoding="utf-8"`.

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

[0.2.0]: https://github.com/RogueGringo/driftwave/releases/tag/v0.2.0
[0.1.2]: https://github.com/RogueGringo/driftwave/releases/tag/v0.1.2
[0.1.1]: https://github.com/RogueGringo/driftwave/releases/tag/v0.1.1
[0.1.0]: https://github.com/RogueGringo/JTopo/releases/tag/driftwave-v0.1.0
