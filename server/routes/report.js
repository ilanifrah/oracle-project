import { Router } from 'express';
import { supabase }        from '../services/supabase.js';
import { generateReport }  from '../services/claude.js';

const router = Router();

// GET /api/report/:sessionId
// Returns the report if paid, or 402 if payment required
router.get('/:sessionId', async (req, res, next) => {
  try {
    const { data: report, error } = await supabase
      .from('reports')
      .select('*')
      .eq('session_id', req.params.sessionId)
      .eq('paid', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !report) {
      return res.status(402).json({ error: 'Payment required' });
    }

    res.json(report);
  } catch (err) {
    next(err);
  }
});

// POST /api/report/generate
// Called internally after payment confirmed
router.post('/generate', async (req, res, next) => {
  try {
    const { sessionId, plan, paymentIntentId } = req.body;

    // Verify payment
    const { data: payment } = await supabase
      .from('payments')
      .select('*')
      .eq('stripe_payment_intent_id', paymentIntentId)
      .eq('status', 'succeeded')
      .single();

    if (!payment) {
      return res.status(402).json({ error: 'Payment not verified' });
    }

    // Get session
    const { data: session } = await supabase
      .from('quiz_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Import archetypes data to get the full profile
    const { ARCHETYPES } = await import('../data/archetypes.js');
    const archetype = ARCHETYPES[session.archetype];

    // Generate with Claude
    const content = await generateReport({
      plan,
      archetype,
      scores:   session.scores,
      language: session.language,
      name:     session.name,
    });

    // Save report
    const { data: report, error } = await supabase
      .from('reports')
      .insert({
        session_id:               sessionId,
        plan,
        content,
        stripe_payment_intent_id: paymentIntentId,
        paid: true,
      })
      .select('id')
      .single();

    if (error) throw error;

    res.json({ reportId: report.id, content });
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
