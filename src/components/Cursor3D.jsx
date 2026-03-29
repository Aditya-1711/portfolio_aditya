import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

function CursorMesh() {
  const meshRef = useRef()
  const { viewport, mouse } = useThree()

  // Track if mouse is moving to smooth entry
  const isActive = useRef(false)

  useEffect(() => {
    const activate = () => { isActive.current = true }
    window.addEventListener('mousemove', activate, { once: true })
    return () => window.removeEventListener('mousemove', activate)
  }, [])

  useFrame((state, delta) => {
    if(!meshRef.current || !isActive.current) return
    
    // Map normalized mouse (-1 to 1) perfectly to viewport size
    const targetX = (mouse.x * viewport.width) / 2
    const targetY = (mouse.y * viewport.height) / 2
    
    // Smooth interpolations
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.25)
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.25)
    
    // Dynamic physical spinning
    meshRef.current.rotation.x += delta * 2.5
    meshRef.current.rotation.y += delta * 3.5
  })

  return (
    <mesh ref={meshRef} position={[0, -10, 0]}>
      {/* 3D Wireframe Icosahedron as Cursor */}
      <icosahedronGeometry args={[0.25, 0]} />
      <meshBasicMaterial color="#38bdf8" wireframe />
      {/* Inner glowing core */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>
    </mesh>
  )
}

export default function Cursor3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        orthographic={false} 
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <CursorMesh />
      </Canvas>
    </div>
  )
}
