import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { T } from '../data/translations.js';
import { ARCHETYPES } from '../data/archetypes.js';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import ParticleField from '../components/ParticleField.jsx';

export default function Report() {
  const { sessionId } = useParams();
  const location      = useLocation();
  const navigate      = useNavigate();
  const { language }  = useLanguage();
  const s = T[language];

  const [report, setReport]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const isStateReport = sessionId === 'dev-preview' || sessionId === 'free';

  useEffect(() => {
    if (isStateReport) {
      const { content, archetypeKey, plan } = location.state || {};
      if (content) {
        setReport({ content, archetype: archetypeKey, plan });
      } else {
        setError('No report content. Please go back and generate your report.');
      }
      setLoading(false);
      return;
    }

    if (sessionId) fetchReport();
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

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '60px 24px 120px' }}>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '120px 0' }}
          >
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
            {!isStateReport && <Button variant="secondary" onClick={fetchReport}>{s.reportRetry}</Button>}
          </div>
        )}

        {report && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              {archetypeData && (
                <div style={{ fontSize: '3.5rem', marginBottom: '12px' }}>{archetypeData.emoji}</div>
              )}
              <h1 style={{
                fontFamily: language === 'he' ? 'var(--font-he)' : 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                marginBottom: '8px',
                background: 'linear-gradient(135deg, var(--gold-400), var(--violet-400))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {s.reportTitle}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {report.plan?.toUpperCase()} · {archetypeData?.[language]?.name}
              </p>
            </div>

            <Card glow style={{ marginBottom: '32px' }}>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', whiteSpace: 'pre-wrap' }}>
                {report.content}
              </div>
            </Card>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="secondary"
                onClick={() => {
                  const blob = new Blob([report.content], { type: 'text/plain' });
                  const url  = URL.createObjectURL(blob);
                  const a    = document.createElement('a');
                  a.href = url;
                  a.download = `oracle-report.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                {s.downloadReport}
              </Button>
              <Button variant="ghost" onClick={() => navigate('/')}>← Home</Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
