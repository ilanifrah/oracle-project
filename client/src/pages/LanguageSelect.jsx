import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import ParticleField from '../components/ParticleField.jsx';

export default function LanguageSelect() {
  const { chooseLanguage } = useLanguage();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}
      >
        {/* Brand */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🔮</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #f59e0b, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
            letterSpacing: '0.08em',
          }}>
            ORACLE
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Discover your money path
          </p>
        </motion.div>

        {/* Language buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', letterSpacing: '0.1em' }}>
            CHOOSE YOUR LANGUAGE · בחר שפה
          </p>

          <LangButton
            onClick={() => chooseLanguage('he')}
            label="עברית"
            sublabel="המשך בעברית"
            dir="rtl"
            delay={0.6}
          />
          <LangButton
            onClick={() => chooseLanguage('en')}
            label="English"
            sublabel="Continue in English"
            dir="ltr"
            delay={0.7}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function LangButton({ onClick, label, sublabel, dir, delay }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.04, y: -2, boxShadow: 'var(--shadow-glow)' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      dir={dir}
      style={{
        width: '280px',
        padding: '18px 32px',
        background: 'rgba(139, 92, 246, 0.12)',
        border: '1px solid rgba(167, 139, 250, 0.3)',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        fontFamily: dir === 'rtl' ? 'var(--font-he)' : 'inherit',
        textAlign: 'center',
        transition: 'border-color 0.2s',
      }}
    >
      <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{sublabel}</div>
    </motion.button>
  );
}
