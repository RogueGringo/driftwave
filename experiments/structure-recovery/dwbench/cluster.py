from __future__ import annotations
import numpy as np
from scipy.cluster.hierarchy import linkage, fcluster
from scipy.spatial.distance import squareform

def _condensed(D: np.ndarray) -> np.ndarray:
    return squareform(D, checks=False)

def single_linkage_labels(D: np.ndarray, k: int) -> np.ndarray:
    Z = linkage(_condensed(D), method="single")
    return fcluster(Z, t=k, criterion="maxclust")

def median_cut_labels(D: np.ndarray) -> np.ndarray:
    Z = linkage(_condensed(D), method="single")
    heights = Z[:, 2]
    thr = float(np.median(heights))
    return fcluster(Z, t=thr, criterion="distance")

def ward_labels(D: np.ndarray, k: int) -> np.ndarray:
    Z = linkage(_condensed(D), method="ward")
    return fcluster(Z, t=k, criterion="maxclust")

def louvain_labels(cochange: np.ndarray, seed: int = 0) -> np.ndarray:
    import networkx as nx
    import community as community_louvain   # python-louvain
    N = cochange.shape[0]
    G = nx.Graph()
    G.add_nodes_from(range(N))
    for i in range(N):
        for j in range(i + 1, N):
            w = cochange[i, j]
            if w > 0:
                G.add_edge(i, j, weight=float(w))
    part = community_louvain.best_partition(G, random_state=seed)
    return np.array([part[i] for i in range(N)])

def path_prefix_labels(paths: list[str], k: int) -> np.ndarray:
    tops = sorted({p.split("/")[0] for p in paths})
    idx = {t: i for i, t in enumerate(tops)}
    return np.array([idx[p.split("/")[0]] for p in paths])
