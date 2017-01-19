import { PropTypes } from 'react';

export default {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  callback: PropTypes.func,
  iconClass: PropTypes.string,
  isEnabled: PropTypes.bool,
  isToggled: PropTypes.bool,
  badge: PropTypes.number,
  getTooltip: PropTypes.func,
};
