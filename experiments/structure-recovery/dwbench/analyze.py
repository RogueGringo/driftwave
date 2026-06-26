from __future__ import annotations
from . import extract, distance, cluster, score, labels as labelmod
from .labels import passes_min_size

class RepoTooSmall(Exception): pass

def analyze_repo(repo_dir, cfg, cache_dir, message_method="tfidf", seed=0):
    data, trunc = extract.extract(repo_dir, cache_dir, cfg.commit_cap,
                                  cfg.file_cap, cfg.path_filters)
    true = labelmod.assign_labels(data.paths, cfg.label_strategy)
    k = len({x for x in true if x is not None})
    if not passes_min_size(true):
        raise RepoTooSmall(f"{cfg.name}: below min size (k={k}, labeled={sum(1 for x in true if x is not None)})")
    per = distance.per_signal(data, message_method)
    fused = distance.fuse(per, cfg.weights)

    preds = {
        "combined": cluster.single_linkage_labels(fused, k),
        "co_change": cluster.single_linkage_labels(per["co_change"], k),
        "message": cluster.single_linkage_labels(per["message"], k),
        "churn": cluster.single_linkage_labels(per["churn"], k),
        "authorship": cluster.single_linkage_labels(per["authorship"], k),
        "ward": cluster.ward_labels(fused, k),
        "louvain": cluster.louvain_labels(data.cochange, seed),
        "path_prefix": cluster.path_prefix_labels(data.paths, k),
        "driftwave_median": cluster.median_cut_labels(fused),
    }
    methods = {name: score.recovery(p, true) for name, p in preds.items()}
    vs = {}
    for ctrl in ("louvain", "ward"):
        lo, hi = score.bootstrap_delta_ci(preds["combined"], preds[ctrl], true, seed=seed)
        vs[ctrl] = {"delta": methods["combined"]["ari"] - methods[ctrl]["ari"],
                    "ci_lo": lo, "ci_hi": hi}
    return {
        "name": cfg.name, "n_files": len(data.paths), "label_count": k,
        "coverage": labelmod.label_coverage(true), "truncation": trunc,
        "methods": methods,
        "permutation_p95": score.permutation_p95(preds["combined"], true, seed=seed),
        "vs_controls": vs,
    }
