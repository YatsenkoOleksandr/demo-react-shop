import React from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from './ProductItem';
import { SearchBar } from './SearchBar';

export class ProductItemsList extends React.Component {
  static propTypes = {
    productItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  }

  // initial state
  state = {
    filter: {
      productName: '',
      hideAddedItems: false,
    },
  }  

  onProductNameChange = (productName) => {
    this.setState({
      filter: {
        ...this.state.filter,
        productName,
      },
    });
  }

  onHideAddedItemsChange = (hideAddedItems) => {
    this.setState({
      filter: {
        ...this.state.filter,
        hideAddedItems,
      }
    });
  }

  shouldShowProductItem = (productItem, productName, hideAddedItems) => {
    if (productName && productItem.name.indexOf(productName) === -1) {
      return false;
    }

    if (hideAddedItems && productItem.isInCart) {
      return false;
    }

    return true;
  }

  render() {
    const { productItems, addToCart, removeFromCart } = this.props;
    const { productName, hideAddedItems } = this.state.filter;

    const filteredProductItems = productItems
      .filter(productItem => {
        return this.shouldShowProductItem(productItem, productName, hideAddedItems);
      });
    

    return <div className='demo-component'>
      <div>
        <SearchBar
          filter={this.state.filter}
          onProductNameChange={(productName) => this.onProductNameChange(productName)}
          onHideAddedItemsChange={(hideAddedItems) => this.onHideAddedItemsChange(hideAddedItems)} />
      </div>
      <div>
        {filteredProductItems.map(productItem =>
          <ProductItem
            key={productItem.id}
            productItem={productItem}
            addToCart={addToCart}
            removeFromCart={removeFromCart} />)}
      </div>
    </div>
  }
};
