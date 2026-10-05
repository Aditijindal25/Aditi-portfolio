import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from '../pages/Projects';
import { projectsData } from '../data/projectsData';

describe('Projects Component & Case Study Engine', () => {
  it('renders all featured production systems', () => {
    render(<Projects />);

    expect(screen.getByText('SPLITFLOW')).toBeInTheDocument();
    expect(screen.getByText('RAKSHAK AI')).toBeInTheDocument();
    expect(screen.getByText('SKILLMESH')).toBeInTheDocument();
    expect(screen.getByText('CHRONICLE')).toBeInTheDocument();
  });

  it('renders category filter buttons and filters items', () => {
    render(<Projects />);

    const aiFilter = screen.getByRole('tab', { name: 'AI & CYBERSECURITY' });
    expect(aiFilter).toBeInTheDocument();

    fireEvent.click(aiFilter);

    // Rakshak AI should remain visible
    expect(screen.getByText('RAKSHAK AI')).toBeInTheDocument();
  });

  it('verifies projects data integrity and metrics schema', () => {
    expect(projectsData.length).toBeGreaterThanOrEqual(6);

    projectsData.forEach((project) => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('architecture');
      expect(project.architecture).toHaveProperty('tradeoffs');
      expect(project.metrics.length).toBeGreaterThanOrEqual(3);
    });
  });
});
