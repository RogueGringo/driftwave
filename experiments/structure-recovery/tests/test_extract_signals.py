import numpy as np
from dwbench.extract import Commit, FileChange, build_signals

def _c(sha, author, msg, files):
    return Commit(sha, 0, author, msg, [FileChange(p, 1, 0) for p in files])

def test_build_signals_cochange_and_churn():
    commits = [
        _c("1", "Alice <a>", "auth", ["src/a.py", "src/b.py"]),
        _c("2", "Bob <b>",   "auth", ["src/a.py", "src/b.py"]),
        _c("3", "Alice <a>", "lib",  ["lib/c.py"]),
    ]
    data, trunc = build_signals(commits, path_filters=[], file_cap=100)
    idx = {p: i for i, p in enumerate(data.paths)}
    a, b, c = idx["src/a.py"], idx["src/b.py"], idx["lib/c.py"]
    assert data.cochange[a, b] == 2          # a,b co-occur twice
    assert data.cochange[a, c] == 0          # never together
    assert data.cochange[a, a] == 2          # a touched by 2 commits
    assert data.authorship.shape == (3, 2)   # 2 distinct authors
    assert trunc["file_cap_hit"] is False
    assert "auth" in data.messages[a]        # a's message corpus

def test_path_filters_and_cap():
    commits = [_c("1", "A <a>", "m", ["node_modules/x.js", "src/a.py"])]
    data, _ = build_signals(commits, path_filters=["node_modules/"], file_cap=100)
    assert data.paths == ["src/a.py"]
