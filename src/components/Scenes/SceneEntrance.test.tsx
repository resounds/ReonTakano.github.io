import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { SceneEntrance } from './SceneEntrance';

// Mock window.scrollTo
window.scrollTo = vi.fn();

test('SceneEntrance renders hero section and storyboard', () => {
  render(<SceneEntrance />);
  
  // Hero section
  expect(screen.getByText('REON TAKANO')).toBeDefined();
  expect(screen.getByText('Immersive Storyteller')).toBeDefined();
  
  // Storyboard section
  expect(screen.getByText('STORYBOARD')).toBeDefined();
  
  // Check if scene cards are rendered (assuming at least one scene)
  const sceneCards = screen.getAllByText(/SCENE \d/);
  expect(sceneCards.length).toBeGreaterThan(0);
});

test('SceneEntrance handles jump on card click', () => {
  render(<SceneEntrance />);
  
  const firstCard = screen.getByText('SCENE 0');
  fireEvent.click(firstCard);
  
  expect(window.scrollTo).toHaveBeenCalledWith({
    top: 0,
    behavior: 'smooth'
  });
});
