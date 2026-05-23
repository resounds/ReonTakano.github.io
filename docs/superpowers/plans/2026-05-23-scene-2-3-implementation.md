# Scene 2 & 3 Implementation (Research & Archive) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Scene 2 (Research) and Scene 3 (Archive) with distinctive aesthetics and update VisualBackground with scene-specific 3D effects.

**Architecture:**
- Create new scene components in `src/components/Scenes/`.
- Use `framer-motion` for text and layout animations.
- Enhance `VisualBackground.tsx` to switch between different geometries (Sphere, Icosahedron) and behaviors based on `sceneIndex`.
- Integrate new scenes into `ContentLayer.tsx`.

**Tech Stack:** React, TypeScript, Framer Motion, Three.js (@react-three/fiber).

---

### Task 1: Implement Scene 2 (Research)

**Files:**
- Create: `src/components/Scenes/SceneResearch.tsx`
- Modify: `src/components/Scenes/Scenes.module.css`

- [ ] **Step 1: Create `SceneResearch.tsx`**
  Implement the Research scene displaying data from `src/data/research.ts`. Use immersive animations.

- [ ] **Step 2: Add styles to `Scenes.module.css`**
  Add necessary styles for the Research scene (e.g., keyword chips, research layout).

### Task 2: Implement Scene 3 (Archive)

**Files:**
- Create: `src/components/Scenes/SceneArchive.tsx`
- Modify: `src/components/Scenes/Scenes.module.css`

- [ ] **Step 1: Create `SceneArchive.tsx`**
  Implement the Archive scene displaying publications from `src/data/publications.ts` and awards/education from `src/data/awards.ts`.

- [ ] **Step 2: Add styles to `Scenes.module.css`**
  Add necessary styles for the Archive scene (e.g., list/grid layout for items).

### Task 3: Update ContentLayer to include new scenes

**Files:**
- Modify: `src/components/ContentLayer/ContentLayer.tsx`

- [ ] **Step 1: Import and render new scenes**
  Replace the placeholders with `SceneResearch` and `SceneArchive`.

### Task 4: Update VisualBackground for Scene 2 & 3

**Files:**
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Enhance `VisualBackground.tsx`**
  - For Scene 2 (Research), change geometry to a Sphere or something more organic.
  - For Scene 3 (Archive), change geometry to something more structured like an Icosahedron or a more complex mesh.
  - Adjust rotation speed and movement for each scene.

### Task 5: Verification and Commit

- [ ] **Step 1: Verify with build and lint**
  Run `npm run build` and `npm run lint`.

- [ ] **Step 2: Commit changes**
  ```bash
  git add src/
  git commit -m "feat: implement Scene 2 (Research) and Scene 3 (Archive)"
  ```
