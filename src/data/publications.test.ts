import { describe, it, expect } from 'vitest';
import { publications } from './publications';

describe('publications data', () => {
  it('should have a type property for each publication', () => {
    publications.forEach(pub => {
      expect(pub).toHaveProperty('type');
      expect(['international', 'domestic']).toContain(pub.type);
    });
  });

  it('should categorize CGIP 2024 as international', () => {
    const cgip = publications.find(p => p.venue.includes('CGIP'));
    expect(cgip?.type).toBe('international');
  });

  it('should categorize domestic conferences correctly', () => {
    const domesticPubs = publications.filter(p => 
      p.venue.includes('電子情報通信学会') || 
      p.venue.includes('MIRU') || 
      p.venue.includes('オーディオビジュアル')
    );
    domesticPubs.forEach(pub => {
      expect(pub.type).toBe('domestic');
    });
  });
});
