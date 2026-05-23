// src/components/VisualBackground/VisualBackground.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { NebulaShader } from './NebulaShader';
import { useCinematicCamera } from '../../hooks/useCinematicCamera';

const CameraController = ({ sceneIndex }: { sceneIndex: number }) => {
  useCinematicCamera(sceneIndex);
  return null;
};

const Nebula = ({ sceneIndex }: { sceneIndex: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const colors = useMemo(() => {
    switch (sceneIndex) {
      case 0: return { c1: new THREE.Color(0x4e00ff), c2: new THREE.Color(0xff0080) }; // Purple/Pink
      case 1: return { c1: new THREE.Color(0x00ff88), c2: new THREE.Color(0x0088ff) }; // Green/Blue
      case 2: return { c1: new THREE.Color(0xff4400), c2: new THREE.Color(0xffcc00) }; // Orange/Yellow
      case 3: return { c1: new THREE.Color(0x8800ff), c2: new THREE.Color(0x00ffff) }; // Purple/Cyan
      case 4: return { c1: new THREE.Color(0x333333), c2: new THREE.Color(0x999999) }; // Monochrome
      default: return { c1: new THREE.Color(0x4e00ff), c2: new THREE.Color(0xff0080) };
    }
  }, [sceneIndex]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0x4e00ff) },
    uColor2: { value: new THREE.Color(0xff0080) },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uColor1.value.lerp(colors.c1, 0.05);
      materialRef.current.uniforms.uColor2.value.lerp(colors.c2, 0.05);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={NebulaShader.fragmentShader}
        vertexShader={NebulaShader.vertexShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
    <Canvas camera={{ position: [0, 0, 10] }}>
      <CameraController sceneIndex={sceneIndex} />
      <Nebula sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);
