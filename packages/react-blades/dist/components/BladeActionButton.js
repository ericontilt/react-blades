module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _BladeActionShape = __webpack_require__(4);
	
	var _BladeActionShape2 = _interopRequireDefault(_BladeActionShape);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var propTypes = _BladeActionShape2['default'];
	var defaultProps = {
	  title: '',
	  callback: function () {
	    function callback() {}
	
	    return callback;
	  }(),
	  iconClass: '',
	  isEnabled: true,
	  isToggled: false,
	  badge: null,
	  getTooltip: null
	};
	
	var BladeActionButton = function () {
	  function BladeActionButton(_ref) {
	    var id = _ref.id,
	        title = _ref.title,
	        callback = _ref.callback,
	        iconClass = _ref.iconClass,
	        isEnabled = _ref.isEnabled,
	        isToggled = _ref.isToggled,
	        badge = _ref.badge,
	        getTooltip = _ref.getTooltip;
	
	    var modifiersForButton = [];
	    if (isToggled) modifiersForButton.push('toggled');
	    if (!isEnabled) modifiersForButton.push('disabled');
	
	    var clickHandler = function () {
	      function clickHandler() {}
	
	      return clickHandler;
	    }();
	    if (isEnabled) {
	      clickHandler = function () {
	        function clickHandler(e) {
	          e.preventDefault();
	          callback(e, { id: id });
	        }
	
	        return clickHandler;
	      }();
	    }
	
	    var tooltip = !isEnabled && typeof getTooltip === 'function' ? getTooltip() : null;
	
	    return _react2['default'].createElement('li', { className: 'BladeActionButton' }, _react2['default'].createElement('button', {
	      className: (0, _classnames2['default'])({
	        BladeActionButton__button: true
	      }, modifiersForButton.map(function (mod) {
	        return 'BladeActionButton__button--' + String(mod);
	      })),
	      onClick: clickHandler,
	      title: tooltip
	    }, _react2['default'].createElement('i', { className: iconClass }, badge !== undefined ? _react2['default'].createElement('span', { className: 'badge' }, badge) : null), _react2['default'].createElement('div', { className: 'BladeActionButton_title' }, title)));
	  }
	
	  return BladeActionButton;
	}();
	
	BladeActionButton.propTypes = propTypes;
	BladeActionButton.defaultProps = defaultProps;
	
	exports['default'] = BladeActionButton;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("../shapes/BladeActionShape");

/***/ }
/******/ ]);
//# sourceMappingURL=BladeActionButton.js.map