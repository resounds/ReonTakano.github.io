import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { SceneEntrance } from './SceneEntrance';

// Mock window.scrollTo
window.scrollTo = vi.fn();

test('SceneEntrance renders hero section and storyboard', () => {
  render(<SceneEntrance />);
  
  // Hero section
  expect(screen.getByText('鷹野礼音OFFICIAL WEBSITE')).toBeDefined();
  expect(screen.getByText('Immersive Storyteller')).toBeDefined();
  
  // Storyboard section
  expect(screen.getByText('STORYBOARD')).toBeDefined();
  
  // Check if scene cards are rendered (assuming at least one scene)
  expect(screen.getByText('WELCOME')).toBeDefined();
  expect(screen.getByText('PERSONA')).toBeDefined();
  expect(screen.getByText('RESEARCH')).toBeDefined();
  expect(screen.getByText('ARCHIVE')).toBeDefined();
  expect(screen.getByText('CONTACT')).toBeDefined();
});

test('SceneEntrance renders icons for each scene', () => {
  const { container } = render(<SceneEntrance />);
  const svgs = container.querySelectorAll('svg');
  // There are 5 scenes in SCENES data
  expect(svgs.length).toBe(5);
});

test('SceneEntrance handles jump on card click', () => {
  render(<SceneEntrance />);
  
  const firstCard = screen.getByText('WELCOME');
  fireEvent.click(firstCard);
  
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    behavior: 'smooth'
  });
});
