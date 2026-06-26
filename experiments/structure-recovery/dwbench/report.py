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
    clears = [r for r in rows if r["methods"]["combined"]["ari"] > r["permutation_p95"]]
    clears_floor = len(clears)
    majority = n / 2
    if clears_floor <= majority:
        verdict = "fails"
    elif beats_lou > majority and beats_war > majority and p_lou < 0.05 and p_war < 0.05:
        verdict = "beats-controls"
    else:
        verdict = "ties-controls"
    return {"n_repos": n, "beats_louvain": beats_lou, "beats_ward": beats_war,
            "sign_p_louvain": p_lou, "sign_p_ward": p_war, "verdict": verdict,
            "clears_floor": clears_floor}

def write_report(rows, agg, out_dir, all_rows=None, excluded=None):
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "results.json"), "w", encoding="utf-8") as fh:
        json.dump({"rows": all_rows if all_rows is not None else rows, "aggregate": agg}, fh, indent=2)
    lines = ["# dw-bench Pass 1 — Structure Recovery Report", "",
             f"**Verdict: {agg['verdict']}**  ",
             f"Repos: {agg['n_repos']} · beats Louvain on {agg['beats_louvain']} "
             f"(sign p={agg['sign_p_louvain']:.3g}) · beats Ward on "
             f"{agg['beats_ward']} (sign p={agg['sign_p_ward']:.3g})", "",
             "| repo | files | k | combined ARI | louvain | ward | path-prefix | perm p95 |",
             "|---|--:|--:|--:|--:|--:|--:|--:|"]
    trunc_notes = []
    for r in rows:
        m = r["methods"]
        lines.append(
            f"| {r['name']} | {r['n_files']} | {r['label_count']} | "
            f"{m['combined']['ari']:.3f} | {m['louvain']['ari']:.3f} | "
            f"{m['ward']['ari']:.3f} | {m['path_prefix']['ari']:.3f} | "
            f"{r['permutation_p95']:.3f} |")
        if r.get("truncation", {}).get("file_cap_hit"):
            trunc_notes.append(
                f"- **{r['name']}**: file cap hit — "
                f"{r['truncation']['n_files_total']} files total, "
                f"capped to {r['truncation']['n_files_kept']}")
    if trunc_notes:
        lines += ["", "### ⚠️ Truncations (coverage limited)", *trunc_notes]
    if excluded:
        lines += ["", "### Excluded repos (below min size)", *[f"- {n}" for n in excluded]]
    with open(os.path.join(out_dir, "report.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines) + "\n")
