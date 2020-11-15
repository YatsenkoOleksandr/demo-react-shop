import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer'
import { OrderedItem } from './OrderedItem';

describe('OrderedItem', () => {
  test('should match snapshot and have disabled remove from cart button when ordered 1 item', () => {
    const orderedProductItem = {
      id: 100,
      name: 'Road Bike',
      price: 300,
      count: 1,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg'
    };

    const decreaseCount = jest.fn();
    const increaseCount = jest.fn();
    const removeFromCart = jest.fn();

    const tree = renderer
      .create(<OrderedItem
        orderedProductItem={orderedProductItem}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        removeFromCart={removeFromCart} />)
      .toJSON();

      expect(tree).toMatchSnapshot();
  });

  test('should match snapshot and have enabled remove from cart button when ordered 2 items', () => {
    const orderedProductItem = {
      id: 200,
      name: 'Touring',
      price: 200,
      count: 2,
      previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-62-99.jpg'
    };

    const decreaseCount = jest.fn();
    const increaseCount = jest.fn();
    const removeFromCart = jest.fn();

    const tree = renderer
      .create(<OrderedItem
        orderedProductItem={orderedProductItem}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        removeFromCart={removeFromCart} />)
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
});
