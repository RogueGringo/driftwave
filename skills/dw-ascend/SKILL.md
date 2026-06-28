---
name: dw-ascend
description: "Use when L1 filtering is complete and you need to synthesize coherent structure, flag design dependencies, and review global consistency. L2/L3 are LLM-driven heuristics inspired by H₁ loops and sheaf consistency; Gini-trajectory monitoring is a real metric."
---

# L2/L3: Topological Synthesis and Sheaf-Inspired Review

The ascent from persistent clusters to coherent architecture.

> Note: at L2/L3 the "H₁ loops" and "sheaf consistency" below are **LLM-driven
> heuristics inspired by** those concepts — judgment calls, not computed homology
> or a real Laplacian kernel. Only L1's H₀ clustering is actually computed.

## L2: Loop Detection and Design Coherence (H₁ analogy)

After L1 selects an approach, the agent looks for "loops" — cross-references where one section depends on another (an H₁ analogy; not computed homology) — representing:
- Internal consistency constraints
- Circular dependencies that must resolve
- Coherence structures (architecture → data flow → error handling → testing → architecture)

Each loop that persists across scales is a genuine structural constraint. Short-lived loops are noise.

## The Gini Routing Table (SHAPE_OVER_COUNT Axiom)

The Gini trajectory — how the hierarchy of topological features evolves — dominates raw feature count. Monitor after each section/step:

| Gini Slope | Route | Meaning |
|---|---|---|
| > +0.01 | **ASCEND** | Structure is hierarchifying — proceed, expand |
| < -0.01 | **REPROBE** | Structure is degrading — descend to appropriate layer |
| Within +/- 0.01 | **HOLD** | Stable — maintain current level, await new input |
| Waypoints > 3 | **SPLIT** | Dimensional branch — decompose into independent sub-problems |

**Positive Gini trajectory tends to track design quality.** A design with 3 deeply coherent sections (positive slope) outperforms one with 12 scattered sections (negative slope).

## L3: Sheaf-Inspired Synthesis

At L3, output is no longer scalar ("good/bad") but sheaf-inspired — it carries structure.

**The sheaf-consistency check (an analogy, done by judgment):** A configuration (design, analysis, proof) is on-shell if and only if the corresponding section lies in ker(L_F) — every local component is globally consistent under the restriction maps (interfaces, transport maps, boundary conditions).

### L3 Review Protocol

1. Evaluate each component as a local section of the sheaf
2. Check global consistency: are local sections compatible under restriction maps?
3. If ker(L_F) convergence: the configuration is on-shell — proceed
4. If obstruction persists after 3 iterations: surface to human — the obstruction may be fundamental
5. If obstruction is topological (not just a fixable error): the design may need structural revision, not patching

## WAYPOINT_ROUTING Axiom

Every routing decision between layers is a topological phase transition, not a timer or checklist. Transitions fire when the persistence diagram exhibits qualitative change — not after a fixed number of steps.

## Dissolution of Smooth Obstructions (Proposition 7.1)

Obstructions in the smooth (continuous) category may dissolve in the discrete simplicial category. If an approach appears blocked, ask: is this obstruction a property of smooth structure, or does it survive on combinatorial cochains? The discrete category may offer paths that continuous reasoning cannot.
