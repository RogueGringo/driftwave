from __future__ import annotations
from dataclasses import dataclass, field
import yaml


@dataclass
class RepoConfig:
    name: str
    url: str
    category: str
    commit_cap: int = 2000
    file_cap: int = 1500
    label_strategy: str = "top_level_dir"
    path_filters: list[str] = field(default_factory=list)
    weights: dict[str, float] | None = None


def load_repos(path: str) -> list[RepoConfig]:
    with open(path, encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    return [RepoConfig(**entry) for entry in data["repos"]]
