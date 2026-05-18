import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODEL = 'claude-sonnet-4-6';

// ── Plan prompts ──────────────────────────────────────────

function formatIncomePaths(paths) {
  return paths.map((p, i) =>
    `${i + 1}. ${p.name}\n   Why it fits: ${p.why}\n   Time to first income: ${p.timeToFirstIncome}\n   First action: ${p.firstAction}`
  ).join('\n\n');
}

function buildPrompt({ plan, archetype, scores, language, name }) {
  const lang = language === 'he' ? 'Hebrew' : 'English';
  const isHe  = language === 'he';

  const archetypeName = isHe ? archetype.name_he : archetype.name_en;
  const tagline       = isHe ? archetype.tagline_he : archetype.tagline_en;

  const incomePathsBlock = archetype.incomePaths
    ? `\nCurated income paths for this archetype (use these as the foundation for the Best Income Paths section — write each in your own voice, psychologically grounded, specific, and actionable):\n${formatIncomePaths(archetype.incomePaths)}`
    : '';

  const base = `
You are Oracle, a psychological diagnostic engine focused on online money paths.
The user has completed a 48-question assessment.

User name: ${name || 'the user'}
Language: ${lang} — respond entirely in ${lang}.
Archetype: ${archetypeName} (${tagline})
Raw scores: ${JSON.stringify(scores)}
${incomePathsBlock}

Write with depth, precision, and a tone that is direct but compassionate.
Avoid generic advice. Be specific to this archetype's patterns.
`.trim();

  const incomePathsInstruction = `
**Best Income Paths** — For each of the ${archetype.incomePaths?.length ?? 5} curated paths above, write a short entry with:
- The path name as a sub-header
- Why it matches this archetype psychologically (2-3 sentences — specific, not generic)
- Estimated time to first income
- One concrete first action to take this week (specific enough to do today, not "research it")
Make this section feel personal — like advice from someone who deeply understands this type, not a listicle.
`.trim();

  const planInstructions = {
    basic: `
Write a Basic Report with these sections:
1. **Your Archetype** (3-4 sentences — what this archetype means for how they create value online)
2. **Your Strengths** (3 bullet points — specific to this type)
3. **Your Blindspot** (1 specific, honest blindspot pattern)
4. **Best Income Paths**
${incomePathsInstruction}
Keep it under 900 words. Use **bold headers**.
`.trim(),

    advanced: `
Write an Advanced Report with these sections:
1. **Your Archetype in Depth** (comprehensive paragraph about this type's core operating mode)
2. **Shadow Analysis** (the unconscious pattern that sabotages this type — be specific and honest)
3. **Strengths to Leverage** (4 specific strengths with tactical application)
4. **The Three Moves** (3 specific, ordered recommendations — what to do first, second, third, and why)
5. **Best Income Paths**
${incomePathsInstruction}
6. **The Warning Sign** (one sentence: what it looks like when this type is off-track)
Keep it under 1400 words. Use **bold headers**.
`.trim(),

    premium: `
Write a Premium Report with these sections:
1. **Your Archetype in Depth** (comprehensive paragraph)
2. **Shadow Analysis** (deep psychological pattern, specific to this type)
3. **Strengths Matrix** (5 strengths with tactical applications)
4. **The Three Strategic Moves** (detailed, ordered, with specifics)
5. **Best Income Paths**
${incomePathsInstruction}
6. **Your 30-Day Action Plan** (week-by-week breakdown — Week 1, Week 2, Week 3, Week 4 — with 2-3 specific actions per week, at least one referencing your top income path)
7. **Return Protocol** (how to use this report as a living document over time)
Keep it under 2000 words. Use **bold headers**.
`.trim(),
  };

  return `${base}\n\n${planInstructions[plan]}`;
}

// ── Main export ───────────────────────────────────────────

export async function generateReport({ plan, archetype, scores, language, name }) {
  const prompt = buildPrompt({ plan, archetype, scores, language, name });

  const message = await client.messages.create({
    model: MODEL,
    max_tokens: plan === 'premium' ? 3000 : plan === 'advanced' ? 2200 : 1400,
    messages: [{ role: 'user', content: prompt }],
    system: 'You are Oracle — a precise, psychologically sophisticated diagnostic engine. You never use empty praise or generic motivational language. You name patterns honestly and give specific, actionable direction.',
  });

  return message.content[0].text;
}
