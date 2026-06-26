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
