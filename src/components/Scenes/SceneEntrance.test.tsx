import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { SceneEntrance } from './SceneEntrance';

// Mock window.scrollTo
window.scrollTo = vi.fn();

test('SceneEntrance renders hero section and storyboard', () => {
  render(<SceneEntrance />);
  
  // Hero section
  expect(screen.getByText('Immersive Storyteller')).toBeDefined();
  
  
  // Check if scene cards are rendered (assuming at least one scene)
  expect(screen.getByText('PERSONA')).toBeDefined();
  expect(screen.getByText('EXPERIENCE')).toBeDefined();
  expect(screen.getByText('ARCHIVE')).toBeDefined();
  expect(screen.getByText('CONTACT')).toBeDefined();
});

test('SceneEntrance renders icons for each scene', () => {
  const { container } = render(<SceneEntrance />);
  const svgs = container.querySelectorAll('svg');
  // There are 4 scenes in SCENES data
  expect(svgs.length).toBe(4);
});

test('SceneEntrance handles jump on card click', () => {
  render(<SceneEntrance />);
  
  const firstCard = screen.getByText('PERSONA').closest('.sceneCard');
  expect(firstCard).toBeDefined();
    if (firstCard) {
      fireEvent.click(firstCard);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: window.innerHeight, // first storyboard card jumps to second section (skip entrance)
        behavior: 'smooth'
      });
    }
});
