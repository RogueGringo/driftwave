# dw-bench — structure-recovery benchmark

Tests whether a multi-signal topological read of git history recovers a repo's real
architecture. See `../../docs/superpowers/specs/2026-06-25-dw-bench-structure-recovery-design.md`.

## Setup
    python -m venv .venv && . .venv/Scripts/activate   # or .venv/bin/activate
    pip install -r requirements.txt

## Run
    python -m dwbench.run --repos repos.yaml --smoke   # 6-repo smoke subset
    python -m dwbench.run --repos repos.yaml           # full set

## Test
    python -m pytest -q

## Interpreting results

- **Verdict** in `out/report.md`: `beats-controls` only if combined ARI beats BOTH
  Louvain and Ward on a majority of repos AND both paired sign tests are p<0.05.
- `path-prefix` is a sanity *ceiling* (it nearly is the ground truth) — nothing
  should beat it; if combined ≈ path-prefix, recovery is near-perfect for that repo.
- `permutation p95` is the chance floor; combined ARI must clear it (necessary,
  not sufficient).
- The per-signal columns (in `results.json`) are the ablation — they show whether
  message/churn/authorship add anything over co-change alone.
- For an embedding run: `--message-method embed` (slower; downloads all-MiniLM-L6-v2).
- Louvain runs at its native (modularity-optimal) cluster count, not cut to k; its n_clusters is reported per method for context.
