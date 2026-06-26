from dwbench.split import assign_split

def test_all_test_default():
    s = assign_split(["a", "b", "c"], "all_test")
    assert set(s.values()) == {"test"}

def test_holdout_is_deterministic_and_mixed():
    names = [f"r{i}" for i in range(20)]
    s1 = assign_split(names, "holdout", seed=0)
    s2 = assign_split(names, "holdout", seed=0)
    assert s1 == s2                                   # deterministic
    assert {"train", "test"} <= set(s1.values())      # both present
