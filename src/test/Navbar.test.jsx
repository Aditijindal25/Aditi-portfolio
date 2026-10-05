import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders navigation links and logo correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('ADITI')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
    expect(screen.getByText('PROJECTS')).toBeInTheDocument();
  });

  it('renders command palette trigger', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const trigger = screen.getByLabelText(/open command palette/i);
    expect(trigger).toBeInTheDocument();
  });
});
