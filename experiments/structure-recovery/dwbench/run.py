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
