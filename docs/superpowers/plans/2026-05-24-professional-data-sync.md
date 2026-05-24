# 2026 Professional Data Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the website to reflect Reon Takano's 2026 status as a Software Engineer at KDDI Agile Development Center, including professional experience and categorized academic records.

**Architecture:** Update static data files in `src/data/` with new structures and content. Modify UI components to support categorized rendering and separate sections for Education and Experience.

**Tech Stack:** React, TypeScript, CSS Modules.

---

### Task 1: Update Profile Data (2026 Status)

**Files:**
- Modify: `src/data/profile.ts`

- [ ] **Step 1: Update profile.ts with 2026 information**

```typescript
// src/data/profile.ts
export const profile = {
  name: "鷹野 礼音",
  englishName: "Reon Takano",
  title: "Software Engineer",
  organization: "KDDIアジャイル開発センター株式会社",
  hobbies: ["テニス", "旅行", "音楽"],
  intro: "KDDIアジャイル開発センター株式会社 ソフトウェアエンジニア（2年目）。大学院時代は色彩知覚と空間デザインの融合を研究。現在はアジャイル手法（スクラム）を用いたプロダクト開発に従事し、技術とホスピタリティの両面から価値提供を追求しています。"
};
```

- [ ] **Step 2: Commit changes**

```bash
git add src/data/profile.ts
git commit -m "data: update profile to 2026 professional status"
```

---

### Task 2: Refactor and Update Career Data (Education vs Experience)

**Files:**
- Modify: `src/data/career.ts`

- [ ] **Step 1: Update career.ts with separate Education and Experience arrays**

```typescript
// src/data/career.ts
export const education = [
  {
    period: "2022.04 - 2024.03",
    title: "修士（工学） 情報システム工学専攻",
    organization: "東京電機大学大学院",
    description: "視覚認識研究室(VPRL)。色彩知覚、画像処理、空間デザインの研究に従事。"
  },
  {
    period: "2018.04 - 2022.03",
    title: "学士（工学） 情報システム工学科",
    organization: "東京電機大学",
    description: "システムデザイン工学を専攻。視覚認識研究の基礎を学ぶ。"
  }
];

export const experience = [
  {
    period: "2025.04 - Present",
    title: "ソフトウェアエンジニア",
    organization: "KDDIアジャイル開発センター株式会社",
    description: "アジャイル手法（スクラム）によるプロダクト開発。Webアプリケーションの設計・開発およびDX推進支援を担当。"
  },
  {
    period: "2024.07 - 2025.03",
    title: "フードサービスキャスト",
    organization: "株式会社オリエンタルランド",
    description: "東京ディズニーランド「クイーン・オブ・ハートのバンケットホール」での接客・販売。ホスピタリティ溢れるゲスト体験の提供。"
  },
  {
    period: "2019.12 - 2024.06",
    title: "従業員 / 夜間リーダー",
    organization: "ダイソーイオンレイクタウン店",
    description: "店舗運営全般に加え、リーダーとしてチームマネジメント、新人教育、業務効率化を推進。"
  }
];

// For backward compatibility if needed by existing components
export const career = [...experience, ...education];
```

- [ ] **Step 2: Commit changes**

```bash
git add src/data/career.ts
git commit -m "data: update career with separated education and experience"
```

---

### Task 3: Update Research Data (Archive Status)

**Files:**
- Modify: `src/data/research.ts`

- [ ] **Step 1: Update research.ts with detailed archived research content**

```typescript
// src/data/research.ts
export const research = [
  {
    title: "感性とテクノロジーの融合: 空間デザインの最適化",
    summary: "色彩知覚、形状、配置の3要素を軸に、ユーザの選択した「雰囲気」に合わせた空間デザインを自動生成する手法を研究。遺伝的アルゴリズムやColor Transfer技術を用い、専門知識がなくても直感的に理想の空間を構築できるシステムを提案しました。",
    tags: ["Color Perception", "Spatial Design", "Genetic Algorithm", "Image Processing"],
    status: "Archived (M.S. Research)"
  }
];
```

- [ ] **Step 2: Commit changes**

```bash
git add src/data/research.ts
git commit -m "data: update research to archived status"
```

---

### Task 4: Categorize Publications Data

**Files:**
- Modify: `src/data/publications.ts`

- [ ] **Step 1: Update publications.ts with categorized records**

```typescript
// src/data/publications.ts
export interface Publication {
  year: string;
  title: string;
  venue: string;
  type: "international" | "domestic";
}

export const publications: Publication[] = [
  {
    year: "2024.01",
    title: "Adapting Indoor Scene Design to User-Selected Mood",
    venue: "Computer Graphics and Image Processing (CGIP 2024)",
    type: "international"
  },
  {
    year: "2024.03",
    title: "遺伝的アルゴリズムに基づく選択した雰囲気に合わせた空間デザイン",
    venue: "電子情報通信学会 総合大会",
    type: "domestic"
  },
  {
    year: "2024.03",
    title: "服へのプロジェクションマッピングにおけるマッピング領域抽出に関する考察",
    venue: "電子情報通信学会 総合大会 ジュニア＆学生ポスターセッション",
    type: "domestic"
  },
  {
    year: "2024.02",
    title: "服へのプロジェクションマッピングの定量評価法に関する検討",
    venue: "オーディオビジュアル複合情報処理研究発表会",
    type: "domestic"
  },
  {
    year: "2023.07",
    title: "選択した雰囲気に合わせた空間デザイン",
    venue: "画像の認識・理解シンポジウム（MIRU）",
    type: "domestic"
  },
  {
    year: "2023.03",
    title: "選択した雰囲気に合わせた空間デザイン",
    venue: "電子情報通信学会 総合大会 ジュニア＆学生ポスターセッション",
    type: "domestic"
  }
];
```

- [ ] **Step 2: Commit changes**

```bash
git add src/data/publications.ts
git commit -m "data: categorize publications into international and domestic"
```

---

### Task 5: Update Awards Data

**Files:**
- Modify: `src/data/awards.ts`

- [ ] **Step 1: Update awards.ts with latest records**

```typescript
// src/data/awards.ts
export const awards = [
  {
    year: "2024",
    title: "優秀賞, 札幌商工会議所主催ビジネスコンテスト"
  },
  {
    year: "2023",
    title: "ISS特別賞（協創）, 電子情報通信学会 総合大会"
  },
  {
    year: "2023",
    title: "ISS優秀ポスター賞, 電子情報通信学会 総合大会 ジュニア＆学生ポスターセッション"
  }
];
```

- [ ] **Step 2: Commit changes**

```bash
git add src/data/awards.ts
git commit -m "data: update awards with latest records"
```

---

### Task 6: Update UI for Categorized Publications (Archive Scene)

**Files:**
- Modify: `src/components/Scenes/SceneArchive.tsx`

- [ ] **Step 1: Modify SceneArchive.tsx to filter and display publications by type**

```tsx
// src/components/Scenes/SceneArchive.tsx (Partial)
import { publications } from "../../data/publications";

// Inside component:
const intlPubs = publications.filter(p => p.type === "international");
const domPubs = publications.filter(p => p.type === "domestic");

// Update JSX to render two separate lists with headings
```

- [ ] **Step 2: Verify UI in browser**

- [ ] **Step 3: Commit changes**

```bash
git add src/components/Scenes/SceneArchive.tsx
git commit -m "ui: render publications by category in Archive scene"
```

---

### Task 7: Update UI for Separate Career Sections (Persona Scene)

**Files:**
- Modify: `src/components/Scenes/ScenePersona.tsx`

- [ ] **Step 1: Modify ScenePersona.tsx to display Experience and Education separately**

```tsx
// src/components/Scenes/ScenePersona.tsx (Partial)
import { education, experience } from "../../data/career";

// Update JSX to render Experience section first, then Education section
```

- [ ] **Step 2: Verify UI in browser**

- [ ] **Step 3: Commit changes**

```bash
git add src/components/Scenes/ScenePersona.tsx
git commit -m "ui: separate experience and education in Persona scene"
```
