import { afterEach, describe, expect, it } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('displays correct navigation sections', () => {
    render(<Footer />);

    const productsHeading = screen.getByTestId('footer-products-heading');
    const companyHeading = screen.getByTestId('footer-company-heading');
    const customerServiceHeading = screen.getByTestId(
      'footer-customer-service-heading',
    );

    expect(productsHeading.textContent).toBe('Products');
    expect(companyHeading.textContent).toBe('Company');
    expect(customerServiceHeading.textContent).toBe('Customer Service');
  });

  it('displays all product links', () => {
    render(<Footer />);

    const products = ['Bags', 'Tees', 'Objects', 'Home Goods', 'Accessories'];
    products.forEach((product) => {
      expect(screen.getByText(product)).toBeDefined();
    });
  });

  it('displays all company links', () => {
    render(<Footer />);

    const companies = [
      'Who we are',
      'Sustainability',
      'Press',
      'Careers',
      'Terms & Conditions',
      'Privacy',
    ];
    companies.forEach((company) => {
      expect(screen.getByText(company)).toBeDefined();
    });
  });

  it('displays all customer service links', () => {
    render(<Footer />);

    const services = [
      'Contact',
      'Shipping',
      'Returns',
      'Warranty',
      'Secure Payments',
      'FAQ',
      'Find a store',
    ];
    services.forEach((service) => {
      expect(screen.getByText(service)).toBeDefined();
    });
  });

  it('renders the newsletter section', () => {
    render(<Footer />);

    expect(screen.getByText('Sign up for our newsletter')).toBeDefined();
    expect(screen.getByLabelText('Email address')).toBeDefined();
  });

  it('renders the copyright text', () => {
    render(<Footer />);

    const copywriteText = screen.getByTestId('footer-copywrite-text');

    expect(copywriteText.textContent).toBe(
      '© 2025 Your Company, Inc. All rights reserved.',
    );
  });
});
