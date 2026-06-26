from __future__ import annotations
from collections import Counter

def assign_labels(paths: list[str], strategy: str = "top_level_dir") -> list[str | None]:
    out: list[str | None] = []
    for p in paths:
        parts = p.split("/")
        if len(parts) < 2:               # root-level file: no module
            out.append(None)
            continue
        if strategy == "top_level_dir":
            out.append(parts[0])
        elif strategy == "deepest_pkg":
            out.append("/".join(parts[:-1]))
        else:
            raise ValueError(f"unknown label strategy: {strategy}")
    return out

def label_coverage(labels: list[str | None]) -> float:
    if not labels:
        return 0.0
    return sum(1 for x in labels if x is not None) / len(labels)

def passes_min_size(labels: list[str | None], min_files: int = 30, min_labels: int = 2) -> bool:
    present = [x for x in labels if x is not None]
    return len(present) >= min_files and len(set(present)) >= min_labels
