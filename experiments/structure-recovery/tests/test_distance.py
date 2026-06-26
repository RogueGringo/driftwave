import numpy as np
from dwbench.distance import cochange_distance, normalize, fuse

def test_cochange_distance_jaccard():
    # a,b co-occur fully; c isolated
    cc = np.array([[2, 2, 0], [2, 2, 0], [0, 0, 1]], dtype=float)
    D = cochange_distance(cc)
    assert abs(D[0, 1] - 0.0) < 1e-9     # identical co-change -> distance 0
    assert abs(D[0, 2] - 1.0) < 1e-9     # never co-occur -> distance 1
    assert np.allclose(np.diag(D), 0)

def test_normalize_range_and_symmetry():
    D = np.array([[0, 1, 9], [1, 0, 4], [9, 4, 0]], dtype=float)
    Z = normalize(D)
    off = Z[np.triu_indices(3, 1)]
    assert off.min() >= 0 and off.max() <= 1
    assert np.allclose(Z, Z.T) and np.allclose(np.diag(Z), 0)

def test_fuse_equal_weights():
    A = np.array([[0, 0.2], [0.2, 0]]); B = np.array([[0, 0.6], [0.6, 0]])
    F = fuse({"a": A, "b": B}, None)
    assert abs(F[0, 1] - 0.4) < 1e-9
