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
