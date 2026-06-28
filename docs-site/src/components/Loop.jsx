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
