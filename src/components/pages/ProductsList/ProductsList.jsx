import React from 'react';
import { ProductItemsList } from './ProductItemsList';
import { ProductsCart } from './ProductsCart';
import { getProductItems } from '../../../api-client';
import './ProductsList.css';

export class ProductsList extends React.Component {
  // initial state
  state = {
    productItems: [],    
    orderedProductItems: [],
  };

  addToCart = (productItem) => {
    const productToAdd = this.state.productItems.find(p => {
      return p.id === productItem.id;
    });

    if (!productToAdd) {
      return;
    }

    const newProductItems = this.state.productItems.map(p => {
      if (p.id === productItem.id) {
        return { ...p, isInCart: true, };
      }

      return { ...p };
    });

    const newOrderedProductItems = [
      ...this.state.orderedProductItems,
      {...productToAdd, count: 1},
    ];

    this.setState({
      productItems: newProductItems,
      orderedProductItems: newOrderedProductItems,
    });
  }

  removeFromCart = (productItem) => {
    const productToRemove = this.state.productItems.find(p => {
      return p.id === productItem.id;
    });

    if (!productToRemove) {
      return;
    }

    const newProductItems = this.state.productItems.map(p => {
      if (p.id === productItem.id) {
        return { ...p, isInCart: false, };
      }

      return { ...p };
    });

    const newOrderedProductItems = this.state.orderedProductItems.filter(p => {
      if (p.id === productItem.id) {
        return false;
      }

      return true;
    });

    this.setState({
      productItems: newProductItems,
      orderedProductItems: newOrderedProductItems,
    });
  }

  increaseCount = (orderedProductItem) => {
    const newOrderedProductItems = this.state.orderedProductItems.map(p => {
      if (p.id === orderedProductItem.id) {
        return { ...p, count: p.count + 1, }
      }

      return { ...p };
    });

    this.setState({
      orderedProductItems: newOrderedProductItems,
    });
  }

  decreaseCount = (orderedProductItem) => {
    const newOrderedProductItems = this.state.orderedProductItems.map(p => {
      if (p.id === orderedProductItem.id) {
        return { ...p, count: p.count - 1, }
      }

      return { ...p };
    });

    this.setState({
      orderedProductItems: newOrderedProductItems,
    });
  }

  purchase = () => {
    alert('Successfully ordered!');

    const newProductItems = this.state.productItems.map(p => {
      return { ...p, isInCart: false, };
    })

    this.setState({
      productItems: newProductItems,
      orderedProductItems: [],
    });
  }

  componentDidMount = () => {
    const apiProductItems = getProductItems();

    const productItems = apiProductItems.map(product => {
      return { ...product, isInCart: false, }
    });

    this.setState({
      productItems,
    });
  }

  render() {

    return <div className='container demo-component'>
      <div className='row'>
        <div className='col-7'>
          <ProductItemsList
            productItems={this.state.productItems}
            addToCart={(productItem) => this.addToCart(productItem)}
            removeFromCart={(productItem) => this.removeFromCart(productItem)} />
        </div>
        <div className='col-5'>
          <ProductsCart
            orderedProductItems={this.state.orderedProductItems}
            increaseCount={this.increaseCount}
            decreaseCount={this.decreaseCount}
            removeFromCart={(productItem) => this.removeFromCart(productItem)}
            purchase={() => this.purchase()} />
        </div>
      </div>
    </div>;
  }
};
