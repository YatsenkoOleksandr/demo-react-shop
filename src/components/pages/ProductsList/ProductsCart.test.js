import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';
import { ProductsCart } from './ProductsCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderedItemsList } from './OrderedItemsList';

describe('ProductsCart', () => {
  test('should render cart button', () => {
    const orderedProductItems = [];
    const decreaseCount = jest.fn();
    const increaseCount = jest.fn();
    const removeFromCart = jest.fn();
    const purchase = jest.fn();

    const wrapper = shallow(<ProductsCart
      orderedProductItems={orderedProductItems}
      decreaseCount={decreaseCount}
      increaseCount={increaseCount}
      removeFromCart={removeFromCart}
      purchase={purchase} />);
    
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
    expect(wrapper.find(OrderedItemsList)).toHaveLength(0);
  });

  test('should render OrderedItemsList and hide cart button on cart button click', () => {
    const orderedProductItems = [];
    const decreaseCount = jest.fn();
    const increaseCount = jest.fn();
    const removeFromCart = jest.fn();
    const purchase = jest.fn();

    const wrapper = shallow(<ProductsCart
      orderedProductItems={orderedProductItems}
      decreaseCount={decreaseCount}
      increaseCount={increaseCount}
      removeFromCart={removeFromCart}
      purchase={purchase} />);
    
    wrapper.find(FontAwesomeIcon).simulate('click');

    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
    expect(wrapper.find(OrderedItemsList)).toHaveLength(1);
  });

  test('should render OrderedItemsList with correct total price and props when showOrderedItems is true', () => {
    const orderedProductItems = [
      {
        id: 100,
        name: 'Road Bike',
        price: 100,
        count: 3,
        previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg'
      },
      {
        id: 200,
        name: 'Touring',
        price: 200,
        count: 1,
        previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-62-99.jpg'
      },
    ];

    const expectedTotalPrice = 500;

    const decreaseCount = jest.fn();
    const increaseCount = jest.fn();
    const removeFromCart = jest.fn();
    const purchase = jest.fn();

    const wrapper = shallow(<ProductsCart
      orderedProductItems={orderedProductItems}
      decreaseCount={decreaseCount}
      increaseCount={increaseCount}
      removeFromCart={removeFromCart}
      purchase={purchase} />);
      
    wrapper.setState({
      showOrderedItems: true,
    });
    
    expect(wrapper.find(OrderedItemsList)).toHaveLength(1);
    expect(wrapper.find(OrderedItemsList).props().totalPrice).toEqual(expectedTotalPrice);
    expect(wrapper.find(OrderedItemsList).props().orderedProductItems).toEqual(orderedProductItems);
    expect(wrapper.find(OrderedItemsList).props().decreaseCount).toEqual(decreaseCount);
  });
});
