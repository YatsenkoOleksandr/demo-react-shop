import PropTypes from 'prop-types';
import React from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderedItemsList } from './OrderedItemsList';

export class ProductsCart extends React.Component {
  static propTypes = {
    orderedProductItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    purchase: PropTypes.func.isRequired,
  };

  state = {
    showOrderedItems: false,
  };

  showOrderedItems = () => {
    this.setState({
      showOrderedItems: true,
    });
  }

  hideOrderedItems = () => {
    this.setState({
      showOrderedItems: false,
    });
  }

  calculateTotalPrice = (orderedProductItems) => {
    return orderedProductItems.reduce(
      (accumulator, orderedProductItem) => accumulator + orderedProductItem.price * orderedProductItem.count,
      0);
  }

  render() {
    const {
      orderedProductItems,
      increaseCount,
      decreaseCount,
      removeFromCart,
      purchase,
    } = this.props;

    return <div className='demo-component'>
      {this.state.showOrderedItems === true
        ? <OrderedItemsList
            orderedProductItems={orderedProductItems}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            removeFromCart={removeFromCart}
            purchase={purchase}
            hideOrderedItems={() => this.hideOrderedItems()}
            totalPrice={this.calculateTotalPrice(orderedProductItems)} />
        : <FontAwesomeIcon
            icon={faCartPlus}
            onClick={() => this.showOrderedItems()} />}
    </div>;
  }
};
