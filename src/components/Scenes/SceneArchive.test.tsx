import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SceneArchive } from './SceneArchive';

// Mock framer-motion to avoid IntersectionObserver issues in jsdom
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    useInView: () => true,
  };
});

describe('SceneArchive', () => {
  it('should display categorized publications', () => {
    render(<SceneArchive />);

    expect(screen.getByText('International Conferences')).toBeDefined();
    expect(screen.getByText('Domestic Conferences')).toBeDefined();

    // Check if at least one international publication is listed
    expect(screen.getByText('Adapting Indoor Scene Design to User-Selected Mood')).toBeDefined();

    // Check if at least one domestic publication is listed
    expect(screen.getAllByText('選択した雰囲気に合わせた空間デザイン', { exact: false }).length).toBeGreaterThan(0);
  });
});
