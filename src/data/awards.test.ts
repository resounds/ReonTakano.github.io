import { describe, it, expect } from 'vitest';
import { awards } from './awards';

describe('awards data', () => {
  it('contains the updated 2024 and 2023 records', () => {
    expect(awards).toHaveLength(3);
    
    // Check 2024 Sapporo Biz Contest
    expect(awards[0]).toEqual({
      year: "2024",
      title: "優秀賞, 札幌商工会議所主催ビジネスコンテスト"
    });

    // Check 2023 ISS Special Award
    expect(awards[1]).toEqual({
      year: "2023",
      title: "ISS特別賞（協創）, 電子情報通信学会 総合大会"
    });

    // Check 2023 ISS Poster Award
    expect(awards[2]).toEqual({
      year: "2023",
      title: "ISS優秀ポスター賞, 電子情報通信学会 総合大会 ジュニア＆学生ポスターセッション"
    });
  });
});
