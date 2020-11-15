import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('should render product name search input', () => {
    const filter = {
      productName: '',
      hideAddedItems: false,
    };

    const onProductNameChange = jest.fn();
    const onHideAddedItemsChange = jest.fn();

    const wrapper = shallow(<SearchBar
      filter={filter}
      onProductNameChange={onProductNameChange}
      onHideAddedItemsChange={onHideAddedItemsChange} />)

    expect(wrapper.find(`input[type="text"][placeholder="Search ..."]`)).toHaveLength(1);
  });

  test('should render product name search input with value when product name is not empty', () => {
    const productName = 'product';
    const filter = {
      productName,
      hideAddedItems: false,
    };

    const onProductNameChange = jest.fn();
    const onHideAddedItemsChange = jest.fn();

    const wrapper = shallow(<SearchBar
      filter={filter}
      onProductNameChange={onProductNameChange}
      onHideAddedItemsChange={onHideAddedItemsChange} />)

    expect(wrapper.find(`input[type="text"]`).props().value)
      .toEqual(productName);
  });

  test('should call onProductName change when text changed in search product name input', () => {
    const filter = {
      productName: '',
      hideAddedItems: false,
    };

    const changedProductName = 'product';

    const onProductNameChange = jest.fn();
    const onHideAddedItemsChange = jest.fn();

    const wrapper = shallow(<SearchBar
      filter={filter}
      onProductNameChange={onProductNameChange}
      onHideAddedItemsChange={onHideAddedItemsChange} />)

    wrapper.find(`input[type="text"]`).simulate('change', { target: { value: changedProductName } });

    expect(onProductNameChange).toBeCalledTimes(1);
    expect(onProductNameChange).toBeCalledWith(changedProductName);
  });
});