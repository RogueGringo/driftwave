# Driftwave Structure-Recovery Bench (`dw-bench`) — Design

**Date:** 2026-06-25
**Status:** Reviewed & revised (adversarial spec review applied) → ready for implementation plan
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

### 2.1 The bar that matters: beat the controls, not chance

Top-level-dir labels are correlated with co-change *by construction* — files in a folder
change together *because* they're the same module. So "above chance" is nearly guaranteed
and **proves almost nothing**. The real question is whether the topological method adds
value over standard, simpler methods.

- **PRIMARY criterion — beats controls.** Validated when driftwave-combined recovery
  exceeds **both** control baselines (Louvain on the co-change graph; Ward hierarchical)
  by a margin that is **statistically meaningful**: across the repo set, driftwave wins
  on a majority of repos AND a paired sign test over per-repo ARI deltas is significant
  (p < 0.05), with per-repo bootstrap 95% CIs on the ARI difference reported.
- **SANITY FLOOR (necessary, not sufficient).** driftwave-combined ARI must also clear a
  permutation null (≥ 200 label shuffles, must exceed the 95th percentile). Clearing the
  floor but not beating controls = **informative negative**: the topological framing adds
  nothing over standard methods, reported honestly.
- A **path-prefix clustering** baseline (cluster files by directory-path similarity) is
  reported as a sanity *ceiling* — since it nearly *is* the ground truth, no method should
  be expected to beat it; it bounds the achievable score.

Results are reported **per repo and in aggregate**, never collapsed to one headline number.

### 2.2 Avoiding self-deception (anti-overfitting protocol)

Tuning fusion weights and then scoring on the same repos is training on the test set.
To keep "refinement" honest:

- **Weights are not fit on the evaluation set.** Either (a) **freeze** signal weights a
  priori (default: equal weights after normalization), and treat the cross-repo table as
  read-only; or (b) if weights are tuned, use a **repo-level train/test split** (or k-fold
  over repos) and report only **test-fold** numbers.
- "Refining" therefore means changing *method definitions* (distance metrics, threshold
  policy, signal set) with the split held fixed — not grid-searching weights against the
  scores you report.
- Every reported number states which protocol produced it.

### 2.3 Clustering granularity (don't let a fixed cut decide the result)

driftwave's `compute_persistence.py` cuts clusters at the **median bar lifetime** — a
fixed heuristic that yields whatever cluster count the median gives, probably not the
number of ground-truth modules. Scoring only there risks a false negative ("wrong
granularity" mistaken for "method fails").

- The bench **sweeps the H₀ single-linkage threshold** across the dendrogram and reports
  recovery as a curve; the **headline score is taken at the cut whose cluster count
  matches the ground-truth label count** (a fair, granularity-controlled comparison
  applied identically to driftwave and to Ward).
- driftwave's exact **median cut is reported as one labeled point** on the curve, so we
  can see whether the shipped heuristic lands near the optimum — but it does not define
  the verdict.

**Refining** = adjust distance definitions / threshold policy / signal set under the fixed
split; the per-signal **ablation is the primary result** (see §4.1 `score.py`), with
"combined" as its top row.

## 3. Non-goals (YAGNI)

- Not building a user-facing `/driftwave:analyze-repo` command (later, only if validated).
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
│   ├── distance.py           # signals -> normalized per-signal + fused distances
│   ├── cluster.py            # H0 single-linkage threshold sweep + control clusterings
│   ├── score.py              # clusters vs labels -> ARI/NMI + significance vs controls
│   ├── plots.py              # per-repo + cross-repo figures
│   ├── labels.py             # ground-truth labeling strategies
│   ├── split.py              # repo-level train/test (or k-fold) assignment
│   ├── run.py                # orchestrator (snapshot pass), resumable
│   └── trajectory.py         # PASS 2: windowed evolution over the same cache
├── cache/                    # gitignored: extracted features per repo+range
└── out/                      # gitignored: tables, plots, report.md
```

### 4.1 Components

- **`extract.py`** — For each repo: history-capped `git log` walk (last `N` commits,
  default 2000). Produces per-file signals and **caches** them to
  `cache/<repo>@<range>.{npz,parquet,json}` keyed by repo + commit range so re-runs are
  instant. Stores per-commit timestamps so Pass 2 can window without re-extraction.
  Signals:
  - **co-change** — symmetric file×file co-occurrence counts across commits.
  - **message-intent** — two variants, both produced so the ablation can compare them:
    (a) **TF-IDF** over the concatenated commit messages per file (cheap baseline);
    (b) **embeddings** — local `sentence-transformers/all-MiniLM-L6-v2`, per-file vector
    = mean of the messages of commits that touched it. *Caveat (flagged):* mean-pooling
    over many terse/templated messages ("fix", "wip") may wash out signal; the ablation
    tests whether either message variant actually helps.
  - **churn** — per file: number of commits, total lines added+deleted.
  - **authorship** — per file: distribution over authors (vector).
- **`distance.py`** — Convert each signal to a file×file distance, then **normalize each
  distance matrix to a common scale before fusion** (rank-transform, or z-score the
  off-diagonal entries) so heterogeneous geometries are comparable:
  - co-change → `1 − Jaccard(co-occurrence)`
  - message-intent → cosine distance (TF-IDF and/or embeddings)
  - churn → Euclidean of (log-commit-count, log-lines)
  - authorship → cosine distance of author distributions
  Fuse via a weighted sum of the **normalized** distances; default **equal weights**
  (§2.2). Each single-signal distance is also returned for ablation. Note: co-change is
  near-maximal for the many file pairs that never co-occur, so the matrix is sparse/
  degenerate for most pairs — Louvain on the co-change *graph* (edges where co-change > 0)
  handles this more gracefully than single-linkage, which can chain.
- **`cluster.py`** — H₀ single-linkage clustering with a **threshold sweep** (§2.3): the
  dendrogram is cut at multiple thresholds; the scored cut is the one matching the label
  count, with driftwave's median cut recorded as one point. The actual H₀/Union-Find is
  driftwave's `scripts/compute_persistence.py` logic (shared, so the experiment exercises
  the real engine), generalized to accept an arbitrary cut threshold rather than only the
  median. Controls: **Louvain** (`networkx` + `python-louvain`) on the co-change graph,
  and **Ward hierarchical** (`scipy`), both cut to the same label count.
- **`labels.py`** — Strategies: `top_level_dir` (default), `deepest_pkg`, `codeowners`.
  Returns a label per file; unlabeled files (root configs, etc.) are excluded from scoring
  and recorded as coverage %. A **minimum size threshold** (default ≥ 30 labeled files and
  ≥ 2 labels) excludes repos too small for stable ARI; exclusions are logged.
- **`split.py`** — Deterministic repo-level train/test (or k-fold) assignment for the
  anti-overfitting protocol (§2.2). Seedable; the split is recorded in the report.
- **`score.py`** — Per repo and per method (combined, each single-signal ablation, each
  control, path-prefix ceiling): ARI, NMI, homogeneity, completeness, cluster count,
  label coverage. Plus the **comparison stats**: per-repo bootstrap 95% CI on
  (driftwave − control) ARI, and a cross-repo **paired sign test**. The **ablation table
  is the primary artifact**.
- **`plots.py`** —
  - *Per repo:* recovery-vs-threshold curve (driftwave & Ward) with the label-count cut
    and median cut marked; cluster↔directory confusion heatmap; signal-contribution bars
    (ablation); 2-D UMAP colored by recovered cluster vs by true module.
  - *Cross-repo:* recovery table (CSV/JSON) + grouped bars (combined vs controls vs each
    ablation vs path-prefix ceiling); a driftwave-minus-control delta plot with CIs.
- **`run.py`** — Orchestrates the snapshot pass over `repos.yaml`; per repo:
  clone (if absent) → extract (cached) → distance → cluster (sweep + controls) → score →
  plots; writes `out/results.csv`, `out/results.json`, and `out/report.md`. Resumable:
  skips repos already in `out/results.json`, reuses `cache/`.
- **`trajectory.py`** (Pass 2) — Slices cached signals by window (git tag/release, else
  every `M` commits), recomputes recovery + topological metrics per window → trajectory
  plots with phase-transition markers at tags. No re-extraction; pure cache reuse.

## 5. Data flow

```
repos.yaml ──► split.py (train/test)
   │  (per repo)
   ▼
clone ──► extract.py ──► cache/ ──► distance.py (normalize+fuse) ──► cluster.py (sweep) ──► score.py ──► out/
                                                  │ (H0 sweep + Louvain + Ward + path-prefix)
                                                  └──► plots.py ──► out/report.md
                                                                            │
Pass 2:  cache/ ──► trajectory.py ──► out/ (evolution plots) ◄──────────────┘
```

## 6. Repo set (`repos.yaml`)

~20–30 repos in three categories. The exact CC-plugin list is generated by a documented
selection step at implementation time (GitHub topic `claude-code` / `claude-code-plugin`,
plus the official marketplace, top by stars) — not hand-fabricated here.

- **cc-plugin (~10)** — top Claude Code CLI plugins by stars. (Excluded if below the
  min-size threshold in `labels.py`.)
- **aaa-oss (~10)** — large, mature OSS as the "AAA-grade" analog (true AAA *game-studio*
  code is mostly closed source): `microsoft/vscode`, `facebook/react`,
  `microsoft/TypeScript`, `godotengine/godot`, `kubernetes/kubernetes`, `rust-lang/rust`,
  `vercel/next.js`, `pytorch/pytorch`, `neovim/neovim`, `redis/redis`.
- **mixed (~5)** — smaller/younger or deliberately heterogeneous repos.

**Recommended first run:** a 6-repo smoke subset (2 cc-plugin + 2 aaa-oss + 2 mixed) to
shake out the pipeline before the full set; the orchestrator is resumable so scaling up
reuses the cache.

Per-repo config: `commit_cap` (default 2000), `label_strategy` (default `top_level_dir`),
`path_filters` (drop vendored/`node_modules`/generated), optional `weights`, optional
`file_cap` (default ~1500, bounds the O(N²) distance step; when exceeded, restrict to
most-churned files). **Sampling-bias note:** for very large repos the commit/file caps
mean recovery is measured on a *recent, hot slice* of the repo, not its entirety — stated
explicitly in the report per repo.

## 7. Tech / dependencies (isolated `requirements.txt`)

`numpy`, `scipy`, `scikit-learn` (ARI/NMI/hierarchical/TF-IDF), `sentence-transformers` +
`torch` (local embeddings), `networkx`, `python-louvain` (control), `matplotlib`,
`umap-learn`, `pyyaml`, `pandas`. Git via subprocess (no GitPython dep). None of this
touches the plugin's runtime — the plugin stays dependency-light; `experiments/` is opt-in.

## 8. Risks & honesty guards

- **Ground-truth circularity (primary risk).** Dir labels mirror co-change by
  construction, so "beats chance" is vacuous. Mitigation: the **primary** criterion is
  *beats controls with a significance test* (§2.1), not beats-chance; `deepest_pkg` run as
  a robustness check on a subset; path-prefix ceiling reported.
- **Overfitting via weight tuning.** Mitigation: frozen weights or train/test split,
  test-fold-only reporting (§2.2).
- **Granularity artifact.** A fixed median cut could mask recovery. Mitigation: threshold
  sweep, scored at the label-count cut (§2.3).
- **Fusion scale mismatch.** Heterogeneous distances summed directly are meaningless.
  Mitigation: normalize each distance before fusion (§4.1 `distance.py`).
- **Message-intent may be noise.** Mean-pooled embeddings over terse messages may not
  help. Mitigation: TF-IDF baseline + ablation; predicted-uncertain, reported either way.
- **Co-change dominance.** Combined recovery may ≈ co-change-alone; the ablation surfaces
  this rather than hiding it — a valid, reported result.
- **Compute / large repos.** Mitigations: commit/file caps, caching, resumable runs,
  partial reporting, smoke subset first.
- **No silent caps.** Every truncation (commit cap, file cap, unlabeled files, excluded
  repos) is logged in `out/report.md`; coverage is never overstated.

## 9. Two-pass plan

1. **Pass 1 (snapshot):** components §4.1 except `trajectory.py`; deliver
   `out/results.{csv,json}` + `out/report.md` with per-repo and cross-repo plots, plus a
   written rung-1 verdict against §2 criteria.
2. **Pass 2 (evolution):** `trajectory.py` over the same cache → per-repo evolution plots
   + phase-transition markers; appended to the report.

## 10. Success criteria for the build itself

- `dw-bench` runs end-to-end on the repo set, resumable, from a single command, with a
  6-repo smoke subset working first.
- Produces the **ablation-first** cross-repo table + per-repo plot packs + `report.md`,
  including the driftwave-vs-control significance stats.
- Unit-testable components with deterministic tests for `extract`, `distance` (incl.
  normalization), `cluster` (threshold sweep), `score` (ARI + sign test), `labels`,
  `split`, on small synthetic fixtures, reusing the project's existing test style.
- A clear, honest rung-1 verdict: **beats controls / ties controls / fails**, with the
  ablation showing per-signal contributions and the protocol (frozen vs split) stated.
