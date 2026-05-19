import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { T } from '../data/translations.js';
import { ARCHETYPES, ARCHETYPE_ORDER } from '../data/archetypes.js';
import ParticleField from '../components/ParticleField.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Landing() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const s = T[language];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="bg-animated" />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px' }}>
        <ParticleField />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1, maxWidth: 760 }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔮</div>
          <h1 style={{
            fontFamily: language === 'he' ? 'var(--font-he)' : 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #f9f7ff 30%, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
          }}>
            {s.heroTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', marginBottom: '48px', maxWidth: 560, margin: '0 auto 48px' }}>
            {s.heroSubtitle}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={() => navigate('/intake')}>
              {s.heroCtaPrimary}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              {s.heroCtaSecondary}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '20px' }}>
              <span className="gold-text">{s.aboutTitle}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>{s.aboutText}</p>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.h2 {...fadeUp()} style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '56px' }}>
            <span className="violet-text">{s.howTitle}</span>
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '✍️', title: s.howStep1, sub: s.howStep1Sub, n: '01' },
              { icon: '🔮', title: s.howStep2, sub: s.howStep2Sub, n: '02' },
              { icon: '⚡', title: s.howStep3, sub: s.howStep3Sub, n: '03' },
            ].map((step, i) => (
              <motion.div key={step.n} {...fadeUp(i * 0.15)}>
                <Card glow style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{step.icon}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '8px' }}>{step.n}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: 'inherit' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{step.sub}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Archetypes preview ────────────────────────────── */}
      <section style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.h2 {...fadeUp()} style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: '56px' }}>
            <span className="gold-text">{s.archetypesTitle}</span>
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {ARCHETYPE_ORDER.map((key, i) => {
              const arch = ARCHETYPES[key];
              const info = arch[language];
              return (
                <motion.div key={key} {...fadeUp(i * 0.08)}>
                  <Card hover style={{ textAlign: 'center', padding: '24px 20px' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{arch.emoji}</div>
                    <h3 style={{ fontSize: '1rem', fontFamily: 'inherit', marginBottom: '6px' }}>{info.name}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{info.tagline}</p>
                    {arch.isCombo && (
                      <span style={{
                        display: 'inline-block', marginTop: '10px',
                        padding: '2px 10px', borderRadius: '20px',
                        background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                        color: 'var(--gold-400)', fontSize: '0.68rem', letterSpacing: '0.08em',
                      }}>
                        COMBO
                      </span>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────── */}
      <section style={{ padding: '80px 24px 120px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <Button variant="gold" size="lg" onClick={() => navigate('/intake')}>
            {s.startQuiz}
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
