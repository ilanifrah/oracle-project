import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { T } from '../data/translations.js';
import ParticleField from '../components/ParticleField.jsx';
import Button from '../components/ui/Button.jsx';

export default function Intake() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { setUserName, setEmail } = useQuiz();
  const s = T[language];
  const isRtl = language === 'he';

  const [name, setName]     = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!name.trim()) errs.name = s.intakeRequired;
    if (!emailVal.trim()) {
      errs.email = s.intakeRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal.trim())) {
      errs.email = s.intakeEmailInvalid;
    }
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setUserName(name.trim());
    setEmail(emailVal.trim());
    navigate('/quiz');
  }

  function inputStyle(hasError) {
    return {
      width: '100%',
      padding: '14px 16px',
      background: 'rgba(139, 92, 246, 0.07)',
      border: `1px solid ${hasError ? 'rgba(239,68,68,0.6)' : 'rgba(167,139,250,0.25)'}`,
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      fontFamily: 'inherit',
      fontSize: '1rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.15s',
    };
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 460 }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: '3.2rem', marginBottom: '18px', display: 'inline-block' }}
          >
            🔮
          </motion.div>
          <h1 style={{
            fontFamily: isRtl ? 'var(--font-he)' : 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--gold-400) 20%, var(--violet-400))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px',
            lineHeight: 1.15,
          }}>
            {s.intakeTitle}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            {s.intakeSubtitle}
          </p>
        </div>

        {/* Form card */}
        <div style={{
          background: 'rgba(139, 92, 246, 0.06)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '18px',
          padding: '32px',
          backdropFilter: 'blur(12px)',
        }}>
          <form onSubmit={handleSubmit} dir={isRtl ? 'rtl' : 'ltr'} noValidate>

            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '8px',
                letterSpacing: '0.04em',
              }}>
                {s.intakeName}
              </label>
              <input
                type="text"
                autoComplete="name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  setErrors(prev => ({ ...prev, name: undefined }));
                }}
                placeholder={s.intakeNamePlaceholder}
                style={inputStyle(!!errors.name)}
                dir={isRtl ? 'rtl' : 'ltr'}
              />
              {errors.name && (
                <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: '0.8rem', marginTop: '6px', margin: '6px 0 0' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{
                display: 'block',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '8px',
                letterSpacing: '0.04em',
              }}>
                {s.intakeEmail}
              </label>
              <input
                type="email"
                autoComplete="email"
                value={emailVal}
                onChange={e => {
                  setEmailVal(e.target.value);
                  setErrors(prev => ({ ...prev, email: undefined }));
                }}
                placeholder={s.intakeEmailPlaceholder}
                style={inputStyle(!!errors.email)}
                dir="ltr"
              />
              {errors.email && (
                <p style={{ color: 'rgba(239,68,68,0.85)', fontSize: '0.8rem', margin: '6px 0 0' }}>
                  {errors.email}
                </p>
              )}
            </div>

            <Button type="submit" variant="gold" size="lg" fullWidth>
              {s.intakeSubmit}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
