import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeeddbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeeddbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeeddbackItem;
