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


def test_provenance_and_null_check():
    """0.2.0: L1 artifacts carry a provenance block, the dw-bench caveat, a
    pinned-vocabulary flags list, and a seeded decoy null_check."""
    out = strict_loads(run("compute_persistence.py", SAMPLE_RAW))
    prov = out.get("provenance")
    assert prov and prov["producer"] == "compute_persistence.py", "missing provenance"
    assert prov["tier"] == "real", "H0 computation is real tier"
    assert "caveat" in out and "dw-bench" in out["caveat"], "dw-bench caveat must ride in-band"
    nc = out.get("null_check")
    assert nc and isinstance(nc.get("beats_decoy"), bool) and "seed" in nc, "null_check malformed"
    pin = json.loads((ROOT / "driftwave.pin.json").read_text(encoding="utf-8"))
    assert set(out.get("flags", [])) <= set(pin["flag_vocabulary"]), \
        f"flags outside pinned vocabulary: {out.get('flags')}"
    maybe_validate(out, "filtered_topology.json")
    print("PASS test_provenance_and_null_check")


def test_features_channel_adapter():
    """0.2.0 domain-adapter contract: per-file `features` arrays replace the
    default basis; mixed lengths are rejected with REPROBE, not a crash."""
    good = {"files": [
        {"path": "a", "features": [0.0, 1.0]}, {"path": "b", "features": [0.1, 1.0]},
        {"path": "c", "features": [5.0, -1.0]}, {"path": "d", "features": [5.1, -1.0]},
    ]}
    out = strict_loads(run("compute_persistence.py", good))
    assert out["provenance"]["feature_basis"] == ["channel_0", "channel_1"], \
        "adapter channels must be the recorded basis"
    mixed = {"files": [{"path": "a", "features": [1.0]}, {"path": "b", "features": [1.0, 2.0]}]}
    out2 = strict_loads(run("compute_persistence.py", mixed))
    assert out2["routing"] == "REPROBE" and "mixed lengths" in out2["routing_reason"]
    print("PASS test_features_channel_adapter")


def test_validator_rejects_pin_violations():
    """dw_validate must reject off-vocabulary flags/routing and prohibited
    lexicon in claim fields — the pin is enforced, not advisory."""
    bad = strict_loads(run("compute_persistence.py", SAMPLE_RAW))
    bad["flags"] = ["novel_flag"]
    bad["routing_reason"] = "this proves the design is sound"
    proc = subprocess.run(
        [sys.executable, str(SCRIPTS / "dw_validate.py"), "-"],
        input=json.dumps(bad), capture_output=True, text=True)
    assert proc.returncode == 1, "pin violations must fail validation"
    assert "flag vocabulary" in proc.stdout and "prohibited lexicon" in proc.stdout, proc.stdout
    ok = strict_loads(run("compute_persistence.py", SAMPLE_RAW))
    proc2 = subprocess.run(
        [sys.executable, str(SCRIPTS / "dw_validate.py"), "-", "--strict"],
        input=json.dumps(ok), capture_output=True, text=True)
    assert proc2.returncode == 0, f"clean artifact must pass strict validation: {proc2.stdout}"
    print("PASS test_validator_rejects_pin_violations")


def test_verdict_freeze_and_tamper():
    """The verdict spine: freeze stamps a hash, eval computes the grammar,
    edited criteria refuse to score, re-freeze is refused."""
    import tempfile
    tmp = Path(tempfile.mkdtemp(prefix="dw-test-"))
    p = tmp / "prereg.json"
    p.write_text(json.dumps({
        "prereg_id": "t1", "question": "toy", "null_is_valid": True,
        "criteria": [{"id": "C1", "kind": "positive",
                      "predicate": {"field": "m", "op": ">=", "value": 1}}]}),
        encoding="utf-8")
    r = tmp / "results.json"
    r.write_text(json.dumps({"m": 2}), encoding="utf-8")

    def verdict(*args):
        return subprocess.run([sys.executable, str(SCRIPTS / "dw_verdict.py"), *args],
                              capture_output=True, text=True)

    assert verdict("freeze", str(p)).returncode == 0
    assert verdict("freeze", str(p)).returncode != 0, "re-freeze must be refused"
    ev = verdict("eval", str(p), str(r))
    assert ev.returncode == 0 and "VERDICT: PASS" in ev.stdout, ev.stdout
    doc = json.loads(p.read_text(encoding="utf-8"))
    doc["criteria"][0]["predicate"]["value"] = 99
    p.write_text(json.dumps(doc), encoding="utf-8")
    tam = verdict("eval", str(p), str(r))
    assert tam.returncode != 0 and "NO_VERDICT" in tam.stdout, \
        "tampered criteria must refuse to score"
    print("PASS test_verdict_freeze_and_tamper")


if __name__ == "__main__":
    test_persistence()
    test_meta_persistence()
    test_single_file_still_valid()
    test_per_cluster_bar_length()
    test_gini_slope_divisor()
    test_provenance_and_null_check()
    test_features_channel_adapter()
    test_validator_rejects_pin_violations()
    test_verdict_freeze_and_tamper()
    print("\nAll artifact-JSON tests passed.")
