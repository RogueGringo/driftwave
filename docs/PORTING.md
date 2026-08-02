# Porting the Driftwave Harness to Any Agentic AI System

Driftwave separates cleanly into a **host-neutral kit** (files + CLIs any
system can carry) and a **host binding** (how one particular agent platform
drives it). Claude Code is the reference binding; nothing in the kit knows or
cares which model, framework, or orchestrator is calling it. Porting is
writing a new binding — the kit ships as-is, and conformance is
machine-checkable, not vibes.

## The host-neutral kit (copy these, change nothing)

| Piece | Files | Runtime needs |
|---|---|---|
| The pin (locked invariants) | `driftwave.pin.json` | — |
| Artifact schemas | `schemas/*.json` | — |
| Standing rules + FALSIFIED ledger | `rules/standing_rules.json` | — |
| Validator (schema + pin enforcement) | `scripts/dw_validate.py`, `scripts/dw_common.py` | python3 stdlib (`jsonschema` optional) |
| Verdict engine (freeze / eval / parse) | `scripts/dw_verdict.py` | python3 stdlib |
| Log mechanism (append / tail) | `scripts/dw_log.py` | python3 stdlib |
| Computed audit (`AUDIT:` verdict with exit code) | `scripts/dw_audit.py` | python3 stdlib |
| Persistence + decoy control | `scripts/compute_persistence.py`, `compute_meta_persistence.py` | python3 + numpy |
| The conformance instrument | `scripts/dw_selftest.py` | python3 (+ numpy for G1–G5/G7/G8) |

Everything is invoked as a CLI over stdin/stdout/files with documented exit
codes — no SDK, no network, no host API. State location is resolved by ONE
mechanism: `python3 scripts/dw_common.py state-dir` (env `DW_STATE_DIR` >
`$CLAUDE_PROJECT_DIR/.dw` > git toplevel `/.dw` > `./.dw`; a host that wants
its own location just sets `DW_STATE_DIR`). The tools self-gitignore the state
dir so harness state never pollutes a user repo.

## What a host must provide

A conforming binding supplies exactly four capabilities:

1. **A way to run the CLIs** — shell access or process spawning. That's the
   entire integration surface for the verification spine.
2. **A loop driver** — something that walks the phases
   `LOOK → PARSE → GAP → [FREEZE] → DO → LOG → CHECK` (the protocol table is
   in [HARNESS.md](HARNESS.md)). In Claude Code this is `commands/directive.md`
   prose driving subagents; in another system it can be a graph, a state
   machine, or a plain script. The phases' *enforced* steps are all CLI calls:
   freeze (`dw_verdict.py freeze`), log (`dw_log.py append`), check
   (`dw_verdict.py eval`), validate (`dw_validate.py --schema <layer>`).
3. **Workers for the heuristic tiers** — whatever plays dw-ingest /
   dw-cluster / dw-synthesize / dw-review (`agents/*.md` are host-agnostic
   role descriptions; any LLM endpoint works). Their outputs MUST pass
   `dw_validate.py` before the next stage consumes them — the validator, not
   the host, is what keeps a weak or misaligned worker from corrupting the
   run (L2/L3 artifacts are forced to heuristic tier + `not_acceptance` by
   the pinned `layer_tiers`, regardless of what the worker claims).
4. **Optionally, a session-start health check** — the reference binding runs
   `topo.sh scan && topo.sh validate`; a port can call the same script or skip
   it (it is reporting, not enforcement).

## Conformance is computed, not claimed

A port is conforming when, in its environment:

```bash
python3 scripts/dw_selftest.py            # exit 0, G1–G8 all PASS
python3 scripts/test_artifact_json.py     # all regression tests pass
python3 scripts/dw_validate.py --all <state>/artifacts   # exit 0 on its own runs
```

That is the whole certification: planted ground truth recovered, the verdict
spine refusing tampering, every artifact the port produced passing schema +
pin. If those pass, the port inherits the harness's guarantees; if they
don't, no amount of integration polish makes it a port. (This is the same
fail-closed stance as everything else here: a skipped selftest is exit 2,
not a pass.)

## What does NOT port

- The Claude Code surface (`commands/`, `skills/`, `hooks/`) — that's the
  reference binding; rewrite it in your host's idiom.
- The docs-site dashboard (demo data today; roadmap regardless of host).
- The `coherence/` research module — it currently runs beside the spine, not
  inside it (its own README says so); treat it as an analysis appliance, not
  part of the kit.

## The one-paragraph theory of why this ports

Every load-bearing guarantee was deliberately pushed out of prompts and into
artifacts and CLIs: frozen criteria are a hash, verdicts are computed
comparisons, honesty labels are schema-enforced stamps, vocabulary is a
pinned file, memory is JSONL written and read by a tool. Prompts (the
binding) can be rewritten for any host precisely because nothing true depends
on them — the mechanism layer is the product, and it's plain files and exit
codes.
