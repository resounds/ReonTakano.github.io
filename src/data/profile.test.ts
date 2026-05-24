import { expect, test } from 'vitest';
import { profile } from './profile';

test('profile data is updated to 2026 status', () => {
  expect(profile.intro).toContain('KDDIアジャイル開発センター');
  expect(profile.intro).toContain('ソフトウェアエンジニア');
});
