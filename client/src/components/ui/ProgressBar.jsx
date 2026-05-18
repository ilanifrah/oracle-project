import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  const pct = Math.min(1, Math.max(0, progress)) * 100;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: '100%',
        height: '4px',
        borderRadius: '2px',
        background: 'rgba(167, 139, 250, 0.15)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          height: '100%',
          borderRadius: '2px',
          background: 'linear-gradient(90deg, var(--violet-600), var(--gold-400))',
          boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
          position: 'relative',
        }}
      >
        {/* Trailing glow dot */}
        <motion.div
          style={{
            position: 'absolute',
            right: -2,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--gold-400)',
            boxShadow: '0 0 8px var(--gold-400)',
          }}
        />
      </motion.div>
    </div>
  );
}
