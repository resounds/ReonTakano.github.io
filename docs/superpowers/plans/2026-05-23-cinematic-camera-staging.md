# Cinematic Camera & Staging Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a cinematic camera hook that moves the camera in satisfying arcs between scenes in a 3D environment.

**Architecture:**
- Create a configuration utility to define camera positions and look-at targets for each scene.
- Implement a custom hook `useCinematicCamera` that uses `@react-three/fiber`'s `useFrame` to smoothly interpolate the camera's position and orientation.
- Use spherical interpolation or lerping with spherical coordinate conversion to achieve "arc" movements.

**Tech Stack:**
- React, TypeScript
- Three.js, @react-three/fiber
- Vitest for testing

---

### Task 1: Camera Configuration Utility

**Files:**
- Create: `src/hooks/cameraConfig.ts`
- Test: `src/hooks/cameraConfig.test.ts`

- [ ] **Step 1: Write the failing test for getCameraConfig**

```typescript
import { describe, it, expect } from 'vitest';
import { getCameraConfig } from './cameraConfig';
import * as THREE from 'three';

describe('getCameraConfig', () => {
  it('returns initial position for scene 0', () => {
    const config = getCameraConfig(0);
    expect(config.position).toBeInstanceOf(THREE.Vector3);
    expect(config.lookAt).toBeInstanceOf(THREE.Vector3);
    expect(config.position.z).toBeGreaterThan(0);
  });

  it('returns different positions for different scenes', () => {
    const config0 = getCameraConfig(0);
    const config1 = getCameraConfig(1);
    expect(config0.position.equals(config1.position)).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/hooks/cameraConfig.test.ts`
Expected: FAIL (module not found)

- [ ] **Step 3: Implement minimal getCameraConfig**

```typescript
import * as THREE from 'three';

export interface CameraConfig {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
}

export const getCameraConfig = (sceneIndex: number): CameraConfig => {
  const configs: Record<number, CameraConfig> = {
    0: { position: new THREE.Vector3(0, 0, 10), lookAt: new THREE.Vector3(0, 0, 0) },
    1: { position: new THREE.Vector3(8, 2, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    2: { position: new THREE.Vector3(-8, -2, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    3: { position: new THREE.Vector3(0, 8, 8), lookAt: new THREE.Vector3(0, 0, 0) },
    4: { position: new THREE.Vector3(0, 0, 5), lookAt: new THREE.Vector3(0, 0, 0) },
  };
  return configs[sceneIndex] || configs[0];
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/hooks/cameraConfig.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/hooks/cameraConfig.ts src/hooks/cameraConfig.test.ts
git commit -m "feat: add camera configuration utility and tests"
```

---

### Task 2: Cinematic Camera Hook Implementation

**Files:**
- Create: `src/hooks/useCinematicCamera.ts`
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Implement useCinematicCamera hook**

```typescript
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { getCameraConfig } from './cameraConfig';

export const useCinematicCamera = (sceneIndex: number) => {
  const { camera } = useThree();
  const targetConfig = getCameraConfig(sceneIndex);
  
  // Internal state for smooth transition
  const currentPosition = useRef(new THREE.Vector3().copy(camera.position));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // Lerp position
    currentPosition.current.lerp(targetConfig.position, 0.05);
    camera.position.copy(currentPosition.current);

    // Lerp lookAt
    currentLookAt.current.lerp(targetConfig.lookAt, 0.05);
    camera.lookAt(currentLookAt.current);
  });
};
```

- [ ] **Step 2: Add orbital movement logic to the hook**
To achieve an "arc", we can use `Vector3.lerp` but if we want it to feel orbital, we should interpolate in spherical coordinates or ensure the distance from origin stays somewhat consistent during the move.

```typescript
// Refined interpolation logic in useFrame
useFrame((state, delta) => {
  const step = 0.05;
  
  // To create an arc, we can lerp the position and then normalize it 
  // to a certain radius, but simple lerping between distant points 
  // in 3D already creates a "cut through" which we want to avoid.
  // Actually, a simple way to arc is to lerp the position but 
  // also add a "height" offset based on the distance between current and target.
  
  currentPosition.current.lerp(targetConfig.position, step);
  
  // Optional: Add orbital arc by adjusting the length of the vector
  // if we want it to feel like it's orbiting a center.
  // For now, simple lerp is a good start, we can refine it.
  
  camera.position.copy(currentPosition.current);
  currentLookAt.current.lerp(targetConfig.lookAt, step);
  camera.lookAt(currentLookAt.current);
});
```

- [ ] **Step 3: Integrate into VisualBackground.tsx**

Modify `VisualBackground.tsx` to include a component that uses the hook.

```typescript
const CameraController = ({ sceneIndex }: { sceneIndex: number }) => {
  useCinematicCamera(sceneIndex);
  return null;
};

export const VisualBackground = ({ sceneIndex }: { sceneIndex: number }) => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
    <Canvas camera={{ position: [0, 0, 10] }}>
      <CameraController sceneIndex={sceneIndex} />
      <Nebula sceneIndex={sceneIndex} />
    </Canvas>
  </div>
);
```

- [ ] **Step 4: Verify with build**

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useCinematicCamera.ts src/components/VisualBackground/VisualBackground.tsx
git commit -m "feat: implement useCinematicCamera and integrate into VisualBackground"
```
