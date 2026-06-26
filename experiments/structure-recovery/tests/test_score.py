# tests/test_score.py
import numpy as np
from dwbench.score import recovery, permutation_p95, paired_sign_test

def test_recovery_perfect():
    pred = np.array([0, 0, 1, 1])
    true = ["x", "x", "y", "y"]
    m = recovery(pred, true)
    assert abs(m["ari"] - 1.0) < 1e-9 and abs(m["nmi"] - 1.0) < 1e-9

def test_recovery_ignores_unlabeled():
    pred = np.array([0, 0, 1, 9])
    true = ["x", "x", "y", None]            # last file excluded
    assert abs(recovery(pred, true)["ari"] - 1.0) < 1e-9

def test_permutation_floor_below_perfect():
    # 9 items / 3 balanced classes: only ~0.36% of permutations are perfect,
    # so the 95th-pct null ARI is well below 1.0 (brief's 4-item 2-class
    # example has 33% perfect permutations — a defect in the brief fixed here).
    pred = np.array([0, 0, 0, 1, 1, 1, 2, 2, 2])
    true = ["x", "x", "x", "y", "y", "y", "z", "z", "z"]
    assert permutation_p95(pred, true, n=200, seed=0) < 1.0

def test_sign_test_all_positive_is_significant():
    assert paired_sign_test([0.1, 0.2, 0.05, 0.3, 0.15]) < 0.05
