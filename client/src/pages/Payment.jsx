import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { T } from '../data/translations.js';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const STRIPE_APPEARANCE = {
  theme: 'night',
  variables: {
    colorPrimary: '#8b5cf6',
    colorBackground: '#1a0e35',
    colorText: '#f9f7ff',
    colorDanger: '#ef4444',
    fontFamily: 'Inter, Heebo, sans-serif',
    borderRadius: '10px',
  },
};

export default function Payment() {
  const { plan } = useParams();
  const [params] = useSearchParams();
  const sessionId = params.get('session');
  const navigate  = useNavigate();
  const { language } = useLanguage();
  const s = T[language];

  const [clientSecret, setClientSecret] = useState(null);
  const [email, setEmail]               = useState('');
  const [error, setError]               = useState(null);
  const [loadingIntent, setLoadingIntent] = useState(true);

  const planNames = {
    basic: s.planBasicName,
    advanced: s.planAdvancedName,
    premium: s.planPremiumName,
  };
  const planPrices = {
    basic: s.planBasicPrice,
    advanced: s.planAdvancedPrice,
    premium: s.planPremiumPrice,
  };

  useEffect(() => {
    if (!plan) return;

    async function createIntent() {
      try {
        const res = await fetch('/api/payment/create-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan, sessionId, email }),
        });
        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.error || s.errorGeneric);
        }
      } catch (err) {
        setError(s.errorGeneric);
      } finally {
        setLoadingIntent(false);
      }
    }

    createIntent();
  }, [plan]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div className="bg-animated" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 500 }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontFamily: 'inherit', fontSize: '1.8rem', marginBottom: '8px' }}>
            {s.paymentTitle}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            <span>🔒</span>
            <span>{s.paymentSecure}</span>
          </div>
        </div>

        {/* Plan summary */}
        <Card style={{ marginBottom: '24px', padding: '20px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>{planNames[plan]}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {plan === 'basic' ? s.planBasicDesc : plan === 'advanced' ? s.planAdvancedDesc : s.planPremiumDesc}
              </div>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-400)' }}>
              {planPrices[plan]}
            </div>
          </div>
        </Card>

        {/* Email */}
        <Card style={{ marginBottom: '24px', padding: '20px 24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {s.paymentEmailLabel}
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={s.paymentEmailPlaceholder}
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(139,92,246,0.08)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
        </Card>

        {/* Stripe Elements */}
        {error && (
          <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '16px', textAlign: 'center' }}>{error}</div>
        )}

        {loadingIntent ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '40px' }}>{s.loading}</div>
        ) : clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret, appearance: STRIPE_APPEARANCE }}>
            <CheckoutForm
              sessionId={sessionId}
              plan={plan}
              email={email}
              language={language}
              onSuccess={(piId) => navigate(`/report/${sessionId}?pi=${piId}`)}
            />
          </Elements>
        ) : null}

        {/* Back */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.85rem' }}
          >
            ← {s.backToPlans}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function CheckoutForm({ sessionId, plan, email, language, onSuccess }) {
  const stripe   = useStripe();
  const elements = useElements();
  const s = T[language];

  const [processing, setProcessing] = useState(false);
  const [error, setError]           = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      onSuccess(paymentIntent.id);
    }

    setProcessing(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card style={{ marginBottom: '20px', padding: '20px 24px' }}>
        <div style={{ marginBottom: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {s.paymentCardLabel}
        </div>
        <PaymentElement />
      </Card>

      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '12px', textAlign: 'center' }}>{error}</p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        fullWidth
        disabled={!stripe || processing}
      >
        {processing ? s.paymentProcessing : s.paymentSubmit}
      </Button>
    </form>
  );
}
