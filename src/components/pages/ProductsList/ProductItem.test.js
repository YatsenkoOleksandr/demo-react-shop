import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductItem } from './ProductItem';

describe('ProductItem', () => {
  test('should render product name, price and preview image', () => {
    const productName = 'Road Bike';
    const price = 300;
    const previewImageLink = 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg';

    const productItem = {
      id: 100,
      name: productName,
      price,
      previewImageLink,
      isInCart: false,
    };

    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    const { getByText, getByRole, } = render(<ProductItem
      productItem={productItem}
      addToCart={addToCart}
      removeFromCart={removeFromCart} />);

    expect(getByText(productName)).toBeInTheDocument();
    expect(getByText(`${price}`)).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', previewImageLink);
  });

  test('should render Add To Cart button when product is not in cart', () => {
    const isInCart = false;

    const productItem = {
      id: 100,
      name: 'Road Bike',
      price: 300,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg',
      isInCart,
    };

    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    const { getByRole, } = render(<ProductItem
      productItem={productItem}
      addToCart={addToCart}
      removeFromCart={removeFromCart} />);

    const addToCartButton = getByRole('button');
    expect(addToCartButton).toBeInTheDocument();
    expect(addToCartButton).toHaveTextContent('Add to Cart');
  });

  test('should call addToCart props when clicked on Add To Cart button', () => {
    const isInCart = false;

    const productItem = {
      id: 100,
      name: 'Road Bike',
      price: 300,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg',
      isInCart,
    };

    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    const { getByRole, } = render(<ProductItem
      productItem={productItem}
      addToCart={addToCart}
      removeFromCart={removeFromCart} />);

    const addToCartButton = getByRole('button');
    fireEvent.click(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(productItem);
  });

  test('should render Remove From Cart button when product is in cart', () => {
    const isInCart = true;

    const productItem = {
      id: 100,
      name: 'Road Bike',
      price: 300,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg',
      isInCart,
    };

    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    const { getByRole, } = render(<ProductItem
      productItem={productItem}
      addToCart={addToCart}
      removeFromCart={removeFromCart} />);

    const removeFromCartButton = getByRole('button');
    expect(removeFromCartButton).toBeInTheDocument();
    expect(removeFromCartButton).toHaveTextContent('Remove from Cart');
  });

  test('should call removeFromCart props when clicked on Remove From Cart button', () => {
    const isInCart = true;

    const productItem = {
      id: 100,
      name: 'Road Bike',
      price: 300,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg',
      isInCart,
    };

    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    const { getByRole, } = render(<ProductItem
      productItem={productItem}
      addToCart={addToCart}
      removeFromCart={removeFromCart} />);

    const removeFromCartButton = getByRole('button');
    fireEvent.click(removeFromCartButton);

    expect(removeFromCart).toHaveBeenCalledWith(productItem);
  });
});
