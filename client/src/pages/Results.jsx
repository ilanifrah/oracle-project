import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { T } from '../data/translations.js';
import { ARCHETYPES } from '../data/archetypes.js';
import { questions as QUESTIONS } from '../data/questions.js';
import ParticleField from '../components/ParticleField.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';

const ANALYTICS_URL = 'https://script.google.com/macros/s/AKfycbxR6Sn-48QKqp-SFrQNEGPHuOTLkjOn429p16crl_DJhYfvCbd2yk2jDvbC9uqdwUQ3jg/exec';

const HE_SCORE_LABELS = {
  sage: 'החכם', builder: 'הבונה', creator: 'היוצר',
  connector: 'המחבר', hunter: 'הצייד',
};

function fireAnalytics({ archetypeKey, scores, language, answers }) {
  try {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const date = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
    const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

    const startRaw = localStorage.getItem('oracle_quiz_start');
    const completionMinutes = startRaw
      ? Math.round((Date.now() - parseInt(startRaw, 10)) / 60000)
      : null;
    localStorage.removeItem('oracle_quiz_start');

    const archetypeName = ARCHETYPES[archetypeKey]?.he?.name ?? archetypeKey;
    const heScores = Object.fromEntries(
      Object.entries(scores).map(([k, v]) => [HE_SCORE_LABELS[k] ?? k, v])
    );

    const answerLabels = {};
    if (answers) {
      for (const [qId, type] of Object.entries(answers)) {
        const q = QUESTIONS.find(q => q.id === parseInt(qId, 10));
        if (q) {
          const opt = q.he.options.find(o => o.type === type);
          if (opt) answerLabels[qId] = opt.label;
        }
      }
    }

    fetch(ANALYTICS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        time,
        archetype: archetypeName,
        scores: heScores,
        language: language === 'he' ? 'עברית' : 'English',
        completionMinutes,
        answers: answerLabels,
      }),
    }).catch(() => {});
  } catch (_) {}
}

const BASE_TYPES = ['sage', 'builder', 'creator', 'connector', 'hunter'];

const COMBO_COMPONENTS = {
  visionary: ['sage', 'hunter'],
  alchemist: ['sage', 'creator'],
  sovereign: ['builder', 'connector'],
};

export default function Results() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { language } = useLanguage();
  const { archetype, sessionId, scores, userName, answers } = useQuiz();
  const s = T[language];

  const [revealed, setRevealed]     = useState(false);
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError]     = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (archetypeKey) fireAnalytics({ archetypeKey, scores, language, answers });
  }, []);

  const archetypeKey  = archetype;
  const archetypeData = archetypeKey ? ARCHETYPES[archetypeKey] : null;
  const info          = archetypeData ? archetypeData[language] : null;
  const sid           = sessionId || params.get('session');

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  const comboKeys  = COMBO_COMPONENTS[archetypeKey] || [];

  function isHighlighted(key) {
    if (archetypeKey === key) return true;
    if (comboKeys.includes(key)) return true;
    return false;
  }

  async function handleGenerate() {
    if (!archetypeKey) { setGenError('Complete the quiz first.'); return; }
    setGenerating(true);
    setGenError(null);
    try {
      const res = await fetch('/api/report/free-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          archetypeKey,
          scores,
          language,
          name:      userName || null,
          sessionId: sid || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');

      // Always pass content via state — eliminates any DB dependency
      navigate(`/report/${sid || 'free'}`, {
        state: { content: data.content, archetypeKey, plan: data.plan },
      });
    } catch (err) {
      setGenError(err.message);
      setGenerating(false);
    }
  }

  if (!archetypeData || !info) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} style={{ fontSize: '2.5rem' }}>
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

      <div style={{ position: 'relative', zIndex: 1, padding: '60px 24px 120px', maxWidth: 820, margin: '0 auto' }}>

        {/* ── Archetype reveal ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          {/* Animated emoji with glow ring */}
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', inset: '-12px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
              }}
            />
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ delay: 0.8, duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
              style={{ fontSize: '5.5rem', display: 'inline-block', position: 'relative' }}
            >
              {archetypeData.emoji}
            </motion.div>
          </div>

          <p style={{ color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '10px' }}>
            {s.resultsYouAre}
          </p>

          <h1 style={{
            fontFamily: language === 'he' ? 'var(--font-he)' : 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--gold-400) 20%, var(--violet-400))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px',
            lineHeight: 1.1,
          }}>
            {info.name}
          </h1>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '16px' }}>
            {info.tagline}
          </p>

          {archetypeData.isCombo && (
            <span style={{
              display: 'inline-block', padding: '4px 16px', borderRadius: '20px',
              background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
              color: 'var(--gold-400)', fontSize: '0.72rem', letterSpacing: '0.12em',
            }}>
              {language === 'he' ? 'ארכיטיפ משולב' : 'COMBO ARCHETYPE'}
            </span>
          )}
        </motion.div>

        {revealed && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            {/* ── Description card ───────────────────────── */}
            <Card glow style={{ marginBottom: '24px', textAlign: language === 'he' ? 'right' : 'left' }} dir={language === 'he' ? 'rtl' : 'ltr'}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1.02rem' }}>
                {info.description}
              </p>
            </Card>

            {/* ── Score breakdown bars ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card style={{ marginBottom: '24px', padding: '24px' }}>
                <p style={{
                  color: 'var(--text-muted)', fontSize: '0.72rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  marginBottom: '20px', textAlign: 'center',
                }}>
                  {language === 'he' ? 'פרופיל הארכיטיפים שלך' : 'Your Archetype Profile'}
                </p>

                {BASE_TYPES.map((key, idx) => {
                  const arch = ARCHETYPES[key];
                  const pct  = Math.round(((scores[key] || 0) / totalScore) * 100);
                  const hi   = isHighlighted(key);
                  return (
                    <div key={key} style={{ marginBottom: idx < BASE_TYPES.length - 1 ? '14px' : 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{
                          fontSize: '0.88rem',
                          color: hi ? 'var(--gold-400)' : 'var(--text-secondary)',
                          display: 'flex', alignItems: 'center', gap: '8px',
                          fontWeight: hi ? 600 : 400,
                        }}>
                          <span>{arch.emoji}</span>
                          <span>{arch[language]?.name}</span>
                        </span>
                        <span style={{ fontSize: '0.75rem', color: hi ? 'var(--gold-400)' : 'var(--text-muted)', minWidth: '34px', textAlign: 'right', fontWeight: hi ? 600 : 400 }}>
                          {pct}%
                        </span>
                      </div>
                      <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.9, delay: 0.3 + idx * 0.08, ease: 'easeOut' }}
                          style={{
                            height: '100%',
                            borderRadius: '4px',
                            background: hi
                              ? 'linear-gradient(90deg, var(--gold-400), var(--violet-400))'
                              : 'rgba(139, 92, 246, 0.3)',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Card>
            </motion.div>

            {/* ── Key traits ─────────────────────────────── */}
            {info.firstMove && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card style={{ marginBottom: '24px', borderLeft: '3px solid var(--gold-400)', padding: '20px 24px' }} dir={language === 'he' ? 'rtl' : 'ltr'}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {language === 'he' ? 'הצעד הראשון שלך' : 'Your First Move'}
                  </p>
                  <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontSize: '0.97rem' }}>
                    {info.firstMove}
                  </p>
                </Card>
              </motion.div>
            )}

            {/* ── Warning sign ───────────────────────────── */}
            {info.warningSign && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card style={{ marginBottom: '28px', borderLeft: '3px solid rgba(239,68,68,0.6)', padding: '20px 24px' }} dir={language === 'he' ? 'rtl' : 'ltr'}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {language === 'he' ? 'סימן האזהרה שלך' : 'Your Warning Sign'}
                  </p>
                  <p style={{ color: 'rgba(239,68,68,0.85)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {info.warningSign}
                  </p>
                </Card>
              </motion.div>
            )}

            {/* ── Generate CTA ───────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
                {language === 'he'
                  ? 'הדוח המלא כולל ניתוח עמוק, 5 נתיבי הכנסה ותוכנית 30 יום'
                  : 'Full report includes deep analysis, 5 income paths, and a 30-day plan'}
              </p>
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
