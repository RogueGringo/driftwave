---
name: dw-filter
description: "Use when raw artifacts have been collected (L0 complete) and you need to identify stable clusters, viable approaches, or persistent structure. L1 layer — applies Vietoris-Rips filtration and H₀ persistent clustering to route modules."
---

# L1: Persistent Clustering and Module Routing

Takes the raw point cloud from L0 and identifies what persists across scales.

## Core Operation

Construct the Vietoris-Rips complex across an adaptive epsilon-range. Compute H₀ persistence. The barcode reveals which clusters are real (long bars) versus noise (short bars).

## Adaptive Scale (ADAPTIVE_SCALE Axiom)

The filtration scale is NEVER fixed by the user. It is extracted from the data's own geometry:

- The cluster cut is the **median bar lifetime** — exactly what
  `compute_persistence.py` computes, pinned in driftwave.pin.json (earlier
  docs said "95th percentile of pairwise distances"; the code never did that)
- The number of clusters that emerge is determined by where the natural gaps fall
- Sometimes 2 approaches, sometimes 5 — determined by persistence, not preference
- Known property (see docs/HARNESS.md): most merges are intra-group, so the
  median cut lands inside the intra-group distribution — jittered tight groups
  can fragment. The selftest asserts recovery on exact fixtures for this reason.

## H₀ Barcode Interpretation

| Bar Lifetime | Meaning | Action |
|---|---|---|
| Long (> median lifetime) | Stable cluster — a robust, persistent feature | Promote to L1 module |
| Short (<= median lifetime) | Topological noise — tangential or unstable | Discard (YAGNI) |
| ALL bars short | No clear clustering — input space too diffuse | REPROBE — return to L0 |

## Routing Decisions

After H₀ analysis:

- **Clear clusters emerge**: Present as distinct approaches/modules. The longest bar = the recommended option (most persistent, most robust to perturbation).
- **No clear clusters**: Fire REPROBE signal. Descend to L0. Ask more questions, collect more data, run more experiments.
- **Single dominant cluster**: The problem may be simpler than expected. Proceed directly with that module to L2.

## UPWARD_FLOW Axiom

L1 can only be reached from L0. Never skip directly to clustering without raw ingestion. The Cech-de Rham bridge guarantees faithful transfer between layers — but only in the correct direction.

## Output

A set of persistent modules (clusters) with their lifetimes, ready for L2 topological synthesis.
