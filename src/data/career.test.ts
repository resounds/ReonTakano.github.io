import { expect, test } from 'vitest';
import { career, education, experience } from './career';

test('career data has separated education and experience', () => {
  expect(education).toBeDefined();
  expect(experience).toBeDefined();
  expect(career).toBeDefined();
});

test('education data contains correct items', () => {
  expect(education.length).toBe(2);
  expect(education[0].organization).toBe('東京電機大学大学院');
});

test('experience data contains correct items', () => {
  expect(experience.length).toBe(3);
  expect(experience[0].organization).toBe('KDDIアジャイル開発センター株式会社');
  expect(experience[1].organization).toBe('株式会社オリエンタルランド');
  expect(experience[2].organization).toBe('ダイソーイオンレイクタウン店');
});

test('career is a combination of experience and education', () => {
  expect(career.length).toBe(education.length + experience.length);
  expect(career).toEqual([...experience, ...education]);
});
