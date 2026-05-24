# ストーリーボード・ナビゲーション実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `docs/UI-design.png`に基づき、SceneEntranceに「STORYBOARD」ナビゲーションを追加し、各シーンへのスムーズスクロールを実現する。

**Architecture:** `SceneEntrance.tsx`を修正してヒーローセクションとストーリーボードセクションを構築。`CSS Modules`を使用してデザイン案のタイポグラフィとカードレイアウトを再現。`window.scrollTo`を用いて、背景アニメーションに干渉しない純粋なUI層のナビゲーションを実装。

**Tech Stack:** React, TypeScript, Framer Motion, CSS Modules

---

### Task 1: シーン設定データの定義

**Files:**
- Create: `src/data/scenes.ts`

- [ ] **Step 1: シーン情報のリストを作成**

```typescript
export const SCENES = [
  { id: 0, label: 'WELCOME', subLabel: 'Welcome' },
  { id: 1, label: 'PERSONA', subLabel: 'Persona & Career' },
  { id: 2, label: 'RESEARCH', subLabel: 'Research' },
  { id: 3, label: 'ARCHIVE', subLabel: 'Archive' },
  { id: 4, label: 'CONTACT', subLabel: 'Contact' },
];
```

- [ ] **Step 2: コミット**

```bash
git add src/data/scenes.ts
git commit -m "data: add scene configuration for storyboard"
```

### Task 2: スタイリングの拡張

**Files:**
- Modify: `src/components/Scenes/Scenes.module.css`

- [ ] **Step 1: デザイン案に合わせたスタイルを追加**

```css
.heroSection {
  text-align: center;
  margin-bottom: 4rem;
}

.heroTitle {
  font-family: serif;
  font-size: 4rem;
  letter-spacing: 0.15em;
  margin: 0;
  text-transform: uppercase;
}

.heroSubtitle {
  font-size: 1.2rem;
  opacity: 0.7;
  letter-spacing: 0.2em;
  margin-top: 0.5rem;
}

.divider {
  width: 80px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 2rem auto;
}

.storyboardContainer {
  width: 100%;
  max-width: 1000px;
  text-align: center;
}

.storyboardTitle {
  font-family: serif;
  font-size: 1.2rem;
  letter-spacing: 0.4em;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cardGrid {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.sceneCard {
  width: 140px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
}

.sceneCard:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px);
}

.cardImagePlaceholder {
  height: 90px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.2);
  letter-spacing: 0.1em;
}

.cardLabel {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.exploreHint {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  opacity: 0.5;
}

.scrollLine {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, white, transparent);
}

.scrollText {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
}
```

- [ ] **Step 2: コミット**

```bash
git add src/components/Scenes/Scenes.module.css
git commit -m "style: add storyboard and hero styles"
```

### Task 3: SceneEntrance の実装変更

**Files:**
- Modify: `src/components/Scenes/SceneEntrance.tsx`

- [ ] **Step 1: Storyboard ロジックと UI の実装**

```tsx
import { motion } from 'framer-motion';
import styles from './Scenes.module.css';
import { SCENES } from '../../data/scenes';

export const SceneEntrance = () => {
  const handleJump = (index: number) => {
    window.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.sceneContent}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>REON TAKANO</h1>
        <p className={styles.heroSubtitle}>Immersive Storyteller</p>
        <div className={styles.divider} />
      </motion.div>

      <motion.div 
        className={styles.storyboardContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className={styles.storyboardTitle}>STORYBOARD</h2>
        <div className={styles.cardGrid}>
          {SCENES.map((scene) => (
            <motion.div
              key={scene.id}
              className={styles.sceneCard}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleJump(scene.id)}
            >
              <div className={styles.cardImagePlaceholder}>
                SCENE {scene.id}
              </div>
              <div className={styles.cardLabel}>{scene.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className={styles.exploreHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
      </motion.div>
    </div>
  );
};
```

- [ ] **Step 2: コミット**

```bash
git add src/components/Scenes/SceneEntrance.tsx
git commit -m "feat: implement storyboard navigation in SceneEntrance"
```

### Task 4: 動作確認と最終調整

- [ ] **Step 1: ブラウザで動作を確認**
  - カードをクリックした際、対応するシーンへスムーズにスクロールするか。
  - スナップ位置が正しく維持されているか。
  - 背景アニメーションに悪影響が出ていないか。

- [ ] **Step 2: レスポンシブ調整 (必要に応じて)**
  - モバイル端末（画面幅が狭い場合）でカードが崩れないか確認。
  - 必要であれば `Scenes.module.css` にメディアクエリを追加。
