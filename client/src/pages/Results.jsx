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

  const [revealed, setRevealed]       = useState(false);
  const [generating, setGenerating]   = useState(false);
  const [genError, setGenError]       = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(t);
  }, []);

  async function handleGenerate() {
    if (!archetypeKey) { setGenError('Complete the quiz first.'); return; }
    setGenerating(true);
    setGenError(null);
    try {
      const res = await fetch('/api/report/free-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archetypeKey, scores, language, name: userName || null, sessionId: sid || null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');
      if (sid) {
        navigate(`/report/${sid}`);
      } else {
        navigate('/report/free', { state: { content: data.content, archetypeKey, plan: data.plan } });
      }
    } catch (err) {
      setGenError(err.message);
      setGenerating(false);
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

            {/* Generate CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ textAlign: 'center', marginTop: '8px' }}
            >
              <Button
                variant="gold"
                size="lg"
                fullWidth
                onClick={handleGenerate}
                disabled={generating}
              >
                {generating ? `🔮 ${s.reportLoading}` : s.generateReport}
              </Button>
              {genError && (
                <p style={{ color: '#f87171', fontSize: '0.85rem', marginTop: '12px' }}>{genError}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
