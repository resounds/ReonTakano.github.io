# Final Scene & Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the Takano Reon homepage by adding the final contact scene, implementing a loading state, and polishing the visual transitions.

**Architecture:** Add a new `SceneContact` component, update `ContentLayer` to handle 5 scenes, update `VisualBackground` for the new scene, and implement a global loading state in `App.tsx`.

**Tech Stack:** React, TypeScript, Framer Motion, Three.js (React Three Fiber), CSS Modules.

---

### Task 1: Create SceneContact Component

**Files:**
- Create: `src/components/Scenes/SceneContact.tsx`
- Modify: `src/components/Scenes/Scenes.module.css`

- [ ] **Step 1: Add contact styles to Scenes.module.css**
```css
/* Contact Scene */
.contactLinks {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.contactLink {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  border-bottom: 1px transparent;
  transition: border-bottom 0.3s;
}

.contactLink:hover {
  border-bottom: 1px solid #fff;
}
```

- [ ] **Step 2: Create SceneContact.tsx**
```tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';

export const SceneContact = () => {
  return (
    <div className={styles.sceneContent}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        新しいプロジェクトや共同研究、その他のお問い合わせはこちらまで。
      </motion.p>
      <motion.div
        className={styles.contactLinks}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="mailto:reon.takano@example.com" className={styles.contactLink}>Email</a>
        <a href="https://github.com/ReonTakano" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>GitHub</a>
        <a href="https://twitter.com/ReonTakano" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Twitter</a>
      </motion.div>
    </div>
  );
};
```

### Task 2: Update ContentLayer for 5 Scenes

**Files:**
- Modify: `src/components/ContentLayer/ContentLayer.tsx`

- [ ] **Step 1: Import SceneContact and update scene count**
```tsx
// src/components/ContentLayer/ContentLayer.tsx
// ... imports
import { SceneContact } from '../Scenes/SceneContact';

// ...
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 scenes total: map progress [0, 1] to indices [0, 1, 2, 3, 4]
    const sceneIndex = Math.min(Math.floor(latest * 5), 4);
    onSceneChange(sceneIndex);
  });

// ... return
    <main ref={containerRef} className={styles.container}>
      <section className={styles.scene}><SceneEntrance /></section>
      <section className={styles.scene}><ScenePersona /></section>
      <section className={styles.scene}><SceneResearch /></section>
      <section className={styles.scene}><SceneArchive /></section>
      <section className={styles.scene}><SceneContact /></section>
    </main>
```

### Task 3: Update VisualBackground for Scene Index 4

**Files:**
- Modify: `src/components/VisualBackground/VisualBackground.tsx`

- [ ] **Step 1: Add color and geometry for scene 4**
```tsx
// src/components/VisualBackground/VisualBackground.tsx
// ... targetColor
      case 3: return new Color('#483d8b'); // darkslateblue
      case 4: return new Color('#2f4f4f'); // darkslategray (Contact - Finality)
      default: return new Color('#4169e1');

// ... geometries
      {sceneIndex === 3 && <icosahedronGeometry args={[1.5, 0]} />}
      {sceneIndex === 4 && <tetrahedronGeometry args={[1.8, 0]} />}
      <meshStandardMaterial color="#4169e1" wireframe={sceneIndex === 3 || sceneIndex === 4} />
```

### Task 4: Implement Loading State in App.tsx

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/styles/App.css`

- [ ] **Step 1: Add loading styles to App.css**
```css
.loadingOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  color: #fff;
  font-family: serif;
  letter-spacing: 0.2rem;
}
```

- [ ] **Step 2: Add loading state and effect to App.tsx**
```tsx
import { useState, useEffect } from 'react';
// ...

function App() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading && <div className="loadingOverlay">Loading...</div>}
      <VisualBackground sceneIndex={sceneIndex} />
      <ContentLayer onSceneChange={setSceneIndex} />
    </div>
  );
}
```

### Task 5: Verify and Finalize

- [ ] **Step 1: Run build and lint**
Run: `npm run build && npm run lint`

- [ ] **Step 2: Commit changes**
```bash
git add .
git commit -m "feat: complete homepage with final scene and polish"
```
