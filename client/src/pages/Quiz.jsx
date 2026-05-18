import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useQuiz } from '../context/QuizContext.jsx';
import { T } from '../data/translations.js';
import { STAGE_LABELS } from '../data/questions.js';
import ProgressBar from '../components/ui/ProgressBar.jsx';

export default function Quiz() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const {
    currentQuestion, currentIndex, totalQuestions, progress,
    completed, archetype, scores, answers,
    sessionId, setSessionId, userName,
    answerQuestion, goBack,
  } = useQuiz();
  const s = T[language];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const advanceTimer  = useRef(null);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (!completed || !archetype) return;
    navigate('/results');
    fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, scores, archetype, language, name: userName || null, email: null }),
    })
      .then(r => r.json())
      .then(data => { if (data.sessionId) setSessionId(data.sessionId); })
      .catch(err => console.error('Session save failed:', err));
  }, [completed, archetype]);

  // Lock window scroll for the entire Quiz screen — prevents any body/html scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = '';
    };
  }, []);

  useEffect(() => () => clearTimeout(advanceTimer.current), []);

  function handleOptionClick(e, opt, i) {
    e.preventDefault();
    e.stopPropagation();
    if (selectedIndex !== null) return;

    // Snapshot the inner container's scroll position before any state update
    const savedScrollTop = scrollAreaRef.current?.scrollTop ?? 0;

    function restoreScroll() {
      if (scrollAreaRef.current) scrollAreaRef.current.scrollTop = savedScrollTop;
    }

    setSelectedIndex(i);

    // Restore immediately and in the next two frames — covers focus-scroll timing in all browsers
    restoreScroll();
    requestAnimationFrame(() => {
      restoreScroll();
      requestAnimationFrame(restoreScroll);
    });

    advanceTimer.current = setTimeout(() => {
      restoreScroll();
      answerQuestion(currentQuestion.id, opt.type);
      setSelectedIndex(null);
    }, 240);
  }

  if (!currentQuestion) return null;

  const q = currentQuestion[language];
  const stageLabel = STAGE_LABELS[language]?.[currentQuestion.stage] ?? '';

  return (
    /* overflow:hidden + fixed height prevents ANY page-level scroll on this screen */
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--violet-950)',
    }}>

      {/* Progress bar — fixed header strip */}
      <div style={{
        flexShrink: 0,
        padding: '16px 24px 12px',
        background: 'linear-gradient(to bottom, rgba(19,8,42,0.97) 80%, transparent)',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <ProgressBar progress={progress} />
          {stageLabel && (
            <div style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {stageLabel}
            </div>
          )}
        </div>
      </div>

      {/* Scrollable question area — scroll happens inside this div, not the page */}
      <div ref={scrollAreaRef} style={{ flex: 1, overflowY: 'auto', overflowAnchor: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 24px 60px' }}>
        <div style={{ width: '100%', maxWidth: 720 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: language === 'he' ? -36 : 36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'he' ? 36 : -36 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <h2 style={{
                fontSize: 'clamp(1.05rem, 2.8vw, 1.4rem)',
                fontFamily: 'inherit',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '24px',
                lineHeight: 1.55,
              }}>
                {q.text}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {q.options.map((opt, i) => {
                  const isSelected = selectedIndex === i;
                  return (
                    /* motion.div handles only the entry animation — no Framer gesture listeners */
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <button
                        type="button"
                        /* preventDefault on mousedown stops browser focus → stops scroll-to-focus */
                        onMouseDown={e => e.preventDefault()}
                        onClick={e => handleOptionClick(e, opt, i)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '14px',
                          width: '100%',
                          padding: '16px 20px',
                          background: isSelected ? 'rgba(139,92,246,0.28)' : 'rgba(139,92,246,0.07)',
                          border: isSelected
                            ? '1px solid rgba(167,139,250,0.75)'
                            : '1px solid rgba(167,139,250,0.18)',
                          borderRadius: 'var(--radius-md)',
                          cursor: selectedIndex === null ? 'pointer' : 'default',
                          color: 'var(--text-primary)',
                          fontFamily: 'inherit',
                          fontSize: '0.95rem',
                          lineHeight: 1.5,
                          textAlign: language === 'he' ? 'right' : 'left',
                          transition: 'border-color 0.15s, background 0.15s, box-shadow 0.15s',
                          boxShadow: isSelected ? '0 0 16px rgba(139,92,246,0.3)' : 'none',
                          outline: 'none',
                        }}
                      >
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: isSelected ? 'rgba(167,139,250,0.4)' : 'rgba(167,139,250,0.15)',
                          border: isSelected ? '1px solid rgba(167,139,250,0.8)' : '1px solid rgba(167,139,250,0.3)',
                          color: isSelected ? '#fff' : 'var(--violet-400)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0,
                          transition: 'background 0.15s, border-color 0.15s, color 0.15s',
                        }}>
                          {opt.label}
                        </span>
                        {opt.text}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentIndex > 0 && selectedIndex === null && (
            <div style={{ marginTop: '20px', textAlign: language === 'he' ? 'right' : 'left' }}>
              <button
                type="button"
                onMouseDown={e => e.preventDefault()}
                onClick={goBack}
                style={{
                  background: 'none', border: 'none',
                  color: 'var(--text-muted)', cursor: 'pointer',
                  fontSize: '0.85rem', fontFamily: 'inherit', padding: '6px 0',
                }}
              >
                ← {s.back}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
