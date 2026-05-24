// src/components/VisualBackground/VisualBackground.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeEvent } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { NebulaShader } from './NebulaShader';
import { PlanetShader } from './PlanetShader';
import { StarlightShader } from './StarlightShader';
import { useCinematicCamera } from '../../hooks/useCinematicCamera';
import { generateStarlightData, STARLIGHT_COUNT, StarlightData } from './starlightUtils';
import { MagicCircle } from './MagicCircle';
import { Constellations } from './Constellations';

const CameraController = ({ sceneIndex }: { sceneIndex: number }) => {
  useCinematicCamera(sceneIndex);
  return null;
};

interface NebulaProps {
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  colors: { c1: THREE.Color; c2: THREE.Color };
}

const Nebula = ({ onClick, colors }: NebulaProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: colors.c1.clone() },
    uColor2: { value: colors.c2.clone() },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }), [colors.c1, colors.c2]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uColor1.value.lerp(colors.c1, 0.05);
      materialRef.current.uniforms.uColor2.value.lerp(colors.c2, 0.05);
      // Smoothly update mouse position for reactive starlight paths
      materialRef.current.uniforms.uMouse.value.lerp(state.pointer, 0.1);
    }
  });

  return (
    <mesh ref={meshRef} onClick={onClick}>
      <sphereGeometry args={[45, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={NebulaShader.fragmentShader}
        vertexShader={NebulaShader.vertexShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const Planet = ({ sceneIndex }: { sceneIndex: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const colors = useMemo(() => {
    switch (sceneIndex) {
      case 2: return { c1: new THREE.Color(0xff4400), c2: new THREE.Color(0xffcc00) }; // Fire/Lava planet
      case 3: return { c1: new THREE.Color(0x0088ff), c2: new THREE.Color(0x00ffff) }; // Ice/Water planet
      default: return { c1: new THREE.Color(0xff4400), c2: new THREE.Color(0xffcc00) };
    }
  }, [sceneIndex]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0xff4400) },
    uColor2: { value: new THREE.Color(0xffcc00) },
    uVisible: { value: 0 },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uColor1.value.lerp(colors.c1, 0.05);
      materialRef.current.uniforms.uColor2.value.lerp(colors.c2, 0.05);
      
      // Fade in for scene 2 and 3, otherwise fade out
      const targetVisible = (sceneIndex === 2 || sceneIndex === 3) ? 1.0 : 0.0;
      materialRef.current.uniforms.uVisible.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uVisible.value,
        targetVisible,
        0.05
      );
      
      // Rotate the planet
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.001;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={PlanetShader.fragmentShader}
        vertexShader={PlanetShader.vertexShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

const Starlight = ({ data }: { data: StarlightData }) => {
  const count = STARLIGHT_COUNT;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { initialPositions, seeds, sizes, speeds } = data;

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uPartDistance: { value: 4.0 },
    uPartForce: { value: 1.5 },
    uDriftAmount: { value: 0.1 },
    uBaseScale: { value: 0.1 },
    uTwinkleSpeed: { value: 5.0 },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      const targetMouse = new THREE.Vector2(state.pointer.x * 15, state.pointer.y * 15);
      materialRef.current.uniforms.uMouse.value.lerp(targetMouse, 0.05);
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.2, 6]}>
        <instancedBufferAttribute
          attach="attributes-aInitialPosition"
          args={[initialPositions, 3]}
        />
        <instancedBufferAttribute
          attach="attributes-aSeed"
          args={[seeds, 1]}
        />
        <instancedBufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
        <instancedBufferAttribute
          attach="attributes-aSpeed"
          args={[speeds, 1]}
        />
      </circleGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={StarlightShader.vertexShader}
        fragmentShader={StarlightShader.fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => {
  const [circles, setCircles] = useState<{ id: number; pos: THREE.Vector3; color: THREE.Color }[]>([]);

  const starlightData = useMemo(() => generateStarlightData(STARLIGHT_COUNT), []);

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

  const handleBackgroundClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const id = Date.now();
    const pos = e.point.clone();
    // Slightly move it towards the camera to avoid Z-fighting with background sphere
    pos.multiplyScalar(0.95);
    const color = colors.c1.clone().lerp(colors.c2, Math.random());
    setCircles(prev => [...prev, { id, pos, color }]);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 10] }} dpr={[1, 2]}>
        <CameraController sceneIndex={sceneIndex} />
        <Nebula onClick={handleBackgroundClick} colors={colors} />
        <Starlight data={starlightData} />
        <Constellations starPositions={starlightData.initialPositions} />
        <Planet sceneIndex={sceneIndex} />
        {circles.map(c => (
          <MagicCircle 
            key={c.id} 
            position={c.pos} 
            color={c.color} 
            onComplete={() => setCircles(prev => prev.filter(x => x.id !== c.id))} 
          />
        ))}
      </Canvas>
    </div>
  );
};