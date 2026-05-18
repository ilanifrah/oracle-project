import { Router } from 'express';
import { supabase }        from '../services/supabase.js';
import { generateReport }  from '../services/claude.js';

const router = Router();

// GET /api/report/:sessionId
router.get('/:sessionId', async (req, res, next) => {
  try {
    const { data: report, error } = await supabase
      .from('reports')
      .select('*')
      .eq('session_id', req.params.sessionId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    res.json(report);
  } catch (err) {
    next(err);
  }
});

// POST /api/report/free-generate
// Generates the full premium report for free, saves to DB.
router.post('/free-generate', async (req, res, next) => {
  try {
    const { sessionId, archetypeKey, scores, language = 'en', name } = req.body;

    if (!archetypeKey) {
      return res.status(400).json({ error: 'archetypeKey is required' });
    }

    const { ARCHETYPES } = await import('../data/archetypes.js');
    const archetype = ARCHETYPES[archetypeKey];
    if (!archetype) return res.status(400).json({ error: `Unknown archetype: ${archetypeKey}` });

    const content = await generateReport({
      plan: 'premium',
      archetype,
      scores:   scores || {},
      language,
      name:     name || null,
    });

    if (sessionId) {
      await supabase.from('reports').insert({
        session_id: sessionId,
        plan:       'premium',
        content,
        paid:       true,
      }).catch(() => {});
    }

    res.json({ content, archetypeKey, plan: 'premium' });
  } catch (err) {
    next(err);
  }
});

// POST /api/report/dev-generate
// DEV ONLY — no Supabase, no payment. Calls Claude and returns content directly.
router.post('/dev-generate', async (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).json({ error: 'Not found' });
  }

  try {
    const { archetypeKey, scores, language = 'en', name, plan = 'advanced' } = req.body;

    if (!archetypeKey) {
      return res.status(400).json({ error: 'archetypeKey is required' });
    }

    const { ARCHETYPES } = await import('../data/archetypes.js');
    const archetype = ARCHETYPES[archetypeKey];

    if (!archetype) {
      return res.status(400).json({ error: `Unknown archetype: ${archetypeKey}` });
    }

    console.log(`[dev-generate] archetype=${archetypeKey} plan=${plan} language=${language}`);

    const content = await generateReport({
      plan,
      archetype,
      scores:   scores || {},
      language,
      name:     name   || null,
    });

    console.log(`[dev-generate] report generated (${content.length} chars)`);

    res.json({ content, archetypeKey, plan });
  } catch (err) {
    console.error('[dev-generate] error:', err.message);
    next(err);
  }
});

export default router;
