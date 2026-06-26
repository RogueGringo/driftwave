from pathlib import Path
from dwbench.config import load_repos, RepoConfig

def test_load_repos_parses_yaml(tmp_path: Path):
    y = tmp_path / "repos.yaml"
    y.write_text(
        "repos:\n"
        "  - name: demo\n"
        "    url: https://github.com/x/demo\n"
        "    category: mixed\n"
        "    commit_cap: 50\n"
    )
    repos = load_repos(str(y))
    assert len(repos) == 1
    r = repos[0]
    assert isinstance(r, RepoConfig)
    assert r.name == "demo" and r.category == "mixed"
    assert r.commit_cap == 50
    assert r.file_cap == 1500          # default applied
    assert r.label_strategy == "top_level_dir"
