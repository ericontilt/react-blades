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
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _attachClickHandler = __webpack_require__(5);
	
	var _attachClickHandler2 = _interopRequireDefault(_attachClickHandler);
	
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
	  blades: _react.PropTypes.object.isRequired,
	  id: _react.PropTypes.string.isRequired,
	  index: _react.PropTypes.number.isRequired,
	  component: _react.PropTypes.shape({
	    type: _react.PropTypes.func.isRequired,
	    props: _react.PropTypes.object
	  }).isRequired,
	  width: _react.PropTypes.number.isRequired,
	  isActive: _react.PropTypes.bool,
	  left: _react.PropTypes.number.isRequired,
	  isVisible: _react.PropTypes.bool.isRequired
	};
	var defaultProps = {
	  isActive: false
	};
	
	var defaultZIndex = 1;
	
	var BladeContainer = function (_React$Component) {
	  _inherits(BladeContainer, _React$Component);
	
	  function BladeContainer() {
	    _classCallCheck(this, BladeContainer);
	
	    return _possibleConstructorReturn(this, (BladeContainer.__proto__ || Object.getPrototypeOf(BladeContainer)).apply(this, arguments));
	  }
	
	  _createClass(BladeContainer, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        var _this2 = this;
	
	        this.bladeClickListener = (0, _attachClickHandler2['default'])(this.blade, function () {
	          return _this2.props.blades.activate(_this2.props.id);
	        });
	        this.props.blades.activate(this.props.id);
	        window.scrollTo(this.props.left, 0);
	      }
	
	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        this.bladeClickListener.remove();
	      }
	
	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this3 = this;
	
	        var bladeStyle = {
	          left: this.props.left,
	          zIndex: defaultZIndex + this.props.index,
	          width: this.props.width
	        };
	        if (!this.props.isVisible) {
	          bladeStyle.display = 'none';
	        }
	
	        var bladeClasses = {
	          Blade__container: true,
	          active: this.props.isActive
	        };
	
	        var child = _react2['default'].createElement(this.props.component.type, Object.assign({}, {
	          blades: this.props.blades,
	          id: this.props.id
	        }, this.props.component.props));
	
	        return _react2['default'].createElement('section', { ref: function () {
	            function ref(c) {
	              _this3.blade = c;
	            }
	
	            return ref;
	          }(), className: (0, _classnames2['default'])(bladeClasses), style: bladeStyle }, child);
	      }
	
	      return render;
	    }()
	  }]);
	
	  return BladeContainer;
	}(_react2['default'].Component);
	
	exports['default'] = BladeContainer;
	
	BladeContainer.propTypes = propTypes;
	BladeContainer.defaultProps = defaultProps;

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
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = require("../utils/attachClickHandler");

/***/ }
/******/ ]);
//# sourceMappingURL=BladeContainer.js.map