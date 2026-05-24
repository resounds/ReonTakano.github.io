import { describe, it, expect } from 'vitest';
import { awards } from './awards';

describe('awards data', () => {
  it('contains the updated 2024 and 2023 records', () => {
    expect(awards[0]).toEqual({
      year: "2023",
      title: "ISS優秀ポスター賞, 電子情報通信学会 総合大会 ジュニア＆学生ポスターセッション"
    });
  });
});
  