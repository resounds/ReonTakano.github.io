import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface MagicCircleProps {
  position: THREE.Vector3;
  color: THREE.Color;
  onComplete: () => void;
}

export const MagicCircle = ({ position, color, onComplete }: MagicCircleProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(0);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      // Rotation and scale up
      meshRef.current.rotation.z += delta * 0.5;
      setScale(prev => Math.min(1.2, prev + delta * 2.0));
      
      // Fade out
      setOpacity(prev => {
        const next = prev - delta * 0.6;
        if (next <= 0) {
          onComplete();
          return 0;
        }
        return next;
      });
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      scale={[scale, scale, scale]}
      onUpdate={(self) => self.lookAt(0, 0, 0)}
    >
      <ringGeometry args={[1.5, 1.55, 64]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={opacity} 
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};
