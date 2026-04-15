import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const gridSize = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      axis: 'x' | 'y';

      constructor(w: number, h: number) {
        // Align initial position to the computerized grid
        this.x = Math.floor(Math.random() * (w / gridSize)) * gridSize;
        this.y = Math.floor(Math.random() * (h / gridSize)) * gridSize;
        this.size = Math.random() * 2 + 1;
        this.axis = Math.random() > 0.5 ? 'x' : 'y';
        const speed = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.4 + 0.2);
        this.speedX = this.axis === 'x' ? speed : 0;
        this.speedY = this.axis === 'y' ? speed : 0;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
      }

      update(w: number, h: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        // Wrap around grid boundaries
        if (this.x < 0) this.x = Math.floor(w / gridSize) * gridSize;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = Math.floor(h / gridSize) * gridSize;
        if (this.y > h) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentOpacity = this.opacity * (0.3 + Math.sin(this.pulse) * 0.7);
        ctx.fillStyle = `hsla(38, 92%, 55%, ${currentOpacity})`;
        
        // Draw as a tech node (square pixel) with a glow effect
        ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(38, 92%, 55%, ${currentOpacity})`;
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.shadowBlur = 0;
      }
    }

    const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 30000));
    particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));

    const connectDistance = 200;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background mesh gradient blobs for the "lighten dark" feel
      const time = Date.now() * 0.0005;
      const blobs = [
        { x: canvas.width * 0.3 + Math.sin(time * 0.5) * 200, y: canvas.height * 0.4 + Math.cos(time * 0.3) * 200, r: 500 },
        { x: canvas.width * 0.7 + Math.cos(time * 0.4) * 200, y: canvas.height * 0.6 + Math.sin(time * 0.6) * 200, r: 600 }
      ];

      blobs.forEach(blob => {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        grad.addColorStop(0, `hsla(38, 92%, 55%, 0.04)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw structural grid intersection points
      ctx.fillStyle = `hsla(38, 92%, 55%, 0.06)`;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          // Only connect if they share a grid axis (creates a computerized circuit look)
          const sameX = Math.abs(particles[i].x - particles[j].x) < 1;
          const sameY = Math.abs(particles[i].y - particles[j].y) < 1;
          
          if (sameX || sameY) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectDistance) {
              const lineOpacity = (1 - dist / connectDistance) * 0.15;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `hsla(38, 92%, 55%, ${lineOpacity})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBackground;
