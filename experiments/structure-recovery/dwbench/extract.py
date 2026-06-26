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
