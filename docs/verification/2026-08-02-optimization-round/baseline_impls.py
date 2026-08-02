"""Verbatim snapshots of the pre-optimization implementations (opt-round-1).

These are the exact algorithms shipped at stage commit a539e77, extracted as
standalone functions so the round's equivalence criteria (C6) compare the new
vectorized code against the real originals — not against a re-description of
them. Do not edit: this file is frozen evidence.
"""
import numpy as np


def jaccard_distance_orig(touch, co):
    """m_cochange / temporal.trajectory inner block (bench.py@a539e77)."""
    n = len(touch)
    D = np.ones((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            denom = touch[i] + touch[j] - co[i, j]
            jac = co[i, j] / denom if denom > 0 else 0.0
            D[i, j] = D[j, i] = 1.0 - jac
    np.fill_diagonal(D, 0.0)
    return D


def h0_orig(D):
    """bench.h0 @a539e77."""
    n = D.shape[0]
    edges = sorted((D[i, j], i, j) for i in range(n) for j in range(i + 1, n))
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    deaths = []
    for d, i, j in edges:
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri
            deaths.append(d)
    return deaths


def labels_k_orig(D, k):
    """bench.labels_k @a539e77."""
    n = D.shape[0]
    k = max(1, min(k, n))
    edges = sorted((D[i, j], i, j) for i in range(n) for j in range(i + 1, n))
    parent = list(range(n))
    comps = n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for d, i, j in edges:
        if comps <= k:
            break
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri
            comps -= 1
    return [find(i) for i in range(n)]


def imports_distance_orig(A):
    """m_imports distance block @a539e77 (direct deps 0.1, else cosine)."""
    n = A.shape[0]
    D = np.ones((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            if A[i, j] > 0 or A[j, i] > 0:
                D[i, j] = D[j, i] = 0.1
            else:
                ni, nj = np.linalg.norm(A[i]), np.linalg.norm(A[j])
                if ni > 0 and nj > 0:
                    D[i, j] = D[j, i] = 1.0 - np.dot(A[i], A[j]) / (ni * nj)
    np.fill_diagonal(D, 0.0)
    return D
