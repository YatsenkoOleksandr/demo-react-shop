import PropTypes from 'prop-types';

export const SearchBar = ({filter, onProductNameChange, onHideAddedItemsChange}) => {
  return <div className='demo-component'>
    <div>
      <input
        type='text'
        placeholder='Search ...'
        value={filter.productName}
        onChange={(e) => onProductNameChange(e.target.value)}
      />
    </div>
    <div>
      <input
        type='checkbox'
        checked={filter.hideAddedItems}
        onChange={(e) => onHideAddedItemsChange(e.target.checked)}
      />
      <span>Hide already added to cart items</span>
    </div>
  </div>;
};

SearchBar.propTypes = {
  filter: PropTypes.object.isRequired,
  onProductNameChange: PropTypes.func.isRequired,
  onHideAddedItemsChange: PropTypes.func.isRequired,
};
