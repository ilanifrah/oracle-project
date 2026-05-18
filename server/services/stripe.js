import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
});

export const PLANS = {
  basic: {
    priceId:     process.env.STRIPE_PRICE_BASIC,
    amount:      800,   // $8.00 in cents
    currency:    'usd',
    label:       'Basic',
    labelHe:     'בסיסי',
    description: 'Archetype report + general roadmap',
  },
  advanced: {
    priceId:     process.env.STRIPE_PRICE_ADVANCED,
    amount:      1800,  // $18.00
    currency:    'usd',
    label:       'Advanced',
    labelHe:     'מתקדם',
    description: 'Deep AI report + shadow analysis + 3 recommendations',
  },
  premium: {
    priceId:     process.env.STRIPE_PRICE_PREMIUM,
    amount:      5000,  // $50.00
    currency:    'usd',
    label:       'Premium',
    labelHe:     'פרמיום',
    description: 'Everything + 30-day plan + lifetime access',
  },
};
