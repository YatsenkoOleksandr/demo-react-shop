import React from 'react';
import { ProductItemsList } from './ProductItemsList';
import { ProductsCart } from './ProductsCart';
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
    const productItems = PRODUCTS.map(product => {
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

const PRODUCTS = [
  {
    id: 100,
    name: 'Road Bike',
    price: 300,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg'
  },
  {
    id: 200,
    name: 'Touring',
    price: 200,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-62-99.jpg'
  },
  {
    id: 300,
    name: 'Enduro Bike',
    price: 400,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-34-73.jpg'
  },
  {
    id: 400,
    name: 'Kid bike',
    price: 20,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-66-57.jpg'
  },
];
