# Driftwave Roadmap

What's real today vs. what's planned. Driftwave aims to be honest about the line
between the two: the math is real where it says **H₀**, and clearly labeled as
heuristic or planned everywhere else.

## ✅ Shipped today

- **`/driftwave:directive`** — the look-before-you-act loop (LOOK → PARSE → GAP →
  DO → LOG → CHECK). Dependency-free; this is the core of the plugin.
- **H₀ persistent-homology clustering** — `scripts/compute_persistence.py` computes
  real H₀ persistence (Union-Find) over an artifact distance matrix.
- **The `/driftwave:*` command stack** and skills (map / filter / ascend / wavefront
  / …) as natural-language pipeline guidance.
- **Meta-persistence across sessions** — `scripts/compute_meta_persistence.py`.
- **JSON-Schema'd artifacts** for each pipeline layer.

## 🟡 Heuristic today (inspired by topology, not computed)

These work — but as **LLM judgment** framed in topological language, not literal math:

- **"Sheaf consistency" / L3 review** — an Opus agent checks whether design sections
  compose; "kernel dimension" is its count of consistent sections, not a computed
  `ker(L_F)`.
- **"H₁ loop detection" (L2)** — an LLM spots cross-section dependencies; no H₁
  homology is computed (the scripts compute H₀ only).
- **Gini-trajectory routing** — a real Gini coefficient used as a heuristic signal,
  not a proof.

## 🔭 Planned / not yet built

- **Real H₁ / Betti computation** across the pipeline.
- **A computed sheaf Laplacian** (`ker(L_F)`) for L3, replacing the LLM heuristic.
- **Speculative-reject capture** — recording small-model draft/reject events as short
  bars. Today `speculative_rejects` is always empty; nothing emits it.
- **Local-LLM routing** — running L0/L1 on a local model via
  `scripts/start_local_llm.sh`.
- **A live dashboard** — the `docs-site` force graph currently renders demo data, not
  a live `/tmp/dw-artifacts/` feed.
- **A richer distance/feature vector** — today H₀ clusters on
  `[size, staleness, language]`; semantic features would make the clustering
  meaningful. (A structure-recovery experiment to validate this is in design.)
- **Semantic addressing** — the (context, intent, value) coordinate schema (`schemas/semantic_address.json`) exists but nothing emits or consumes it yet.

## The honest one-liner

Real math at **H₀**. Useful, clearly-labeled **metaphor** above it. The product is the
habit (`/driftwave:directive`); the topology is the basement, not the front door.
