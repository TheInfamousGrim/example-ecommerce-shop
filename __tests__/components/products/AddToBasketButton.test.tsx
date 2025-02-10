import { render, screen, cleanup } from '@testing-library/react';
import { describe, expect, test, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AddToBasketButton } from '@/components/products/AddToBasketButton';

describe('AddToBasketButton', () => {
  const mockProduct = {
    id: 'gid://shopify/Product/7982853619734',
    title: 'Slides',
    description:
      "Simple, minimal and comfortable, these slides feature a classic design in the perfect shade of iron. Whether you're just lounging around the house or running errands, these slides will offer all-day comfort.",
    featuredImage: {
      id: 'gid://shopify/ProductImage/39774608687126',
      url: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
    },
    variants: {
      edges: [
        {
          node: {
            price: {
              amount: '25.0',
              currencyCode: 'CAD',
            },
            image: {
              id: 'gid://shopify/ProductImage/39774608687126',
              url: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
              altText: 'random alt text',
              height: 4096,
              width: 4096,
            },
          },
        },
        {
          node: {
            price: {
              amount: '25.0',
              currencyCode: 'CAD',
            },
            image: {
              id: 'gid://shopify/ProductImage/39774608687126',
              url: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
              altText: 'random alt text',
              height: 4096,
              width: 4096,
            },
          },
        },
        {
          node: {
            price: {
              amount: '25.0',
              currencyCode: 'CAD',
            },
            image: {
              id: 'gid://shopify/ProductImage/39774608687126',
              url: 'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
              altText: 'random alt text',
              height: 4096,
              width: 4096,
            },
          },
        },
      ],
    },
  };

  afterEach(() => {
    cleanup();
  });

  test('should render Add to basket button', () => {
    render(<AddToBasketButton product={mockProduct} />);

    const button = screen.getByTestId('add-to-basket-button');

    expect(button.textContent).toBe('Add to basket');
  });

  test('should add the item to the basket when Add to basket is clicked', async () => {
    const user = userEvent.setup();

    render(<AddToBasketButton product={mockProduct} />);

    const button = screen.getByTestId('add-to-basket-button');

    await user.click(button);

    const quantityInBasket = screen.getByTestId('quantity-in-basket');

    expect(quantityInBasket.textContent).toBe('1');
  });

  test('should remove the item from the basket when decrement button is clicked with quantity of 1', async () => {
    const user = userEvent.setup();

    render(<AddToBasketButton product={mockProduct} />);

    const addToBasketButton = screen.getByTestId('add-to-basket-button');

    await user.click(addToBasketButton);

    const decrementButton = screen.getByTestId('decrement-basket-button');

    await user.click(decrementButton);

    const quantityInBasket = screen.getByTestId(
      'quantity-in-basket-basket-adjuster',
    );
    expect(quantityInBasket.textContent).toBe('0');
  });

  test('should decrement the quantity of the item in the basket when decrement button is clicked with quantity greater than 1', async () => {
    const user = userEvent.setup();

    render(<AddToBasketButton product={mockProduct} />);

    const addToBasketButton = screen.getByTestId('add-to-basket-button');

    await user.click(addToBasketButton);
    await user.click(addToBasketButton);

    const decrementButton = screen.getByTestId('decrement-basket-button');
    await user.click(decrementButton);

    const quantityInBasket = screen.getByTestId(
      'quantity-in-basket-basket-adjuster',
    );
    expect(quantityInBasket.textContent).toBe('1');
  });

  test('should clear all items when the clear basket button is clicked', async () => {
    const user = userEvent.setup();

    render(<AddToBasketButton product={mockProduct} />);

    const addToBasketButton = screen.getByTestId('add-to-basket-button');

    await user.click(addToBasketButton);
    await user.click(addToBasketButton);

    const clearButton = screen.getByTestId('clear-basket-button');
    await user.click(clearButton);

    const quantityInBasket = screen.getByTestId(
      'quantity-in-basket-basket-adjuster',
    );
    expect(quantityInBasket.textContent).toBe('0');
  });
});
