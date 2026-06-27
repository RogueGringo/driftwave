# Lead the Site with the Directive Loop — Hero Redesign (#4)

**Date:** 2026-06-27
**Status:** Approved design, pending spec review → implementation plan
**Scope:** `docs-site/` only (React + Vite). No plugin runtime / backend changes.

## 1. Purpose

The site's hero leads with "Topology as Cognition" + an "Adaptive Topological Field
Theory" badge, and the page order puts the topology visualizations immediately under
the hero — so the entire top of the site sells the costume, not the product. The
`/driftwave:directive` loop, which is the actual product, appears nowhere. Issue #4:
**lead the site with the directive loop; demote topology to an explicit "deeper layer."**

This is the visual counterpart to the v0.1.1 honesty work — the README already leads
with the loop; the site must match.

## 2. Decisions (locked in brainstorming)

- **Hero layout = "C / split"** — message + CTAs on the left, a live `/driftwave:directive`
  run on the right.
- **Voice = plain & warm (README voice)** with a Chopper-Stan-flavored "spiral" hook.
  Copy is fixed below — implement verbatim.
- **Reorder the page** so a new "The Loop" section leads and all topological content moves
  under a "The Deeper Layer" heading.
- **Background image:** keep the cosmos/Doberman as a *very faint* backdrop (low brightness),
  not removed.
- **Honesty preserved:** the hero and Loop sections make no claim about *computed* topology.
  Topology/sheaf/H₁ language stays only in the Deeper Layer (consistent with v0.1.1 + ROADMAP).

## 3. Components

### 3.1 `Hero.jsx` (rewrite)

Split into two columns (flex, wraps to stacked on mobile). Keep the existing dark design
tokens and the faint background image + bottom gradient.

**Left column:**
- Eyebrow (kept): pulsing amber dot + `driftwave · a claude code plugin` (mono, uppercase).
- `<h1>` (display font): **Claude, but it *looks* before it codes.** — the word "looks" wrapped
  in the amber-italic `<em>` (reuse the existing `--color-primary` em treatment).
- Subhead (`--color-text-muted`): **It checks what's there, what you asked for, and the gap — then does the work, logs it, and verifies it.**
- Spiral hook (small, `--color-text-faint`, italic): **You know the spiral — start coding, realize you missed something, undo half your work, end up worse than you started. This is the habit that breaks it.**
- CTAs: `Install →` (anchor `#install`) and `See the loop ↓` (anchor `#loop`). Reuse the
  existing primary-pill + ghost-button styles.

**Right column** — a "terminal" card (dark `--color-surface`/offset, mono, rounded, subtle border):
```
/driftwave:directive add user authentication

WHAT IS       Express app · 12 routes · no auth · users table exists
WHAT'S ASKED  Login / logout with sessions
THE GAP       1. bcrypt + express-session   2. auth middleware
              3. login/logout routes        4. protect routes   5. test

Proceed? (y)
```
Use `--color-teal` for the command, `--color-primary` for the `WHAT IS / WHAT'S ASKED / THE GAP`
labels, and `--color-success` for `(y)`.

**Removed from the hero:** the `Adaptive Topological Field Theory` badge text, the
`Topology as Cognition` H1, and the `4 / 5 / 6` (layers/axioms/skills) stat row. (The stat
row is dropped, not relocated — it's topology-framing, not product value.)

### 3.2 `Loop.jsx` (new) — `id="loop"`

Placed immediately after the hero. Presents the directive loop as the site's first real
content:
- Section label + short heading (e.g. "The Loop").
- The cycle as chips: `LOOK → PARSE → GAP → DO → LOG → CHECK`, with a return arrow back to LOOK.
- One line under it: **Each new cycle reads the log, so mistakes don't repeat.**
- Keep it consistent with the existing section styling (`Pipeline`/`Axioms` use a section
  label + heading + content; follow that pattern).

### 3.3 `App.jsx` (reorder)

New section order (dividers between as today):

```
Nav → Hero → Loop → Skills
    → ⟨ "The Deeper Layer" heading ⟩
    → Pipeline → ForceGraph → Barcode → GiniChart → Axioms
    → Install → Footer
```

Add a lightweight **"The Deeper Layer"** section heading (a styled divider with the heading +
one-line framing, e.g. "The optional theory underneath — driftwave runs fine whether or not
you read this.") immediately before `Pipeline`, so everything topological reads as opt-in
depth. This can be a tiny inline block in `App.jsx` or a `DeeperLayer.jsx` divider component —
implementer's choice; keep it minimal.

### 3.4 `Nav.jsx` (anchor update)

Update the nav anchor links to match the new order/sections (e.g. add a `Loop` link; ensure
`#install` still resolves; topology links point into the Deeper Layer). Preserve the mobile
hamburger + `aria-label`s added in v0.1.1.

## 4. Constraints

- **Responsive:** the hero split uses `flex-wrap`; it must stack cleanly under ~720px (reuse
  the responsive approach from the v0.1.1 mobile fix). Verify at 375px.
- **A11y:** preserve WCAG-AA contrast (the `--color-text-faint` token is already 6.04:1); any
  new interactive element gets an accessible name.
- **No topology overclaim** above the Deeper Layer heading.
- **Design system untouched** — reuse existing tokens, fonts, button/section styles. No new deps.

## 5. Acceptance criteria

- The first screenful communicates the directive loop and the value prop; "Topology as
  Cognition" and the ATFT badge are gone.
- A `#loop` section shows `LOOK→PARSE→GAP→DO→LOG→CHECK` above any topology content.
- All topology sections render under a visible "The Deeper Layer" heading.
- `npm run build` succeeds; layout is usable at 375px and on desktop; nav anchors resolve.

## 6. Out of scope

- No new visualizations or data; the topology components are **relocated, not modified**.
- No copy changes outside the hero + new Loop section + the Deeper-Layer one-liner.
- Plugin runtime, scripts, schemas: untouched.
- (Deferred, separate issues: #12 three.js perf, #13 WebP/srcset.)
