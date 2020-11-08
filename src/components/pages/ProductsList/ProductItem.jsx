import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const ProductItem = ({productItem, addToCart, removeFromCart}) => {
  return <div className='demo-component'>
    <div>
      <img
        src={productItem.previewImageLink}
        alt={`${productItem.name} preview`} />
    </div>
    <div>
      <label>{productItem.name}</label>
    </div>
    <div>
      <label>{productItem.price}</label>
    </div>
    <div>
      {productItem.isInCart
      ? <Button
          type='button'
          variant='warning'
          onClick={() => removeFromCart(productItem)}>
            Remove from Cart
        </Button>
      : <Button
          type='button'
          variant='primary'
          onClick={() => addToCart(productItem)}>
            Add to Cart
        </Button>}
    </div>
  </div>
};

ProductItem.propTypes = {
  productItem: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
