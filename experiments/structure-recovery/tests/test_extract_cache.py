# tests/test_extract_cache.py
from pathlib import Path
import numpy as np
from dwbench.extract import extract
from gitfixture import make_repo

def test_extract_caches(tmp_path: Path):
    repo = make_repo(tmp_path)
    cache = tmp_path / "cache"
    d1, t1 = extract(repo, str(cache), commit_cap=10, file_cap=100, path_filters=[])
    assert (cache).exists() and any(cache.iterdir())
    # second call returns equal data from cache (no git needed)
    d2, t2 = extract(repo, str(cache), commit_cap=10, file_cap=100, path_filters=[])
    assert t2["cached"] is True
    assert d2.paths == d1.paths
    assert np.array_equal(d2.cochange, d1.cochange)
    assert d2.messages == d1.messages
