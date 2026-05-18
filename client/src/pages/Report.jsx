import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { T } from '../data/translations.js';
import { ARCHETYPES } from '../data/archetypes.js';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import ParticleField from '../components/ParticleField.jsx';

// ── Markdown renderer ────────────────────────────────────

function parseBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{part}</strong>
      : part
  );
}

function renderMarkdown(text) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let listBuffer = [];
  let listKey = 0;

  function flushList(i) {
    if (listBuffer.length === 0) return;
    elements.push(
      <ul key={`list-${i}`} style={{ margin: '6px 0 18px 0', padding: 0, listStyle: 'none' }}>
        {listBuffer.map((item, j) => (
          <li key={j} style={{
            color: 'var(--text-secondary)', lineHeight: 1.8,
            marginBottom: '8px', paddingRight: '20px', position: 'relative',
          }}>
            <span style={{ position: 'absolute', right: 0, color: 'var(--violet-400)' }}>•</span>
            {parseBold(item)}
          </li>
        ))}
      </ul>
    );
    listBuffer = [];
    listKey++;
  }

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      flushList(i);
      elements.push(
        <h2 key={i} style={{
          fontSize: '1.15rem', fontWeight: 700,
          color: 'var(--gold-400)',
          borderBottom: '1px solid rgba(245,158,11,0.2)',
          paddingBottom: '10px',
          marginTop: i === 0 ? 0 : '36px',
          marginBottom: '16px',
          fontFamily: 'var(--font-he)',
          letterSpacing: '-0.01em',
        }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList(i);
      elements.push(
        <h3 key={i} style={{
          fontSize: '0.97rem', fontWeight: 600,
          color: 'var(--violet-300)',
          marginTop: '22px', marginBottom: '10px',
          fontFamily: 'var(--font-he)',
        }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      listBuffer.push(line.slice(2));
    } else if (line.trim()) {
      flushList(i);
      elements.push(
        <p key={i} style={{
          color: 'var(--text-secondary)', lineHeight: 1.9,
          marginBottom: '12px', fontSize: '0.99rem',
        }}>
          {parseBold(line)}
        </p>
      );
    } else {
      flushList(i);
    }
  });
  flushList(lines.length);
  return elements;
}

// ── Component ────────────────────────────────────────────

export default function Report() {
  const { sessionId } = useParams();
  const location      = useLocation();
  const navigate      = useNavigate();
  const { language }  = useLanguage();
  const s = T[language];

  const [report, setReport]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // State content always wins — eliminates any DB dependency
    const st = location.state;
    if (st?.content) {
      setReport({ content: st.content, archetype: st.archetypeKey, plan: st.plan });
      setLoading(false);
      return;
    }

    // Fallback: fetch from DB for shared / deep-linked reports
    if (sessionId && sessionId !== 'free' && sessionId !== 'dev-preview') {
      fetchReport();
    } else {
      setError('No report content. Please go back and generate your report.');
      setLoading(false);
    }
  }, [sessionId]);

  async function fetchReport() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/report/${sessionId}`);
      if (!res.ok) throw new Error(s.reportError);
      const data = await res.json();
      setReport(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const archetypeData = report ? ARCHETYPES[report.archetype ?? ''] : null;
  const dir = 'rtl'; // Reports are always Hebrew

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto', padding: '60px 24px 120px' }}>

        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '120px 0' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              style={{ fontSize: '3rem', marginBottom: '24px', display: 'inline-block' }}
            >
              🔮
            </motion.div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{s.reportLoading}</p>
          </motion.div>
        )}

        {error && !loading && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ color: '#ef4444', marginBottom: '24px' }}>{error}</p>
            <Button variant="secondary" onClick={() => navigate('/')}>← חזור הביתה</Button>
          </div>
        )}

        {report && !loading && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              {archetypeData && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                  style={{ fontSize: '4rem', marginBottom: '14px', display: 'inline-block' }}
                >
                  {archetypeData.emoji}
                </motion.div>
              )}
              <h1 style={{
                fontFamily: 'var(--font-he)',
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, var(--gold-400), var(--violet-400))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {s.reportTitle}
              </h1>
              {archetypeData && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {archetypeData.he?.name || archetypeData.en?.name}
                  {report.plan ? ` · ${report.plan.toUpperCase()}` : ''}
                </p>
              )}
            </div>

            {/* Report content */}
            <Card glow style={{ marginBottom: '36px', padding: '36px 40px' }}>
              <div dir={dir} style={{ textAlign: 'right' }}>
                {renderMarkdown(report.content)}
              </div>
            </Card>

            {/* Income paths section */}
            {archetypeData?.onlineIncomePaths && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ marginBottom: '36px' }}
              >
                <div style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(245,158,11,0.25)',
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(139,92,246,0.06) 100%)',
                  overflow: 'hidden',
                }}>
                  {/* Section header */}
                  <div style={{
                    padding: '24px 32px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row-reverse',
                  }}>
                    <div style={{ textAlign: 'right' }}>
                      <h2 style={{
                        fontFamily: 'var(--font-he)',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--gold-400)',
                        margin: 0,
                        marginBottom: '4px',
                      }}>
                        המסלולים המתאימים לך
                      </h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', margin: 0 }}>
                        מדורגים לפי התאמה לארכיטיפ שלך
                      </p>
                    </div>
                    <span style={{ fontSize: '1.8rem', opacity: 0.7 }}>{archetypeData.emoji}</span>
                  </div>

                  {/* Path rows */}
                  <div style={{ padding: '8px 0' }}>
                    {archetypeData.onlineIncomePaths.map((path, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '16px',
                          padding: '16px 32px',
                          borderBottom: i < archetypeData.onlineIncomePaths.length - 1
                            ? '1px solid rgba(255,255,255,0.05)'
                            : 'none',
                          flexDirection: 'row-reverse',
                        }}
                      >
                        {/* Rank badge */}
                        <div style={{
                          minWidth: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: i === 0
                            ? 'linear-gradient(135deg, var(--gold-400), #f59e0b)'
                            : i === 1
                              ? 'rgba(245,158,11,0.25)'
                              : 'rgba(139,92,246,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: i === 0 ? '#1a1a2e' : i === 1 ? 'var(--gold-400)' : 'var(--violet-300)',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}>
                          {i + 1}
                        </div>

                        {/* Text block */}
                        <div style={{ flex: 1, textAlign: 'right' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginBottom: '6px',
                            justifyContent: 'flex-end',
                          }}>
                            <span style={{
                              fontFamily: 'var(--font-he)',
                              fontSize: '0.97rem',
                              fontWeight: 600,
                              color: i === 0 ? 'var(--gold-400)' : 'var(--text-primary)',
                            }}>
                              {path.name}
                            </span>
                            <span style={{ fontSize: '1.1rem' }}>{path.icon}</span>
                          </div>
                          <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.86rem',
                            lineHeight: 1.65,
                            margin: 0,
                          }}>
                            {path.why}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="secondary"
                onClick={() => {
                  const blob = new Blob([report.content], { type: 'text/plain;charset=utf-8' });
                  const url  = URL.createObjectURL(blob);
                  const a    = document.createElement('a');
                  a.href = url;
                  a.download = 'oracle-report.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                {s.downloadReport}
              </Button>
              <Button variant="ghost" onClick={() => navigate('/')}>← {language === 'he' ? 'בית' : 'Home'}</Button>
            </div>

          </motion.div>
        )}
      </div>
    </div>
  );
}
