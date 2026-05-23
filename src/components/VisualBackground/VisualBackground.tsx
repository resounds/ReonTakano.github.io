import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Mesh, Color, MeshStandardMaterial } from 'three';

const RotatingBox = ({ sceneIndex }: { sceneIndex: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  const targetColor = useMemo(() => {
    switch (sceneIndex) {
      case 0: return new Color('#4169e1'); // royalblue
      case 1: return new Color('#9370db'); // mediumpurple
      case 2: return new Color('#008b8b'); // darkcyan
      case 3: return new Color('#483d8b'); // darkslateblue
      default: return new Color('#4169e1');
    }
  }, [sceneIndex]);

  useFrame((_state, delta) => {
    const speed = 0.5 + sceneIndex * 0.5;
    meshRef.current.rotation.x += delta * speed;
    meshRef.current.rotation.y += delta * speed;
    
    // Smooth color transition
    const material = meshRef.current.material as MeshStandardMaterial;
    if (material && material.color) {
      material.color.lerp(targetColor, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4169e1" />
    </mesh>
  );
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);
