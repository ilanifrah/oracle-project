import { Router } from 'express';
import { stripe, PLANS } from '../services/stripe.js';
import { supabase }      from '../services/supabase.js';

const router = Router();

// POST /api/payment/create-intent
// Body: { plan, sessionId, email }
router.post('/create-intent', async (req, res, next) => {
  try {
    const { plan, sessionId, email } = req.body;

    if (!PLANS[plan]) {
      return res.status(400).json({ error: 'Invalid plan' });
    }

    const planData = PLANS[plan];

    const paymentIntent = await stripe.paymentIntents.create({
      amount:   planData.amount,
      currency: planData.currency,
      metadata: { plan, sessionId, email: email || '' },
      receipt_email: email || undefined,
    });

    // Pre-create payment record (pending)
    await supabase.from('payments').insert({
      session_id:               sessionId,
      plan,
      amount:                   planData.amount,
      currency:                 planData.currency,
      stripe_payment_intent_id: paymentIntent.id,
      status:                   'pending',
      email:                    email || null,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    next(err);
  }
});

// POST /api/payment/webhook
// Stripe sends events here — must be raw body
router.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;
    const { plan, sessionId } = pi.metadata;

    // Update payment status
    await supabase
      .from('payments')
      .update({ status: 'succeeded' })
      .eq('stripe_payment_intent_id', pi.id);

    // Trigger report generation
    try {
      const { generateReport } = await import('../services/claude.js');
      const { ARCHETYPES }     = await import('../data/archetypes.js');

      const { data: session } = await supabase
        .from('quiz_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (session) {
        const archetype = ARCHETYPES[session.archetype];
        const content   = await generateReport({
          plan,
          archetype,
          scores:   session.scores,
          language: session.language,
          name:     session.name,
        });

        await supabase.from('reports').insert({
          session_id:               sessionId,
          plan,
          content,
          stripe_payment_intent_id: pi.id,
          paid: true,
        });
      }
    } catch (err) {
      console.error('Report generation failed after payment:', err);
    }
  }

  res.json({ received: true });
});

// GET /api/payment/plans
router.get('/plans', (_req, res) => {
  res.json(PLANS);
});

export default router;
