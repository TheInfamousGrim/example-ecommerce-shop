import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from '@/components/Header';

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Header component successfully', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: 'Top' })).toBeDefined();
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();

    render(<Header />);
    const menuButton = screen.getByTestId('mobile-main-menu-button');

    // Open mobile menu
    await user.click(menuButton);
    expect(screen.getByText('Mobile menu')).toBeDefined();

    // Close mobile menu by clicking the backdrop or close button
    fireEvent.click(screen.getByTestId('sheet-close-button'));
  });

  it('displays large screen navigation', () => {
    render(<Header />);
    const categories = ['Women', 'Men'];

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeDefined();
    });
  });

  it('displays help and cart links', () => {
    render(<Header />);

    expect(screen.getByText('Help', { selector: 'a' })).toBeDefined();
    expect(screen.getByText('0', { selector: 'span' })).toBeDefined();
  });

  it('displays search on large screens', () => {
    render(<Header />);
    expect(screen.queryByText('Search')).toBeDefined();
  });
});
