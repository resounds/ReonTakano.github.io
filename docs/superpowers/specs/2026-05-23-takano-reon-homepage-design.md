# 鷹野礼音 ホームページ作成 設計仕様書 (Immersive Storyteller)

## 1. プロジェクト概要
鷹野礼音 (TAKANO REON) 氏のオンライン履歴書兼ポートフォリオサイト。単なる情報の羅列ではなく、東京ディズニーリゾートのような「物語性」と teamLab のような「デジタルな没入感」を融合させた、体験型のウェブサイトを目指す。

## 2. デザインコンセプト
**"Immersive Storyteller"**
- **物語性:** スクロールを「ページをめくる」あるいは「舞台を進む」体験として捉え、起承転結のある構成にする。
- **没入感:** 背景に WebGL (Three.js) を活用し、ユーザーの操作（マウス、スクロール）に反応するインタラクティブな演出を行う。

## 3. 構成 (Scene Flow)
サイトは以下の 5 つのシーンで構成され、スクロールによって滑らかに遷移する。

- **Scene 0: Entrance (導入)**
  - ローディング演出とタイピングアニメーションによる名前の表示。
- **Scene 1: Persona (自己紹介)**
  - 明るく軽やかなパーティクル背景。
  - 職業、趣味（テニス、旅行、音楽など）をビジュアル重視のカードで紹介。
- **Scene 2: Research (専門性/深淵)**
  - 背景が深みのあるデジタルアート（teamLab風）へ。
  - 研究分野の紹介。専門キーワードが空間に浮かぶ演出。
- **Scene 3: Archive (実績/知の集積)**
  - 魔法の図書館をイメージしたインタラクティブなリスト。
  - Publications (論文・発表)、受賞履歴を整理して表示。
- **Scene 4: Connect (結び/連絡)**
  - 落ち着いたトーン。
  - SNSリンク、連絡先を表示。

## 4. 技術スタック
- **Frontend Framework:** React (Vite) + TypeScript
- **3D/Visual Graphics:** Three.js (React Three Fiber, React Three Drei)
- **Animation:** Framer Motion (UI要素のフェード、スライド、遷移)
- **Styling:** CSS Modules (Vanilla CSS)
- **Deployment:** GitHub Pages (予定)

## 5. データの管理
コンテンツは `src/data/` ディレクトリ内の TypeScript ファイルで管理し、保守性を高める。
- `profile.ts`: 自己紹介、趣味など
- `research.ts`: 研究分野の説明、キーワード
- `publications.ts`: 論文・発表リスト
- `awards.ts`: 受賞履歴

## 6. 実装上の留意点
- **パフォーマンス:** Three.js の負荷を考慮し、モバイル端末では重い演出をオフにするか、簡易的な背景に切り替える。
- **アクセシビリティ:** 演出が過剰になりすぎないよう、テキストの読みやすさを確保し、Publications 等の重要な情報は整然と表示する。
- **レスポンシブ:** PCでの没入体験を最大化しつつ、スマートフォンでも全情報が不足なく閲覧できるようにする。
