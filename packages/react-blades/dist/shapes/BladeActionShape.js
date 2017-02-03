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
  tooltip: _react.PropTypes.string
};