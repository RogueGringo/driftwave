# The Driftwave Harness — Dimensional Map

This is the engineering map of driftwave 0.2.0 as an agentic harness: every
dimension of the loop, what enforces it, and at which honesty tier. The front
door stays two commands (`/driftwave:directive`, `/driftwave:status`);
everything below is what those commands stand on.

The design is distilled from a set of sibling research programs (statistical
instruments, drilling-data governors, signal engines, quant experiments) that
independently converged on the same process patterns. Convergent patterns
across independent projects are the persistent bars of a working method —
that's the plugin's own meta-persistence idea, applied to its own upbringing.

## The three dimensions

Every operation in the harness has a coordinate on three axes:

1. **Phase** — where in the loop it happens
   (`LOOK → PARSE → GAP → [FREEZE] → DO → LOG → CHECK`)
2. **Enforcement** — what makes it true
   (schema · pin · computed script · test · instructed judgment)
3. **Tier** — its honesty class, stamped in-band
   (`real` = computed by code · `heuristic` = LLM judgment, force-stamped
   `not_acceptance` · `planned` = documented as unbuilt)

An operation missing a coordinate is undimensioned work — exactly the drift
the harness exists to prevent.

## Phase × enforcement

| Phase | What happens | Enforced by | Tier |
|---|---|---|---|
| LOOK | Scan state; **read the directive log back**; check FALSIFIED ledger | directive.md subagent A; JSONL log | heuristic (reads real records) |
| PARSE | Intent, scope, success criteria, **baseline** | directive.md subagent B | heuristic |
| GAP | Smallest action set, ordered | directive.md subagent C | heuristic |
| FREEZE | Criteria frozen before work (gaps >3 actions / evaluative runs) | `dw_verdict.py freeze` — sha256 over canonical JSON; re-freeze refused | **real** |
| DO | Execute; disclose deviations at the point of deviation | `deviations[]` schema slot; review rejects silence | heuristic |
| LOG | One structured JSONL line per action; append-only | directive.md step 3 | real (a record, not a claim) |
| CHECK | Mechanical verdict against frozen criteria | `dw_verdict.py eval` — computed `GATE:/CRITERION:/VERDICT:` grammar; refuses on hash mismatch | **real** |

## The invariant layer (the pin)

`driftwave.pin.json` is the locked registry no agent, command, or artifact may
retune: honesty tiers, verdict/routing vocabularies, the closed flag
vocabulary (the ONLY significance channel), the prohibited overclaim lexicon,
gate thresholds, and the state-dir rule. `scripts/dw_validate.py` enforces the
pin on every artifact — an off-vocabulary flag or a "proves" in a claim field
is a validation failure, not a style note. Changing the pin is a human git
commit, never a runtime act.

## The verdict algebra

Only `dw_verdict.py eval` mints computed verdicts. The vocabulary is closed:

- `PASS` — every computable positive criterion passed
- `FAIL` — a positive criterion failed and the prereg did not declare NULL valid
- `NULL` — positive criteria failed; the prereg pre-committed that a negative
  is a recorded, permanent outcome (retry ⇒ NEW prereg, never an edit)
- `CERTIFIED_NULL` — NULL **plus** passed null-evidence (a decoy comparison, a
  permutation null, a power statement). The strongest honest negative.
- `NO_VERDICT` — an instrument gate failed, criteria were tampered with, or
  nothing was computable. Fail-closed: unknown never certifies.

Gates and findings are disjoint by construction: **gates** check the
instrument (parse integrity, fixture recovery, aliveness) and can invalidate
the run; **findings** are the results and are reported as found — a null
finding ships with a green build.

## Domain adapters (how "any domain" is real, not rhetoric)

The pipeline's math consumes numbers, not code. Any domain enters through one
contract at L0 — emit a RawCloud where each item carries:

- `features`: numeric channels on one **fixed frame** (every item the same
  length; names in `feature_names`) — the same move that let a sibling signal
  engine drive identical downstream scenes from audio, machine vibration, and
  IMU data; or
- a precomputed `distances` matrix (the decoy null check is then omitted, and
  the artifact says so in `provenance.omitted` — an honest schema slot, never
  silence).

Everything downstream — persistence, decoy control, synthesis, review, verdict
— is unchanged. A new domain is a new adapter, not a new pipeline. The planned
cross-domain rotation protocol (same pinned config run over N corpora,
generalization measured by certification fraction, never by averaging
suggestive scores) is roadmap, and labeled so in ROADMAP.md.

## The memory layer

- `.dw/directive.log` — append-only JSONL, **read back by LOOK each cycle**
  (before 0.2.0 it was write-only, and stored in `/tmp`, which reboots erased)
- `.dw/prereg/` — frozen criteria with their hashes
- `.dw/artifacts/` — the typed pipeline artifacts
- `.dw/meta.json` — cross-session accumulation for `/driftwave:meta`
- `rules/standing_rules.json` (plugin) — append-only failure-mode memory:
  ten standing rules and a FALSIFIED ledger, each entry earned by a real
  methodology catch, checked by the L3 review against every new finding

## The instrument

`/driftwave:selftest` (`scripts/dw_selftest.py`) is the proof-of-function:
planted fixtures with known ground truth through the whole pipeline, G1–G8
acceptance checks, non-zero exit on failure. "The commands ran" is not
verification; the selftest is. Notably, building it caught a real property of
the clustering (jittered tight groups fragment under the median-lifetime cut —
most merge distances are intra-group, so the median lands inside the intra
distribution) which is now recorded as FALSIFIED entry F3 and tested honestly:
exact recovery is asserted on an exact planted distance matrix.

## Known limits (v0.2.0)

- L2/L3 remain LLM judgment in topological vocabulary — labeled heuristic,
  stamped `not_acceptance`, and never a computed verdict. Real H₁/sheaf
  computation is roadmap.
- The default L1 feature basis (`size/staleness/language`) is descriptive
  only: dw-bench showed it does not beat standard community detection
  (FALSIFIED F1, carried in-band as the artifact's `caveat`). Richer adapter
  features may change this; only a new benchmark run can say so.
- The decoy null check is a negative control, not a significance test —
  necessary, not sufficient, and it says so in its own `note` field.
- Local-LLM offload, the live dashboard feed, semantic addressing, and
  speculative-reject capture are planned, not wired (ROADMAP.md).
- The dashboard renders demo data today.

The honest one-liner is unchanged: real, computed machinery where it says
real; clearly-labeled judgment above it; and now the labels are enforced by
tools instead of promised by prose.
