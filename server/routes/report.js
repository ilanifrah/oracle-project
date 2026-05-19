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
router.post('/free-generate', async (req, res, next) => {
  try {
    const { sessionId, archetypeKey, scores, name, plan } = req.body;

    if (!archetypeKey) {
      return res.status(400).json({ error: 'archetypeKey is required' });
    }

    const { ARCHETYPES } = await import('../data/archetypes.js');
    const archetype = ARCHETYPES[archetypeKey];
    if (!archetype) {
      return res.status(400).json({ error: `Unknown archetype: ${archetypeKey}` });
    }

    console.log(`[free-generate] archetype=${archetypeKey} session=${sessionId || 'none'}`);

    const resolvedPlan = ['basic', 'advanced', 'premium'].includes(plan) ? plan : 'advanced';

    const content = await generateReport({
      plan:     resolvedPlan,
      archetype,
      scores:   scores || {},
      language: 'he',
      name:     name || null,
    });

    console.log(`[free-generate] done (${content.length} chars)`);

    // Save to DB in background — don't block response
    if (sessionId) {
      supabase.from('reports').insert({
        session_id: sessionId,
        plan:       resolvedPlan,
        content,
        paid:       true,
      }).then(({ error }) => {
        if (error) console.warn('[free-generate] DB save failed:', error.message);
      });
    }

    res.json({ content, archetypeKey, plan: 'premium' });
  } catch (err) {
    console.error('[free-generate] error:', err.message);
    next(err);
  }
});

export default router;
