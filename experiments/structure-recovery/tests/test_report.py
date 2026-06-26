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

def test_write_report_truncation_visible(tmp_path):
    from dwbench.report import write_report, aggregate
    rows = [{"name": "big", "n_files": 1500, "label_count": 5,
             "permutation_p95": 0.1,
             "truncation": {"n_files_total": 9000, "n_files_kept": 1500, "file_cap_hit": True},
             "methods": {"combined": {"ari": 0.6}, "louvain": {"ari": 0.4},
                         "ward": {"ari": 0.5}, "path_prefix": {"ari": 0.9}},
             "vs_controls": {"louvain": {"delta": 0.2}, "ward": {"delta": 0.1}}}]
    write_report(rows, aggregate(rows), str(tmp_path))
    md = (tmp_path / "report.md").read_text(encoding="utf-8")
    assert "Truncations" in md and "9000" in md
    assert "<!--" not in md            # not hidden in an HTML comment
