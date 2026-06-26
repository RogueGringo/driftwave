#!/usr/bin/env python3
"""Regression tests: artifact JSON must be strict-valid and schema-conforming.

Guards the P0 bug where the persistence scripts emitted a bare `Infinity`
token (invalid JSON, rejected by JSON.parse / jq) and omitted the required
`layer` field, so artifacts failed their own schema validation.

Run:  python3 scripts/test_artifact_json.py
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

SCRIPTS = Path(__file__).resolve().parent
ROOT = SCRIPTS.parent
SCHEMAS = ROOT / "schemas"

SAMPLE_RAW = {
    "files": [
        {"path": "a.py", "size_bytes": 1200, "staleness_days": 3, "language": "python"},
        {"path": "b.py", "size_bytes": 1250, "staleness_days": 4, "language": "python"},
        {"path": "c.js", "size_bytes": 8000, "staleness_days": 40, "language": "javascript"},
        {"path": "d.md", "size_bytes": 300, "staleness_days": 1, "language": "markdown"},
    ]
}

SAMPLE_META = {
    "sessions": [
        {"session_id": "s1", "timestamp": "2026-01-01T00:00:00Z",
         "artifacts": {"filtered_topology": {"clusters": [{"label": "A"}],
                       "barcode": [{"birth": 0, "death": 0.4, "dimension": 0}]},
                       "synthesis_map": {"trajectory": [0.3, 0.4]},
                       "sheaved_verdict": {"kernel_dim": 2}}},
        {"session_id": "s2", "timestamp": "2026-01-02T00:00:00Z",
         "artifacts": {"filtered_topology": {"clusters": [{"label": "A"}],
                       "barcode": [{"birth": 0, "death": 0.5, "dimension": 0}]},
                       "synthesis_map": {"trajectory": [0.35, 0.5]},
                       "sheaved_verdict": {"kernel_dim": 3}}},
    ],
    "accumulated_verdicts": [{"verdict": "ON_SHELL"}, {"verdict": "OFF_SHELL"}],
}


def _reject_constant(token: str):
    raise AssertionError(f"non-finite JSON constant emitted (invalid JSON): {token!r}")


def strict_loads(text: str) -> dict:
    """Parse JSON the way a strict consumer (JS JSON.parse / jq) would —
    raising on Infinity / -Infinity / NaN rather than silently accepting them."""
    return json.loads(text, parse_constant=_reject_constant)


def run(script: str, payload: dict) -> str:
    proc = subprocess.run(
        [sys.executable, str(SCRIPTS / script)],
        input=json.dumps(payload), capture_output=True, text=True,
    )
    assert proc.returncode == 0, f"{script} exited {proc.returncode}: {proc.stderr}"
    assert "Infinity" not in proc.stdout and "NaN" not in proc.stdout, \
        f"{script} stdout contains a bare Infinity/NaN token"
    return proc.stdout


def maybe_validate(instance: dict, schema_name: str):
    try:
        import jsonschema
    except ImportError:
        print(f"  (skipped jsonschema validation of {schema_name} — jsonschema not installed)")
        return
    schema = json.loads((SCHEMAS / schema_name).read_text())
    jsonschema.validate(instance=instance, schema=schema)
    print(f"  validated against {schema_name}")


def test_persistence():
    out = strict_loads(run("compute_persistence.py", SAMPLE_RAW))
    assert out.get("layer") == "L1", "filtered_topology missing required layer=L1"
    inf_bars = [b for b in out["barcode"] if b.get("infinite")]
    assert inf_bars, "expected at least one infinite H0 bar"
    for b in inf_bars:
        assert b["death"] is None, "infinite bar must serialize death as null"
    for b in out["barcode"]:
        assert b.get("death") is None or isinstance(b["death"], (int, float))
    maybe_validate(out, "filtered_topology.json")
    print("PASS test_persistence")


def test_meta_persistence():
    out = strict_loads(run("compute_meta_persistence.py", SAMPLE_META))
    assert "meta_barcode" in out
    for b in out["meta_barcode"]:
        if b.get("infinite"):
            assert b["death"] is None and b["bar_length"] is None
    maybe_validate(out, "meta_persistence.json")
    print("PASS test_meta_persistence")


def test_single_file_still_valid():
    out = strict_loads(run("compute_persistence.py", {"files": [{"path": "x.py"}]}))
    assert out.get("layer") == "L1", "n<2 path must still emit layer=L1"
    print("PASS test_single_file_still_valid")


if __name__ == "__main__":
    test_persistence()
    test_meta_persistence()
    test_single_file_still_valid()
    print("\nAll artifact-JSON tests passed.")
