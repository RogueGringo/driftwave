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


def test_per_cluster_bar_length():
    """Issue #15: each cluster's bar_length must be its own persistence
    (single-linkage boundary distance), not the global-max lifetime."""
    import numpy as np
    sys.path.insert(0, str(SCRIPTS))
    import compute_persistence as cp

    # Three tight pairs: A={0,1}, B={2,3}, C={4,5}; intra = 0.1.
    # Inter-cluster: A-B = 0.5, A-C = 0.9, B-C = 0.6.
    group = {0: "A", 1: "A", 2: "B", 3: "B", 4: "C", 5: "C"}
    inter = {("A", "B"): 0.5, ("A", "C"): 0.9, ("B", "C"): 0.6}
    n = 6
    D = np.zeros((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            d = 0.1 if group[i] == group[j] else inter[tuple(sorted((group[i], group[j])))]
            D[i, j] = D[j, i] = d
    # Finite lifetimes drive eps_cut = median = 0.1 → only intra-pairs merge.
    barcodes = [{"birth": 0.0, "death": x, "dimension": 0} for x in (0.1, 0.1, 0.1, 0.5, 0.6)]
    barcodes.append({"birth": 0.0, "death": None, "dimension": 0, "infinite": True})
    files = [{"path": f"f{i}"} for i in range(n)]

    clusters, noise = cp.identify_clusters(D, barcodes, files)
    assert not noise, f"unexpected noise: {noise}"
    by_group = {group[int(c["members"][0][1:])]: c["bar_length"] for c in clusters}
    # Expected per-cluster persistence = nearest distance to any outside member.
    assert abs(by_group["A"] - 0.5) < 1e-9, by_group
    assert abs(by_group["B"] - 0.5) < 1e-9, by_group
    assert abs(by_group["C"] - 0.6) < 1e-9, by_group
    # The bug assigned all clusters one global value — guard against regression.
    assert len({round(v, 9) for v in by_group.values()}) > 1, \
        "clusters must not all share a single global bar_length"
    print("PASS test_per_cluster_bar_length")


def test_gini_slope_divisor():
    """Bug #17: gini_slope divided by len(trajectory) instead of len-1.

    A 3-point trajectory [0.0, 0.5, 1.0] spans 2 intervals, so the slope
    should be (1.0 - 0.0) / 2 = 0.5, not 1.0 / 3 ≈ 0.333.
    We test this by importing session_feature_vector directly and checking
    the gini_slope element (index 2) of the returned feature vector.
    """
    sys.path.insert(0, str(SCRIPTS))
    import compute_meta_persistence as cmp
    import numpy as np

    session = {
        "artifacts": {
            "filtered_topology": {"clusters": [], "barcode": []},
            "synthesis_map": {"trajectory": [0.0, 0.5, 1.0]},
            "sheaved_verdict": {"kernel_dim": 0},
        },
        "routing_trace": [],
        "speculative_rejects": [],
    }
    vec = cmp.session_feature_vector(session)
    gini_slope = vec[2]
    assert abs(gini_slope - 0.5) < 1e-9, (
        f"gini_slope wrong: expected 0.5 (range/2 intervals), got {gini_slope}. "
        "Divisor must be len(trajectory)-1, not len(trajectory)."
    )
    print("PASS test_gini_slope_divisor")


if __name__ == "__main__":
    test_persistence()
    test_meta_persistence()
    test_single_file_still_valid()
    test_per_cluster_bar_length()
    test_gini_slope_divisor()
    print("\nAll artifact-JSON tests passed.")
