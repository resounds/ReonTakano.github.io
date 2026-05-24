import { describe, it, expect } from 'vitest';
import { generateStarlightData } from './starlightUtils';

describe('Starlight Data Generation', () => {
  it('should generate the correct number of particles', () => {
    const count = 100;
    const data = generateStarlightData(count);
    expect(data.initialPositions.length).toBe(count * 3);
    expect(data.seeds.length).toBe(count);
    expect(data.sizes.length).toBe(count);
    expect(data.speeds.length).toBe(count);
  });

  it('should generate values within expected ranges', () => {
    const count = 10;
    const data = generateStarlightData(count);
    for (let i = 0; i < count; i++) {
      expect(data.seeds[i]).toBeGreaterThanOrEqual(0);
      expect(data.seeds[i]).toBeLessThanOrEqual(100);
      expect(data.sizes[i]).toBeGreaterThanOrEqual(0.5);
      expect(data.sizes[i]).toBeLessThanOrEqual(2.5);
      expect(data.speeds[i]).toBeGreaterThanOrEqual(0.1);
      expect(data.speeds[i]).toBeLessThanOrEqual(0.6);
    }
  });

  it('should generate positions within a spherical shell', () => {
    const count = 100;
    const data = generateStarlightData(count);
    for (let i = 0; i < count; i++) {
      const x = data.initialPositions[i * 3 + 0];
      const y = data.initialPositions[i * 3 + 1];
      const z = data.initialPositions[i * 3 + 2];
      const r = Math.sqrt(x * x + y * y + z * z);
      
      // Radius should be between 15 and 35
      expect(r).toBeGreaterThanOrEqual(14.99); // Use small epsilon for float precision
      expect(r).toBeLessThanOrEqual(35.01);
    }
  });
});
