import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import Preloader from './components/Preloader'
import TopNav from './components/TopNav'
import CustomCursor from './components/CustomCursor'

function App() {
  const hasSeen = sessionStorage.getItem('hasSeenPreloader')
  const [loading, setLoading] = useState(!hasSeen)

  React.useEffect(() => {
    if (hasSeen) {
      document.body.classList.add('fast-load')
    }
  }, [hasSeen])

  const handleComplete = () => {
    sessionStorage.setItem('hasSeenPreloader', 'true')
    document.body.classList.add('fast-load')
    setLoading(false)
  }

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={handleComplete} />}
      </AnimatePresence>

      <TopNav />
      <Background3D />
      <div className="floating-icons">
        <a href="Aditya_Anil_kapile_1.pdf" target="_blank" rel="noreferrer" aria-label="CV">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f172a">
            <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.5H8V12zm0 3h8v1.5H8V15z" />
          </svg>
        </a>
        <a href="https://github.com/Aditya-1711" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0f172a">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.8-.8 2.1-1.2.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/adityakapile/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="22" height="22" alt="LinkedIn" />
        </a>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
