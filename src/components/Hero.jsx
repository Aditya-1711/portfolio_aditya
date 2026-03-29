import { motion } from 'framer-motion'
import { RobotCanvas } from './RobotModel'
import React, { Suspense } from 'react'
import MagneticButton from './MagneticButton'
import NeuralNetworkBackground from './NeuralNetworkBackground'

export default function Hero() {
  const isFast = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('hasSeenPreloader') === 'true';
  const d = isFast ? 0.2 : 6.4;

  return (
    <section className="hero">
      <NeuralNetworkBackground />
      <div className="hero-text">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: d, ease: 'easeOut' }}
        >
          <p className="intro-name">Robotics & AI Engineer</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: d + 0.1, ease: 'easeOut' }}
        >
          <h1>
            Building Intelligent Systems<br />
            That Perceive, Decide, and Act
          </h1>
        </motion.div>


        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: d + 0.3, ease: 'easeOut' }}
        >
          <MagneticButton href="#projects" className="btn">View Work</MagneticButton>
        </motion.div>
      </div>

      <motion.div 
        className="robot-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: d + 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <RobotCanvas />
        </Suspense>
      </motion.div>
    </section>
  )
}
