from __future__ import annotations
from collections import Counter, defaultdict
from dataclasses import dataclass
import hashlib
import json
import os
from pathlib import Path
import subprocess

import numpy as np

@dataclass
class FileChange:
    path: str
    added: int
    deleted: int

@dataclass
class Commit:
    sha: str
    ts: int
    author: str
    message: str
    files: list[FileChange]

_SEP = "\x1e"  # record separator unlikely to appear in messages

def parse_git_log(repo_dir: str, commit_cap: int) -> list[Commit]:
    fmt = f"{_SEP}%H%x1f%at%x1f%an%x1f%s"
    # --no-renames: prevents "old => new" rename rows that would become phantom files.
    # core.quotePath=false: prevents octal-quoted non-ASCII paths that would mismatch
    # file lookup keys built from the raw path strings.
    out = subprocess.run(
        ["git", "-c", "core.quotePath=false", "log", "--no-renames",
         f"-n{commit_cap}", "--no-merges", "--numstat", f"--pretty=format:{fmt}"],
        cwd=repo_dir, check=True, capture_output=True, text=True, encoding="utf-8",
    ).stdout
    commits: list[Commit] = []
    for block in out.split(_SEP):
        block = block.strip("\n")
        if not block:
            continue
        head, *stat_lines = block.split("\n")
        sha, ts, author, msg = head.split("\x1f", 3)
        files: list[FileChange] = []
        for line in stat_lines:
            if not line.strip():
                continue
            a, d, path = line.split("\t", 2)
            files.append(FileChange(path, 0 if a == "-" else int(a),
                                    0 if d == "-" else int(d)))
        commits.append(Commit(sha, int(ts), author, msg, files))
    commits.reverse()   # oldest-first
    return commits

@dataclass
class RepoData:
    paths: list[str]
    cochange: np.ndarray
    churn: np.ndarray
    authors: list[str]
    authorship: np.ndarray
    messages: list[str]
    commit_ts: list[int]

def _keep(path: str, filters: list[str]) -> bool:
    return not any(f in path for f in filters)

def build_signals(commits, path_filters, file_cap):
    touch = Counter()
    for c in commits:
        for fc in c.files:
            if _keep(fc.path, path_filters):
                touch[fc.path] += 1
    n_total = len(touch)
    paths = [p for p, _ in touch.most_common(file_cap)]
    paths.sort()
    idx = {p: i for i, p in enumerate(paths)}
    keep = set(paths)
    authors = sorted({c.author for c in commits if any(fc.path in keep for fc in c.files)})
    aidx = {a: i for i, a in enumerate(authors)}
    N, A = len(paths), len(authors)
    cochange = np.zeros((N, N), dtype=np.int64)
    churn = np.zeros((N, 2), dtype=np.float64)
    authorship = np.zeros((N, A), dtype=np.float64)
    corpus = defaultdict(list)
    for c in commits:
        present = [fc for fc in c.files if fc.path in keep]
        ids = [idx[fc.path] for fc in present]
        for i in ids:
            cochange[i, i] += 1
            authorship[i, aidx[c.author]] += 1
            corpus[i].append(c.message)
        for fc in present:
            i = idx[fc.path]
            churn[i, 1] += fc.added + fc.deleted
        for a_i in range(len(ids)):
            for b_i in range(a_i + 1, len(ids)):
                cochange[ids[a_i], ids[b_i]] += 1
                cochange[ids[b_i], ids[a_i]] += 1
    for i in range(N):
        churn[i, 0] = np.log1p(cochange[i, i])
        churn[i, 1] = np.log1p(churn[i, 1])
        s = authorship[i].sum()
        if s:
            authorship[i] /= s
    messages = [" ".join(corpus[i]) for i in range(N)]
    data = RepoData(paths, cochange, churn, authors, authorship, messages,
                    [c.ts for c in commits if any(fc.path in keep for fc in c.files)])
    trunc = {"n_files_total": n_total, "n_files_kept": N,
             "file_cap_hit": n_total > file_cap}
    return data, trunc


def _head_sha(repo_dir: str) -> str:
    return subprocess.run(["git", "rev-parse", "HEAD"], cwd=repo_dir, check=True,
                          capture_output=True, text=True).stdout.strip()


def _cache_path(cache_dir: str, repo_dir: str, commit_cap: int,
                file_cap: int, path_filters: list[str]) -> str:
    name = Path(repo_dir).name
    cfg = f"{file_cap}|" + "|".join(sorted(path_filters))
    cfg_h = hashlib.sha256(cfg.encode()).hexdigest()[:8]
    key = f"{name}@{_head_sha(repo_dir)[:12]}_n{commit_cap}_{cfg_h}"
    return os.path.join(cache_dir, key)


def save_cache(path: str, data: RepoData) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    np.savez(path + ".npz", cochange=data.cochange, churn=data.churn,
             authorship=data.authorship)
    with open(path + ".json", "w", encoding="utf-8") as fh:
        json.dump({"paths": data.paths, "authors": data.authors,
                   "messages": data.messages, "commit_ts": data.commit_ts}, fh)


def load_cache(path: str) -> RepoData:
    with np.load(path + ".npz") as arr:
        cochange, churn, authorship = arr["cochange"], arr["churn"], arr["authorship"]
    with open(path + ".json", encoding="utf-8") as fh:
        meta = json.load(fh)
    return RepoData(meta["paths"], cochange, churn, meta["authors"],
                    authorship, meta["messages"], meta["commit_ts"])


def extract(repo_dir, cache_dir, commit_cap, file_cap, path_filters):
    path = _cache_path(cache_dir, repo_dir, commit_cap, file_cap, path_filters)
    if os.path.exists(path + ".npz") and os.path.exists(path + ".json"):
        return load_cache(path), {"cached": True}
    commits = parse_git_log(repo_dir, commit_cap)
    data, trunc = build_signals(commits, path_filters, file_cap)
    save_cache(path, data)
    trunc["cached"] = False
    return data, trunc
