#!/usr/bin/env python3
"""Temporal meta-persistence — how a repo's coherence evolves over its life.

Reuses the cached clones from bench.py. For each repo, walk the commit history
chronologically in K cumulative windows. At each window compute the co-change
distance matrix over the (final) selected files using only commits up to that
point, then measure:
  - structure<->cochange coherence (Mantel): does the way files co-evolve come
    to match the final directory layout? (rising = converging on its structure)
  - co-change Gini: hierarchy/concentration of the co-change structure over time

The result is a trajectory per repo = the "barcode of barcodes" evolution trace.
"""
import os
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import bench

NAMES = ["rich", "requests", "pydantic", "httpx", "fastapi", "black", "django"]
K = 12
OUT = bench.OUT


def history_chrono(repo, maxc=4000):
    out = bench.run(["git", "-C", repo, "log", f"-n{maxc}", "--name-only",
                     "--pretty=format:__C__%n%s"]).stdout.splitlines()
    commits, msg, files, state = [], None, set(), 0
    for ln in out:
        if ln == "__C__":
            if msg is not None:
                commits.append((msg, files))
            msg, files, state = None, set(), 1
        elif state == 1:
            msg, state = ln, 2
        else:
            if ln.strip():
                files.add(ln.strip())
    if msg is not None:
        commits.append((msg, files))
    commits.reverse()  # oldest -> newest
    return commits


def trajectory(name):
    repo = os.path.join(bench.REPOS, name)
    if not os.path.isdir(os.path.join(repo, ".git")):
        print(f"  [skip] {name}: not cloned")
        return None
    cands = bench.list_files(repo)
    commits = history_chrono(repo)
    files = bench.select_files(cands, commits)
    if len(files) < 8 or len(commits) < K:
        print(f"  [skip] {name}: files={len(files)} commits={len(commits)}")
        return None
    Dstruct = bench.m_structure(files, repo)
    n = len(commits)
    xs, ginis, mantels = [], [], []
    for k in range(1, K + 1):
        end = int(round(n * k / K))
        sub = commits[:end]
        Dco = bench.m_cochange(files, sub)
        deaths = bench.h0(Dco)
        ginis.append(bench.gini(deaths))
        mantels.append(bench.mantel(Dstruct, Dco))
        xs.append(k / K)
    print(f"  {name}: {n} commits, {len(files)} files | "
          f"final layout-coherence={mantels[-1]:.3f} (start {mantels[0]:.3f})")
    return dict(name=name, xs=xs, gini=ginis, mantel=mantels, n_commits=n)


def main():
    os.makedirs(OUT, exist_ok=True)
    trajs = [t for t in (trajectory(n) for n in NAMES) if t]
    cmap = plt.cm.tab10
    # Fig 1: layout<->evolution coherence over time
    fig, ax = plt.subplots(figsize=(9, 6))
    for i, t in enumerate(trajs):
        ax.plot([x * 100 for x in t["xs"]], t["mantel"], marker="o", ms=4,
                lw=2, color=cmap(i), label=t["name"])
    ax.set_xlabel("project life  (% of commit history)  →", fontsize=11)
    ax.set_ylabel("structure ↔ co-change coherence  (Mantel)", fontsize=11)
    ax.set_title("Does each codebase converge on its own structure?\n"
                 "rising = directory layout and how-files-co-evolve come into agreement over time", fontsize=12)
    ax.grid(alpha=0.3)
    ax.legend(fontsize=9, ncol=2)
    fig.tight_layout()
    p1 = os.path.join(OUT, "evolution_coherence.png")
    fig.savefig(p1, dpi=120)
    plt.close(fig)
    # Fig 2: co-change Gini trajectory
    fig, ax = plt.subplots(figsize=(9, 6))
    for i, t in enumerate(trajs):
        ax.plot([x * 100 for x in t["xs"]], t["gini"], marker="s", ms=4,
                lw=2, color=cmap(i), label=t["name"])
    ax.set_xlabel("project life  (% of commit history)  →", fontsize=11)
    ax.set_ylabel("co-change Gini  (hierarchy of the evolution structure)", fontsize=11)
    ax.set_title("Co-change hierarchy over time\nrising = a few modules increasingly dominate change (structure crystallizing)", fontsize=12)
    ax.grid(alpha=0.3)
    ax.legend(fontsize=9, ncol=2)
    fig.tight_layout()
    p2 = os.path.join(OUT, "evolution_gini.png")
    fig.savefig(p2, dpi=120)
    plt.close(fig)
    print("\nPLOTS:\n  " + p1 + "\n  " + p2)


if __name__ == "__main__":
    main()
