Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

exports['default'] = {
  id: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  callback: _react.PropTypes.func,
  iconClass: _react.PropTypes.string,
  isEnabled: _react.PropTypes.bool,
  isToggled: _react.PropTypes.bool,
  badge: _react.PropTypes.number,
  getTooltip: _react.PropTypes.func
};