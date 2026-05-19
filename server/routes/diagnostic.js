// server/routes/diagnostic.js
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const router = express.Router();
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbzbcpw9bt2FUX6AljDeNVlLyBzfl8K6wTNNTPv38M69uA38Z-vgvnktLH14prZvNNhj/exec';

const DIAGNOSTIC_SYSTEM_PROMPT = `
אתה מנוע האבחון של ORACLE.
תפקידך לנהל שיחה אבחונית דינמית ואדפטיבית.

8 ארכיטיפים לזיהוי:
החכם, הבונה, היוצר, המחבר, הציד, הריבון, האלכימאי, החוזה

בכל סיבוב תקבל היסטוריית שאלות ותשובות ומאגר שאלות זמינות.
החזר JSON בלבד בפורמט הזה:
{
  "action": "next_question" או "conclude",
  "question": {
    "id": "string",
    "text": "שאלה בעברית",
    "source": "bank" או "generated",
    "rationale": "למה בחרת שאלה זו"
  },
  "archetypeScores": {
    "החכם": 0.0,
    "הבונה": 0.0,
    "היוצר": 0.0,
    "המחבר": 0.0,
    "הציד": 0.0,
    "הריבון": 0.0,
    "האלכימאי": 0.0,
    "החוזה": 0.0
  },
  "spiralLevel": "orange",
  "confidence": 0.0,
  "primaryArchetype": null
}

כללים:
- מינימום 20 שאלות, מקסימום 60
- אל תחזור על שאלה שנשאלה
- אחרי 20 שאלות אם confidence מעל 0.85 אפשר להסיק מסקנה
- החזר JSON בלבד ללא הקדמות
`;

router.post('/next-question', async (req, res) => {
  try {
    const { history, availableQuestions, questionCount, sessionId } = req.body;

    const userMessage = `
היסטוריית השיחה (${questionCount} שאלות עד כה):
${history.map((h, i) => `שאלה ${i+1}: ${h.question}\nתשובה: ${h.answer}`).join('\n\n')}

שאלות זמינות במאגר:
${availableQuestions.map(q => `ID: ${q.id} | ממד: ${q.dimension} | טקסט: ${q.text}`).join('\n')}

${questionCount >= 20 ? 'ניתן להסיק מסקנה אם הביטחון גבוה' : `צריך עוד ${20 - questionCount} שאלות לפחות`}

החזר JSON בלבד.
`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: DIAGNOSTIC_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }]
    });

    const raw = response.content[0].text.trim();
    const clean = raw.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    if (result.action === 'next_question' && result.question?.source === 'generated') {
      logNewQuestion(result.question, sessionId).catch(console.error);
    }

    res.json({ success: true, data: result });

  } catch (err) {
    console.error('[diagnostic/next-question]', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

router.post('/generate-report', async (req, res) => {
  try {
    const { plan, userName, userEmail, archetype, scores, spiralLevel, answers, sessionId, language } = req.body;

    const depthMap = {
      basis: 'קצר ותמציתי — 3 פסקאות',
      advanced: 'מעמיק — כולל דפוסים ודרכי פעולה',
      premium: 'מלא — כולל ניתוח צל, IFS, ומפת דרכים'
    };

    const prompt = `
אתה ORACLE. צור דוח אישי ${depthMap[plan] || depthMap.basis} עבור ${userName || 'המשתמש'}.
ארכיטיפ: ${archetype}
רמת ספירל: ${spiralLevel}
ציונים: ${JSON.stringify(scores)}

תשובות (${answers.length} שאלות):
${answers.map((a, i) => `${i+1}. ש: ${a.question}\nת: ${a.answer}`).join('\n\n')}

כתוב בעברית, בצורה עמוקה ואישית.
`;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }]
    });

    const report = response.content[0].text;

    logSession({ sessionId, userName, userEmail, plan, archetype, scores, spiralLevel, language: language || 'he', questionCount: answers.length, answers, completionTime: new Date().toISOString() }).catch(console.error);

    res.json({ success: true, report, archetype, scores });

  } catch (err) {
    console.error('[diagnostic/generate-report]', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

async function logSession(data) {
  try {
    await fetch(GOOGLE_SHEETS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'session', ...data, answers: JSON.stringify(data.answers), scores: JSON.stringify(data.scores) })
    });
  } catch (err) {
    console.error('[logSession]', err);
  }
}

async function logNewQuestion(question, sessionId) {
  try {
    await fetch(GOOGLE_SHEETS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'new_question', sheetTab: 'שאלות חדשות', sessionId, questionId: question.id, questionText: question.text, rationale: question.rationale, timestamp: new Date().toISOString(), status: 'pending_review' })
    });
  } catch (err) {
    console.error('[logNewQuestion]', err);
  }
}

export default router;