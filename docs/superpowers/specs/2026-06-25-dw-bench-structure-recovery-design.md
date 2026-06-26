# Driftwave Structure-Recovery Bench (`dw-bench`) — Design

**Date:** 2026-06-25
**Status:** Approved design, pending spec review → implementation plan
**Lives in:** `RogueGringo/driftwave` under `experiments/structure-recovery/`

## 1. Purpose

Validate and refine driftwave's core premise on **real data**: does a multi-signal
*topological* read of a repository's git history recover that repository's real
architecture? driftwave today clusters files on a trivial feature vector
(`[size_bytes, staleness_days, md5(language)]`), so its H₀ persistence is *real math on
fake features*. This bench replaces those features with genuine signal extracted from
git history and measures, objectively, whether the topology recovers known structure.

This is the rung-1 experiment. If git-history topology cannot recover known architecture,
nothing downstream (trajectory analysis, coherence scoring, the L2/L3 claims) is worth
building. If it can, the same harness becomes the evidence base the project has so far
lacked (it is the honest replacement for the deleted, unsupported "r = 0.935" claim).

## 2. Hypothesis & success criteria

**Hypothesis (rung 1, structure recovery):** Files that change together, are described
with related commit messages, churn together, and share authors, cluster together in a
way that matches the repo's real module/directory boundaries.

**Ground truth:** the repository's own structure — by default the **top-level source
directory** of each file (e.g. `src/`, `lib/`, `packages/<x>/`), overridable per repo.

**Scoring:** Adjusted Rand Index (ARI), Normalized Mutual Information (NMI), and
homogeneity/completeness between recovered clusters and ground-truth labels.

**Success = "validated (rung 1)" when, for a majority (≥ 60%) of repos in the set:**
1. driftwave-combined recovery is **above chance** — its ARI exceeds the 95th percentile
   of a null distribution built by shuffling the ground-truth labels (≥ 200 permutations)
   and recomputing ARI, AND
2. it is **≥ the control baselines** (Louvain on the co-change graph; Ward hierarchical),
   within noise.

Results are reported **per repo and in aggregate**, never collapsed to a single headline
number.

Beating chance but *not* the controls is an informative negative result: it means the
topological framing adds nothing over standard methods on this task, and we report that
honestly rather than burying it.

**Refining** = adjust signal weights / distance definitions and watch the cross-repo
table move; the per-signal ablation attributes which signals earn the recovery.

## 3. Non-goals (YAGNI)

- Not building a user-facing `/driftwave:analyze-repo` command (that is a later step,
  only if validation succeeds).
- Not validating H₁/Betti/sheaf claims — strictly H₀ structure recovery.
- Not producing marketing artifacts; plots serve analysis, not persuasion.
- Not asserting causation about code "health/quality" — that is rung 3
  (cross-repo discrimination), explicitly out of scope here.

## 4. Architecture

Modular Python package under `experiments/structure-recovery/`. Each unit has one purpose,
a clear interface, and is independently testable.

```
experiments/structure-recovery/
├── README.md
├── requirements.txt          # isolated from the plugin; heavier deps live here only
├── repos.yaml                # the repo set + per-repo config
├── dwbench/
│   ├── __init__.py
│   ├── extract.py            # git log -> per-file signals (+ disk cache)
│   ├── distance.py           # signals -> per-signal + fused distance matrices
│   ├── cluster.py            # driftwave H0 union-find + control clusterings
│   ├── score.py              # clusters vs ground-truth labels -> ARI/NMI/...
│   ├── plots.py              # per-repo + cross-repo figures
│   ├── labels.py             # ground-truth labeling strategies
│   ├── run.py                # orchestrator (snapshot pass), resumable
│   └── trajectory.py         # PASS 2: windowed evolution over the same cache
├── cache/                    # gitignored: extracted features per repo+range
└── out/                      # gitignored: tables, plots, report.md
```

### 4.1 Components

- **`extract.py`** — For each repo: shallow-history-capped `git log` walk (last `N`
  commits, default 2000). Produces four per-file signals and **caches** them to
  `cache/<repo>@<range>.{npz,parquet,json}` keyed by repo + commit range so re-runs are
  instant. Stores per-commit timestamps so Pass 2 can window without re-extraction.
  Signals:
  - **co-change** — symmetric file×file co-occurrence counts across commits.
  - **message-intent** — embed each commit message with a local
    `sentence-transformers/all-MiniLM-L6-v2`; per-file vector = mean of the messages of
    commits that touched it.
  - **churn** — per file: number of commits, total lines added+deleted.
  - **authorship** — per file: distribution over authors (vector).
- **`distance.py`** — Convert each signal to a file×file distance:
  - co-change → `1 − Jaccard(co-occurrence)`
  - message-intent → cosine distance of file vectors
  - churn → normalized Euclidean of (log-commit-count, log-lines)
  - authorship → cosine distance of author distributions
  Fuse via a **configurable weighted sum** (`weights` in `repos.yaml`/CLI) → the refine
  knob. Each single-signal distance is also returned for ablation.
- **`cluster.py`** — Run **driftwave's H₀ union-find** by importing
  `scripts/compute_persistence.py` (the repo's real engine) on a distance matrix → flat
  clusters + barcode. Controls: **Louvain** (`networkx` + `python-louvain`) on the
  co-change graph, and **Ward hierarchical** (`scipy`) cut to match cluster count.
- **`labels.py`** — Ground-truth labeling strategies: `top_level_dir` (default),
  `deepest_pkg`, `codeowners`. Returns a label per file; files with no label
  (e.g. root-level configs) are excluded from scoring, recorded as coverage %.
- **`score.py`** — ARI, NMI, homogeneity, completeness for: combined, each
  single-signal ablation, and each control. Plus cluster count and label coverage.
- **`plots.py`** —
  - *Per repo:* persistence barcode; cluster↔directory confusion heatmap;
    signal-contribution bar chart (ablation); 2-D UMAP of files colored by recovered
    cluster vs by true module (side by side).
  - *Cross-repo:* recovery-score table (CSV/JSON) + grouped bar chart
    (driftwave-combined vs each control vs each ablation), per repo and aggregated.
- **`run.py`** — Orchestrates the snapshot pass over `repos.yaml`; per repo:
  clone (if absent) → extract (cached) → distance → cluster (driftwave + controls) →
  score → plots; writes `out/results.csv`, `out/results.json`, and `out/report.md`
  (markdown with embedded plots + a short narrative). Resumable: skips repos already in
  `out/results.json`, reuses `cache/`.
- **`trajectory.py`** (Pass 2) — Slices the cached signals by window (git tag/release,
  else every `M` commits), recomputes recovery + topological metrics (cluster count,
  Gini of bar lengths, mean persistence) per window → trajectory plots with
  phase-transition markers at tags. No re-extraction; pure cache reuse.

## 5. Data flow

```
repos.yaml
   │  (per repo)
   ▼
clone ──► extract.py ──► cache/ ──► distance.py ──► cluster.py ──► score.py ──► out/
                                         │ (driftwave H0 + Louvain + Ward)
                                         └──► plots.py ──► out/report.md
                                                                   │
Pass 2:  cache/ ──► trajectory.py ──► out/ (evolution plots) ◄─────┘
```

## 6. Repo set (`repos.yaml`)

~20–30 repos in three categories. The exact CC-plugin list is generated by a documented
selection step at implementation time (GitHub topic `claude-code` / `claude-code-plugin`,
plus the official marketplace, top by stars) — not hand-fabricated here.

- **cc-plugin (~10)** — top Claude Code CLI plugins by stars from the official
  marketplace + the `claude-code-plugin` topic.
- **aaa-oss (~10)** — large, mature, well-engineered OSS as the "AAA-grade" analog
  (true AAA *game-studio* code is mostly closed source). Concrete candidates:
  `microsoft/vscode`, `facebook/react`, `microsoft/TypeScript`, `godotengine/godot`,
  `kubernetes/kubernetes`, `rust-lang/rust`, `vercel/next.js`, `pytorch/pytorch`,
  `neovim/neovim`, `redis/redis`.
- **mixed (~5)** — smaller/younger or deliberately heterogeneous repos to widen the
  range of structure quality.

Per-repo config: `commit_cap` (default 2000), `label_strategy` (default `top_level_dir`),
`path_filters` (e.g. drop vendored/`node_modules`/generated dirs), optional `weights`.
A per-repo file cap (default ~1500 tracked source files) bounds the O(N²) distance step;
when exceeded, restrict to the most-churned files and record the truncation in the report.

## 7. Tech / dependencies (isolated `requirements.txt`)

`numpy`, `scipy`, `scikit-learn` (ARI/NMI/hierarchical), `sentence-transformers` +
`torch` (local embeddings), `networkx`, `python-louvain` (control), `matplotlib`,
`umap-learn`, `pyyaml`, `pandas`. Git access via subprocess `git` (no GitPython dep).
None of this touches the plugin's runtime — the plugin stays dependency-light;
`experiments/` is opt-in.

## 8. Risks & honesty guards

- **Ground-truth circularity.** Top-level-dir labels can be gamed if a repo's directory
  layout already mirrors co-change. Mitigation: report label coverage; include controls
  (if driftwave only ties Louvain, say so); try `deepest_pkg` as a robustness check on a
  subset.
- **Co-change dominates.** Co-change is the strongest structural signal, so combined
  recovery may be ~co-change-alone. The ablation makes this visible rather than hidden;
  a finding that message/churn/author add nothing is a valid, reported result.
- **Compute.** 20–30 repos × full extraction is heavy. Mitigations: commit/file caps,
  per-repo caching, resumable orchestration, partial reporting.
- **No silent caps.** Every truncation (commit cap, file cap, unlabeled files) is logged
  in `out/report.md` so coverage is never overstated.

## 9. Two-pass plan

1. **Pass 1 (snapshot):** components §4.1 except `trajectory.py`; deliver
   `out/results.{csv,json}` + `out/report.md` with per-repo and cross-repo plots, plus
   a written rung-1 verdict against §2 success criteria.
2. **Pass 2 (evolution):** `trajectory.py` over the same cache → per-repo evolution plots
   + phase-transition markers; appended to the report.

## 10. Success criteria for the build itself

- `dw-bench` runs end-to-end on the repo set, resumable, from a single command.
- Produces the cross-repo table + per-repo plot packs + `report.md`.
- Unit-testable components with tests for `extract`, `distance`, `score`, `labels`
  on small synthetic fixtures (deterministic), reusing the project's existing test style.
- A clear, honest rung-1 verdict: validated / not-validated / ties-controls, with the
  ablation showing signal contributions.
