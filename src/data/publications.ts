// src/data/publications.ts

export interface Publication {
  year: string;
  title: string;
  venue: string;
  type: 'international' | 'domestic';
}

export const publications: Publication[] = [
  {
    year: "2024.01",
    title: "Adapting Indoor Scene Design to User-Selected Mood",
    venue: "Computer Graphics and Image Processing (CGIP)",
    type: "international"
  },
  {
    year: "2023.03",
    title: "選択した雰囲気に合わせた空間デザイン",
    venue: "電子情報通信学会総合大会 ジュニア＆学生ポスターセッション",
    type: "domestic"
  },
  {
    year: "2023.07",
    title: "選択した雰囲気に合わせた空間デザイン",
    venue: "画像の認識・理解シンポジウム（MIRU）",
    type: "domestic"
  },
  {
    year: "2024.02",
    title: "服へのプロジェクションマッピングの定量評価法に関する検討",
    venue: "オーディオビジュアル複合情報処理研究発表会",
    type: "domestic"
  },
  {
    year: "2024.03",
    title: "遺伝的アルゴリズムに基づく選択した雰囲気に合わせた空間デザイン",
    venue: "電子情報通信学会総合大会",
    type: "domestic"
  },
  {
    year: "2024.03",
    title: "服へのプロジェクションマッピングにおけるマッピング領域抽出に関する考察",
    venue: "電子情報通信学会総合大会 ジュニア＆学生ポスターセッション",
    type: "domestic"
  }
];
