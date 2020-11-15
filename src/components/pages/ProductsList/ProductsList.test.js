import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';
import { ProductsList } from './ProductsList';
import { ProductItemsList } from './ProductItemsList';
import { ProductsCart } from './ProductsCart';
import * as api from '../../../api-client';

jest.mock('../../../api-client');

describe('ProductsList', () => {
  describe('render', () => {
    test('should call getProductItems and change state on render', () => {
      const apiProductItems = [{
        id: 100,
        name: 'Road Bike',
        price: 100,
        previewImageLink: ''
      }];

      const expectedProductItems = [{
        ...apiProductItems[0],
        isInCart: false,
      }];
      const expectedOrderedItems = [];

      api.getProductItems = jest.fn(() => apiProductItems);

      const wrapper = shallow(<ProductsList />);

      expect(wrapper.state().productItems).toEqual(expectedProductItems);
      expect(wrapper.state().orderedProductItems).toEqual(expectedOrderedItems);
      expect(api.getProductItems).toBeCalledTimes(1);
    });

    test('should render ProductItemsList and ProductsCart', () => {
      api.getProductItems = jest.fn(() => []);

      const wrapper = shallow(<ProductsList />);

      expect(wrapper.find(ProductItemsList)).toHaveLength(1);
      expect(wrapper.find(ProductsCart)).toHaveLength(1);
    });

    test('should render ProductItemsList with productItems props', () => {
      api.getProductItems = jest.fn(() => []);
      const productItems = [{
        id: 10,
        name: 'Road Bike',
        price: 100,
        previewImageLink: '',        
        isInCart: false,
      }];

      const wrapper = shallow(<ProductsList />);
      wrapper.setState({
        productItems,
      });

      expect(wrapper.find(ProductItemsList).props().productItems).toEqual(productItems);
    });

    test('should render ProductsCart with orderedProductItems props', () => {
      api.getProductItems = jest.fn(() => []);
      const orderedProductItems = [{
        id: 10,
        name: 'Road Bike',
        price: 100,
        previewImageLink: '',        
        count: 2,
      }];

      const wrapper = shallow(<ProductsList />);
      wrapper.setState({
        orderedProductItems,
      });

      expect(wrapper.find(ProductsCart).props().orderedProductItems).toEqual(orderedProductItems);
    });
  });

  describe('addToCart', () => {
    test('should not change state when product to add not found in the available product items', () => {
      api.getProductItems = jest.fn(() => []);

      const productItems = [{
        id: 10,
        name: 'Road Bike',
        price: 100,
        previewImageLink: '',        
        isInCart: false,        
      }];
      const orderedProductItems = [];

      const unexistingProductItem = {
        id: 20,
      };

      const wrapper = shallow(<ProductsList />);
      wrapper.setState({
        productItems,
        orderedProductItems,
      });
      wrapper.instance().addToCart(unexistingProductItem);

      expect(wrapper.state().productItems).toEqual(productItems);
      expect(wrapper.state().orderedProductItems).toEqual(orderedProductItems);
    });

    test('should add product to orderedProductItems and set isInCart when product to add exist', () => {
      api.getProductItems = jest.fn(() => []);

      const productToAddToCart = {
        id: 10,
        name: 'Road Bike',
        price: 100,
        previewImageLink: '',        
        isInCart: false,        
      };

      const anotherProductItem = {
        id: 20,
        name: 'Touring',
        price: 50,
        previewImageLink: '',        
        isInCart: false,        
      };

      const productItems = [productToAddToCart, anotherProductItem];
      const orderedProductItems = [];

      const expectedProductItems = [{
        ...productToAddToCart,
        isInCart: true,
      },
      anotherProductItem];

      const expectedOrderedProductItems = [{
        ...productToAddToCart,
        count: 1,
      }];

      const wrapper = shallow(<ProductsList />);
      wrapper.setState({
        productItems,
        orderedProductItems,
      });
      wrapper.instance().addToCart(productToAddToCart);

      expect(wrapper.state().productItems).toEqual(expectedProductItems);
      expect(wrapper.state().orderedProductItems).toEqual(expectedOrderedProductItems);
    });
  });
});
