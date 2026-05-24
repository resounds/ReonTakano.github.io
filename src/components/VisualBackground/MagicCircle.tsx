import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface MagicCircleProps {
  position: THREE.Vector3;
  color: THREE.Color;
  onComplete: () => void;
}

export const MagicCircle = ({ position, color, onComplete }: MagicCircleProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  console.log('MagicCircle mounted at:', position);

  // Animation state tracked via ref to avoid React re-renders
  const anim = useRef({
    scale: 0,
    opacity: 1,
    initialized: false,
    completed: false
  });

  useFrame((_state, delta) => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    
    if (!mesh || !material || anim.current.completed) return;

    // Initial setup (orientation)
    if (!anim.current.initialized) {
      mesh.lookAt(0, 0, 0);
      anim.current.initialized = true;
    }

    // 1. Rotation (continuous)
    mesh.rotation.z += delta * 0.5;

    // 2. Scale up (0 to 1.2)
    anim.current.scale = Math.min(1.2, anim.current.scale + delta * 2.0);
    mesh.scale.setScalar(anim.current.scale);
    
    // 3. Fade out (1 to 0)
    anim.current.opacity -= delta * 0.6;
    material.opacity = Math.max(0, anim.current.opacity);

    // 4. Check for completion
    if (anim.current.opacity <= 0) {
      anim.current.completed = true;
      onComplete();
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[1.5, 1.55, 64]} />
      <meshBasicMaterial 
        ref={materialRef}
        color={color} 
        transparent={true} 
        opacity={1} 
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};
