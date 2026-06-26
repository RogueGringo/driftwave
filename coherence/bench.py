#!/usr/bin/env python3
"""coherence-bench — driftwave multi-channel codebase coherence analysis (POC).

For each repo in a corpus, encode its source files as a point cloud under FOUR
independent distance channels, run H0 persistent homology per channel, and
measure how much the channels AGREE on the module structure (cross-channel
sheaf-agreement = the coherence signal). Emit per-repo fingerprints + cross-repo
refinement plots.

Channels
  structure : directory-tree geodesic + log size + language
  cochange  : git co-change coupling (1 - Jaccard of commits touching both)   <- evolution
  imports   : import/require graph (1 - cosine of adjacency rows)              <- architecture
  intent    : TF-IDF over file content + commit subjects touching it (cosine)  <- intent/value
              (TF-IDF is the v1 stand-in for neural embeddings; drop-in swap)

Usage:  python bench.py [name=giturl ...]
"""
from __future__ import annotations
import os, re, sys, json, math, subprocess
from collections import Counter, defaultdict
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

WORK = os.path.dirname(os.path.abspath(__file__))
REPOS = os.path.join(WORK, "repos")
OUT = os.path.join(WORK, "out")
CORPUS = [
    ("driftwave", "https://github.com/RogueGringo/driftwave.git"),
    ("requests",  "https://github.com/psf/requests.git"),
    ("click",     "https://github.com/pallets/click.git"),
    ("flask",     "https://github.com/pallets/flask.git"),
]
MAX_FILES = 160
MAX_COMMITS = 3000
CHANNELS = ["structure", "cochange", "imports", "intent"]
CODE_EXT = {".py", ".js", ".ts", ".jsx", ".tsx", ".md", ".sh", ".rs", ".go",
            ".java", ".c", ".h", ".hpp", ".cpp", ".cc", ".toml", ".cfg"}
EXCLUDE = {".git", "node_modules", "dist", "build", "__pycache__", ".venv",
           "venv", "vendor", "target", ".pytest_cache", ".mypy_cache", ".tox",
           "site-packages", ".idea", "docs-site"}
PY_IMP = re.compile(r'^\s*(?:from\s+([.\w]+)\s+import|import\s+([.\w]+))', re.M)
JS_IMP = re.compile(r'''(?:import[^'"]*['"]([^'"]+)['"]|require\(\s*['"]([^'"]+)['"])''')
RS_IMP = re.compile(r'^\s*(?:pub\s+)?(?:use|mod)\s+([\w:]+)', re.M)
TOKEN = re.compile(r'[A-Za-z_][A-Za-z0-9_]{2,}')


def run(cmd, cwd=None):
    return subprocess.run(cmd, cwd=cwd, capture_output=True, text=True, errors="replace")


def read_file(path, maxbytes=120000):
    try:
        with open(path, "rb") as fh:
            return fh.read(maxbytes).decode("utf-8", "replace")
    except Exception:
        return ""


def clone(name, url):
    dest = os.path.join(REPOS, name)
    if os.path.isdir(os.path.join(dest, ".git")):
        return dest
    os.makedirs(REPOS, exist_ok=True)
    print(f"  cloning {name} ...", flush=True)
    r = run(["git", "clone", "--quiet", "--filter=blob:none", url, dest])
    if r.returncode != 0:  # fall back to a normal clone
        run(["git", "clone", "--quiet", url, dest])
    return dest


def list_files(repo):
    out = run(["git", "-C", repo, "ls-files"]).stdout.splitlines()
    files = []
    for p in out:
        parts = p.split("/")
        if any(d in EXCLUDE for d in parts):
            continue
        if os.path.splitext(p)[1].lower() in CODE_EXT:
            files.append(p)
    return files


def parse_history(repo):
    """Return list of (subject, set(files)) for up to MAX_COMMITS commits."""
    out = run(["git", "-C", repo, "log", f"-n{MAX_COMMITS}", "--name-only",
               "--pretty=format:__C__%n%s"]).stdout.splitlines()
    commits = []
    msg = None
    files = set()
    state = 0
    for ln in out:
        if ln == "__C__":
            if msg is not None:
                commits.append((msg, files))
            msg = None
            files = set()
            state = 1
        elif state == 1:
            msg = ln
            state = 2
        else:
            if ln.strip():
                files.add(ln.strip())
    if msg is not None:
        commits.append((msg, files))
    return commits


def select_files(candidates, commits):
    touch = Counter()
    cand = set(candidates)
    for _, fs in commits:
        for f in fs:
            if f in cand:
                touch[f] += 1
    ranked = sorted(candidates, key=lambda f: (-touch.get(f, 0), f))
    return ranked[:MAX_FILES]


def normalize01(D):
    off = D[~np.eye(len(D), dtype=bool)]
    mx = off.max() if off.size else 1.0
    mx = mx if mx > 0 else 1.0
    D = D / mx
    np.fill_diagonal(D, 0.0)
    return D


# ---- channels -------------------------------------------------------------
def m_structure(files, repo):
    n = len(files)
    comps = [f.split("/")[:-1] for f in files]
    langs = [os.path.splitext(f)[1] for f in files]
    sizes = np.array([os.path.getsize(os.path.join(repo, f)) if os.path.exists(os.path.join(repo, f)) else 0
                      for f in files], dtype=float)
    logs = np.log1p(sizes)
    logs = (logs - logs.min()) / ((logs.max() - logs.min()) or 1)
    D = np.zeros((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            ci, cj = comps[i], comps[j]
            common = 0
            for a, b in zip(ci, cj):
                if a == b:
                    common += 1
                else:
                    break
            pathd = (len(ci) + len(cj) - 2 * common) / max(1, len(ci) + len(cj))
            d = 0.6 * pathd + 0.25 * abs(logs[i] - logs[j]) + 0.15 * (langs[i] != langs[j])
            D[i, j] = D[j, i] = d
    return normalize01(D)


def m_cochange(files, commits):
    idx = {f: k for k, f in enumerate(files)}
    n = len(files)
    touch = np.zeros(n)
    co = np.zeros((n, n))
    for _, fs in commits:
        pres = [idx[f] for f in fs if f in idx]
        for a in pres:
            touch[a] += 1
        for a in range(len(pres)):
            for b in range(a + 1, len(pres)):
                co[pres[a], pres[b]] += 1
                co[pres[b], pres[a]] += 1
    D = np.ones((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            denom = touch[i] + touch[j] - co[i, j]
            jac = co[i, j] / denom if denom > 0 else 0.0
            D[i, j] = D[j, i] = 1.0 - jac
    np.fill_diagonal(D, 0.0)
    return D


def m_imports(files, repo):
    n = len(files)
    idx = {f: k for k, f in enumerate(files)}
    bases = [os.path.splitext(f)[0] for f in files]
    A = np.zeros((n, n))
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        content = read_file(os.path.join(repo, f))
        if not content:
            continue
        mods = []
        if ext == ".py":
            for m in PY_IMP.finditer(content):
                mod = m.group(1) or m.group(2)
                if mod:
                    mods.append(mod)
        elif ext in (".js", ".ts", ".jsx", ".tsx"):
            for m in JS_IMP.finditer(content):
                mod = m.group(1) or m.group(2)
                if mod and mod.startswith("."):
                    mods.append(mod)
        elif ext == ".rs":
            for m in RS_IMP.finditer(content):
                if m.group(1):
                    mods.append(m.group(1))
        i = idx[f]
        for mod in mods:
            parts = [p for p in re.split(r"[.:/]+", mod) if p and p not in ("crate", "self", "super")]
            if not parts:
                continue
            key = parts[-1]
            for t, base in enumerate(bases):
                if t != i and (base.split("/")[-1] == key or base.endswith("/" + key)):
                    A[i, t] = A[t, i] = 1
    D = np.ones((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            if A[i, j] > 0:
                D[i, j] = D[j, i] = 0.1
            else:
                ni, nj = np.linalg.norm(A[i]), np.linalg.norm(A[j])
                if ni > 0 and nj > 0:
                    D[i, j] = D[j, i] = 1.0 - np.dot(A[i], A[j]) / (ni * nj)
    np.fill_diagonal(D, 0.0)
    return D


def m_intent(files, repo, file_msgs):
    docs = []
    for f in files:
        txt = read_file(os.path.join(repo, f)) + " " + " ".join(file_msgs.get(f, []))
        docs.append([t.lower() for t in TOKEN.findall(txt)])
    N = len(docs)
    df = Counter()
    for toks in docs:
        for t in set(toks):
            df[t] += 1
    vocab = {t: k for k, t in enumerate(t for t, c in df.items() if 2 <= c <= 0.6 * N)}
    V = len(vocab)
    if V == 0:
        return np.ones((N, N)) - np.eye(N)
    idf = {t: math.log((N + 1) / (df[t] + 1)) + 1 for t in vocab}
    M = np.zeros((N, V))
    for di, toks in enumerate(docs):
        for t, c in Counter(x for x in toks if x in vocab).items():
            M[di, vocab[t]] = c * idf[t]
    nrm = np.linalg.norm(M, axis=1, keepdims=True)
    nrm[nrm == 0] = 1
    M = M / nrm
    D = 1.0 - (M @ M.T)
    np.clip(D, 0, 2, out=D)
    np.fill_diagonal(D, 0.0)
    return normalize01(D)


# ---- neural intent channel (optional: INTENT_MODE=neural) -----------------
_EMB = {}


def _embedder():
    if "m" not in _EMB:
        import torch
        from transformers import AutoTokenizer, AutoModel
        name = "sentence-transformers/all-MiniLM-L6-v2"
        tok = AutoTokenizer.from_pretrained(name)
        mod = AutoModel.from_pretrained(name)
        dev = "cuda" if torch.cuda.is_available() else "cpu"
        mod.to(dev).eval()
        _EMB["m"] = (tok, mod, torch, dev)
    return _EMB["m"]


def embed_texts(texts, batch=32):
    tok, mod, torch, dev = _embedder()
    vecs = []
    with torch.no_grad():
        for i in range(0, len(texts), batch):
            enc = tok(texts[i:i + batch], padding=True, truncation=True,
                      max_length=256, return_tensors="pt").to(dev)
            out = mod(**enc).last_hidden_state
            mask = enc["attention_mask"].unsqueeze(-1).float()
            mean = (out * mask).sum(1) / mask.sum(1).clamp(min=1e-9)
            mean = torch.nn.functional.normalize(mean, p=2, dim=1)
            vecs.append(mean.cpu().numpy())
    return np.vstack(vecs)


def m_intent_neural(files, repo, file_msgs):
    """Intent channel via MiniLM sentence embeddings of (commit msgs + content)."""
    docs = []
    for f in files:
        content = read_file(os.path.join(repo, f), 4000)
        msgs = " ".join(file_msgs.get(f, [])[:40])
        docs.append((msgs + " \n " + content)[:6000])
    E = embed_texts(docs)
    D = 1.0 - (E @ E.T)
    np.clip(D, 0, 2, out=D)
    np.fill_diagonal(D, 0.0)
    return normalize01(D)


# ---- persistence / metrics ------------------------------------------------
def h0(D):
    n = D.shape[0]
    edges = sorted((D[i, j], i, j) for i in range(n) for j in range(i + 1, n))
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    deaths = []
    for d, i, j in edges:
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri
            deaths.append(d)
    return deaths  # n-1 finite bar lengths (births=0)


def labels_at(D, eps):
    n = D.shape[0]
    parent = list(range(n))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for i in range(n):
        for j in range(i + 1, n):
            if D[i, j] <= eps:
                ri, rj = find(i), find(j)
                if ri != rj:
                    parent[rj] = ri
    return [find(i) for i in range(n)]


def threshold_gap(deaths):
    """Cut at the midpoint of the LARGEST gap in sorted merge distances.

    The persistence threshold comes from the data's own gap structure rather
    than a fixed quantile (driftwave's ADAPTIVE_SCALE). This stops sparse
    channels (e.g. imports: a wall of bars at distance 1.0) from collapsing to
    a single cluster under a median cut.
    """
    xs = sorted(v for v in deaths if np.isfinite(v))
    if len(xs) < 2:
        return xs[0] if xs else 0.5
    best_g, best_k = -1.0, 0
    for k in range(len(xs) - 1):
        g = xs[k + 1] - xs[k]
        if g > best_g:
            best_g, best_k = g, k
    if best_g <= 0:
        return float(np.median(xs))
    return (xs[best_k] + xs[best_k + 1]) / 2.0


def labels_k(D, k):
    """Single-linkage cut to EXACTLY k clusters (stop merging at k components).

    Comparing every channel at the same k makes cross-channel ARI apples-to-
    apples, independent of each channel's distance distribution -- which was the
    dominant source of ARI instability under a single distance threshold.
    """
    n = D.shape[0]
    k = max(1, min(k, n))
    edges = sorted((D[i, j], i, j) for i in range(n) for j in range(i + 1, n))
    parent = list(range(n))
    comps = n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for d, i, j in edges:
        if comps <= k:
            break
        ri, rj = find(i), find(j)
        if ri != rj:
            parent[rj] = ri
            comps -= 1
    return [find(i) for i in range(n)]


def gini(vals):
    x = np.sort(np.array([v for v in vals if v > 0 and np.isfinite(v)]))
    n = len(x)
    if n == 0:
        return 0.0
    cum = np.cumsum(x)
    return float((n + 1 - 2 * np.sum(cum) / cum[-1]) / n)


def pers_entropy(vals):
    x = np.array([v for v in vals if v > 0 and np.isfinite(v)])
    if x.size == 0:
        return 0.0
    p = x / x.sum()
    return float(-np.sum(p * np.log(p)) / math.log(len(p)) if len(p) > 1 else 0.0)


def adj_rand(a, b):
    n = len(a)
    ab = Counter(zip(a, b))
    ca, cb = Counter(a), Counter(b)
    c2 = lambda x: x * (x - 1) // 2
    s_ab = sum(c2(v) for v in ab.values())
    s_a = sum(c2(v) for v in ca.values())
    s_b = sum(c2(v) for v in cb.values())
    tot = c2(n)
    if tot == 0:
        return 1.0
    exp = s_a * s_b / tot
    mx = (s_a + s_b) / 2
    return 1.0 if mx == exp else (s_ab - exp) / (mx - exp)


def mantel(D1, D2):
    iu = np.triu_indices(len(D1), 1)
    a, b = D1[iu], D2[iu]
    if a.std() == 0 or b.std() == 0:
        return 0.0
    return float(np.corrcoef(a, b)[0, 1])


# ---- per repo -------------------------------------------------------------
def analyze(name, repo):
    cands = list_files(repo)
    commits = parse_history(repo)
    files = select_files(cands, commits)
    n = len(files)
    if n < 8:
        print(f"  [skip] {name}: only {n} files")
        return None
    fileset = set(files)
    file_msgs = defaultdict(list)
    commits_s = []
    for msg, fs in commits:
        sub = fs & fileset
        if sub:
            commits_s.append((msg, sub))
            for f in sub:
                file_msgs[f].append(msg)
    intent_fn = m_intent_neural if os.environ.get("INTENT_MODE") == "neural" else m_intent
    mats = {
        "structure": m_structure(files, repo),
        "cochange": m_cochange(files, commits_s),
        "imports": m_imports(files, repo),
        "intent": intent_fn(files, repo, file_msgs),
    }
    bars, labels, metrics = {}, {}, {}
    k = max(2, int(round(math.sqrt(n))))  # same granularity for every channel
    for ch, D in mats.items():
        deaths = h0(D)
        lab = labels_k(D, k)
        bars[ch] = deaths
        labels[ch] = lab
        metrics[ch] = {
            "n_clusters": len(set(lab)),
            "gini": gini(deaths),
            "entropy": pers_entropy(deaths),
            "max_bar": float(max(deaths)) if deaths else 0.0,
        }
    # cross-channel agreement
    ari = np.zeros((4, 4))
    man = np.zeros((4, 4))
    for i, ci in enumerate(CHANNELS):
        for j, cj in enumerate(CHANNELS):
            ari[i, j] = adj_rand(labels[ci], labels[cj])
            man[i, j] = mantel(mats[ci], mats[cj])
    iu = np.triu_indices(4, 1)
    mean_ari = float(ari[iu].mean())
    mean_man = float(man[iu].mean())
    print(f"  {name}: {n} files, {len(commits)} commits | "
          f"mean ARI={mean_ari:.3f} mean Mantel={mean_man:.3f} "
          f"cochange-gini={metrics['cochange']['gini']:.3f}")
    return dict(name=name, n_files=n, n_commits=len(commits), files=files,
                bars=bars, metrics=metrics, ari=ari.tolist(), man=man.tolist(),
                mean_ari=mean_ari, mean_man=mean_man)


# ---- plots ----------------------------------------------------------------
def plot_barcodes(results):
    R, C = len(results), 4
    fig, axes = plt.subplots(R, C, figsize=(4 * C, 2.6 * R), squeeze=False)
    for r, res in enumerate(results):
        for c, ch in enumerate(CHANNELS):
            ax = axes[r][c]
            bars = sorted([b for b in res["bars"][ch] if b > 0], reverse=True)[:30]
            for k, b in enumerate(bars):
                ax.plot([0, b], [k, k], lw=2,
                        color=plt.cm.viridis(0.15 + 0.7 * c / 3))
            ax.set_yticks([])
            ax.set_xlim(0, 1.02)
            if r == 0:
                ax.set_title(ch, fontsize=11)
            if c == 0:
                ax.set_ylabel(res["name"], fontsize=11, fontweight="bold")
    fig.suptitle("H0 persistence barcodes  (rows = repos, cols = channels; longer = more persistent structure)",
                 fontsize=12)
    fig.tight_layout(rect=[0, 0, 1, 0.97])
    p = os.path.join(OUT, "barcodes.png")
    fig.savefig(p, dpi=120)
    plt.close(fig)
    return p


def plot_agreement(results):
    R = len(results)
    ncol = min(5, R)
    nrow = (R + ncol - 1) // ncol
    fig, axes = plt.subplots(nrow, ncol, figsize=(3.2 * ncol, 3.0 * nrow), squeeze=False)
    im = None
    for r, res in enumerate(results):
        ax = axes[r // ncol][r % ncol]
        im = ax.imshow(np.array(res["ari"]), vmin=0, vmax=1, cmap="magma")
        ax.set_xticks(range(4))
        ax.set_yticks(range(4))
        ax.set_xticklabels(CHANNELS, rotation=45, ha="right", fontsize=7)
        ax.set_yticklabels(CHANNELS, fontsize=7)
        ax.set_title(f"{res['name']}  ARI={res['mean_ari']:.2f}", fontsize=9, fontweight="bold")
        for i in range(4):
            for j in range(4):
                ax.text(j, i, f"{res['ari'][i][j]:.2f}", ha="center", va="center",
                        color="white" if res["ari"][i][j] < 0.6 else "black", fontsize=6)
    for r in range(R, nrow * ncol):
        axes[r // ncol][r % ncol].axis("off")
    fig.suptitle("Cross-channel sheaf-agreement (ARI between channel clusterings, fixed k=√n per repo)", fontsize=12)
    if im is not None:
        fig.colorbar(im, ax=axes.ravel().tolist(), shrink=0.5, label="ARI")
    p = os.path.join(OUT, "agreement.png")
    fig.savefig(p, dpi=120, bbox_inches="tight")
    plt.close(fig)
    return p


def plot_refinement(results):
    fig, ax = plt.subplots(figsize=(8.5, 6))
    xs = [r["mean_man"] for r in results]
    ys = [r["metrics"]["cochange"]["gini"] for r in results]
    ss = [r["n_files"] for r in results]
    cs = [r["mean_ari"] for r in results]
    sc = ax.scatter(xs, ys, s=[70 + 4 * v for v in ss], c=cs, cmap="viridis",
                    edgecolor="k", linewidth=1, alpha=0.9)
    for r in results:
        ax.annotate(f"{r['name']}  ({r['n_files']}f,{r['n_commits']}c)",
                    (r["mean_man"], r["metrics"]["cochange"]["gini"]),
                    textcoords="offset points", xytext=(9, 4), fontsize=9, fontweight="bold")
    ax.set_xlabel("cross-channel coherence  (mean Mantel correlation, threshold-free)  →", fontsize=10)
    ax.set_ylabel("co-change Gini  →  more hierarchical evolution", fontsize=11)
    ax.set_title("Cross-repo coherence surface — high-merit OSS\n(point size = #files, color = mean ARI cluster agreement)", fontsize=12)
    ax.grid(alpha=0.3)
    ax.margins(0.18)
    fig.colorbar(sc, label="mean ARI (cluster agreement)")
    fig.tight_layout()
    p = os.path.join(OUT, "refinement_scatter.png")
    fig.savefig(p, dpi=120)
    plt.close(fig)
    return p


def main():
    global OUT
    if os.environ.get("INTENT_MODE") == "neural":
        OUT = os.path.join(WORK, "out_neural")
    os.makedirs(OUT, exist_ok=True)
    corpus = CORPUS
    if len(sys.argv) > 1:
        corpus = [tuple(a.split("=", 1)) for a in sys.argv[1:]]
    results = []
    for name, url in corpus:
        repo = clone(name, url)
        res = analyze(name, repo)
        if res:
            results.append(res)
    if not results:
        print("no results")
        return
    summary = [{k: r[k] for k in ("name", "n_files", "n_commits", "mean_ari", "mean_man", "metrics")}
               for r in results]
    with open(os.path.join(OUT, "fingerprints.json"), "w") as fh:
        json.dump(summary, fh, indent=2)
    p1 = plot_barcodes(results)
    p2 = plot_agreement(results)
    p3 = plot_refinement(results)
    print("\nPLOTS:")
    for p in (p1, p2, p3):
        print("  " + p)
    print("\nFINGERPRINTS:")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
