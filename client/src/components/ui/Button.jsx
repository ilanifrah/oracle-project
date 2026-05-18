import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'gold'
  size    = 'md',        // 'sm' | 'md' | 'lg'
  disabled = false,
  type = 'button',
  fullWidth = false,
  style,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'inherit',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    transition: 'background 0.2s, box-shadow 0.2s',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    letterSpacing: '0.02em',
  };

  const sizes = {
    sm: { padding: '8px 18px',  fontSize: '0.85rem' },
    md: { padding: '12px 28px', fontSize: '1rem'    },
    lg: { padding: '16px 40px', fontSize: '1.1rem'  },
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--violet-600), var(--violet-500))',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
    },
    gold: {
      background: 'linear-gradient(135deg, var(--gold-500), var(--gold-400))',
      color: '#1a0e35',
      boxShadow: 'var(--shadow-gold)',
    },
    secondary: {
      background: 'rgba(139, 92, 246, 0.15)',
      color: 'var(--violet-400)',
      border: '1px solid var(--border)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      boxShadow: 'none',
    },
  };

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
    >
      {children}
    </motion.button>
  );
}
