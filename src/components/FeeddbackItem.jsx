import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeeddbackItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeeddbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeeddbackItem;
