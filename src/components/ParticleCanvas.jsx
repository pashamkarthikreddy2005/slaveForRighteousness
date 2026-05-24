import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.2 + 0.3,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -(Math.random() * 0.7 + 0.15),
      opacity: Math.random() * 0.5 + 0.15,
      life: Math.random(),
      maxLife: Math.random() * 0.6 + 0.4,
      hue: Math.random() > 0.7 ? 200 : 42,
    }));

    let id;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.life += 0.0025;

        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.life = 0;
          p.hue = Math.random() > 0.7 ? 200 : 42;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        const r = p.life / p.maxLife;

        const fade =
          Math.min(r / 0.2, 1) *
          Math.min((1 - r) / 0.25, 1);

        const op = p.opacity * fade;

        const g = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 4
        );

        if (p.hue === 42) {
          g.addColorStop(0, `rgba(232,185,79,${op})`);
          g.addColorStop(0.5, `rgba(201,147,58,${op * 0.4})`);
        } else {
          g.addColorStop(0, `rgba(220,240,255,${op * 0.6})`);
          g.addColorStop(0.5, `rgba(180,210,255,${op * 0.2})`);
        }

        g.addColorStop(1, `rgba(0,0,0,0)`);

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size * 4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = g;
        ctx.fill();
      });

      id = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}