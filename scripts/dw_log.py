#!/usr/bin/env python3
"""The directive log as a mechanism, not a shell one-liner (stdlib only).

The 0.2.0 loop's flagship claim — the log is read back, so mistakes don't
repeat — previously depended on the LLM hand-assembling JSON inside a quoted
printf (one apostrophe away from corrupt memory) aimed at a cwd-relative
`.dw/`. This tool owns escaping and location: json.dumps + the canonical
state-dir resolution, so the bytes are always valid JSONL in the one true log.

Usage:
    python3 dw_log.py append <action> <result> <true|false>
    python3 dw_log.py append --json '{"action": "...", ...}'
    python3 dw_log.py tail [n]          # default 20; prints JSONL as-is

Exit codes: 0 ok, 2 usage/environment error. `tail` on a missing log prints
nothing and exits 0 — an empty history is a valid history.
"""
from __future__ import annotations

import json
import sys
import time

from dw_common import ensure_state_dir, state_dir, strict_loads

LOG_NAME = "directive.log"


def cmd_append(args: list[str]) -> int:
    if args[:1] == ["--json"] and len(args) == 2:
        try:
            entry = strict_loads(args[1])
        except ValueError as e:
            print(f"ERROR: --json payload is not strict JSON: {e}", file=sys.stderr)
            return 2
        if not isinstance(entry, dict):
            print("ERROR: --json payload must be an object", file=sys.stderr)
            return 2
    elif len(args) == 3:
        action, result, verified = args
        if verified not in ("true", "false"):
            print("ERROR: verified must be 'true' or 'false'", file=sys.stderr)
            return 2
        entry = {"action": action, "result": result, "verified": verified == "true"}
    else:
        print(__doc__, file=sys.stderr)
        return 2

    entry.setdefault("ts", time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()))
    log = ensure_state_dir() / LOG_NAME
    with log.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, allow_nan=False) + "\n")
    print(f"logged -> {log}")
    return 0


def cmd_tail(args: list[str]) -> int:
    try:
        n = int(args[0]) if args else 20
    except ValueError:
        print("ERROR: n must be an integer", file=sys.stderr)
        return 2
    log = state_dir() / LOG_NAME
    if not log.is_file():
        return 0
    lines = log.read_text(encoding="utf-8").splitlines()
    for line in lines[-n:]:
        print(line)
    return 0


def main(argv: list[str]) -> int:
    if argv[:1] == ["append"]:
        return cmd_append(argv[1:])
    if argv[:1] == ["tail"]:
        return cmd_tail(argv[1:])
    print(__doc__, file=sys.stderr)
    return 2


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except OSError as e:
        print(f"ERROR: {type(e).__name__}: {e}", file=sys.stderr)
        sys.exit(2)
