from dwbench.labels import assign_labels, label_coverage, passes_min_size

def test_top_level_dir_labels():
    paths = ["src/auth/a.py", "src/auth/b.py", "lib/x.py", "README.md"]
    labels = assign_labels(paths, "top_level_dir")
    assert labels == ["src", "src", "lib", None]   # root file unlabeled

def test_deepest_pkg_labels():
    paths = ["src/auth/a.py", "src/render/b.py"]
    assert assign_labels(paths, "deepest_pkg") == ["src/auth", "src/render"]

def test_coverage_and_min_size():
    labels = ["src", "src", None]
    assert abs(label_coverage(labels) - 2/3) < 1e-9
    assert passes_min_size(["a"] * 30 + [None], min_files=30, min_labels=1)
    assert not passes_min_size(["a", "a"], min_files=30)        # too few files
    assert not passes_min_size(["a"] * 40, min_labels=2)        # only 1 label
