from pathlib import Path
from dwbench.config import RepoConfig
from dwbench.analyze import analyze_repo
from gitfixture import make_large_repo

def test_analyze_repo_smoke(tmp_path: Path):
    repo = make_large_repo(tmp_path)
    cfg = RepoConfig(name="demo", url="x", category="mixed", commit_cap=10, file_cap=100)
    res = analyze_repo(repo, cfg, str(tmp_path / "cache"), message_method="tfidf")
    assert res["name"] == "demo"
    assert "combined" in res["methods"] and "ari" in res["methods"]["combined"]
    assert "louvain" in res["methods"] and "ward" in res["methods"]
    assert "vs_controls" in res and "louvain" in res["vs_controls"]
    assert 0.0 <= res["coverage"] <= 1.0
