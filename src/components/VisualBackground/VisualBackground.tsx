// src/components/VisualBackground/VisualBackground.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RotatingMesh = ({ sceneIndex }: { sceneIndex: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetColor = new THREE.Color();

  useEffect(() => {
    switch (sceneIndex) {
      case 0: targetColor.set('royalblue'); break;
      case 1: targetColor.set('forestgreen'); break;
      case 2: targetColor.set('crimson'); break;
      case 3: targetColor.set('darkorange'); break;
      default: targetColor.set('royalblue');
    }
  }, [sceneIndex]);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
      
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.color.lerp(targetColor, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      {sceneIndex === 0 && <boxGeometry args={[1, 1, 1]} />}
      {sceneIndex === 1 && <sphereGeometry args={[1, 32, 32]} />}
      {sceneIndex === 2 && <torusGeometry args={[1, 0.4, 16, 100]} />}
      {sceneIndex === 3 && <octahedronGeometry args={[1.5, 0]} />}
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingMesh sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);
