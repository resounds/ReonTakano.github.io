// src/components/VisualBackground/VisualBackground.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { NebulaShader } from './NebulaShader';
import { PlanetShader } from './PlanetShader';
import { StarlightShader } from './StarlightShader';
import { useCinematicCamera } from '../../hooks/useCinematicCamera';
import { generateStarlightData, STARLIGHT_COUNT } from './starlightUtils';

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
      // Smoothly update mouse position for reactive starlight paths
      materialRef.current.uniforms.uMouse.value.lerp(state.pointer, 0.1);
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

const Starlight = () => {
  const count = STARLIGHT_COUNT;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const data = useMemo(() => generateStarlightData(count), [count]);
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

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
    <Canvas camera={{ position: [0, 0, 10] }} dpr={[1, 2]}>
      <CameraController sceneIndex={sceneIndex} />
      <Nebula sceneIndex={sceneIndex} />
      <Starlight />
      <Planet sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);