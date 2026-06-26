from __future__ import annotations
import numpy as np
from scipy.spatial.distance import squareform, pdist
from scipy.stats import rankdata
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_distances
from .extract import RepoData

def cochange_distance(cochange: np.ndarray) -> np.ndarray:
    occ = np.diag(cochange).astype(float)
    N = cochange.shape[0]
    D = np.ones((N, N), dtype=float)
    for i in range(N):
        for j in range(i + 1, N):
            union = occ[i] + occ[j] - cochange[i, j]
            jac = cochange[i, j] / union if union > 0 else 0.0
            D[i, j] = D[j, i] = 1.0 - jac
    np.fill_diagonal(D, 0.0)
    return D

def churn_distance(churn: np.ndarray) -> np.ndarray:
    return squareform(pdist(churn, metric="euclidean"))

def authorship_distance(authorship: np.ndarray) -> np.ndarray:
    return cosine_distances(authorship)

def message_distance(messages: list[str], method: str) -> np.ndarray:
    if method == "tfidf":
        vecs = TfidfVectorizer(min_df=1).fit_transform(messages)
        return cosine_distances(vecs)
    if method == "embed":
        from sentence_transformers import SentenceTransformer
        model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
        emb = model.encode(messages, normalize_embeddings=True)
        return cosine_distances(emb)
    raise ValueError(f"unknown message method: {method}")

def normalize(D: np.ndarray) -> np.ndarray:
    N = D.shape[0]
    iu = np.triu_indices(N, 1)
    vals = D[iu]
    order = rankdata(vals, method="average") - 1.0   # tied values share the mean rank
    if len(vals) > 1:
        order /= (len(vals) - 1)
    else:
        order[:] = 1.0
    Z = np.zeros(D.shape, dtype=float)
    Z[iu] = order
    Z = Z + Z.T
    return Z

def per_signal(data: RepoData, message_method: str = "tfidf") -> dict:
    return {
        "co_change": normalize(cochange_distance(data.cochange)),
        "message": normalize(message_distance(data.messages, message_method)),
        "churn": normalize(churn_distance(data.churn)),
        "authorship": normalize(authorship_distance(data.authorship)),
    }

def fuse(dists: dict, weights: dict | None) -> np.ndarray:
    keys = list(dists)
    if weights is None:
        weights = {k: 1.0 for k in keys}
    total = sum(weights[k] for k in keys)
    out = np.zeros_like(next(iter(dists.values())))
    for k in keys:
        out += (weights[k] / total) * dists[k]
    return out
