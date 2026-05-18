import { motion } from 'framer-motion';

export default function Card({ children, hover = false, glow = false, style, onClick }) {
  const baseStyle = {
    background: 'rgba(30, 16, 50, 0.6)',
    backdropFilter: 'blur(20px)',
    border: `1px solid ${glow ? 'rgba(167,139,250,0.4)' : 'rgba(167,139,250,0.15)'}`,
    borderRadius: 'var(--radius-lg)',
    padding: '28px',
    position: 'relative',
    overflow: 'hidden',
    cursor: onClick ? 'pointer' : 'default',
    boxShadow: glow ? 'var(--shadow-glow)' : 'none',
    ...style,
  };

  if (hover || onClick) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -3, boxShadow: 'var(--shadow-glow)' }}
        transition={{ duration: 0.2 }}
        style={baseStyle}
      >
        {children}
      </motion.div>
    );
  }

  return <div style={baseStyle}>{children}</div>;
}
