import PropTypes from 'prop-types';
import { faTrashAlt, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

export const OrderedItem = ({orderedProductItem, increaseCount, decreaseCount, removeFromCart}) => {
  return <div className='demo-component'>
    <div>
      <span style={{cursor: 'pointer'}}>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => removeFromCart(orderedProductItem)}
      />
      </span>
    </div>
    <div>
      <div>
        <img
          src={orderedProductItem.previewImageLink}
          alt={`${orderedProductItem.name} preview`} />
      </div>
      <div>
        <label>{orderedProductItem.name}</label>
      </div>
      <div>
        <label>{orderedProductItem.price}</label>
      </div>
      <div>
        <Button
            disabled={orderedProductItem.count < 2}
            onClick={() => decreaseCount(orderedProductItem)}>
          <FontAwesomeIcon icon={faMinusSquare} />
        </Button>
        <span>{orderedProductItem.count}</span>
        <Button onClick={() => increaseCount(orderedProductItem)}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </Button>
      </div>
    </div>
  </div>
};

OrderedItem.propTypes = {
  orderedProductItem: PropTypes.object.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};
