import { expect, test } from 'vitest';
import { SCENES } from './scenes';

test('SCENES data is correctly defined', () => {
  expect(SCENES).toHaveLength(5);
  expect(SCENES[0]).toEqual({ id: 0, label: 'WELCOME', subLabel: 'Welcome' });
  expect(SCENES[1]).toEqual({ id: 1, label: 'PERSONA', subLabel: 'Persona & Career' });
  expect(SCENES[2]).toEqual({ id: 2, label: 'RESEARCH', subLabel: 'Research' });
  expect(SCENES[3]).toEqual({ id: 3, label: 'ARCHIVE', subLabel: 'Archive' });
  expect(SCENES[4]).toEqual({ id: 4, label: 'CONTACT', subLabel: 'Contact' });
});
