# tests/test_report.py
from dwbench.report import aggregate

def _row(name, combined, louvain, ward):
    return {"name": name,
            "methods": {"combined": {"ari": combined},
                        "louvain": {"ari": louvain}, "ward": {"ari": ward}},
            "vs_controls": {"louvain": {"delta": combined - louvain},
                            "ward": {"delta": combined - ward}}}

def test_aggregate_beats_controls():
    rows = [_row(f"r{i}", 0.8, 0.5, 0.6) for i in range(6)]
    agg = aggregate(rows)
    assert agg["beats_louvain"] == 6
    assert agg["sign_p_louvain"] < 0.05
    assert agg["verdict"] == "beats-controls"

def test_aggregate_ties():
    rows = [_row(f"r{i}", 0.5, 0.5, 0.5) for i in range(6)]
    assert aggregate(rows)["verdict"] in ("ties-controls", "fails")
