import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles, Float, Sphere, Icosahedron, TorusKnot, Octahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

function FloatingShapes() {
  const groupRef = useRef()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state) => {
    if(groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
      // Parallax scroll sync (1000px DOM scroll ~= 5 Three.js units)
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, scrollY * 0.005, 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      {/* About Section Ambient Geometry */}
      <Float speed={3} rotationIntensity={3} floatIntensity={2}>
        <Octahedron args={[1.5, 0]} position={[-5, -5, -4]}>
          <meshBasicMaterial color="#f43f5e" wireframe />
        </Octahedron>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3}>
        <Sphere args={[1, 32, 32]} position={[7, -8, -7]} scale={1.8}>
          <MeshDistortMaterial color="#0ea5e9" distort={0.5} speed={1.5} roughness={0.2} metalness={0.8} emissive="#0284c7" emissiveIntensity={0.6} wireframe />
        </Sphere>
      </Float>

      {/* Projects Section Ambient Geometry */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <Icosahedron args={[1, 1]} position={[-6, -12, -7]} scale={2.2}>
           <MeshDistortMaterial color="#facc15" distort={0.2} speed={1} roughness={0.3} metalness={0.9} emissive="#ca8a04" emissiveIntensity={0.2} />
        </Icosahedron>
      </Float>

      <Float speed={3.5} rotationIntensity={4} floatIntensity={2.5}>
        <Octahedron args={[1.2, 0]} position={[5, -16, -5]}>
          <meshBasicMaterial color="#22d3ee" wireframe />
        </Octahedron>
      </Float>
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="background-3d" style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(135deg, #020617, #0f172a, #1e1b4b)',
        pointerEvents: 'none'
    }}>
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8b5cf6" />
        
        {/* The Dust Particle Theme - Optimized */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={100} scale={15} size={3} speed={0.4} opacity={0.6} color="#60a5fa" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
