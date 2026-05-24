import { describe, it, expect } from 'vitest';
import { research } from './research';

describe('research data', () => {
  it('should have the expected structure and content', () => {
    expect(Array.isArray(research)).toBe(true);
    expect(research.length).toBeGreaterThan(0);
    
    const item = research[0];
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('summary');
    expect(item).toHaveProperty('tags');
    expect(Array.isArray(item.tags)).toBe(true);
  });

  it('should contain the specific archived research info', () => {
    const archivedResearch = research.find(r => r.title === "感性とテクノロジーの融合: 空間デザインの最適化");
    expect(archivedResearch).toBeDefined();
    expect(archivedResearch?.status).toBe("Archived (M.S. Research)");
    expect(archivedResearch?.tags).toContain("Genetic Algorithm");
  });
});
