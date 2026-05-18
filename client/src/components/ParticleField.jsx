import { useEffect, useRef } from 'react';

const NUM_PARTICLES = 80;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ParticleField({ style }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Init particles
    particles.current = Array.from({ length: NUM_PARTICLES }, () => ({
      x:    randomBetween(0, canvas.width),
      y:    randomBetween(0, canvas.height),
      r:    randomBetween(0.5, 2.2),
      vx:   randomBetween(-0.12, 0.12),
      vy:   randomBetween(-0.18, -0.04),
      alpha: randomBetween(0.2, 0.9),
      pulse: randomBetween(0, Math.PI * 2),
      pulseSpeed: randomBetween(0.005, 0.02),
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        p.pulse += p.pulseSpeed;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = randomBetween(0, canvas.width);
        }
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
