import { useGLTF, Float, Environment, PresentationControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export function RobotModel() {
  const { scene } = useGLTF('/humanoid_robot_ai.glb')
  return <primitive object={scene} />
}

export function RobotCanvas() {
  return (
    <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'high-performance' }} camera={{ position: [0, 0, 4], fov: 28 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" castShadow />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#8b5cf6" />
      
      <PresentationControls
        global={false} 
        cursor={true} 
        snap={true} 
        speed={1} 
        zoom={1} 
        rotation={[0, 0, 0]} 
        polar={[-0.1, Math.PI / 4]} 
        azimuth={[-Math.PI / 4, Math.PI / 4]} 
      >
        <Float speed={2} rotationIntensity={0.1} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
          {/* Stage inherently calculates the geometry dimensions and ensures it sits right dead center */}
          <Stage adjustCamera={1.2} intensity={0.5} environment="night">
            <RobotModel />
          </Stage>
        </Float>
      </PresentationControls>
    </Canvas>
  )
}
