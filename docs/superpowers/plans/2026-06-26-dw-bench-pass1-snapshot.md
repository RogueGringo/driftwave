# dw-bench Pass 1 (Snapshot Recovery Bench) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the snapshot half of `dw-bench` — extract multi-signal features from a repo's git history, cluster files via H₀ single-linkage, and score how well the clusters recover the repo's real top-level-directory structure, against control baselines, across a set of repos.

**Architecture:** A small, isolated Python package `experiments/structure-recovery/dwbench/`. Pure functions per stage (extract → distance → cluster → score), a disk cache keyed by repo+commit-range, and a resumable orchestrator that writes a results table + markdown report. Heavy deps live only in this folder; the driftwave plugin runtime is untouched.

**Tech Stack:** Python 3.12, numpy, scipy, scikit-learn, sentence-transformers + torch, networkx + python-louvain, matplotlib, umap-learn, pyyaml, pandas; pytest for tests; `git` via subprocess.

**Spec:** `docs/superpowers/specs/2026-06-25-dw-bench-structure-recovery-design.md` (read it first).

## Global Constraints

- Python **3.12+**. All deps pinned in `experiments/structure-recovery/requirements.txt` only; **nothing here may be imported by the plugin runtime** (`commands/`, `agents/`, `skills/`, `hooks/`, `scripts/`).
- **Determinism:** every randomized step (permutation null, bootstrap, train/test split, UMAP) takes an explicit integer `seed`; default `seed=0`.
- **No silent caps:** any truncation (commit cap, file cap, excluded repo, unlabeled files) is recorded in the results JSON and surfaced in `report.md`.
- **Primary metric = beats controls**, not beats-chance (see spec §2.1). Permutation null is only a sanity floor.
- **No weight tuning on reported scores** (spec §2.2): default equal weights over normalized distances; any tuning uses `split.py` and reports test-fold only.
- `git` is invoked via `subprocess` with explicit `cwd`; never `chdir`.
- All file paths in code are POSIX (`/`); repo paths are stored relative to the repo root.

---

### Task 1: Package scaffold + repos.yaml loader

**Files:**
- Create: `experiments/structure-recovery/requirements.txt`
- Create: `experiments/structure-recovery/.gitignore`
- Create: `experiments/structure-recovery/README.md`
- Create: `experiments/structure-recovery/dwbench/__init__.py`
- Create: `experiments/structure-recovery/dwbench/config.py`
- Test: `experiments/structure-recovery/tests/test_config.py`

**Interfaces:**
- Produces: `dwbench.config.RepoConfig` (dataclass: `name:str, url:str, category:str, commit_cap:int=2000, file_cap:int=1500, label_strategy:str="top_level_dir", path_filters:list[str]=[], weights:dict[str,float]|None=None`) and `dwbench.config.load_repos(path:str)->list[RepoConfig]`.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_config.py
from pathlib import Path
from dwbench.config import load_repos, RepoConfig

def test_load_repos_parses_yaml(tmp_path: Path):
    y = tmp_path / "repos.yaml"
    y.write_text(
        "repos:\n"
        "  - name: demo\n"
        "    url: https://github.com/x/demo\n"
        "    category: mixed\n"
        "    commit_cap: 50\n"
    )
    repos = load_repos(str(y))
    assert len(repos) == 1
    r = repos[0]
    assert isinstance(r, RepoConfig)
    assert r.name == "demo" and r.category == "mixed"
    assert r.commit_cap == 50
    assert r.file_cap == 1500          # default applied
    assert r.label_strategy == "top_level_dir"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_config.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.config'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/config.py
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
    weights: dict | None = None

def load_repos(path: str) -> list[RepoConfig]:
    with open(path, encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    return [RepoConfig(**entry) for entry in data["repos"]]
```

```python
# dwbench/__init__.py
"""dw-bench: structure-recovery benchmark for driftwave's H0 clustering premise."""
```

```
# requirements.txt
numpy>=1.26
scipy>=1.11
scikit-learn>=1.4
sentence-transformers>=2.6
torch>=2.2
networkx>=3.2
python-louvain>=0.16
matplotlib>=3.8
umap-learn>=0.5
pyyaml>=6.0
pandas>=2.2
pytest>=8.0
```

```
# .gitignore
cache/
out/
__pycache__/
*.pyc
.venv/
models/
```

```markdown
# dw-bench — structure-recovery benchmark

Tests whether a multi-signal topological read of git history recovers a repo's real
architecture. See `../../docs/superpowers/specs/2026-06-25-dw-bench-structure-recovery-design.md`.

## Setup
    python -m venv .venv && . .venv/Scripts/activate   # or .venv/bin/activate
    pip install -r requirements.txt

## Run
    python -m dwbench.run --repos repos.yaml --smoke   # 6-repo smoke subset
    python -m dwbench.run --repos repos.yaml           # full set

## Test
    python -m pytest -q
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && pip install pyyaml pytest && python -m pytest tests/test_config.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery
git commit -m "feat(dw-bench): scaffold package + repos.yaml loader"
```

---

### Task 2: labels.py — ground-truth labeling + min-size filter

**Files:**
- Create: `experiments/structure-recovery/dwbench/labels.py`
- Test: `experiments/structure-recovery/tests/test_labels.py`

**Interfaces:**
- Produces:
  - `dwbench.labels.assign_labels(paths:list[str], strategy:str="top_level_dir")->list[str|None]` — one label per path, `None` if unlabelable.
  - `dwbench.labels.label_coverage(labels:list[str|None])->float` — fraction labeled.
  - `dwbench.labels.passes_min_size(labels:list[str|None], min_files:int=30, min_labels:int=2)->bool`.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_labels.py
from dwbench.labels import assign_labels, label_coverage, passes_min_size

def test_top_level_dir_labels():
    paths = ["src/auth/a.py", "src/auth/b.py", "lib/x.py", "README.md"]
    labels = assign_labels(paths, "top_level_dir")
    assert labels == ["src", "src", "lib", None]   # root file unlabeled

def test_deepest_pkg_labels():
    paths = ["src/auth/a.py", "src/render/b.py"]
    assert assign_labels(paths, "deepest_pkg") == ["src/auth", "src/render"]

def test_coverage_and_min_size():
    labels = ["src", "src", None]
    assert abs(label_coverage(labels) - 2/3) < 1e-9
    assert passes_min_size(["a"] * 30 + [None], min_files=30, min_labels=1)
    assert not passes_min_size(["a", "a"], min_files=30)        # too few files
    assert not passes_min_size(["a"] * 40, min_labels=2)        # only 1 label
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_labels.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.labels'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/labels.py
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_labels.py -v`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/labels.py experiments/structure-recovery/tests/test_labels.py
git commit -m "feat(dw-bench): ground-truth labeling + min-size filter"
```

> Note: `codeowners` strategy is deferred to a follow-up (spec lists it as overridable, not required for Pass 1). Raising `ValueError` for it is intentional until then.

---

### Task 3: extract.py — git log parser

**Files:**
- Create: `experiments/structure-recovery/dwbench/extract.py`
- Test: `experiments/structure-recovery/tests/test_extract_parse.py`
- Test helper: `experiments/structure-recovery/tests/gitfixture.py`

**Interfaces:**
- Produces:
  - `dwbench.extract.FileChange` (dataclass: `path:str, added:int, deleted:int`).
  - `dwbench.extract.Commit` (dataclass: `sha:str, ts:int, author:str, message:str, files:list[FileChange]`).
  - `dwbench.extract.parse_git_log(repo_dir:str, commit_cap:int)->list[Commit]` — newest `commit_cap` commits, oldest-first; binary files (`-` in numstat) counted as 0/0.

- [ ] **Step 1: Write the failing test**

```python
# tests/gitfixture.py
import subprocess, os
from pathlib import Path

def make_repo(root: Path) -> str:
    d = root / "repo"
    d.mkdir()
    env = {**os.environ, "GIT_AUTHOR_DATE": "2026-01-01T00:00:00",
           "GIT_COMMITTER_DATE": "2026-01-01T00:00:00"}
    def git(*args, author="Alice <a@x>"):
        subprocess.run(["git", *args], cwd=d, check=True, env=env,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    git("init", "-q"); git("config", "user.email", "a@x"); git("config", "user.name", "Alice")
    (d / "src").mkdir(); (d / "lib").mkdir()
    (d / "src" / "a.py").write_text("x = 1\n")
    (d / "src" / "b.py").write_text("y = 2\n")
    git("add", "-A"); git("commit", "-q", "-m", "add src auth")
    (d / "lib" / "c.py").write_text("z = 3\n")
    git("add", "-A"); git("commit", "-q", "-m", "add lib helper")
    return str(d)
```

```python
# tests/test_extract_parse.py
from pathlib import Path
from dwbench.extract import parse_git_log
from gitfixture import make_repo

def test_parse_git_log(tmp_path: Path):
    repo = make_repo(tmp_path)
    commits = parse_git_log(repo, commit_cap=10)
    assert len(commits) == 2
    assert commits[0].message.startswith("add src")     # oldest first
    paths = {fc.path for fc in commits[0].files}
    assert paths == {"src/a.py", "src/b.py"}
    assert all(fc.added >= 0 for c in commits for fc in c.files)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_parse.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.extract'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/extract.py
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_parse.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/extract.py experiments/structure-recovery/tests/test_extract_parse.py experiments/structure-recovery/tests/gitfixture.py
git commit -m "feat(dw-bench): git log parser (commits + numstat)"
```

---

### Task 4: extract.py — build per-file signals

**Files:**
- Modify: `experiments/structure-recovery/dwbench/extract.py` (add `RepoData`, `build_signals`)
- Test: `experiments/structure-recovery/tests/test_extract_signals.py`

**Interfaces:**
- Consumes: `Commit`, `FileChange` (Task 3).
- Produces:
  - `dwbench.extract.RepoData` (dataclass: `paths:list[str]`, `cochange:np.ndarray (N×N int)`, `churn:np.ndarray (N×2 float)`, `authors:list[str]`, `authorship:np.ndarray (N×A float)`, `messages:list[str]`, `commit_ts:list[int]`).
  - `dwbench.extract.build_signals(commits:list[Commit], path_filters:list[str], file_cap:int)->tuple[RepoData, dict]` — returns data + a `truncation` dict (`{"n_files_total":int, "n_files_kept":int, "file_cap_hit":bool}`). Files kept = the `file_cap` most-changed (by commit count) after filters; `cochange[i,i]` = number of commits touching file i.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_extract_signals.py
import numpy as np
from dwbench.extract import Commit, FileChange, build_signals

def _c(sha, author, msg, files):
    return Commit(sha, 0, author, msg, [FileChange(p, 1, 0) for p in files])

def test_build_signals_cochange_and_churn():
    commits = [
        _c("1", "Alice <a>", "auth", ["src/a.py", "src/b.py"]),
        _c("2", "Bob <b>",   "auth", ["src/a.py", "src/b.py"]),
        _c("3", "Alice <a>", "lib",  ["lib/c.py"]),
    ]
    data, trunc = build_signals(commits, path_filters=[], file_cap=100)
    idx = {p: i for i, p in enumerate(data.paths)}
    a, b, c = idx["src/a.py"], idx["src/b.py"], idx["lib/c.py"]
    assert data.cochange[a, b] == 2          # a,b co-occur twice
    assert data.cochange[a, c] == 0          # never together
    assert data.cochange[a, a] == 2          # a touched by 2 commits
    assert data.authorship.shape == (3, 2)   # 2 distinct authors
    assert trunc["file_cap_hit"] is False
    assert "auth" in data.messages[a]        # a's message corpus

def test_path_filters_and_cap():
    commits = [_c("1", "A <a>", "m", ["node_modules/x.js", "src/a.py"])]
    data, _ = build_signals(commits, path_filters=["node_modules/"], file_cap=100)
    assert data.paths == ["src/a.py"]
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_signals.py -v`
Expected: FAIL with `ImportError: cannot import name 'build_signals'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/extract.py  (append)
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_signals.py -v`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/extract.py experiments/structure-recovery/tests/test_extract_signals.py
git commit -m "feat(dw-bench): build co-change/churn/authorship/message signals"
```

---

### Task 5: extract.py — disk cache + top-level `extract()`

**Files:**
- Modify: `experiments/structure-recovery/dwbench/extract.py` (add `extract`, `_cache_path`, `save_cache`, `load_cache`)
- Test: `experiments/structure-recovery/tests/test_extract_cache.py`

**Interfaces:**
- Consumes: `parse_git_log`, `build_signals`, `RepoData` (Tasks 3-4).
- Produces:
  - `dwbench.extract.extract(repo_dir:str, cache_dir:str, commit_cap:int, file_cap:int, path_filters:list[str])->tuple[RepoData, dict]` — parses HEAD sha + cap into a cache key; on cache hit returns instantly. `RepoData` round-trips through `.npz` (arrays) + `.json` (paths/authors/messages/ts).
  - `dwbench.extract.save_cache(path:str, data:RepoData)->None`, `load_cache(path:str)->RepoData`.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_extract_cache.py
from pathlib import Path
import numpy as np
from dwbench.extract import extract
from gitfixture import make_repo

def test_extract_caches(tmp_path: Path):
    repo = make_repo(tmp_path)
    cache = tmp_path / "cache"
    d1, t1 = extract(repo, str(cache), commit_cap=10, file_cap=100, path_filters=[])
    assert (cache).exists() and any(cache.iterdir())
    # second call returns equal data from cache (no git needed)
    d2, t2 = extract(repo, str(cache), commit_cap=10, file_cap=100, path_filters=[])
    assert d2.paths == d1.paths
    assert np.array_equal(d2.cochange, d1.cochange)
    assert d2.messages == d1.messages
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_cache.py -v`
Expected: FAIL with `ImportError: cannot import name 'extract'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/extract.py  (append)
import json, os, subprocess as _sp

def _head_sha(repo_dir: str) -> str:
    return _sp.run(["git", "rev-parse", "HEAD"], cwd=repo_dir, check=True,
                   capture_output=True, text=True).stdout.strip()

def _cache_path(cache_dir: str, repo_dir: str, commit_cap: int) -> str:
    key = f"{os.path.basename(repo_dir.rstrip('/'))}@{_head_sha(repo_dir)[:12]}_n{commit_cap}"
    return os.path.join(cache_dir, key)

def save_cache(path: str, data: RepoData) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    np.savez(path + ".npz", cochange=data.cochange, churn=data.churn,
             authorship=data.authorship)
    with open(path + ".json", "w", encoding="utf-8") as fh:
        json.dump({"paths": data.paths, "authors": data.authors,
                   "messages": data.messages, "commit_ts": data.commit_ts}, fh)

def load_cache(path: str) -> RepoData:
    arr = np.load(path + ".npz")
    with open(path + ".json", encoding="utf-8") as fh:
        meta = json.load(fh)
    return RepoData(meta["paths"], arr["cochange"], arr["churn"], meta["authors"],
                    arr["authorship"], meta["messages"], meta["commit_ts"])

def extract(repo_dir, cache_dir, commit_cap, file_cap, path_filters):
    path = _cache_path(cache_dir, repo_dir, commit_cap)
    if os.path.exists(path + ".npz") and os.path.exists(path + ".json"):
        return load_cache(path), {"cached": True}
    commits = parse_git_log(repo_dir, commit_cap)
    data, trunc = build_signals(commits, path_filters, file_cap)
    save_cache(path, data)
    trunc["cached"] = False
    return data, trunc
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_extract_cache.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/extract.py experiments/structure-recovery/tests/test_extract_cache.py
git commit -m "feat(dw-bench): disk cache + extract() entry point"
```

---

### Task 6: distance.py — per-signal distances, normalization, fusion

**Files:**
- Create: `experiments/structure-recovery/dwbench/distance.py`
- Test: `experiments/structure-recovery/tests/test_distance.py`

**Interfaces:**
- Consumes: `RepoData` (Task 4).
- Produces:
  - `dwbench.distance.cochange_distance(cochange:np.ndarray)->np.ndarray`
  - `dwbench.distance.churn_distance(churn:np.ndarray)->np.ndarray`
  - `dwbench.distance.authorship_distance(authorship:np.ndarray)->np.ndarray`
  - `dwbench.distance.message_distance(messages:list[str], method:str)->np.ndarray` (`method` in `{"tfidf","embed"}`)
  - `dwbench.distance.normalize(D:np.ndarray)->np.ndarray` — rank-transform off-diagonal to [0,1], symmetric, zero diagonal.
  - `dwbench.distance.per_signal(data:RepoData, message_method:str="tfidf")->dict[str,np.ndarray]` — normalized distances keyed `co_change|message|churn|authorship`.
  - `dwbench.distance.fuse(dists:dict[str,np.ndarray], weights:dict[str,float]|None)->np.ndarray` — weighted sum; `None` → equal weights.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_distance.py
import numpy as np
from dwbench.distance import cochange_distance, normalize, fuse

def test_cochange_distance_jaccard():
    # a,b co-occur fully; c isolated
    cc = np.array([[2, 2, 0], [2, 2, 0], [0, 0, 1]], dtype=float)
    D = cochange_distance(cc)
    assert abs(D[0, 1] - 0.0) < 1e-9     # identical co-change -> distance 0
    assert abs(D[0, 2] - 1.0) < 1e-9     # never co-occur -> distance 1
    assert np.allclose(np.diag(D), 0)

def test_normalize_range_and_symmetry():
    D = np.array([[0, 1, 9], [1, 0, 4], [9, 4, 0]], dtype=float)
    Z = normalize(D)
    off = Z[np.triu_indices(3, 1)]
    assert off.min() >= 0 and off.max() <= 1
    assert np.allclose(Z, Z.T) and np.allclose(np.diag(Z), 0)

def test_fuse_equal_weights():
    A = np.array([[0, 0.2], [0.2, 0]]); B = np.array([[0, 0.6], [0.6, 0]])
    F = fuse({"a": A, "b": B}, None)
    assert abs(F[0, 1] - 0.4) < 1e-9
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_distance.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.distance'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/distance.py
from __future__ import annotations
import numpy as np
from scipy.spatial.distance import squareform, pdist
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_distances

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
    order = vals.argsort().argsort().astype(float)      # ranks 0..m-1
    if len(vals) > 1:
        order /= (len(vals) - 1)
    Z = np.zeros_like(D)
    Z[iu] = order
    Z = Z + Z.T
    return Z

def per_signal(data, message_method: str = "tfidf") -> dict:
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_distance.py -v`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/distance.py experiments/structure-recovery/tests/test_distance.py
git commit -m "feat(dw-bench): per-signal distances, rank-normalization, fusion"
```

---

### Task 7: cluster.py — H₀ sweep + controls

**Files:**
- Create: `experiments/structure-recovery/dwbench/cluster.py`
- Test: `experiments/structure-recovery/tests/test_cluster.py`

**Interfaces:**
- Consumes: a distance matrix (Task 6); `cochange` for Louvain; `paths` for path-prefix.
- Produces:
  - `dwbench.cluster.single_linkage_labels(D:np.ndarray, k:int)->np.ndarray` — H₀ single-linkage cut to `k` clusters (equivalent to driftwave's H₀ Union-Find dendrogram).
  - `dwbench.cluster.median_cut_labels(D:np.ndarray)->np.ndarray` — cut at the median merge height (the shipped driftwave heuristic), reported as one point.
  - `dwbench.cluster.louvain_labels(cochange:np.ndarray, seed:int=0)->np.ndarray`
  - `dwbench.cluster.ward_labels(D:np.ndarray, k:int)->np.ndarray`
  - `dwbench.cluster.path_prefix_labels(paths:list[str], k:int)->np.ndarray`

- [ ] **Step 1: Write the failing test**

```python
# tests/test_cluster.py
import numpy as np
from dwbench.cluster import single_linkage_labels, ward_labels, path_prefix_labels

def _two_blocks():
    # two tight groups {0,1} and {2,3}, far apart
    D = np.array([
        [0.0, 0.1, 0.9, 0.9],
        [0.1, 0.0, 0.9, 0.9],
        [0.9, 0.9, 0.0, 0.1],
        [0.9, 0.9, 0.1, 0.0],
    ])
    return D

def test_single_linkage_recovers_two_blocks():
    labels = single_linkage_labels(_two_blocks(), k=2)
    assert labels[0] == labels[1] and labels[2] == labels[3]
    assert labels[0] != labels[2]

def test_ward_matches_block_structure():
    labels = ward_labels(_two_blocks(), k=2)
    assert (labels[0] == labels[1]) and (labels[2] == labels[3])

def test_path_prefix_labels():
    labels = path_prefix_labels(["src/a", "src/b", "lib/c"], k=2)
    assert labels[0] == labels[1] and labels[0] != labels[2]
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_cluster.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.cluster'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/cluster.py
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_cluster.py -v`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/cluster.py experiments/structure-recovery/tests/test_cluster.py
git commit -m "feat(dw-bench): H0 single-linkage sweep + Louvain/Ward/path-prefix controls"
```

> Note: `single_linkage_labels` is the H₀ dendrogram; the `score` stage cuts it to the label count, and `median_cut_labels` is recorded separately as driftwave's shipped heuristic point (spec §2.3).

---

### Task 8: split.py — repo train/test assignment

**Files:**
- Create: `experiments/structure-recovery/dwbench/split.py`
- Test: `experiments/structure-recovery/tests/test_split.py`

**Interfaces:**
- Produces: `dwbench.split.assign_split(names:list[str], scheme:str="all_test", seed:int=0)->dict[str,str]` — maps each repo name to `"train"` or `"test"`. `scheme`: `"all_test"` (default: frozen weights, every repo is test), or `"holdout"` (deterministic ~30% train / 70% test by hashed name + seed).

- [ ] **Step 1: Write the failing test**

```python
# tests/test_split.py
from dwbench.split import assign_split

def test_all_test_default():
    s = assign_split(["a", "b", "c"], "all_test")
    assert set(s.values()) == {"test"}

def test_holdout_is_deterministic_and_mixed():
    names = [f"r{i}" for i in range(20)]
    s1 = assign_split(names, "holdout", seed=0)
    s2 = assign_split(names, "holdout", seed=0)
    assert s1 == s2                                   # deterministic
    assert {"train", "test"} <= set(s1.values())      # both present
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_split.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.split'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/split.py
from __future__ import annotations
import hashlib

def assign_split(names: list[str], scheme: str = "all_test", seed: int = 0) -> dict[str, str]:
    if scheme == "all_test":
        return {n: "test" for n in names}
    if scheme == "holdout":
        out = {}
        for n in names:
            h = hashlib.sha256(f"{seed}:{n}".encode()).hexdigest()
            frac = int(h[:8], 16) / 0xFFFFFFFF
            out[n] = "train" if frac < 0.30 else "test"
        return out
    raise ValueError(f"unknown split scheme: {scheme}")
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_split.py -v`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/split.py experiments/structure-recovery/tests/test_split.py
git commit -m "feat(dw-bench): repo-level train/test split (frozen-weights default)"
```

---

### Task 9: score.py — metrics, permutation null, significance

**Files:**
- Create: `experiments/structure-recovery/dwbench/score.py`
- Test: `experiments/structure-recovery/tests/test_score.py`

**Interfaces:**
- Consumes: predicted labels (Task 7), true labels (Task 2).
- Produces:
  - `dwbench.score.recovery(pred:np.ndarray, true:list[str])->dict` — `{ari,nmi,homogeneity,completeness}` over labeled files only.
  - `dwbench.score.permutation_p95(pred:np.ndarray, true:list[str], n:int=200, seed:int=0)->float` — 95th-pct ARI under label shuffles.
  - `dwbench.score.paired_sign_test(deltas:list[float])->float` — two-sided p that median delta > 0 (binomial on positive count).
  - `dwbench.score.bootstrap_delta_ci(pred_a, pred_b, true, n:int=500, seed:int=0)->tuple[float,float]` — 95% CI of ARI(a)−ARI(b) resampling labeled files.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_score.py
import numpy as np
from dwbench.score import recovery, permutation_p95, paired_sign_test

def test_recovery_perfect():
    pred = np.array([0, 0, 1, 1])
    true = ["x", "x", "y", "y"]
    m = recovery(pred, true)
    assert abs(m["ari"] - 1.0) < 1e-9 and abs(m["nmi"] - 1.0) < 1e-9

def test_recovery_ignores_unlabeled():
    pred = np.array([0, 0, 1, 9])
    true = ["x", "x", "y", None]            # last file excluded
    assert abs(recovery(pred, true)["ari"] - 1.0) < 1e-9

def test_permutation_floor_below_perfect():
    pred = np.array([0, 0, 1, 1]); true = ["x", "x", "y", "y"]
    assert permutation_p95(pred, true, n=200, seed=0) < 1.0

def test_sign_test_all_positive_is_significant():
    assert paired_sign_test([0.1, 0.2, 0.05, 0.3, 0.15]) < 0.05
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_score.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.score'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/score.py
from __future__ import annotations
import numpy as np
from scipy.stats import binomtest
from sklearn.metrics import (adjusted_rand_score, normalized_mutual_info_score,
                             homogeneity_score, completeness_score)

def _labeled(pred, true):
    p, t = [], []
    for pi, ti in zip(pred, true):
        if ti is not None:
            p.append(int(pi)); t.append(ti)
    return np.array(p), np.array(t)

def recovery(pred, true) -> dict:
    p, t = _labeled(pred, true)
    return {"ari": float(adjusted_rand_score(t, p)),
            "nmi": float(normalized_mutual_info_score(t, p)),
            "homogeneity": float(homogeneity_score(t, p)),
            "completeness": float(completeness_score(t, p))}

def permutation_p95(pred, true, n: int = 200, seed: int = 0) -> float:
    p, t = _labeled(pred, true)
    rng = np.random.default_rng(seed)
    scores = []
    for _ in range(n):
        scores.append(adjusted_rand_score(rng.permutation(t), p))
    return float(np.percentile(scores, 95))

def paired_sign_test(deltas: list[float]) -> float:
    wins = sum(1 for d in deltas if d > 0)
    nz = sum(1 for d in deltas if d != 0)
    if nz == 0:
        return 1.0
    return float(binomtest(wins, nz, 0.5, alternative="two-sided").pvalue)

def bootstrap_delta_ci(pred_a, pred_b, true, n: int = 500, seed: int = 0):
    pa, t = _labeled(pred_a, true)
    pb, _ = _labeled(pred_b, true)
    rng = np.random.default_rng(seed)
    m = len(t)
    deltas = []
    for _ in range(n):
        idx = rng.integers(0, m, m)
        deltas.append(adjusted_rand_score(t[idx], pa[idx]) -
                      adjusted_rand_score(t[idx], pb[idx]))
    return (float(np.percentile(deltas, 2.5)), float(np.percentile(deltas, 97.5)))
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_score.py -v`
Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/score.py experiments/structure-recovery/tests/test_score.py
git commit -m "feat(dw-bench): recovery metrics + permutation floor + sign test + bootstrap CI"
```

---

### Task 10: analyze.py — per-repo pipeline (extract→distance→cluster→score)

**Files:**
- Create: `experiments/structure-recovery/dwbench/analyze.py`
- Test: `experiments/structure-recovery/tests/test_analyze.py`

**Interfaces:**
- Consumes: every prior module.
- Produces: `dwbench.analyze.analyze_repo(repo_dir:str, cfg:RepoConfig, cache_dir:str, message_method:str="tfidf", seed:int=0)->dict` — runs the full snapshot pipeline for one repo and returns a result row:
  ```
  {name, n_files, label_count, coverage, truncation,
   methods: { combined: {ari,nmi,...}, co_change:{...}, message:{...}, churn:{...},
              authorship:{...}, louvain:{...}, ward:{...}, path_prefix:{...},
              driftwave_median:{...} },
   permutation_p95: float,
   vs_controls: { louvain:{delta,ci_lo,ci_hi}, ward:{delta,ci_lo,ci_hi} } }
  ```
  Cut all hierarchical methods to `label_count` (the number of distinct true labels). `combined` uses fused equal-weighted distance; each ablation uses one signal's normalized distance.

- [ ] **Step 1: Write the failing test**

```python
# tests/test_analyze.py
from pathlib import Path
from dwbench.config import RepoConfig
from dwbench.analyze import analyze_repo
from gitfixture import make_repo

def test_analyze_repo_smoke(tmp_path: Path):
    repo = make_repo(tmp_path)
    cfg = RepoConfig(name="demo", url="x", category="mixed", commit_cap=10, file_cap=100)
    res = analyze_repo(repo, cfg, str(tmp_path / "cache"), message_method="tfidf")
    assert res["name"] == "demo"
    assert "combined" in res["methods"] and "ari" in res["methods"]["combined"]
    assert "louvain" in res["methods"] and "ward" in res["methods"]
    assert "vs_controls" in res and "louvain" in res["vs_controls"]
    assert 0.0 <= res["coverage"] <= 1.0
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_analyze.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.analyze'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/analyze.py
from __future__ import annotations
from . import extract, distance, cluster, score, labels as labelmod

def analyze_repo(repo_dir, cfg, cache_dir, message_method="tfidf", seed=0):
    data, trunc = extract.extract(repo_dir, cache_dir, cfg.commit_cap,
                                  cfg.file_cap, cfg.path_filters)
    true = labelmod.assign_labels(data.paths, cfg.label_strategy)
    k = len({x for x in true if x is not None})
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_analyze.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/analyze.py experiments/structure-recovery/tests/test_analyze.py
git commit -m "feat(dw-bench): per-repo analyze pipeline (combined + ablations + controls)"
```

---

### Task 11: run.py + report — resumable orchestrator and aggregate verdict

**Files:**
- Create: `experiments/structure-recovery/dwbench/report.py`
- Create: `experiments/structure-recovery/dwbench/run.py`
- Create: `experiments/structure-recovery/repos.yaml` (smoke subset, real)
- Test: `experiments/structure-recovery/tests/test_report.py`

**Interfaces:**
- Consumes: `analyze_repo` result rows (Task 10), `paired_sign_test` (Task 9), `assign_split` (Task 8).
- Produces:
  - `dwbench.report.aggregate(rows:list[dict])->dict` — `{n_repos, beats_louvain, beats_ward, sign_p_louvain, sign_p_ward, verdict}` where `verdict ∈ {"beats-controls","ties-controls","fails"}`. "beats-controls" = combined wins on a majority of repos vs BOTH controls AND both paired sign tests p<0.05.
  - `dwbench.report.write_report(rows:list[dict], agg:dict, out_dir:str)->None` — writes `out/results.json` and `out/report.md`.
  - `dwbench.run` CLI: `python -m dwbench.run --repos repos.yaml [--smoke] [--message-method tfidf|embed] [--split all_test|holdout] [--seed N]`; clones missing repos into `cache/repos/`, calls `analyze_repo`, is resumable (skips names already in `out/results.json`).

- [ ] **Step 1: Write the failing test**

```python
# tests/test_report.py
from dwbench.report import aggregate

def _row(name, combined, louvain, ward):
    return {"name": name,
            "methods": {"combined": {"ari": combined},
                        "louvain": {"ari": louvain}, "ward": {"ari": ward}},
            "vs_controls": {"louvain": {"delta": combined - louvain},
                            "ward": {"delta": combined - ward}}}

def test_aggregate_beats_controls():
    rows = [_row(f"r{i}", 0.8, 0.5, 0.6) for i in range(6)]
    agg = aggregate(rows)
    assert agg["beats_louvain"] == 6
    assert agg["sign_p_louvain"] < 0.05
    assert agg["verdict"] == "beats-controls"

def test_aggregate_ties():
    rows = [_row(f"r{i}", 0.5, 0.5, 0.5) for i in range(6)]
    assert aggregate(rows)["verdict"] in ("ties-controls", "fails")
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_report.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'dwbench.report'`

- [ ] **Step 3: Write minimal implementation**

```python
# dwbench/report.py
from __future__ import annotations
import json, os
from .score import paired_sign_test

def aggregate(rows: list[dict]) -> dict:
    n = len(rows)
    d_lou = [r["vs_controls"]["louvain"]["delta"] for r in rows]
    d_war = [r["vs_controls"]["ward"]["delta"] for r in rows]
    beats_lou = sum(1 for d in d_lou if d > 0)
    beats_war = sum(1 for d in d_war if d > 0)
    p_lou = paired_sign_test(d_lou)
    p_war = paired_sign_test(d_war)
    majority = n / 2
    if beats_lou > majority and beats_war > majority and p_lou < 0.05 and p_war < 0.05:
        verdict = "beats-controls"
    elif beats_lou >= 1 or beats_war >= 1:
        verdict = "ties-controls"
    else:
        verdict = "fails"
    return {"n_repos": n, "beats_louvain": beats_lou, "beats_ward": beats_war,
            "sign_p_louvain": p_lou, "sign_p_ward": p_war, "verdict": verdict}

def write_report(rows, agg, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "results.json"), "w", encoding="utf-8") as fh:
        json.dump({"rows": rows, "aggregate": agg}, fh, indent=2)
    lines = ["# dw-bench Pass 1 — Structure Recovery Report", "",
             f"**Verdict: {agg['verdict']}**  ",
             f"Repos: {agg['n_repos']} · beats Louvain on {agg['beats_louvain']} "
             f"(sign p={agg['sign_p_louvain']:.3g}) · beats Ward on "
             f"{agg['beats_ward']} (sign p={agg['sign_p_ward']:.3g})", "",
             "| repo | files | k | combined ARI | louvain | ward | path-prefix | perm p95 |",
             "|---|--:|--:|--:|--:|--:|--:|--:|"]
    for r in rows:
        m = r["methods"]
        lines.append(
            f"| {r['name']} | {r['n_files']} | {r['label_count']} | "
            f"{m['combined']['ari']:.3f} | {m['louvain']['ari']:.3f} | "
            f"{m['ward']['ari']:.3f} | {m['path_prefix']['ari']:.3f} | "
            f"{r['permutation_p95']:.3f} |")
        if r["truncation"].get("file_cap_hit"):
            lines.append(f"  <!-- {r['name']}: file cap hit "
                         f"({r['truncation']['n_files_total']} files) -->")
    with open(os.path.join(out_dir, "report.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines) + "\n")
```

```python
# dwbench/run.py
from __future__ import annotations
import argparse, json, os, subprocess
from .config import load_repos
from .split import assign_split
from .analyze import analyze_repo
from .report import aggregate, write_report

def _clone(url: str, dest: str) -> str:
    if not os.path.exists(dest):
        subprocess.run(["git", "clone", "--quiet", url, dest], check=True)
    return dest

def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--repos", required=True)
    ap.add_argument("--smoke", action="store_true")
    ap.add_argument("--message-method", default="tfidf", choices=["tfidf", "embed"])
    ap.add_argument("--split", default="all_test", choices=["all_test", "holdout"])
    ap.add_argument("--seed", type=int, default=0)
    ap.add_argument("--out", default="out")
    ap.add_argument("--cache", default="cache")
    args = ap.parse_args(argv)

    repos = load_repos(args.repos)
    if args.smoke:
        repos = repos[:6]
    _split = assign_split([r.name for r in repos], args.split, args.seed)

    results_path = os.path.join(args.out, "results.json")
    done = {}
    if os.path.exists(results_path):
        with open(results_path, encoding="utf-8") as fh:
            done = {r["name"]: r for r in json.load(fh).get("rows", [])}

    repo_root = os.path.join(args.cache, "repos")
    os.makedirs(repo_root, exist_ok=True)
    rows = list(done.values())
    for cfg in repos:
        if cfg.name in done:
            print(f"[skip] {cfg.name}")
            continue
        try:
            path = _clone(cfg.url, os.path.join(repo_root, cfg.name))
            row = analyze_repo(path, cfg, args.cache, args.message_method, args.seed)
            row["split"] = _split[cfg.name]
            rows.append(row)
            write_report(rows, aggregate(rows), args.out)   # checkpoint each repo
            print(f"[ok] {cfg.name} combined ARI={row['methods']['combined']['ari']:.3f}")
        except Exception as e:  # noqa: BLE001 — one repo must not sink the run
            print(f"[fail] {cfg.name}: {e}")

    test_rows = [r for r in rows if r.get("split", "test") == "test"]
    write_report(test_rows, aggregate(test_rows), args.out)
    print("verdict:", aggregate(test_rows)["verdict"])

if __name__ == "__main__":
    main()
```

```yaml
# repos.yaml  (smoke subset — real, public, modestly sized)
repos:
  - {name: ripgrep,   url: https://github.com/BurntSushi/ripgrep,   category: aaa-oss, commit_cap: 1500}
  - {name: fd,        url: https://github.com/sharkdp/fd,           category: aaa-oss, commit_cap: 1500}
  - {name: httpie,    url: https://github.com/httpie/cli,           category: mixed,   commit_cap: 1500}
  - {name: rich,      url: https://github.com/Textualize/rich,      category: mixed,   commit_cap: 1500}
  - {name: flask,     url: https://github.com/pallets/flask,        category: aaa-oss, commit_cap: 1500}
  - {name: typer,     url: https://github.com/fastapi/typer,        category: mixed,   commit_cap: 1500}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd experiments/structure-recovery && python -m pytest tests/test_report.py -v`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/dwbench/report.py experiments/structure-recovery/dwbench/run.py experiments/structure-recovery/repos.yaml experiments/structure-recovery/tests/test_report.py
git commit -m "feat(dw-bench): resumable orchestrator + aggregate verdict + report"
```

---

### Task 12: Full test pass + smoke run + wire-up doc

**Files:**
- Modify: `experiments/structure-recovery/README.md` (add a "results" section + interpretation guide)
- Test: the whole suite

- [ ] **Step 1: Run the whole unit suite**

Run: `cd experiments/structure-recovery && pip install -r requirements.txt && python -m pytest -q`
Expected: all tests PASS (config, labels, extract×3, distance, cluster, split, score, analyze, report)

- [ ] **Step 2: Real smoke run (tfidf, fast)**

Run: `cd experiments/structure-recovery && python -m dwbench.run --repos repos.yaml --smoke --message-method tfidf`
Expected: clones the 6 repos, prints `[ok] <name> combined ARI=…` per repo, writes `out/report.md` and `out/results.json`, prints a `verdict:`.

- [ ] **Step 3: Sanity-check the report**

Run: `cat out/report.md`
Expected: a verdict line + a per-repo table with combined/louvain/ward/path-prefix ARI and permutation p95. Confirm path-prefix ARI is highest (sanity ceiling) and no NaNs.

- [ ] **Step 4: Document interpretation in README**

```markdown
## Interpreting results

- **Verdict** in `out/report.md`: `beats-controls` only if combined ARI beats BOTH
  Louvain and Ward on a majority of repos AND both paired sign tests are p<0.05.
- `path-prefix` is a sanity *ceiling* (it nearly is the ground truth) — nothing
  should beat it; if combined ≈ path-prefix, recovery is near-perfect for that repo.
- `permutation p95` is the chance floor; combined ARI must clear it (necessary,
  not sufficient).
- The per-signal columns (in `results.json`) are the ablation — they show whether
  message/churn/authorship add anything over co-change alone.
- For an embedding run: `--message-method embed` (slower; downloads all-MiniLM-L6-v2).
```

- [ ] **Step 5: Commit**

```bash
git add experiments/structure-recovery/README.md
git commit -m "docs(dw-bench): interpretation guide + verified smoke run"
```

---

## Self-Review

**Spec coverage:**
- §2.1 beats-controls primary + significance → Task 9 (`bootstrap_delta_ci`, `paired_sign_test`), Task 11 (`aggregate` verdict). ✓
- §2.1 permutation floor + path-prefix ceiling → Task 9 (`permutation_p95`), Task 7 (`path_prefix_labels`), reported in Task 11. ✓
- §2.2 anti-overfitting (frozen weights / split) → Task 8 (`assign_split`, default `all_test`), Task 11 (test-fold-only aggregate). ✓
- §2.3 threshold sweep / cut-to-k + median point → Task 7 (`single_linkage_labels` cut to k, `median_cut_labels`), Task 10 (cut to `label_count`). ✓
- §4.1 extract (co-change/churn/authorship/message TF-IDF+embed) + cache → Tasks 3-5. ✓
- §4.1 distance normalization + fusion → Task 6. ✓
- §4.1 labels + min-size → Task 2. ✓
- §4.1 score ablation-first → Tasks 9-10 (per-signal rows). ✓
- §4.1 run resumable + report → Task 11. ✓
- §6 repo set + smoke subset + truncation logging → Task 11 (`repos.yaml`, `--smoke`), Task 4 (`truncation`), Task 11 report. ✓
- §8 no-silent-caps → `truncation` surfaced in `report.md` (Task 11). ✓
- Pass 2 (`trajectory.py`) → intentionally **out of scope** (separate plan); `commit_ts` is cached (Task 5) so it needs no re-extraction.

**Placeholder scan:** no TBD/TODO; every code step shows complete code. ✓

**Type consistency:** `RepoData` fields (Task 4) consumed unchanged in Tasks 5/6/10; `analyze_repo` row shape (Task 10) consumed by `aggregate`/`write_report` (Task 11) — `methods[*].ari`, `vs_controls[ctrl].delta` match. `assign_labels` returns `list[str|None]`, and `score._labeled` / `label_coverage` / `passes_min_size` all handle `None`. ✓

**Known follow-ups (not blockers):** `codeowners` label strategy; `deepest_pkg` robustness subset run; UMAP/confusion/barcode plots (`plots.py`) — the report ships as a table first; plots are additive and can be a small follow-up task or folded into Task 11 if desired during execution.
