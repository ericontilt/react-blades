import PropTypes from 'prop-types';

export default {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  callback: PropTypes.func,
  iconClass: PropTypes.string,
  isEnabled: PropTypes.bool,
  width: PropTypes.number,
  tooltip: PropTypes.string,
  layoutDirection: PropTypes.oneOf([
    'vertical',
    'horizontal',
  ]),
};
