# Hero Directive-Loop Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the docs-site lead with the `/driftwave:directive` loop (the product) instead of "Topology as Cognition," and move all topological content under an explicit "The Deeper Layer" heading.

**Architecture:** A React + Vite static site. Edits are confined to `docs-site/src/`: rewrite the `Hero` component (split layout), add a `Loop` component, reorder `App.jsx`, update `Nav.jsx` anchors, and add one responsive CSS rule to `tokens.css`. Components use inline styles + CSS custom properties (design tokens); follow that pattern.

**Tech Stack:** React 18, Vite 5, plain CSS custom properties (`docs-site/src/tokens.css`). No test runner exists and the spec forbids new deps, so verification per task is **`npm run build` succeeds + `grep` assertions** (RED before the edit, GREEN after) on the source and/or the built `dist/`.

**Spec:** `docs/superpowers/specs/2026-06-27-hero-directive-loop-design.md` (read it first).

## Global Constraints

- **Edits only under `docs-site/src/`.** No plugin runtime / scripts / schemas changes. No new dependencies.
- **Reuse existing design tokens** (`--color-primary`, `--color-text-muted`, `--color-text-faint`, `--color-bg`, `--color-border`, `--color-surface-offset`, `--color-teal`, `--color-success`, `--color-divider`, `--font-display`, `--font-mono`, `--space-*`, `--text-*`, `--radius-full`, `--radius-md`, `--shadow-lg`, `--content-wide`). Do not hardcode hex except inside the existing background-gradient rgba already in `Hero.jsx`.
- **Copy is verbatim** from this plan (it was locked in brainstorming). Do not paraphrase.
- **No topology overclaim** above the "The Deeper Layer" heading. The hero + Loop say nothing about *computed* topology.
- **Responsive:** the hero split must stack to one column ≤720px (reuse the `tokens.css` media-query pattern that `.dw-pipeline-row` already uses). Usable at 375px.
- **A11y:** `--color-text-faint` is already WCAG-AA (6.04:1); any new interactive element keeps an accessible name. Preserve the Nav mobile menu + aria-labels.
- All commands run from `docs-site/`: `cd docs-site && <cmd>`.

---

### Task 1: Rewrite the Hero (split layout C) + responsive rule

**Files:**
- Modify (rewrite): `docs-site/src/components/Hero.jsx`
- Modify: `docs-site/src/tokens.css` (append one media-query rule)

**Interfaces:**
- Produces: a default-exported `Hero` React component. Left column = eyebrow + `<h1>` + subhead + spiral hook + CTAs (`#install`, `#loop`); right column = a terminal card. Container has `className="dw-hero-split"`.

- [ ] **Step 1: Write the failing check**

Create the assertion (run it now to confirm RED — the new copy is absent and the old hero text is present):

Run:
```bash
cd docs-site
grep -q "Claude, but it" src/components/Hero.jsx && echo "NEW PRESENT" || echo "NEW ABSENT (expected RED)"
grep -q "Topology as Cognition" src/components/Hero.jsx && echo "OLD PRESENT (expected RED)" || echo "OLD GONE"
```
Expected (RED): `NEW ABSENT (expected RED)` and `OLD PRESENT (expected RED)`.

- [ ] **Step 2: Replace `Hero.jsx` with the new split hero**

Overwrite `docs-site/src/components/Hero.jsx` with exactly:

```jsx
export default function Hero() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      paddingTop: 'clamp(3rem, 8vw, 5rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)',
    }}>
      {/* Faint background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={`${import.meta.env.BASE_URL}images/Hero_banner_—_mathematician's_cosmos_with_Doberman_silhouett.jpg`}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', filter: 'brightness(0.18) saturate(0.6)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(15,13,8,0.55) 0%, rgba(15,13,8,0.4) 45%, var(--color-bg) 100%)',
        }} />
      </div>

      {/* Content: split */}
      <div className="dw-hero-split" style={{
        position: 'relative', zIndex: 1, maxWidth: 'var(--content-wide)', margin: '0 auto',
        padding: '0 var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--color-primary)', marginBottom: 'var(--space-6)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-primary)', animation: 'pdot 2.4s ease-in-out infinite' }} />
            driftwave · a claude code plugin
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)',
            fontWeight: 400, letterSpacing: '-0.035em', lineHeight: 1.05,
            marginBottom: 'var(--space-6)',
          }}>
            Claude, but it <em style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>looks</em>
            <br />before it codes.
          </h1>

          <p style={{
            fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)',
            maxWidth: '52ch', marginBottom: 'var(--space-4)', lineHeight: 1.6,
          }}>
            It checks what's there, what you asked for, and the gap — then does the work, logs it, and verifies it.
          </p>

          <p style={{
            fontSize: 'var(--text-sm)', fontStyle: 'italic', color: 'var(--color-text-faint)',
            maxWidth: '52ch', marginBottom: 'var(--space-8)', lineHeight: 1.6,
          }}>
            You know the spiral — start coding, realize you missed something, undo half your work, end up worse than you started. This is the habit that breaks it.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <a href="#install" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-8)', background: 'var(--color-primary)',
              color: 'var(--color-bg)', borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)', fontWeight: 700, textDecoration: 'none',
            }}>Install →</a>
            <a href="#loop" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-8)', border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)', borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none',
            }}>See the loop ↓</a>
          </div>
        </div>

        {/* Right: terminal proof */}
        <div style={{
          background: 'var(--color-surface-offset)', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)', padding: 'var(--space-5)',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', lineHeight: 1.7,
          color: 'var(--color-text-muted)', boxShadow: 'var(--shadow-lg)',
        }}>
          <div><span style={{ color: 'var(--color-teal)' }}>/driftwave:directive</span> add user authentication</div>
          <div style={{ marginTop: 'var(--space-3)' }}><span style={{ color: 'var(--color-primary)' }}>WHAT IS</span> — Express app · 12 routes · no auth · users table exists</div>
          <div><span style={{ color: 'var(--color-primary)' }}>WHAT'S ASKED</span> — Login / logout with sessions</div>
          <div><span style={{ color: 'var(--color-primary)' }}>THE GAP</span> — bcrypt + express-session, auth middleware,</div>
          <div style={{ paddingLeft: '1.5em' }}>login/logout routes, protect routes, test the flow</div>
          <div style={{ marginTop: 'var(--space-2)' }}>Proceed? <span style={{ color: 'var(--color-success)' }}>(y)</span></div>
        </div>
      </div>

      <style>{`@keyframes pdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.45;transform:scale(0.65)}}`}</style>
    </section>
  )
}
```

- [ ] **Step 3: Append the responsive rule to `tokens.css`**

Append to the end of `docs-site/src/tokens.css`:

```css
@media (max-width: 720px) {
  .dw-hero-split { grid-template-columns: 1fr !important; }
}
```

- [ ] **Step 4: Verify GREEN (build + assertions)**

Run:
```bash
cd docs-site
npm run build
grep -q "Claude, but it" src/components/Hero.jsx && echo "NEW PRESENT ✓"
grep -q "Topology as Cognition" src/components/Hero.jsx && echo "OLD STILL PRESENT ✗" || echo "OLD GONE ✓"
grep -q "Adaptive Topological Field Theory" src/components/Hero.jsx && echo "BADGE STILL PRESENT ✗" || echo "BADGE GONE ✓"
grep -q "dw-hero-split" src/tokens.css && echo "RESPONSIVE RULE ✓"
```
Expected: build succeeds; `NEW PRESENT ✓`, `OLD GONE ✓`, `BADGE GONE ✓`, `RESPONSIVE RULE ✓`.

- [ ] **Step 5: Commit**

```bash
git add docs-site/src/components/Hero.jsx docs-site/src/tokens.css
git commit -m "feat(site): lead hero with the directive loop (split layout) (#4)"
```

---

### Task 2: Create the `Loop` component

**Files:**
- Create: `docs-site/src/components/Loop.jsx`

**Interfaces:**
- Produces: a default-exported `Loop` React component rendering `<section id="loop">` with the `LOOK → PARSE → GAP → DO → LOG → CHECK` cycle. App.jsx (Task 3) imports it as `import Loop from './components/Loop'`.

- [ ] **Step 1: Write the failing check**

Run:
```bash
cd docs-site
test -f src/components/Loop.jsx && echo "EXISTS" || echo "ABSENT (expected RED)"
```
Expected (RED): `ABSENT (expected RED)`.

- [ ] **Step 2: Create `Loop.jsx`**

Write `docs-site/src/components/Loop.jsx` with exactly:

```jsx
const steps = ['LOOK', 'PARSE', 'GAP', 'DO', 'LOG', 'CHECK']

export default function Loop() {
  return (
    <section id="loop" style={{ padding: 'clamp(3rem, 8vw, 6rem) 0' }}>
      <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--color-primary)', marginBottom: 'var(--space-4)',
        }}>The Loop</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)',
          fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.08,
          marginBottom: 'var(--space-8)',
        }}>Look before you act. Every time.</h2>

        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap',
          gap: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)',
        }}>
          {steps.map((s, i) => (
            <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{
                padding: 'var(--space-2) var(--space-4)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-full)', color: 'var(--color-text)',
                background: 'var(--color-surface-offset)',
              }}>{s}</span>
              {i < steps.length - 1 && <span style={{ color: 'var(--color-text-faint)' }}>→</span>}
            </span>
          ))}
        </div>

        <p style={{
          fontSize: 'var(--text-base)', color: 'var(--color-text-muted)',
          marginTop: 'var(--space-6)', maxWidth: '60ch', lineHeight: 1.7,
        }}>
          Each new cycle reads the log, so mistakes don't repeat. The only two commands you
          need to start are <code>/driftwave:directive</code> and <code>/driftwave:status</code>.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify GREEN**

Run:
```bash
cd docs-site
npm run build
grep -q 'id="loop"' src/components/Loop.jsx && echo "LOOP ID ✓"
for w in LOOK PARSE GAP DO LOG CHECK; do grep -q "'$w'" src/components/Loop.jsx || echo "MISSING $w ✗"; done; echo "steps checked"
```
Expected: build succeeds; `LOOP ID ✓`; `steps checked` with no `MISSING` lines.

- [ ] **Step 4: Commit**

```bash
git add docs-site/src/components/Loop.jsx
git commit -m "feat(site): add The Loop section component (#4)"
```

---

### Task 3: Reorder `App.jsx` — product first, topology under "The Deeper Layer"

**Files:**
- Modify (rewrite): `docs-site/src/App.jsx`

**Interfaces:**
- Consumes: `Loop` (Task 2), and the existing `Hero`, `Pipeline`, `ForceGraph`, `Barcode`, `GiniChart`, `Axioms`, `Skills`, `Install`, `Footer`, `Nav` components (unchanged).
- Produces: the page order `Nav → Hero → Loop → Skills → ⟨Deeper Layer heading⟩ → Pipeline → ForceGraph → Barcode → GiniChart → Axioms → Install → Footer`.

- [ ] **Step 1: Write the failing check**

Run:
```bash
cd docs-site
grep -q "import Loop" src/App.jsx && echo "WIRED" || echo "NOT WIRED (expected RED)"
grep -q "The Deeper Layer" src/App.jsx && echo "HEADING PRESENT" || echo "HEADING ABSENT (expected RED)"
```
Expected (RED): `NOT WIRED (expected RED)` and `HEADING ABSENT (expected RED)`.

- [ ] **Step 2: Replace `App.jsx`**

Overwrite `docs-site/src/App.jsx` with exactly:

```jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import Loop from './components/Loop'
import Pipeline from './components/Pipeline'
import ForceGraph from './components/ForceGraph'
import Barcode from './components/Barcode'
import GiniChart from './components/GiniChart'
import Axioms from './components/Axioms'
import Skills from './components/Skills'
import Install from './components/Install'
import Footer from './components/Footer'

function Divider() {
  return <div style={{ height: 1, background: 'var(--color-divider)' }} />
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Loop />
        <Divider />
        <Skills />
        <Divider />
        <section id="deeper-layer" style={{ padding: 'clamp(3rem, 8vw, 5rem) 0 0' }}>
          <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--color-primary)', marginBottom: 'var(--space-4)',
            }}>The Deeper Layer</div>
            <p style={{
              fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)',
              maxWidth: '58ch', lineHeight: 1.65,
            }}>
              The optional theory underneath. driftwave runs fine whether or not you read any
              of it — the real, computed math is H₀ clustering; everything past that is a
              topology-inspired heuristic.
            </p>
          </div>
        </section>
        <Pipeline />
        <Divider />
        <ForceGraph />
        <Divider />
        <Barcode />
        <GiniChart />
        <Divider />
        <Axioms />
        <Divider />
        <Install />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Verify GREEN (build + order)**

Run:
```bash
cd docs-site
npm run build
grep -q "import Loop" src/App.jsx && echo "WIRED ✓"
grep -q "The Deeper Layer" src/App.jsx && echo "HEADING ✓"
# Loop must appear before Pipeline/ForceGraph in App.jsx source order:
awk '/<Loop \/>/{l=NR} /<Pipeline \/>/{p=NR} /<ForceGraph \/>/{f=NR} END{print (l<p && l<f) ? "ORDER ✓ (loop before topology)" : "ORDER ✗"}' src/App.jsx
```
Expected: build succeeds; `WIRED ✓`, `HEADING ✓`, `ORDER ✓ (loop before topology)`.

- [ ] **Step 4: Commit**

```bash
git add docs-site/src/App.jsx
git commit -m "feat(site): reorder page — loop/product first, topology under Deeper Layer (#4)"
```

---

### Task 4: Update `Nav.jsx` anchors

**Files:**
- Modify: `docs-site/src/components/Nav.jsx:3` (the `sections` array)

**Interfaces:**
- Consumes: section ids `loop` (Task 2), `skills`, `pipeline`, `install` (existing).

- [ ] **Step 1: Write the failing check**

Run:
```bash
cd docs-site
grep -q "'Loop'" src/components/Nav.jsx && echo "HAS LOOP" || echo "NO LOOP (expected RED)"
```
Expected (RED): `NO LOOP (expected RED)`.

- [ ] **Step 2: Edit the `sections` array**

In `docs-site/src/components/Nav.jsx`, change line 3 from:

```jsx
const sections = ['Pipeline', 'Axioms', 'Skills', 'Install']
```

to:

```jsx
const sections = ['Loop', 'Skills', 'Pipeline', 'Install']
```

(These lowercase to `#loop`, `#skills`, `#pipeline`, `#install` — all resolve. Leave the rest of `Nav.jsx`, including the mobile menu button and aria-labels, unchanged.)

- [ ] **Step 3: Verify GREEN**

Run:
```bash
cd docs-site
npm run build
grep -q "'Loop'" src/components/Nav.jsx && echo "HAS LOOP ✓"
grep -q "aria-label=\"Toggle menu\"" src/components/Nav.jsx && echo "MOBILE MENU PRESERVED ✓"
grep -q "aria-label=\"Toggle theme\"" src/components/Nav.jsx && echo "THEME ARIA PRESERVED ✓"
```
Expected: build succeeds; all three `✓`.

- [ ] **Step 4: Commit**

```bash
git add docs-site/src/components/Nav.jsx
git commit -m "feat(site): nav leads with Loop; anchors match new order (#4)"
```

---

### Task 5: Final acceptance — build, anchors, no-overclaim, responsiveness

**Files:** none (verification only; fix forward into the relevant task's file if something fails).

- [ ] **Step 1: Clean build**

Run: `cd docs-site && npm run build`
Expected: succeeds with no errors (the pre-existing three.js chunk-size warning is fine).

- [ ] **Step 2: Acceptance assertions on the built output**

Run:
```bash
cd docs-site
JS=$(ls dist/assets/index-*.js | head -1)
echo -n "value prop in build: "; grep -c "looks before it codes\|looks" "$JS" >/dev/null && echo "✓"
echo -n "loop steps in build: "; grep -q "PARSE" "$JS" && grep -q "CHECK" "$JS" && echo "✓" || echo "✗"
echo -n "'Topology as Cognition' gone from build: "; grep -q "Topology as Cognition" "$JS" && echo "✗ STILL THERE" || echo "✓"
echo -n "'Deeper Layer' present: "; grep -q "Deeper Layer" "$JS" && echo "✓" || echo "✗"
```
Expected: all `✓`; "Topology as Cognition" gone.

- [ ] **Step 3: No topology overclaim above the Deeper Layer**

Confirm by reading `src/components/Hero.jsx` and `src/components/Loop.jsx`: neither asserts computed sheaf/H₁/Betti. (They mention the loop and, in Loop, only the two commands.) This is a manual read — record the result.

- [ ] **Step 4: Responsiveness note**

The hero uses `.dw-hero-split` with the ≤720px one-column rule (Task 1); the Loop chips use `flex-wrap`. If a preview is available, eyeball at 375px width; otherwise confirm the media-query rule exists: `grep -A1 "dw-hero-split" src/tokens.css`.

- [ ] **Step 5: No commit needed** unless Step 3 found an overclaim to fix; if so, fix in `Hero.jsx`/`Loop.jsx` and commit `fix(site): remove topology overclaim from hero/loop (#4)`.

---

## Self-Review

**Spec coverage:**
- §3.1 Hero rewrite (split, copy, terminal, removals) → Task 1. ✓
- §3.2 Loop section (`#loop`, cycle, log line) → Task 2. ✓
- §3.3 App reorder + Deeper Layer heading → Task 3. ✓
- §3.4 Nav anchors + preserve mobile menu/aria → Task 4. ✓
- §4 responsive (≤720px) → Task 1 (tokens.css rule) + Task 5 check. ✓
- §4 a11y (contrast token unchanged; aria preserved) → Task 4 checks. ✓
- §5 acceptance (loop first, topology under heading, build, anchors) → Task 5. ✓
- §6 out of scope: topology components relocated not modified — confirmed (App.jsx only reorders; no edits to ForceGraph/Barcode/GiniChart/Pipeline/Axioms). ✓

**Placeholder scan:** none — every code step contains the full file/edit.

**Type/name consistency:** `Loop` default export (Task 2) matches `import Loop` (Task 3). `id="loop"` (Task 2) matches the `#loop` CTA (Task 1) and the `'Loop'`→`#loop` nav anchor (Task 4). `className="dw-hero-split"` (Task 1 Hero) matches the `.dw-hero-split` rule (Task 1 tokens.css). Section ids `skills`/`pipeline`/`install` referenced by Nav already exist in their components.

**Note:** The terminal card uses em-dash separators (`WHAT IS — …`) rather than fragile multi-space column alignment, since HTML collapses whitespace; this renders cleanly without a `<pre>`.
