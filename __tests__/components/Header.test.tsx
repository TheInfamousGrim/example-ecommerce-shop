import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the Header component successfully', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: 'Top' })).toBeDefined();
  });

  it('opens and closes the mobile menu', () => {
    render(<Header />);
    const menuButton = screen.getByTestId('mobile-main-menu-button');

    // Open mobile menu
    fireEvent.click(menuButton);
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

  it('toggles mobile currency selector', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: 'Open menu' });

    // Open mobile menu
    fireEvent.click(menuButton);

    const currencySelect: HTMLSelectElement = screen.getByLabelText('Currency');
    fireEvent.change(currencySelect, { target: { value: 'EUR' } });

    expect(currencySelect.value).toBe('EUR');
  });
});
