"use client";

import { useEffect, useRef } from "react";

export function SiteBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 26000);

      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          size: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.32 + 0.08,
          color: Math.random() < 0.18 ? "#7AECFF" : "#FFFFFF",
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.035;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(122,236,255,${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="absolute inset-0 site-space-grid opacity-60" />
      <div className="absolute left-1/2 top-[16%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#00E5FF]/[0.035] blur-[140px]" />
      <div className="absolute right-[10%] top-[35%] h-[22rem] w-[22rem] rounded-full bg-[#7AECFF]/[0.03] blur-[130px]" />
      <div className="absolute left-[8%] top-[58%] h-[20rem] w-[20rem] rounded-full bg-white/[0.02] blur-[150px]" />
    </div>
  );
}
