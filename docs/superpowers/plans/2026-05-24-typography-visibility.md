# シーン別タイポグラフィ・視認性向上実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 各シーンの背景アニメーションに合わせてタイポグラフィ（色、サイズ、シャドウ）を最適化し、高い視認性とデザイン性を両立させる。

**Architecture:** `Scenes.module.css` に視認性向上のための共通クラスとシーン別変数を定義。各シーンコンポーネントおよび `PixieCard` にこれらのスタイルを適用。背景（WebGL）コードには一切触れず、UI層の修正のみを行う。

**Tech Stack:** React, TypeScript, CSS Modules, Framer Motion

---

### Task 1: スタイル共通基盤の整備

**Files:**
- Modify: `src/components/Scenes/Scenes.module.css`
- Modify: `src/components/Common/PixieCard.tsx`

- [ ] **Step 1: 視認性向上のための共通クラスを `Scenes.module.css` に追加**

```css
/* 視認性向上のためのテキストシャドウ */
.textShadow {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.textShadowStrong {
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
}

/* シーン別のカラー調整（必要に応じて追加） */
.brightText {
  color: #ffffff;
}

.softText {
  color: rgba(255, 255, 255, 0.9);
}
```

- [ ] **Step 2: `PixieCard` に `className` プロップを追加して外部からスタイルを上書き可能にする**

```tsx
// src/components/Common/PixieCard.tsx
export const PixieCard = ({ 
  children, 
  isVisible, 
  className = "" 
}: { 
  children: React.ReactNode, 
  isVisible: boolean,
  className?: string
}) => (
  <motion.div 
    /* ... existing props ... */
    className={`${styles.card} ${className}`}
  >
    {children}
  </motion.div>
);
```

- [ ] **Step 3: コミット**

```bash
git add src/components/Scenes/Scenes.module.css src/components/Common/PixieCard.tsx
git commit -m "style: add visibility helpers and extend PixieCard"
```

### Task 2: SceneEntrance & ScenePersona の調整

**Files:**
- Modify: `src/components/Scenes/SceneEntrance.tsx`
- Modify: `src/components/Scenes/ScenePersona.tsx`

- [ ] **Step 1: SceneEntrance (Welcome) の視認性向上**
  - メインタイトルに外光シャドウを追加。
  - ストーリーボードのタイトルとカードの視認性を強化。

- [ ] **Step 2: ScenePersona の調整**
  - カード内のテキストにシャドウを適用し、背景の緑/青に埋もれないようにする。

- [ ] **Step 3: コミット**

```bash
git add src/components/Scenes/SceneEntrance.tsx src/components/Scenes/ScenePersona.tsx
git commit -m "style: improve visibility for Entrance and Persona scenes"
```

### Task 3: SceneResearch & SceneArchive の調整 (高難易度背景)

**Files:**
- Modify: `src/components/Scenes/SceneResearch.tsx`
- Modify: `src/components/Scenes/SceneArchive.tsx`

- [ ] **Step 1: SceneResearch (オレンジ背景) の視認性向上**
  - オレンジ背景は白が最も見にくいため、`.textShadowStrong` を適用。
  - タグの背景色を少し濃くしてコントラストを上げる。

- [ ] **Step 2: SceneArchive (リスト形式) の調整**
  - 各リストアイテムに微かな背景色を追加して可読性を向上。
  - 境界線の色を調整。

- [ ] **Step 3: コミット**

```bash
git add src/components/Scenes/SceneResearch.tsx src/components/Scenes/SceneArchive.tsx
git commit -m "style: optimize visibility for Research and Archive scenes"
```

### Task 4: SceneContact の調整と最終確認

**Files:**
- Modify: `src/components/Scenes/SceneContact.tsx`

- [ ] **Step 1: SceneContact の調整**
  - モノクロ背景に合わせ、リンクの視認性とホバー演出を微調整。

- [ ] **Step 2: 全体の動作確認**
  - 全シーンをスクロールし、背景アニメーションが激しい瞬間でも文字が読めるか確認。

- [ ] **Step 3: コミット**

```bash
git add src/components/Scenes/SceneContact.tsx
git commit -m "style: final typography polish for Contact scene"
```
