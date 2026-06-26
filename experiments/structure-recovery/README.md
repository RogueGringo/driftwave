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
