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
