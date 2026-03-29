document.addEventListener('DOMContentLoaded', () => {
  // Hide native cursor for ultra-premium feel
  document.body.style.cursor = 'none';

  // --- Scroll Reveal Pipeline ---
  const sections = document.querySelectorAll('.section, .hero-panel, .cta');
  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(sec => observer.observe(sec));

  // --- Cinematic Custom Cursor Trail ---
  const cursor = document.createElement('div');
  const ring = document.createElement('div');

  cursor.style.cssText = 'width:8px; height:8px; background:#38bdf8; border-radius:50%; position:fixed; pointer-events:none; z-index:9999; transform:translate(-50%, -50%); transition: width 0.3s, height 0.3s, background 0.3s; box-shadow: 0 0 20px 4px rgba(56, 189, 248, 0.8);';
  ring.style.cssText = 'width:40px; height:40px; border:1px solid rgba(56, 189, 248, 0.6); border-radius:50%; position:fixed; pointer-events:none; z-index:9998; transform:translate(-50%, -50%); transition: width 0.3s, height 0.3s, background 0.3s, border-color 0.3s;';
  
  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  // Smooth lerp for the physical outer ring
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover Physics for the physical ring
  document.querySelectorAll('a, button').forEach(el => {
    el.style.cursor = 'none'; // Overwrite default pointer
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '0px'; cursor.style.height = '0px';
      ring.style.width = '60px'; ring.style.height = '60px';
      ring.style.background = 'rgba(56, 189, 248, 0.15)';
      ring.style.borderColor = '#38bdf8';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px'; cursor.style.height = '8px';
      ring.style.width = '40px'; ring.style.height = '40px';
      ring.style.background = 'transparent';
      ring.style.borderColor = 'rgba(56, 189, 248, 0.4)';
    });
  });

  // --- Magnetic Buttons ---
  const magneticEls = document.querySelectorAll('.btn-primary, .floating-github');
  magneticEls.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width / 2;
      const y = (e.clientY - rect.top) - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });

  // --- 3D Holographic Tilt Array ---
  const panels = document.querySelectorAll('.glass-panel');
  panels.forEach(panel => {
    panel.style.transformStyle = 'preserve-3d';
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      
      const rotateX = yPct * -8; // Pitch
      const rotateY = xPct * 8;  // Yaw
      
      panel.style.transition = 'transform 0.1s ease-out';
      panel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    panel.addEventListener('mouseleave', () => {
      panel.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // --- Global CSS Injection ---
  const style = document.createElement('style');
  style.innerHTML = `
    .concept-art {
      width: 100%;
      border-radius: 20px;
      margin: 32px 0;
      border: 1px solid rgba(255,255,255,0.05);
      box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      object-fit: cover;
    }
    .mermaid {
      background: rgba(15,23,42,0.3);
      padding: 24px;
      border-radius: 16px;
      margin-top: 24px;
      overflow-x: auto;
    }
    .mermaid svg { max-width: 100%; font-family: Inter, sans-serif !important; }
  `;
  document.head.appendChild(style);
});


