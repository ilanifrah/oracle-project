import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { T } from '../data/translations.js';
import { ARCHETYPES } from '../data/archetypes.js';
import ParticleField from '../components/ParticleField.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';

export default function Results() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { language } = useLanguage();
  const { archetype, sessionId, scores, userName } = useQuiz();
  const s = T[language];

  const [revealed, setRevealed]     = useState(false);
  const [devLoading, setDevLoading] = useState(false);
  const [devError, setDevError]     = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(t);
  }, []);

  async function handleDevBypass() {
    if (!archetypeKey) { setDevError('Complete the quiz first (no archetype set).'); return; }
    setDevLoading(true);
    setDevError(null);
    try {
      const res  = await fetch('/api/report/dev-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archetypeKey, scores, language, name: userName || null, plan: 'premium' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');
      // Pass content through router state — Report page reads it without a DB lookup
      navigate('/report/dev-preview', { state: { content: data.content, archetypeKey, plan: data.plan } });
    } catch (err) {
      setDevError(err.message);
      setDevLoading(false);
    }
  }

  const archetypeKey = archetype;
  const archetypeData = archetypeKey ? ARCHETYPES[archetypeKey] : null;
  const info = archetypeData ? archetypeData[language] : null;
  const sid = sessionId || params.get('session');

  if (!archetypeData || !info) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          style={{ fontSize: '2.5rem' }}
        >
          🔮
        </motion.div>
        <p style={{ color: 'var(--text-secondary)' }}>{s.loading}</p>
      </div>
    );
  }

  const plans = [
    { key: 'basic',    name: s.planBasicName,    price: s.planBasicPrice,    desc: s.planBasicDesc    },
    { key: 'advanced', name: s.planAdvancedName, price: s.planAdvancedPrice, desc: s.planAdvancedDesc, popular: true },
    { key: 'premium',  name: s.planPremiumName,  price: s.planPremiumPrice,  desc: s.planPremiumDesc  },
  ];

  function selectPlan(planKey) {
    if (sid) {
      navigate(`/payment/${planKey}?session=${sid}`);
    } else {
      navigate(`/payment/${planKey}`);
    }
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <div style={{ position: 'relative', zIndex: 1, padding: '60px 24px 120px', maxWidth: 800, margin: '0 auto' }}>

        {/* Archetype reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ delay: 0.8, duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
            style={{ fontSize: '5rem', marginBottom: '16px', display: 'inline-block' }}
          >
            {archetypeData.emoji}
          </motion.div>

          <p style={{ color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '12px' }}>
            {s.resultsYouAre}
          </p>

          <h1 style={{
            fontFamily: language === 'he' ? 'var(--font-he)' : 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--gold-400), var(--violet-400))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
          }}>
            {info.name}
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '24px' }}>
            {info.tagline}
          </p>

          {archetypeData.isCombo && (
            <span style={{
              display: 'inline-block', padding: '4px 16px', borderRadius: '20px',
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
              color: 'var(--gold-400)', fontSize: '0.75rem', letterSpacing: '0.12em',
              marginBottom: '20px',
            }}>
              COMBO ARCHETYPE
            </span>
          )}
        </motion.div>

        {/* Description — free teaser */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card glow style={{ marginBottom: '20px' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                {info.description}
              </p>
            </Card>

            {/* Teaser — blurred locked content */}
            <Card style={{ marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ filter: 'blur(6px)', userSelect: 'none', pointerEvents: 'none' }}>
                <h3 style={{ fontFamily: 'inherit', marginBottom: '12px', color: 'var(--gold-400)' }}>
                  {s.resultsTeaserTitle}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {s.resultsTeaserItems.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <span style={{ color: 'var(--gold-400)', flexShrink: 0 }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lock overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(19,8,42,0.5)',
                backdropFilter: 'blur(2px)',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔒</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.resultsUnlock}</p>
                </div>
              </div>
            </Card>

            {/* DEV ONLY — bypass payment */}
            {import.meta.env.DEV && (
              <div style={{
                marginBottom: '32px',
                padding: '16px 20px',
                border: '1px dashed rgba(245, 158, 11, 0.4)',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(245, 158, 11, 0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-500)', textTransform: 'uppercase' }}>
                    ⚙ Dev Mode
                  </span>
                </div>
                <button
                  onClick={handleDevBypass}
                  disabled={devLoading}
                  style={{
                    padding: '10px 20px',
                    background: devLoading ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.15)',
                    border: '1px solid rgba(245,158,11,0.5)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--gold-400)',
                    fontFamily: 'inherit',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: devLoading ? 'not-allowed' : 'pointer',
                    width: '100%',
                  }}
                >
                  {devLoading ? '⏳ Generating report with Claude...' : '⚡ Skip payment → generate AI report (dev)'}
                </button>
                {devError && (
                  <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '8px' }}>{devError}</p>
                )}
              </div>
            )}

            {/* Plan selection */}
            <h2 style={{ textAlign: 'center', fontFamily: 'inherit', fontSize: '1.3rem', marginBottom: '28px', color: 'var(--text-primary)' }}>
              {s.selectPlan}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {plans.map(plan => (
                <motion.div
                  key={plan.key}
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    style={{
                      textAlign: 'center',
                      padding: '24px 20px',
                      cursor: 'pointer',
                      border: plan.popular ? '1px solid rgba(245,158,11,0.4)' : undefined,
                    }}
                    onClick={() => selectPlan(plan.key)}
                  >
                    {plan.popular && (
                      <div style={{ color: 'var(--gold-400)', fontSize: '0.7rem', letterSpacing: '0.1em', marginBottom: '8px' }}>
                        ★ {s.mostPopular}
                      </div>
                    )}
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                      {plan.name}
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold-400)', marginBottom: '6px' }}>
                      {plan.price}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '16px' }}>{plan.desc}</p>
                    <Button
                      variant={plan.popular ? 'gold' : 'primary'}
                      size="sm"
                      fullWidth
                      onClick={() => selectPlan(plan.key)}
                    >
                      {s.planCta}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
