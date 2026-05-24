# Immersive Storyteller Homepage (Starlight Edition) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing homepage into a high-fidelity immersive experience blending teamLab-style generative particles with Disney-style narrative staging and "pixie dust" transitions.

**Architecture:** A Three.js (R3F) background powered by custom GPU shaders for a reactive nebula. A camera controller maps scroll progress to cinematic "orbital" paths. A "Pixie Dust" UI system uses background particles to animate the appearance/disappearance of content cards.

**Tech Stack:** React, Three.js (React Three Fiber, Drei), Framer Motion, GLSL (for custom shaders).

---

### Task 1: Reactive Nebula Core (GPU Shaders)

**Files:**
- Create: `src/components/VisualBackground/NebulaShader.ts`
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Define the Nebula Shader (GLSL)**
Create a custom shader for a flowing, reactive gas cloud.

```typescript
// src/components/VisualBackground/NebulaShader.ts
export const NebulaShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: null },
    uColor2: { value: null },
    uMouse: { value: [0, 0] },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    varying vec2 vUv;
    // Simple noise and color blending for nebula effect
    void main() {
      float strength = distance(vUv, vec2(0.5));
      vec3 color = mix(uColor1, uColor2, vUv.x + sin(uTime * 0.5) * 0.1);
      gl_FragColor = vec4(color, (1.0 - strength) * 0.5);
    }
  `
};
```

- [ ] **Step 2: Implement the Nebula background**
Replace the simple mesh with a large shader-based plane or sphere.

- [ ] **Step 3: Commit**
```bash
git add src/components/VisualBackground/
git commit -m "feat: implement core reactive nebula shader"
```

### Task 2: Cinematic Camera & Staging

**Files:**
- Modify: `src/components/VisualBackground/VisualBackground.tsx`
- Create: `src/hooks/useCinematicCamera.ts`

- [ ] **Step 1: Create cinematic camera hook**
Calculate camera position and look-at target based on `sceneIndex`.

- [ ] **Step 2: Add orbital movement logic**
Implement "Disney-style" staging where the camera arcs before settling on a planet.

- [ ] **Step 3: Commit**
```bash
git add src/hooks/useCinematicCamera.ts src/components/VisualBackground/VisualBackground.tsx
git commit -m "feat: add cinematic camera staging logic"
```

### Task 3: "Pixie Dust" UI Component

**Files:**
- Create: `src/components/Common/PixieCard.tsx`
- Create: `src/components/Common/PixieCard.module.css`

- [ ] **Step 1: Define the PixieCard component**
A wrapper for scene content that uses Framer Motion to simulate particles gathering.

```tsx
// src/components/Common/PixieCard.tsx
import { motion } from 'framer-motion';
import styles from './PixieCard.module.css';

export const PixieCard = ({ children, isVisible }: { children: React.ReactNode, isVisible: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
    animate={isVisible ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
    transition={{ duration: 1, ease: "circOut" }}
    className={styles.card}
  >
    {children}
  </motion.div>
);
```

- [ ] **Step 2: Commit**
```bash
git add src/components/Common/
git commit -m "feat: implement PixieCard component for magical transitions"
```

### Task 4: Scene 2 & 3 Refinement (Planetary Exploration)

**Files:**
- Modify: `src/components/Scenes/SceneResearch.tsx`
- Modify: `src/components/Scenes/SceneArchive.tsx`

- [ ] **Step 1: Wrap scene content in PixieCard**
Apply the new transition system to existing scenes.

- [ ] **Step 2: Update textures for planets**
Add high-quality planetary textures to Scene 2 and 3 in the background.

- [ ] **Step 3: Commit**
```bash
git add src/components/Scenes/
git commit -m "feat: refine research and archive scenes with planetary visuals"
```

### Task 5: Final Global Polish & Performance

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Add reactive starlight paths**
Implement cursor-following particles that "part" when moving.

- [ ] **Step 2: Final FPS optimization**
Verify performance on mobile/desktop and adjust particle counts.

- [ ] **Step 3: Commit**
```bash
git commit -m "feat: final polish with reactive starlight and performance tuning"
```
