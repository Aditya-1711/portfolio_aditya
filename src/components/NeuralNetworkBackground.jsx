import React, { useRef, useEffect } from 'react';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const numParticles = 80;
    const connectionDistance = 150;

    const resize = () => {
      if (!canvas.parentElement) return;
      // Use parent element's dimensions instead of window to cover just the hero.
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Init particles
    for (let i = 0; i < numParticles; i++) {
        // distribute them randomly
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      // Create trailing effect / motion blur
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & draw particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.6)'; // Blueish tech tint
        ctx.fill();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, 
        pointerEvents: 'none', // Allow clicks to pass through to underlying buttons
      }}
    />
  );
};

export default NeuralNetworkBackground;
