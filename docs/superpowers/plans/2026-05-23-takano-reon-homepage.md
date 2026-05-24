# Takano Reon Homepage (Immersive Storyteller) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an immersive, story-based portfolio/CV website for Takano Reon using React, Three.js, and Framer Motion.

**Architecture:** A React-based single-page application with a fixed WebGL background (Three.js) that responds to scroll progress. Content is layered on top and transitioned using Framer Motion to create a storytelling experience.

**Tech Stack:** React (Vite), TypeScript, Three.js (React Three Fiber), Framer Motion, CSS Modules.

---

### Task 1: Project Initialization

**Files:**
- Create: `package.json`, `tsconfig.json`, `vite.config.ts`
- Create: `index.html`, `src/main.tsx`, `src/App.tsx`

- [ ] **Step 1: Scaffold Vite project with React and TypeScript**

Run: `npm create vite@latest . -- --template react-ts`

- [ ] **Step 2: Install core dependencies**

Run: `npm install three @types/three @react-three/fiber @react-three/drei framer-motion lucide-react`

- [ ] **Step 3: Setup basic folder structure**

Run: `mkdir -p src/components src/data src/styles src/hooks src/assets`

- [ ] **Step 4: Verify initial build**

Run: `npm run build`
Expected: Success

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: initialize vite project with react-ts and dependencies"
```

### Task 2: Data Schema & Mock Data

**Files:**
- Create: `src/data/profile.ts`, `src/data/career.ts`, `src/data/research.ts`, `src/data/publications.ts`, `src/data/awards.ts`

- [ ] **Step 1: Define and export profile data**

```typescript
// src/data/profile.ts
export const profile = {
  name: "鷹野 礼音",
  englishName: "Takano Reon",
  hobbies: ["テニス", "旅行", "音楽"],
  intro: "物語と没入感を大切にする研究者です。"
};
```

- [ ] **Step 2: Define and export career data**

```typescript
// src/data/career.ts
export const career = [
  {
    period: "202x - Present",
    title: "Researcher",
    organization: "University of X",
    description: "Deep dive into digital storytelling."
  }
];
```

- [ ] **Step 3: Define research, publications, and awards data similarly**

- [ ] **Step 4: Commit**

```bash
git add src/data/*.ts
git commit -m "feat: add data schema and initial content"
```

### Task 3: Visual Background Core (Three.js)

**Files:**
- Create: `src/components/VisualBackground/VisualBackground.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create basic Three.js Canvas with a rotating box**

```tsx
// src/components/VisualBackground/VisualBackground.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const VisualBackground = () => (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
    <Canvas>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </Canvas>
  </div>
);
```

- [ ] **Step 2: Integrate into App**

- [ ] **Step 3: Verify rendering**

Run: `npm run dev` (Check in browser)

- [ ] **Step 4: Commit**

```bash
git add src/components/VisualBackground/VisualBackground.tsx src/App.tsx
git commit -m "feat: setup basic Three.js background canvas"
```

### Task 4: Content Layer & Scroll Logic

**Files:**
- Create: `src/components/ContentLayer/ContentLayer.tsx`
- Create: `src/styles/Global.module.css`

- [ ] **Step 1: Create scrollable container with scenes**

```tsx
// src/components/ContentLayer/ContentLayer.tsx
export const ContentLayer = () => (
  <main className={styles.container}>
    <section className={styles.scene}>Scene 0</section>
    <section className={styles.scene}>Scene 1</section>
    <section className={styles.scene}>Scene 2</section>
  </main>
);
```

- [ ] **Step 2: Add CSS for snap scrolling**

```css
/* src/styles/Global.module.css */
.container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.scene {
  height: 100vh;
  scroll-snap-align: start;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ContentLayer/ContentLayer.tsx src/styles/Global.module.css
git commit -m "feat: add scrollable content layer with snap scrolling"
```

### Task 5: Scene 0 & 1 Implementation (Persona & Career)

**Files:**
- Create: `src/components/Scenes/SceneEntrance.tsx`, `src/components/Scenes/ScenePersona.tsx`

- [ ] **Step 1: Implement Entrance with typing animation (Framer Motion)**

- [ ] **Step 2: Implement Persona & Career cards**

- [ ] **Step 3: Update VisualBackground to change colors based on Scene 1**

- [ ] **Step 4: Commit**

```bash
git add src/components/Scenes/
git commit -m "feat: implement Scene 0 and Scene 1"
```

### Task 6: Scene 2 & 3 Implementation (Research & Archive)

**Files:**
- Create: `src/components/Scenes/SceneResearch.tsx`, `src/components/Scenes/SceneArchive.tsx`

- [ ] **Step 1: Implement Research deep dive (teamLab style background)**

- [ ] **Step 2: Implement Archive (Publications & Awards) with interactive list**

- [ ] **Step 3: Commit**

```bash
git add src/components/Scenes/
git commit -m "feat: implement Scene 2 and Scene 3"
```

### Task 7: Final Scene & Polish

**Files:**
- Create: `src/components/Scenes/SceneContact.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Implement Contact scene**

- [ ] **Step 2: Add global transitions and loading state**

- [ ] **Step 3: Final build check**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: complete homepage with final scene and polish"
```
