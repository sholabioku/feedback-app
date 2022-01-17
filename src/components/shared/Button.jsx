import PropTypes from 'prop-types';

function Button({ children, version, type, idDisabled }) {
  return (
    <div>
      <button
        type={type}
        disabled={idDisabled}
        className={`btn btn-${version}`}
      >
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
