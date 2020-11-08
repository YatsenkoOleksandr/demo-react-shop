import PropTypes from 'prop-types';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from 'react-bootstrap';
import { OrderedItem } from './OrderedItem';

export const OrderedItemsList = ({
  orderedProductItems,
  totalPrice,
  increaseCount,
  decreaseCount,
  removeFromCart,
  purchase,
  hideOrderedItems,
}) => {
  return <div className='demo-component'>
    <div>
      <span
          style={{cursor: 'pointer'}}
          onClick={() => hideOrderedItems()} >
        <FontAwesomeIcon icon={faWindowClose} />
      </span>
    </div>
    <div>
      {orderedProductItems.map(orderedProductItem =>
        <OrderedItem
          orderedProductItem={orderedProductItem}
          key={orderedProductItem.id}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
          removeFromCart={removeFromCart} />)}
    </div>
    <div>
      <span>Total price: {totalPrice}</span>
    </div>
    <div>
      <Button
        type='button'
        variant='primary'
        onClick={() => purchase()}>
        Purchase
      </Button>
    </div>
  </div>
};

OrderedItemsList.propTypes = {
  orderedProductItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  purchase: PropTypes.func.isRequired,
  hideOrderedItems: PropTypes.func.isRequired,
};
