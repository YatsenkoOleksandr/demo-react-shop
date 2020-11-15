import { describe, test, expect } from '@jest/globals';
import { ProductItemsList } from './ProductItemsList';

describe('ProductItemsList', () => {
  
  describe('shouldShowProductItem', () => {
    test('should return true when search product name is empty and hide added items is false', () => {
      var productItem = {
        name: 'product',
        isInCart: false,
      };

      var productItemsList = new ProductItemsList();

      var result = productItemsList.shouldShowProductItem(productItem, '', false);

      expect(result).toBe(true);
    });

    test('should return false when product name does not contain search product name', () => {
      var productName = 'product';

      var searchProductName = 'test';
      var hideAddedItems = false;

      var productItem = {
        name: productName,
        isInCart: false,
      };

      var productItemsList = new ProductItemsList();

      var result = productItemsList.shouldShowProductItem(productItem, searchProductName, hideAddedItems);

      expect(result).toBe(false);
    });

    test('should return false when product is in cart and hide added items to cart is true', () => {
      var isInCart = true;

      var searchProductName = '';
      var hideAddedItems = true;

      var productItem = {
        name: 'product name',
        isInCart,
      };

      var productItemsList = new ProductItemsList();

      var result = productItemsList.shouldShowProductItem(productItem, searchProductName, hideAddedItems);

      expect(result).toBe(false);
    });

    test('should return true when product name contains search product name and product is not in cart and hide added items to cart is true', () => {
      var isInCart = false;
      var productName = 'product'

      var searchProductName = 'pro';
      var hideAddedItems = true;

      var productItem = {
        name: productName,
        isInCart,
      };

      var productItemsList = new ProductItemsList();

      var result = productItemsList.shouldShowProductItem(productItem, searchProductName, hideAddedItems);

      expect(result).toBe(true);
    });
  });  
});
