# dwbench/score.py
from __future__ import annotations
import numpy as np
from scipy.stats import binomtest
from sklearn.metrics import (adjusted_rand_score, normalized_mutual_info_score,
                             homogeneity_score, completeness_score)

def _labeled(pred, true):
    assert len(pred) == len(true), "pred and true must be the same length"
    p, t = [], []
    for pi, ti in zip(pred, true):
        if ti is not None:
            p.append(int(pi)); t.append(ti)
    return np.array(p), np.array(t)

def recovery(pred, true) -> dict:
    p, t = _labeled(pred, true)
    return {"ari": float(adjusted_rand_score(t, p)),
            "nmi": float(normalized_mutual_info_score(t, p)),
            "homogeneity": float(homogeneity_score(t, p)),
            "completeness": float(completeness_score(t, p))}

def permutation_p95(pred, true, n: int = 200, seed: int = 0) -> float:
    p, t = _labeled(pred, true)
    rng = np.random.default_rng(seed)
    scores = []
    for _ in range(n):
        scores.append(adjusted_rand_score(rng.permutation(t), p))
    return float(np.percentile(scores, 95))

def paired_sign_test(deltas: list[float]) -> float:
    wins = sum(1 for d in deltas if d > 0)
    nz = sum(1 for d in deltas if d != 0)
    if nz == 0:
        return 1.0
    return float(binomtest(wins, nz, 0.5, alternative="greater").pvalue)

def bootstrap_delta_ci(pred_a, pred_b, true, n: int = 500, seed: int = 0) -> tuple[float, float]:
    pa, t = _labeled(pred_a, true)
    pb = _labeled(pred_b, true)[0]
    rng = np.random.default_rng(seed)
    m = len(t)
    deltas = []
    for _ in range(n):
        idx = rng.integers(0, m, m)
        deltas.append(adjusted_rand_score(t[idx], pa[idx]) -
                      adjusted_rand_score(t[idx], pb[idx]))
    return (float(np.percentile(deltas, 2.5)), float(np.percentile(deltas, 97.5)))
