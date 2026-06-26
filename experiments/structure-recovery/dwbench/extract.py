from __future__ import annotations
from dataclasses import dataclass
import subprocess

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
    out = subprocess.run(
        ["git", "log", f"-n{commit_cap}", "--no-merges", "--numstat",
         f"--pretty=format:{fmt}"],
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

from collections import Counter, defaultdict
import numpy as np

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
    authors = sorted({c.author for c in commits})
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
                    [c.ts for c in commits])
    trunc = {"n_files_total": n_total, "n_files_kept": N,
             "file_cap_hit": n_total > file_cap}
    return data, trunc
