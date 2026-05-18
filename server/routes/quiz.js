import { Router } from 'express';
import { supabase } from '../services/supabase.js';

const router = Router();

// POST /api/quiz/submit
// Body: { answers, scores, archetype, language, email?, name? }
router.post('/submit', async (req, res, next) => {
  try {
    const { answers, scores, archetype, language, email, name } = req.body;

    if (!answers || !scores || !archetype) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await supabase
      .from('quiz_sessions')
      .insert({
        language:    language || 'en',
        answers,
        scores,
        archetype,
        email:       email || null,
        name:        name  || null,
        completed_at: new Date().toISOString(),
      })
      .select('id')
      .single();

    if (error) throw error;

    res.json({ sessionId: data.id });
  } catch (err) {
    next(err);
  }
});

// GET /api/quiz/session/:id
router.get('/session/:id', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('quiz_sessions')
      .select('id, archetype, language, scores, created_at')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'Session not found' });

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
