# ストーリーボード・アイコン追加実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `lucide-react`ライブラリを使用して、ストーリーボードの各カードにデザインに合ったアイコンを表示する。

**Architecture:** `src/data/scenes.ts`にアイコン名を定義し、`SceneEntrance.tsx`で`lucide-react`のコンポーネントを動的に（またはマッピングして）レンダリングする。

**Tech Stack:** React, lucide-react, Framer Motion

---

### Task 1: シーンデータへのアイコン名追加

**Files:**
- Modify: `src/data/scenes.ts`

- [ ] **Step 1: 各シーンにアイコン名を追加**

```typescript
export const SCENES = [
  { id: 0, label: 'WELCOME', subLabel: 'Welcome', icon: 'Sparkles' },
  { id: 1, label: 'PERSONA', subLabel: 'Persona & Career', icon: 'User' },
  { id: 2, label: 'RESEARCH', subLabel: 'Research', icon: 'Microscope' },
  { id: 3, label: 'ARCHIVE', subLabel: 'Archive', icon: 'Library' },
  { id: 4, label: 'CONTACT', subLabel: 'Contact', icon: 'Mail' },
];
```

- [ ] **Step 2: コミット**

```bash
git add src/data/scenes.ts
git commit -m "data: add icon names to scene configuration"
```

### Task 2: SceneEntrance でのアイコン表示

**Files:**
- Modify: `src/components/Scenes/SceneEntrance.tsx`

- [ ] **Step 1: アイコンコンポーネントのインポートとレンダリング**

```tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { SCENES } from '../../data/scenes';
import { Sparkles, User, Microscope, Library, Mail, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  User,
  Microscope,
  Library,
  Mail,
};

export const SceneEntrance = () => {
  const handleJump = (index: number) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.sceneContent}>
      {/* ... Hero Section remains same ... */}
      
      <motion.div 
        className={styles.storyboardContainer}
        {/* ... props ... */}
      >
        <h2 className={styles.storyboardTitle}>STORYBOARD</h2>
        <div className={styles.cardGrid}>
          {SCENES.map((scene) => {
            const Icon = iconMap[scene.icon];
            return (
              <motion.div
                key={scene.id}
                className={styles.sceneCard}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleJump(scene.id)}
              >
                <div className={styles.cardImagePlaceholder}>
                  {Icon && <Icon size={32} strokeWidth={1.5} style={{ opacity: 0.8 }} />}
                </div>
                <div className={styles.cardLabel}>{scene.label}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ... Explore Hint remains same ... */}
    </div>
  );
};
```

- [ ] **Step 2: コミット**

```bash
git add src/components/Scenes/SceneEntrance.tsx
git commit -m "feat: add icons to storyboard cards using lucide-react"
```

### Task 3: 動作確認とスタイルの微調整

- [ ] **Step 1: アイコンのサイズと余白の調整**
  - アイコンがカード内で中央に配置され、バランスが良いか確認。
  - 必要に応じて `Scenes.module.css` の `cardImagePlaceholder` を微調整。

- [ ] **Step 2: コミット**

```bash
git commit -m "style: polish storyboard icon alignment"
```
