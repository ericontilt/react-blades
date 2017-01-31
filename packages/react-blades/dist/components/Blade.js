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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BladeActionButton = __webpack_require__(2);
	
	var _BladeActionButton2 = _interopRequireDefault(_BladeActionButton);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var propTypes = {
	  title: _react.PropTypes.string,
	  actions: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
	  scroll: _react.PropTypes.oneOf(['x', 'y', 'xy', 'hidden'])
	};
	
	var defaultProps = {
	  title: '',
	  actions: [],
	  children: [],
	  scroll: 'y'
	};
	
	var getScrollStyle = function () {
	  function getScrollStyle(scroll) {
	    var style = {
	      overflowX: 'hidden',
	      overflowY: 'hidden'
	    };
	    switch (scroll) {
	      case 'y':
	        style.overflowY = 'auto';
	        break;
	      case 'x':
	        style.overflowX = 'auto';
	        break;
	      case 'xy':
	        style.overflowX = 'auto';
	        style.overflowY = 'auto';
	        break;
	      case 'hidden':
	        break;
	      default:
	        style.overflowY = 'auto';
	        break;
	    }
	    return style;
	  }
	
	  return getScrollStyle;
	}();
	
	var Blade = function (_React$Component) {
	  _inherits(Blade, _React$Component);
	
	  function Blade() {
	    _classCallCheck(this, Blade);
	
	    return _possibleConstructorReturn(this, (Blade.__proto__ || Object.getPrototypeOf(Blade)).apply(this, arguments));
	  }
	
	  _createClass(Blade, [{
	    key: 'renderActions',
	    value: function () {
	      function renderActions() {
	        return this.props.actions.map(function (action) {
	          return _react2['default'].createElement(_BladeActionButton2['default'], _extends({ key: action.id }, action));
	        });
	      }
	
	      return renderActions;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var bladeStyle = Object.assign({}, getScrollStyle(this.props.scroll));
	
	        return _react2['default'].createElement('div', { className: 'Blade', style: { position: 'relative', width: '100%', height: '100%' } }, _react2['default'].createElement('header', { className: 'Blade__header' }, _react2['default'].createElement('h1', null, this.props.title)), _react2['default'].createElement('div', { className: 'Blade__actions' }, _react2['default'].createElement('ul', null, this.renderActions())), _react2['default'].createElement('div', { className: 'Blade__content', style: bladeStyle }, this.props.children));
	      }
	
	      return render;
	    }()
	  }]);
	
	  return Blade;
	}(_react2['default'].Component);
	
	exports['default'] = Blade;
	
	Blade.propTypes = propTypes;
	Blade.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("./BladeActionButton");

/***/ }
/******/ ]);
//# sourceMappingURL=Blade.js.map