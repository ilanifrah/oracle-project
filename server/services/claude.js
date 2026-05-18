import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = 'claude-sonnet-4-6';

function formatIncomePaths(paths) {
  return paths.map((p, i) =>
    `${i + 1}. ${p.name}\n   למה מתאים: ${p.why}\n   זמן לכסף ראשון: ${p.timeToFirstIncome}\n   פעולה ראשונה: ${p.firstAction}`
  ).join('\n\n');
}

function buildHebrewPrompt({ plan, archetypeName, tagline, warningSign, scores, name, incomePathsBlock }) {
  const nameRef = name ? `${name}, ` : '';

  const base = `אתה Oracle — מנוע אבחון פסיכולוגי חד, ישיר ומדויק המתמחה בנתיבי יצירת הכנסה מקוונת.
המשתמש השלים מבדק אבחוני מקיף.${name ? `\nשם: ${name}` : ''}
ארכיטיפ: ${archetypeName} — ${tagline}
ציוני גלם: ${JSON.stringify(scores)}
${incomePathsBlock}

כללי כתיבה — חובה מוחלטת:
• כתוב בעברית גברית (זכר) בלבד — "אתה", "שלך", "תעשה", "שייך לך"
• סגנון: ישיר, חד, פסיכולוגי. ללא שבחים ריקים. ללא ניסוחים גנריים
• פנה ישירות למשתמש — "אתה רואה", "הכוח שלך", לא "ארכיטיפ זה" או "אנשים כאלה"
• כל עצה — ספציפית, עם פועל + מה + מתי. לא "חשוב על" או "שקול"`.trim();

  if (plan === 'premium') {
    return `${base}

כתוב דוח פרמיום שלם. אורך: 2000–2500 מילים. השתמש בדיוק בכותרות הבאות (## לסעיף ראשי, ### לתת-סעיף):

## הפרופיל שלך: ${archetypeName}
${nameRef}[6–8 משפטים. מה הדפוס הפסיכולוגי העמוק שמניע אותך? איך אתה מייצר ערך בצורה שונה מאחרים? מה מערכת היחסים שלך עם כסף, יצירה ועצמאות? כתוב ספציפי — לא תיאור גנרי אלא ניתוח של מי שהוא.]

## הכוחות שלך
[5 כוחות ייחודיים לארכיטיפ זה. עבור כל כוח:
**[שם הכוח]**: 2–3 משפטים — מה הכוח הספציפי הזה, ואיך בדיוק לנצל אותו ביצירת הכנסה מקוונת. לא תיאורטי — מעשי.]

## הצל שלך — הדפוס שחוזר
[3–4 משפטים. מה הדפוס הלא-מודע הספציפי שמעכב ארכיטיפ זה? מה הפחד העמוק שמניע אותו? מה המחיר שהוא משלם? כתוב כאילו אתה מכיר אותו עמוק — ישיר, לא שיפוטי, מדויק.]

## 5 נתיבי ההכנסה המדויקים לך
[עבור כל אחד מ-5 נתיבי ההכנסה שסיפקתי לעיל:]
### [שם הנתיב]
**למה זה מתאים לך**: [2 משפטים — פסיכולוגיים וספציפיים לארכיטיפ הזה, לא גנריים]
**זמן לכסף ראשון**: [הזמן]
**הפעולה שלך עכשיו**: [משפט אחד. פועל ממשי + מה בדיוק + מתי. ניתן לביצוע השבוע. לא "תבדוק" — "שלח הודעה ל-X", "פרסם פוסט על Y ביום ד'", "צור עמוד Gumroad ב-Z ומחיר $XX"]

## תוכנית הפעולה שלך — 30 יום
### שבוע 1 — [כותרת תמטית]
- [פעולה 1 — ספציפית]
- [פעולה 2 — ספציפית]
- [פעולה 3 — ספציפית]
### שבוע 2 — [כותרת תמטית]
- [3 פעולות ספציפיות]
### שבוע 3 — [כותרת תמטית]
- [3 פעולות ספציפיות]
### שבוע 4 — [כותרת תמטית]
- [3 פעולות ספציפיות]

## הצעד שלך — עכשיו, היום
[משפט אחד. פעולה פיזית אחת שניתן לבצע תוך שעה מהרגע הזה. ספציפי לארכיטיפ ולנתיב ההכנסה הראשי. לא "תתחיל לחשוב על" — פועל + מה + מתי. זה המשפט הכי חשוב בדוח כולו.]

## הסימן שיגיד לך שיצאת מהנתיב
[משפט אחד: ההתנהגות הספציפית שמסמנת שאתה חרגת מהנתיב שלך. ${warningSign ? `בסיס: ${warningSign}` : ''}]`;
  }

  if (plan === 'advanced') {
    return `${base}

כתוב דוח מתקדם. אורך: 1200–1600 מילים. כותרות:

## הפרופיל שלך: ${archetypeName}
[5–6 משפטים על הדפוס הפסיכולוגי.]

## הכוחות שלך
[4 כוחות עם יישום מעשי לכל אחד.]

## הצל שלך
[2–3 משפטים על הדפוס שמעכב.]

## 5 נתיבי ההכנסה המדויקים לך
[לכל נתיב: שם, למה מתאים פסיכולוגית, פעולה ראשונה ספציפית.]

## 3 הצעדים שלך
[3 צעדים מסודרים — ראשון, שני, שלישי, ולמה בסדר הזה.]

## הסימן שיגיד לך שיצאת מהנתיב
[משפט אחד.]`;
  }

  return `${base}

כתוב דוח בסיסי. אורך: 700–900 מילים. כותרות:

## הפרופיל שלך: ${archetypeName}
[3–4 משפטים.]

## הכוחות שלך
[3 כוחות עיקריים.]

## 5 נתיבי ההכנסה המדויקים לך
[לכל נתיב: שם ופעולה ראשונה ספציפית.]

## הצעד הבא שלך
[2–3 משפטים. הצעד המיידי הנכון ביותר לארכיטיפ זה.]`;
}

function buildEnglishPrompt({ plan, archetypeName, tagline, warningSign, scores, name, incomePathsBlock }) {
  const nameRef = name ? `${name}, ` : '';

  const base = `You are Oracle — a precise, psychologically sophisticated diagnostic engine specializing in online income paths.
The user has completed a comprehensive assessment.${name ? `\nName: ${name}` : ''}
Archetype: ${archetypeName} — ${tagline}
Raw scores: ${JSON.stringify(scores)}
${incomePathsBlock}

Writing rules:
• Address the user directly in second person: "you", "your", "you should"
• Style: direct, sharp, psychologically precise. No empty praise. No generic advice
• Every recommendation: specific verb + what + when. Not "think about" — actual actions`.trim();

  const incomeInstruction = `For each of the 5 income paths above:
### [Path Name]
**Why this fits you**: [2 psychologically specific sentences]
**Time to first income**: [time]
**Your action now**: [One sentence. Specific verb + what + when. Doable this week.]`;

  if (plan === 'premium') {
    return `${base}

Write a complete Premium Report. Length: 1800–2200 words. Use these exact headers:

## Your Archetype: ${archetypeName}
${nameRef}[6–8 sentences. Deep psychological pattern, how you create value, your relationship with money and creation. Specific — not generic.]

## Your Strengths
[5 strengths with tactical online income applications. Format: **Strength Name**: 2–3 sentences on how to leverage it.]

## Your Shadow — The Pattern That Repeats
[3–4 sentences. The specific unconscious pattern that sabotages this type. The fear driving it. The cost it carries. Write like someone who knows them deeply.]

## Your 5 Precise Income Paths
${incomeInstruction}

## Your 30-Day Action Plan
### Week 1 — [Thematic title]
- [Specific action 1]
- [Specific action 2]
- [Specific action 3]
### Week 2 — [Thematic title]
- [3 specific actions]
### Week 3 — [Thematic title]
- [3 specific actions]
### Week 4 — [Thematic title]
- [3 specific actions]

## Your Move — Right Now, Today
[One sentence. One physical action doable within the hour. Specific to your archetype and top income path. This is the most important sentence in the report.]

## The Warning Sign
[One sentence: the specific behavior that signals you're off your path. ${warningSign || ''}]`;
  }

  if (plan === 'advanced') {
    return `${base}

Write an Advanced Report. Length: 1200–1600 words. Headers:
## Your Archetype: ${archetypeName}
## Your Strengths
## Your Shadow
## Your 5 Precise Income Paths
## Three Strategic Moves
## The Warning Sign`;
  }

  return `${base}

Write a Basic Report. Length: 700–900 words. Headers:
## Your Archetype: ${archetypeName}
## Your Strengths
## Your 5 Precise Income Paths
## Your Next Step`;
}

function buildPrompt({ plan, archetype, scores, language, name }) {
  const isHe = language === 'he';
  const archetypeName = isHe ? archetype.name_he : archetype.name_en;
  const tagline       = isHe ? archetype.tagline_he : archetype.tagline_en;
  const warningSign   = isHe ? archetype.warningSign_he : archetype.warningSign_en;

  const incomePathsBlock = archetype.incomePaths
    ? (isHe
        ? `\nנתיבי הכנסה מוכנים לארכיטיפ זה — השתמש בהם כבסיס:\n${formatIncomePaths(archetype.incomePaths)}`
        : `\nCurated income paths for this archetype — use as foundation:\n${archetype.incomePaths.map((p, i) =>
            `${i + 1}. ${p.name}\n   Why: ${p.why}\n   Time: ${p.timeToFirstIncome}\n   First action: ${p.firstAction}`
          ).join('\n\n')}`)
    : '';

  if (isHe) {
    return buildHebrewPrompt({ plan, archetypeName, tagline, warningSign, scores, name, incomePathsBlock });
  }
  return buildEnglishPrompt({ plan, archetypeName, tagline, warningSign, scores, name, incomePathsBlock });
}

export async function generateReport({ plan, archetype, scores, language, name }) {
  const prompt = buildPrompt({ plan, archetype, scores, language, name });

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: plan === 'premium' ? 4000 : plan === 'advanced' ? 2500 : 1600,
    messages: [{ role: 'user', content: prompt }],
    system: 'אתה Oracle — מנוע אבחון פסיכולוגי מדויק. אף פעם לא משתמש בשבחים ריקים או בשפה מוטיבציונית גנרית. מנתח דפוסים ישירות ונותן כיוון ספציפי ופעולות ניתנות לביצוע. You are Oracle — a precise, psychologically sophisticated diagnostic engine. You never use empty praise or generic motivational language. You name patterns honestly and give specific, actionable direction.',
  });

  return message.content[0].text;
}
