import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function GlobeAmbient() {
  const globeRef = useRef()
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      globeRef.current.position.x = THREE.MathUtils.lerp(globeRef.current.position.x, state.mouse.x * 1.5, 0.05)
      globeRef.current.position.y = THREE.MathUtils.lerp(globeRef.current.position.y, state.mouse.y * 1.5, 0.05)
    }
  })
  return (
    <Sphere ref={globeRef} args={[2.8, 64, 64]}>
      <MeshDistortMaterial 
        color="#38bdf8"
        wireframe
        distort={0.4}
        speed={1.5}
        transparent 
        opacity={0.12}
      />
    </Sphere>
  )
}

export default function Contact() {
  return (
    <section className="cta" id="contact" style={{ 
      padding: '0 6%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      margin: 0,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Canvas 
          dpr={[1, 1.5]} 
          gl={{ antialias: false, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0, 6], fov: 45 }}
        >
          <GlobeAmbient />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <h2 style={{ 
          fontSize: 'clamp(3rem, 6vw, 5.5rem)', 
          fontWeight: 800, 
          color: '#f8fafc', 
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          textShadow: '0 0 60px rgba(96,165,250,0.5)',
          marginBottom: '16px'
        }}>
          LET'S BUILD<br/>SOMETHING.
        </h2>
      </motion.div>
      


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <MagneticButton href="mailto:aditya.kapile2025@my.ntu.ac.uk" className="btn interactive" style={{ padding: '20px 48px', fontSize: '1.2rem', fontWeight: 600 }}>
          Get In Touch
        </MagneticButton>
      </motion.div>
    </section>
  )
}
