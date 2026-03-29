import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const isFast = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('hasSeenPreloader') === 'true';
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const ids = ['about', 'projects', 'contact'];
    
    const handleScroll = () => {
      // Trigger when the section is halfway down the screen
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <motion.nav 
      className="pill-nav"
      initial={{ y: 50, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.8, delay: isFast ? 0.4 : 6.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-links">
        <MagneticButton href="#about" className={activeSection === 'about' ? 'active' : ''}>About</MagneticButton>
        <MagneticButton href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</MagneticButton>
        <MagneticButton href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</MagneticButton>
      </div>
    </motion.nav>
  )
}
