#!/usr/bin/env python3
"""Shared helpers for the driftwave harness scripts (stdlib only).

The core loop must stay dependency-free: everything here is importable on a
bare Python 3.8+ with no third-party packages. numpy is only touched by the
persistence scripts, never by this module.
"""
from __future__ import annotations

import hashlib
import json
import os
import subprocess
from pathlib import Path

PLUGIN_ROOT = Path(__file__).resolve().parent.parent
PLUGIN_VERSION = "0.2.0"

# Serialized artifacts must be strict JSON: a bare Infinity/NaN token is
# rejected by JS JSON.parse and jq, which breaks every downstream consumer
# (the original P0 bug this suite still guards).


def _reject_constant(token: str):
    raise ValueError(f"non-finite JSON constant (invalid strict JSON): {token!r}")


def strict_loads(text: str):
    return json.loads(text, parse_constant=_reject_constant)


def strict_load_path(path: Path):
    return strict_loads(Path(path).read_text(encoding="utf-8"))


def canonical_dumps(obj) -> str:
    """Deterministic serialization — the basis for freeze hashes."""
    return json.dumps(obj, sort_keys=True, separators=(",", ":"), allow_nan=False)


def sha256_of(obj) -> str:
    return hashlib.sha256(canonical_dumps(obj).encode("utf-8")).hexdigest()


def state_dir() -> Path:
    """Per-project persistent state. /tmp is wiped on reboot and shared across
    projects — both break the memory story — so state lives in the project:
    DW_STATE_DIR env override > $CLAUDE_PROJECT_DIR/.dw > <git toplevel>/.dw >
    ./.dw."""
    env = os.environ.get("DW_STATE_DIR")
    if env:
        return Path(env)
    proj = os.environ.get("CLAUDE_PROJECT_DIR")
    if proj:
        return Path(proj) / ".dw"
    try:
        top = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            capture_output=True, text=True, timeout=10,
        )
        if top.returncode == 0 and top.stdout.strip():
            return Path(top.stdout.strip()) / ".dw"
    except (OSError, subprocess.TimeoutExpired):
        pass
    return Path.cwd() / ".dw"


def load_pin() -> dict:
    """The pin is the locked invariant registry. Fail closed: a harness whose
    invariants cannot be found must not certify anything."""
    pin_path = PLUGIN_ROOT / "driftwave.pin.json"
    if not pin_path.is_file():
        raise FileNotFoundError(
            f"driftwave.pin.json not found at {pin_path} — refusing to proceed "
            "(the pin defines the vocabularies this harness is allowed to use)"
        )
    return strict_load_path(pin_path)


def provenance(producer: str, tier: str, inputs=None, params=None, omitted=None) -> dict:
    block = {
        "producer": producer,
        "plugin_version": PLUGIN_VERSION,
        "tier": tier,
    }
    if inputs:
        block["inputs"] = inputs
    if params:
        block["params"] = params
    if omitted:
        block["omitted"] = omitted
    return block


def iter_claim_fields(obj, claim_fields, path=""):
    """Yield (json_path, text) for every claim-bearing string field.

    The prohibited-lexicon check applies only to fields that carry the
    artifact's own assertions (labels, reasons, findings) — not to quoted
    source content or file paths, which may legitimately contain any word.
    """
    if isinstance(obj, dict):
        for k, v in obj.items():
            sub = f"{path}.{k}" if path else k
            if k in claim_fields and isinstance(v, str):
                yield sub, v
            else:
                yield from iter_claim_fields(v, claim_fields, sub)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from iter_claim_fields(v, claim_fields, f"{path}[{i}]")
