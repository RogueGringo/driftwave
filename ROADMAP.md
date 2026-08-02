# Driftwave Roadmap

What's real today vs. what's planned. Driftwave aims to be honest about the line
between the two: the math is real where it says **H₀**, and clearly labeled as
heuristic or planned everywhere else.

## ✅ Shipped today

- **`/driftwave:directive`** — the look-before-you-act loop (LOOK → PARSE → GAP →
  DO → LOG → CHECK). Dependency-free; this is the core of the plugin. The LOG is
  structured JSONL and the LOOK step reads it back (0.2).
- **The verification spine (0.2)** — pre-registration with sha256 freezing and
  mechanical verdict evaluation (`scripts/dw_verdict.py`: PASS/FAIL/NULL/
  CERTIFIED_NULL/NO_VERDICT, fail-closed); a locked invariant pin
  (`driftwave.pin.json`) with a closed flag vocabulary and a prohibited
  overclaim lexicon; a real artifact validator (`scripts/dw_validate.py`)
  enforcing schema + pin on every artifact.
- **The selftest instrument (0.2)** — `/driftwave:selftest` runs the whole
  pipeline headless on planted fixtures with known ground truth (G1–G8) and
  exits non-zero on failure. `/driftwave:audit` re-verifies runs from artifacts
  alone.
- **H₀ persistent-homology clustering** — `scripts/compute_persistence.py` computes
  real H₀ persistence (Union-Find) over an artifact distance matrix; now with a
  provenance stamp, an in-band dw-bench caveat, and a seeded decoy null check
  (informational negative control).
- **Domain adapters (0.2)** — any domain feeds the same pipeline via per-item
  `features` channels on a fixed frame, or a precomputed distance matrix.
- **Per-project persistent state (0.2)** — everything lives in `.dw/`
  (`/tmp` is gone: it was wiped on reboot, which silently broke the memory story).
- **Standing rules + falsified ledger (0.2)** — `rules/standing_rules.json`,
  checked by the L3 review against every new finding.
- **The `/driftwave:*` command stack** and skills (map / filter / ascend / wavefront
  / …) as natural-language pipeline guidance.
- **Meta-persistence across sessions** — `scripts/compute_meta_persistence.py`.
- **JSON-Schema'd artifacts** for each pipeline layer, plus `preregistration.json`.

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
  a live `.dw/artifacts/` feed.
- **A richer default distance/feature vector** — the default basis is still
  `[size, staleness, language]`, and dw-bench showed it doesn't beat standard
  community detection (the artifact now carries that caveat in-band). Domain
  adapters can supply better channels today; porting dw-bench's co-change/churn
  signals as the default is the planned fix.
- **Cross-domain rotation protocol** — a frozen manifest running the same pinned
  pipeline over N corpora, generalization measured by certification fraction
  (never by averaging suggestive scores). The design is in docs/HARNESS.md;
  nothing executes it yet.
- **Semantic addressing** — the (context, intent, value) coordinate schema (`schemas/semantic_address.json`) exists but nothing emits or consumes it yet.

## The honest one-liner

Real math at **H₀**, and since 0.2 a real verification spine around the whole
loop (frozen criteria, computed verdicts, enforced vocabularies). Useful,
clearly-labeled **metaphor** above it. The product is the habit
(`/driftwave:directive`); the topology is the basement, not the front door.
