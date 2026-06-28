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
