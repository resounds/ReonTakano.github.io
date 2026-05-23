import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Mesh, Color, MeshStandardMaterial } from 'three';

const RotatingShape = ({ sceneIndex }: { sceneIndex: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  const targetColor = useMemo(() => {
    switch (sceneIndex) {
      case 0: return new Color('#4169e1'); // royalblue
      case 1: return new Color('#9370db'); // mediumpurple
      case 2: return new Color('#008b8b'); // darkcyan (Research - Intellectual)
      case 3: return new Color('#483d8b'); // darkslateblue (Archive - Depth)
      default: return new Color('#4169e1');
    }
  }, [sceneIndex]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const speed = 0.2 + sceneIndex * 0.2;
    
    meshRef.current.rotation.x += delta * speed;
    meshRef.current.rotation.y += delta * speed * 0.8;
    
    // Add some organic movement for Research (scene 2)
    if (sceneIndex === 2) {
      meshRef.current.position.y = Math.sin(time) * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.1);
    } else {
      meshRef.current.position.y = 0;
      meshRef.current.scale.setScalar(1);
    }
    
    // Smooth color transition
    const material = meshRef.current.material as MeshStandardMaterial;
    if (material && material.color) {
      material.color.lerp(targetColor, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      {sceneIndex === 0 && <boxGeometry args={[1.5, 1.5, 1.5]} />}
      {sceneIndex === 1 && <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />}
      {sceneIndex === 2 && <sphereGeometry args={[1.2, 32, 32]} />}
      {sceneIndex === 3 && <icosahedronGeometry args={[1.5, 0]} />}
      <meshStandardMaterial color="#4169e1" wireframe={sceneIndex === 3} />
    </mesh>
  );
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingShape sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);
