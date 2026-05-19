import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import ParticleField from '../components/ParticleField.jsx';
import Button from '../components/ui/Button.jsx';

const PLANS = [
  {
    key: 'basic',
    nameHe: 'בסיס',
    nameEn: 'Basic',
    price: '$5',
    featuresHe: [
      'ארכיטיפ + תיאור פרופיל',
      '3 נתיבי הכנסה מתאימים',
      'צעד פעולה אחד ספציפי',
    ],
    featuresEn: [
      'Archetype + profile description',
      '3 matching income paths',
      '1 specific action step',
    ],
  },
  {
    key: 'advanced',
    nameHe: 'מתקדם',
    nameEn: 'Advanced',
    price: '$12',
    recommended: true,
    featuresHe: [
      'דוח עמוק: כוחות, חסמים, דפוסים',
      '7 נתיבי הכנסה עם הסברים',
      '3 צעדי פעולה קונקרטיים',
      'ניתוח מה מעכב אותך',
    ],
    featuresEn: [
      'Deep report: strengths, blocks, patterns',
      '7 income paths with explanations',
      '3 concrete action steps',
      'Analysis of what holds you back',
    ],
  },
  {
    key: 'premium',
    nameHe: 'פרימיום',
    nameEn: 'Premium',
    price: '$29',
    featuresHe: [
      'הכל במתקדם',
      'ניתוח פסיכולוגי עמוק (צל / IFS / סומטי)',
      'תוכנית פעולה אישית — 30 יום',
      'כל נתיבי ההכנסה מדורגים',
      'המלצות כלים ופלטפורמות ספציפיות',
    ],
    featuresEn: [
      'Everything in Advanced',
      'Deep psychological analysis (shadow / IFS / somatic)',
      'Personal 30-day action plan',
      'All income paths ranked by fit',
      'Specific tool & platform recommendations',
    ],
  },
];

export default function Plan() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { setPlan } = useQuiz();
  const isRtl = language === 'he';

  const [selected, setSelected] = useState('advanced');

  function handleContinue() {
    setPlan(selected);
    navigate('/quiz');
  }

  const titleHe = 'בחר את עומק הדוח שלך';
  const titleEn = 'Choose your report depth';
  const ctaHe   = 'המשך למבדק';
  const ctaEn   = 'Continue to Assessment';

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', overflow: 'hidden' }}>
      <div className="bg-animated" />
      <ParticleField />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 860 }}
      >
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{
            fontFamily: isRtl ? 'var(--font-he)' : 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--gold-400) 20%, var(--violet-400))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {isRtl ? titleHe : titleEn}
          </h1>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
          direction: isRtl ? 'rtl' : 'ltr',
        }}>
          {PLANS.map((p, i) => {
            const isSelected = selected === p.key;
            const name     = isRtl ? p.nameHe : p.nameEn;
            const features = isRtl ? p.featuresHe : p.featuresEn;

            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                onClick={() => setSelected(p.key)}
                style={{
                  position: 'relative',
                  background: isSelected
                    ? 'rgba(245,158,11,0.07)'
                    : 'rgba(139,92,246,0.06)',
                  border: isSelected
                    ? '2px solid rgba(245,158,11,0.75)'
                    : '1px solid rgba(139,92,246,0.2)',
                  borderRadius: '16px',
                  padding: '24px 22px 22px',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? '0 0 28px rgba(245,158,11,0.15)'
                    : 'none',
                  transition: 'border-color 0.18s, box-shadow 0.18s, background 0.18s',
                }}
              >
                {/* Recommended badge */}
                {p.recommended && (
                  <span style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--gold-500), var(--gold-400))',
                    color: '#1a0e35',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    padding: '3px 14px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                  }}>
                    {isRtl ? 'מומלץ' : 'RECOMMENDED'}
                  </span>
                )}

                {/* Plan name + price */}
                <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                  <div style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--gold-400)' : 'var(--text-primary)',
                    marginBottom: '6px',
                    fontFamily: isRtl ? 'var(--font-he)' : 'inherit',
                    transition: 'color 0.18s',
                  }}>
                    {name}
                  </div>
                  <div style={{
                    fontSize: '1.7rem',
                    fontWeight: 800,
                    color: isSelected ? 'var(--gold-400)' : 'var(--text-primary)',
                    lineHeight: 1,
                    transition: 'color 0.18s',
                  }}>
                    {p.price}
                  </div>
                </div>

                {/* Feature list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {features.map((f, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: j < features.length - 1 ? '9px' : 0,
                      flexDirection: isRtl ? 'row-reverse' : 'row',
                    }}>
                      <span style={{
                        color: isSelected ? 'var(--gold-400)' : 'var(--violet-400)',
                        fontSize: '0.8rem',
                        marginTop: '2px',
                        flexShrink: 0,
                        transition: 'color 0.18s',
                      }}>✓</span>
                      <span style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        lineHeight: 1.5,
                        textAlign: isRtl ? 'right' : 'left',
                      }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Button variant="gold" size="lg" onClick={handleContinue}>
            {isRtl ? ctaHe : ctaEn}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
