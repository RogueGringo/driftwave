#!/usr/bin/env python3
"""Compute persistent homology on artifact distance matrices.

Reads a RawCloud JSON artifact from stdin, outputs barcode + distance matrix
as JSON to stdout.

Usage:
    cat .dw/artifacts/raw.json | python3 compute_persistence.py

Domain adapters: any domain (code repo, doc set, log stream, sensor export)
can feed this pipeline by emitting a RawCloud whose file entries carry a
"features" array of numeric channels — all entries the same length, globally
min-max normalized here. When present, those channels REPLACE the default
[size_bytes, staleness_days, language-hash] basis. A precomputed top-level
"distances" matrix skips feature extraction entirely.

Honesty note (dw-bench, experiments/structure-recovery): on the structure-
recovery benchmark, H0 clustering on the default basis did NOT beat standard
community detection (Louvain/Ward). The clustering is real computed math and
is useful as a descriptive map; it is not load-bearing evidence on its own.
The emitted `caveat` and `null_check` fields carry that honesty in-band.
"""
from __future__ import annotations

import json
import os
import sys
import hashlib
import numpy as np

PLUGIN_VERSION = "0.2.0"
DEFAULT_BASIS = ["size_bytes", "staleness_days", "language_hash"]


def file_feature_vector(f: dict) -> np.ndarray:
    """Extract a numeric feature vector from a file entry."""
    size = f.get("size_bytes", 0)
    staleness = f.get("staleness_days", 0)

    # Language as a hash-derived float (deterministic)
    lang = f.get("language", "unknown")
    lang_hash = int(hashlib.md5(lang.encode()).hexdigest()[:8], 16) / 0xFFFFFFFF

    return np.array([size, staleness, lang_hash], dtype=np.float64)


def normalize_features(features: np.ndarray) -> np.ndarray:
    """Min-max normalize each column to [0, 1]."""
    mins = features.min(axis=0)
    maxs = features.max(axis=0)
    ranges = maxs - mins
    ranges[ranges == 0] = 1.0  # avoid division by zero
    return (features - mins) / ranges


def compute_distance_matrix(features: np.ndarray) -> np.ndarray:
    """Compute pairwise Euclidean distance matrix."""
    n = features.shape[0]
    D = np.zeros((n, n), dtype=np.float64)
    for i in range(n):
        for j in range(i + 1, n):
            d = np.sqrt(np.sum((features[i] - features[j]) ** 2))
            D[i, j] = d
            D[j, i] = d
    return D


def compute_h0_persistence(D: np.ndarray) -> list[dict]:
    """Union-Find H₀ persistence on a distance matrix.

    Returns a list of barcode entries {birth, death, dimension}.
    Same algorithm as Ripser for dimension 0.
    """
    n = D.shape[0]
    parent = list(range(n))
    rank = [0] * n
    births = {i: 0.0 for i in range(n)}
    barcodes = []

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b, eps):
        ra, rb = find(a), find(b)
        if ra == rb:
            return
        if rank[ra] < rank[rb]:
            ra, rb = rb, ra
        parent[rb] = ra
        if rank[ra] == rank[rb]:
            rank[ra] += 1
        # The younger component dies
        barcodes.append({
            "birth": float(births[rb]),
            "death": float(eps),
            "dimension": 0
        })
        del births[rb]

    # Sort edges by distance
    edges = []
    for i in range(n):
        for j in range(i + 1, n):
            edges.append((D[i, j], i, j))
    edges.sort()

    for eps, i, j in edges:
        union(i, j, eps)

    # Remaining components live forever (infinite persistence).
    # Serialize the infinite death as JSON null + an "infinite" flag: a bare
    # Infinity token is invalid JSON and is rejected by strict parsers
    # (e.g. JavaScript JSON.parse, jq), which breaks every downstream consumer.
    for comp in births:
        barcodes.append({
            "birth": float(births[comp]),
            "death": None,
            "dimension": 0,
            "infinite": True
        })

    return barcodes


def identify_clusters(D: np.ndarray, barcodes: list[dict],
                      files: list[dict]) -> tuple[list[dict], list[str]]:
    """Identify clusters from long-lived H₀ bars.

    A 'long bar' is one whose lifetime (death - birth) exceeds the
    median lifetime. These correspond to real structure; short bars
    are noise.
    """
    finite_bars = [b for b in barcodes if not b.get("infinite")]
    if not finite_bars:
        # Everything in one cluster (its bar is infinitely persistent)
        return [{
            "id": 0,
            "label": "all",
            "members": [f["path"] for f in files],
            "bar_length": None,
            "infinite": True,
            "centroid_description": ""
        }], []

    lifetimes = [b["death"] - b["birth"] for b in finite_bars]
    median_life = float(np.median(lifetimes))

    # Use the persistence threshold: cut at median lifetime
    # Components that survive past this threshold are real clusters
    eps_cut = median_life

    # Run Union-Find up to eps_cut to get cluster assignments
    n = len(files)
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(a, b):
        ra, rb = find(a), find(b)
        if ra != rb:
            parent[rb] = ra

    for i in range(n):
        for j in range(i + 1, n):
            if D[i, j] <= eps_cut:
                union(i, j)

    # Group files by component
    clusters_map = {}
    noise = []
    for i in range(n):
        root = find(i)
        if root not in clusters_map:
            clusters_map[root] = []
        clusters_map[root].append(i)

    # Clusters with 1 member are noise
    clusters = []
    cid = 0
    for root, members in sorted(clusters_map.items(), key=lambda x: -len(x[1])):
        member_paths = [files[m]["path"] for m in members]
        if len(members) == 1:
            noise.append(member_paths[0])
        else:
            # Per-cluster persistence (H0): a cluster — a connected component at
            # eps_cut — "dies" when single-linkage first merges it with anything
            # outside it, i.e. the minimum distance from a member to a non-member.
            # Births are 0, so bar_length is that boundary distance. (Previously
            # every cluster was given the GLOBAL max lifetime, so all clusters
            # reported identical persistence and node sizing was meaningless —
            # issue #15.)
            member_set = set(members)
            outside = [k for k in range(n) if k not in member_set]
            cluster = {
                "id": cid,
                "label": f"cluster_{cid}",
                "members": member_paths,
            }
            if outside:
                cluster["bar_length"] = float(min(D[m, o] for m in members for o in outside))
            else:
                # Sole surviving component — infinitely persistent.
                cluster["bar_length"] = None
                cluster["infinite"] = True
            cluster["centroid_description"] = ""
            clusters.append(cluster)
            cid += 1

    return clusters, noise


def top_finite_lifetime(barcodes: list[dict]) -> float:
    finite = [b["death"] - b["birth"] for b in barcodes if not b.get("infinite")]
    return float(max(finite)) if finite else 0.0


def null_check(features: np.ndarray, native_top: float) -> dict:
    """Seeded decoy negative control: shuffle each feature column independently
    across items, breaking cross-channel structure while preserving each
    channel's marginal distribution, then rerun the same scorer. 'Structure
    present' should beat its own decoy — informational, never an acceptance.
    """
    seed = int(os.environ.get("DW_DECOY_SEED", "7"))
    rng = np.random.default_rng(seed)
    decoy = features.copy()
    for col in range(decoy.shape[1]):
        rng.shuffle(decoy[:, col])
    decoy_top = top_finite_lifetime(compute_h0_persistence(compute_distance_matrix(decoy)))
    beats = native_top > decoy_top
    return {
        "seed": seed,
        "native_top_lifetime": native_top,
        "decoy_top_lifetime": decoy_top,
        "beats_decoy": beats,
        "note": "informational only — a decoy win is necessary, not sufficient, for structure",
    }


def build_provenance(basis: list[str], n: int, extra_params: dict | None = None) -> dict:
    params = {"eps_rule": "median-bar-lifetime", "n_items": n}
    if extra_params:
        params.update(extra_params)
    return {
        "producer": "compute_persistence.py",
        "plugin_version": PLUGIN_VERSION,
        "tier": "real",
        "params": params,
        "feature_basis": basis,
    }


CAVEAT = ("descriptive map, not load-bearing evidence: on the dw-bench "
          "structure-recovery benchmark, H0 clustering did not beat standard "
          "community detection (see experiments/structure-recovery)")


def main():
    raw = json.load(sys.stdin)
    files = raw.get("files", [])
    n = len(files)

    if n < 2:
        result = {
            "layer": "L1",
            "barcode": [],
            "distances": [],
            "clusters": [],
            "noise": [f["path"] for f in files],
            "routing": "REPROBE",
            "routing_reason": "Fewer than 2 artifacts — need more input",
            "provenance": build_provenance(DEFAULT_BASIS, n),
            "caveat": CAVEAT,
            "flags": ["no_structure"],
        }
        json.dump(result, sys.stdout, indent=2)
        return

    features = None
    omitted = None
    if isinstance(raw.get("distances"), list) and raw["distances"]:
        # Precomputed distance matrix from a domain adapter.
        D = np.asarray(raw["distances"], dtype=np.float64)
        basis = ["precomputed_distances"]
        omitted = [{"stage": "null_check",
                    "reason": "precomputed distances — no feature basis to shuffle"}]
    else:
        if all(isinstance(f.get("features"), list) and f["features"] for f in files):
            widths = {len(f["features"]) for f in files}
            if len(widths) != 1:
                print(json.dumps({
                    "layer": "L1", "barcode": [], "distances": [], "clusters": [],
                    "noise": [], "routing": "REPROBE",
                    "routing_reason": f"features arrays have mixed lengths {sorted(widths)} — "
                                      "a domain adapter must emit one fixed frame",
                }, indent=2))
                return
            features = np.array([f["features"] for f in files], dtype=np.float64)
            basis = [f"channel_{i}" for i in range(features.shape[1])]
        else:
            features = np.array([file_feature_vector(f) for f in files])
            basis = DEFAULT_BASIS
        features = normalize_features(features)
        D = compute_distance_matrix(features)

    # Compute H₀ persistence
    barcodes = compute_h0_persistence(D)

    # Identify clusters
    clusters, noise = identify_clusters(D, barcodes, files)

    # Routing decision
    n_clusters = len(clusters)
    if n_clusters == 0:
        routing = "REPROBE"
        routing_reason = "No persistent clusters found — all noise"
    elif n_clusters > 3:
        routing = "SPLIT"
        routing_reason = f"{n_clusters} clusters detected — decompose into sub-pipelines"
    else:
        routing = "ASCEND"
        routing_reason = f"{n_clusters} stable cluster(s) identified"

    flags = ["persistent_structure"] if n_clusters else ["no_structure"]
    result = {
        "layer": "L1",
        "barcode": barcodes,
        "distances": D.tolist(),
        "clusters": clusters,
        "noise": noise,
        "routing": routing,
        "routing_reason": routing_reason,
        "provenance": build_provenance(basis, n),
        "caveat": CAVEAT,
    }
    if features is not None:
        nc = null_check(features, top_finite_lifetime(barcodes))
        result["null_check"] = nc
        flags.append("beats_decoy" if nc["beats_decoy"] else "fails_decoy")
    else:
        result["provenance"]["omitted"] = omitted
        flags.append("stage_omitted")
    result["flags"] = flags

    json.dump(result, sys.stdout, indent=2)


if __name__ == "__main__":
    main()
