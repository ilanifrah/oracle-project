import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const MAX_Q = 60;
import { questions } from '../data/questions.js';
const generateId = () => `s_${Date.now()}_${Math.random().toString(36).slice(2,6)}`;

const FIRST_Q = {
  id: 'q1',
  text: 'כלכלית — מה מתחיל להתרחש בך כשאתה חושב על יצירת הכנסה עצמאית?'
};

export default function AiQuiz() {
  const navigate = useNavigate();
  const [sessionId] = useState(generateId);
  const [history, setHistory] = useState([]);
  const [question, setQuestion] = useState(FIRST_Q);
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const [phase, setPhase] = useState('question');
  const [scores, setScores] = useState({});
  const [report, setReport] = useState('');
  const [archetype, setArchetype] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    setAnswer('');
    textareaRef.current?.focus();
  }, [question]);
const LOADING_PHRASES = [
  'קורא את האנרגיה שלך…',
  'מנתח את הדפוס…',
  'בוחר את השאלה הבאה…',
  'מעמיק בפרופיל…',
  'מחשב את הארכיטיפ…',
];

useEffect(() => {
  if (!isLoading) return;
  let i = 0;
  setLoadingPhrase(LOADING_PHRASES[0]);
  const interval = setInterval(() => {
    i = (i + 1) % LOADING_PHRASES.length;
    setLoadingPhrase(LOADING_PHRASES[i]);
  }, 2500);
  return () => clearInterval(interval);
}, [isLoading]);
  const handleAnswer = async () => {
    if (answer.trim().length < 3 || isLoading) return;
    
    const myAnswer = answer.trim();
    const newHistory = [...history, { question: question.text, answer: myAnswer }];
    
    setHistory(newHistory);
    setAnswer('');
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/diagnostic/next-question`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history: newHistory,
          availableQuestions: questions,
          questionCount: newHistory.length,
          sessionId
        })
      });

      const { success, data } = await res.json();
      if (!success) throw new Error('API error');

      if (data.archetypeScores) setScores(data.archetypeScores);

      if (data.action === 'conclude' || newHistory.length >= MAX_Q) {
        await generateReport(newHistory, data.archetypeScores || scores, data.primaryArchetype);
      } else {
        setQuestion(data.question);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const generateReport = async (answers, finalScores, archetypeResult) => {
    setPhase('loading');
    try {
      const top = archetypeResult ||
        Object.entries(finalScores || {}).sort(([,a],[,b]) => b-a)[0]?.[0] || 'החכם';
      setArchetype(top);

      const res = await fetch(`${API_URL}/api/diagnostic/generate-report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: 'advanced',
          userName: '',
          userEmail: '',
          archetype: top,
          scores: finalScores,
          spiralLevel: 'orange',
          answers,
          sessionId,
          language: 'he'
        })
      });

      const { success, report: reportText } = await res.json();
      setReport(success ? reportText : 'שגיאה ביצירת הדוח.');
      setPhase('report');
    } catch (err) {
      setReport('שגיאה ביצירת הדוח.');
      setPhase('report');
    }
  };

  if (phase === 'loading') return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh',background:'#0D0E12',color:'#C9A96E',gap:'1rem'}}>
      <div style={{fontSize:'2rem'}}>☽ ✦ ☾</div>
      <p style={{fontFamily:'sans-serif'}}>מנתח את הפרופיל שלך…</p>
    </div>
  );

  if (phase === 'report') return (
    <div dir="rtl" style={{maxWidth:'640px',margin:'0 auto',padding:'2rem',background:'#0D0E12',minHeight:'100vh',color:'#E8E4DC',fontFamily:'sans-serif'}}>
      <div style={{textAlign:'center',marginBottom:'2rem'}}>
        <div style={{color:'#C9A96E',fontSize:'1.2rem'}}>☽ ✦ ☾</div>
        <h1 style={{color:'#C9A96E',fontSize:'2.5rem',margin:'0.5rem 0'}}>{archetype}</h1>
        <p style={{color:'#8A8578'}}>הארכיטיפ שלך</p>
      </div>
      <div style={{background:'#13151C',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'1.5rem',lineHeight:'1.9'}}>
        {report.split('\n').map((line,i) => line.trim() ? <p key={i}>{line}</p> : <br key={i}/>)}
      </div>
      <button onClick={() => navigate('/')} style={{width:'100%',marginTop:'1.5rem',padding:'1rem',background:'#C9A96E',border:'none',borderRadius:'8px',fontSize:'1rem',cursor:'pointer',fontWeight:'600'}}>
        חזור לדף הבית
      </button>
    </div>
  );

  const progress = Math.min((history.length / MAX_Q) * 100, 100);

  return (
    <div dir="rtl" style={{maxWidth:'640px',margin:'0 auto',padding:'2rem',background:'#0D0E12',minHeight:'100vh',color:'#E8E4DC',fontFamily:'sans-serif'}}>
      <div style={{height:'2px',background:'rgba(255,255,255,0.07)',borderRadius:'2px',marginBottom:'1rem'}}>
        <div style={{height:'100%',width:`${progress}%`,background:'linear-gradient(90deg,#7C5CBF,#C9A96E)',borderRadius:'2px',transition:'width 0.8s'}}/>
      </div>

      <div style={{fontSize:'0.8rem',color:'#8A8578',marginBottom:'1rem',display:'flex',justifyContent:'space-between'}}>
        <span>שאלה {history.length + 1}</span>
        {isLoading && <span style={{color:'#C9A96E'}}>⏳ מעבד…</span>}
      </div>

      <div style={{background:'#13151C',border:'1px solid rgba(255,255,255,0.07)',borderRadius:'12px',padding:'2rem',marginBottom:'1rem',minHeight:'120px'}}>
        <div style={{textAlign:'center',color:'#C9A96E',marginBottom:'1rem'}}>◎</div>
        <p style={{fontSize:'1.2rem',lineHeight:'1.8',textAlign:'right',margin:0}}>{question?.text}</p>
      </div>

      <textarea
        ref={textareaRef}
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="כתוב את תשובתך כאן…"
        rows={4}
        dir="rtl"
        disabled={isLoading}
        style={{width:'100%',background:'#13151C',border:`1px solid ${isLoading ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)'}`,borderRadius:'8px',padding:'1rem',color:'#E8E4DC',fontSize:'1rem',lineHeight:'1.7',resize:'vertical',outline:'none',boxSizing:'border-box',opacity: isLoading ? 0.5 : 1}}
      />

      <button
        onClick={handleAnswer}
        disabled={answer.trim().length < 3 || isLoading}
        style={{width:'100%',marginTop:'1rem',padding:'1rem',background: isLoading ? '#333' : answer.trim().length < 3 ? '#333' : '#C9A96E',border:'none',borderRadius:'8px',color: isLoading || answer.trim().length < 3 ? '#666' : '#000',fontSize:'1rem',cursor: isLoading || answer.trim().length < 3 ? 'not-allowed' : 'pointer',fontWeight:'600',transition:'all 0.3s'}}
      >
    {isLoading ? loadingPhrase || '⏳ מעבד…' : 'שלח תשובה →'}
      </button>
    </div>
  );
}