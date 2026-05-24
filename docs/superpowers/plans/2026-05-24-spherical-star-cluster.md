# Spherical Star Cluster & Interactive Effects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the flat background into a 360-degree immersive star cluster with interactive magic circles and constellations.

**Architecture:** Use multi-layered spherical shells centered on the camera. Stars are distributed in a spherical volume. Magic circles are spawned via raycasting, and constellations are drawn dynamically between nearby stars.

**Tech Stack:** React, Three.js, @react-three/fiber, TypeScript, Custom Shaders.

---

### Task 1: Update Starlight Data for Spherical Distribution

**Files:**
- Modify: `src/components/VisualBackground/starlightUtils.ts`

- [ ] **Step 1: Modify `generateStarlightData` to use spherical distribution**

```typescript
export const generateStarlightData = (count: number): StarlightData => {
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  const size = new Float32Array(count);
  const speed = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Spherical distribution: r, theta, phi
    const r = 15 + Math.random() * 20; // Radius between 15 and 35
    const theta = Math.acos(2 * Math.random() - 1); // 0 to PI
    const phi = Math.random() * Math.PI * 2; // 0 to 2PI
    
    pos[i * 3 + 0] = r * Math.sin(theta) * Math.cos(phi);
    pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    pos[i * 3 + 2] = r * Math.cos(theta);
    
    seed[i] = Math.random() * 100;
    size[i] = Math.random() * 2.0 + 0.5;
    speed[i] = Math.random() * 0.5 + 0.1;
  }
  return { initialPositions: pos, seeds: seed, sizes: size, speeds: speed };
};
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/VisualBackground/starlightUtils.ts
git commit -m "feat: change star distribution to spherical volume"
```

---

### Task 2: Update Nebula Shader for 3D Seamless Noise

**Files:**
- Modify: `src/components/VisualBackground/NebulaShader.ts`

- [ ] **Step 1: Update NebulaShader to use world position instead of UVs**

```typescript
export const NebulaShader = {
  // ... (uniforms stay same)
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec3 vWorldPosition;

    // Simplex 3D noise (simplified for brevity)
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }

    void main() {
      vec3 normalPos = normalize(vWorldPosition);
      float n = noise(normalPos * 2.0 + uTime * 0.1);
      
      vec3 color = mix(uColor1, uColor2, n);
      gl_FragColor = vec4(color, 0.4);
    }
  `
};
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/VisualBackground/NebulaShader.ts
git commit -m "feat: update nebula shader for spherical mapping"
```

---

### Task 3: Implement Magic Circle Component

**Files:**
- Create: `src/components/VisualBackground/MagicCircle.tsx`

- [ ] **Step 1: Create MagicCircle component with fade-out logic**

```tsx
import { useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export const MagicCircle = ({ position, color }: { position: THREE.Vector3, color: THREE.Color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [opacity, setOpacity] = useState(1);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5;
      setOpacity(prev => Math.max(0, prev - delta * 0.5));
    }
  });

  if (opacity <= 0) return null;

  return (
    <mesh ref={meshRef} position={position} lookAt={[0, 0, 0]}>
      <ringGeometry args={[1.5, 1.6, 32]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};
```

- [ ] **Step 2: Commit changes**

```bash
git add src/components/VisualBackground/MagicCircle.tsx
git commit -m "feat: add MagicCircle component"
```

---

### Task 4: Integrate Interactions into VisualBackground

**Files:**
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Add click listener and state for magic circles**
- [ ] **Step 2: Update Nebula and Starlight to be spherical shells centered on camera**

- [ ] **Step 3: Commit changes**

```bash
git add src/components/VisualBackground/VisualBackground.tsx
git commit -m "feat: integrate 360 background and click interaction"
```

---

### Task 5: Implement Dynamic Constellations

**Files:**
- Create: `src/components/VisualBackground/Constellations.tsx`
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Create Constellations component that finds nearest stars to mouse**
- [ ] **Step 2: Render lines between those stars**
- [ ] **Step 3: Commit changes**

```bash
git add src/components/VisualBackground/Constellations.tsx src/components/VisualBackground/VisualBackground.tsx
git commit -m "feat: add constellation connection system"
```
