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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventEmitter2 = __webpack_require__(6);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultBladeProps = {
	  isVisible: true,
	  isActive: true,
	  width: 300,
	  depth: 0
	};
	
	var BladeManager = function (_EventEmitter) {
	  _inherits(BladeManager, _EventEmitter);
	
	  function BladeManager() {
	    _classCallCheck(this, BladeManager);
	
	    var _this = _possibleConstructorReturn(this, (BladeManager.__proto__ || Object.getPrototypeOf(BladeManager)).call(this));
	
	    _this.blades = [];
	    return _this;
	  }
	
	  _createClass(BladeManager, [{
	    key: 'add',
	    value: function () {
	      function add(blade) {
	        if (!blade) {
	          return;
	        }
	        if (!blade.id) {
	          throw new Error('A blade id is mandatory.');
	        }
	        this.blades[blade.id] = Object.assign({}, defaultBladeProps, blade);
	        this._recalculateDimensions();
	        this.trigger('render');
	      }
	
	      return add;
	    }()
	  }, {
	    key: 'remove',
	    value: function () {
	      function remove(id) {
	        this.blades[id] = null;
	        delete this.blades[id];
	        this._recalculateDimensions();
	        this.trigger('render');
	      }
	
	      return remove;
	    }()
	  }, {
	    key: 'activate',
	    value: function () {
	      function activate(id) {
	        var _this2 = this;
	
	        Object.keys(this.blades).forEach(function (key) {
	          return _this2.blades[key].isActive = false;
	        });
	        this.blades[id].isActive = true;
	        this.trigger('render');
	      }
	
	      return activate;
	    }()
	  }, {
	    key: 'getVisible',
	    value: function () {
	      function getVisible() {
	        // TODO: Return an immutable structure here
	        return this._getVisibleBlades();
	      }
	
	      return getVisible;
	    }()
	  }, {
	    key: '_getAllBlades',
	    value: function () {
	      function _getAllBlades() {
	        var _this3 = this;
	
	        return Object.keys(this.blades).map(function (id) {
	          return _this3.blades[id];
	        });
	      }
	
	      return _getAllBlades;
	    }()
	  }, {
	    key: '_getVisibleBlades',
	    value: function () {
	      function _getVisibleBlades() {
	        var explicitVisible = this._getAllBlades().filter(function (blade) {
	          return blade.isVisible;
	        });
	        var i = -1;
	        for (i = explicitVisible.length - 1; i >= 0; i -= 1) {
	          if (explicitVisible[i].depth > 0) {
	            break;
	          }
	        }
	        if (i > -1) {
	          return explicitVisible.slice(i, explicitVisible.length);
	        }
	        return explicitVisible;
	      }
	
	      return _getVisibleBlades;
	    }()
	  }, {
	    key: '_recalculateDimensions',
	    value: function () {
	      function _recalculateDimensions() {
	        var visibleBlades = this._getVisibleBlades();
	        var left = 0;
	        for (var i = 0; i < visibleBlades.length; i += 1) {
	          visibleBlades[i].left = left;
	          left += visibleBlades[i].width;
	        }
	      }
	
	      return _recalculateDimensions;
	    }()
	  }]);
	
	  return BladeManager;
	}(_EventEmitter3['default']);
	
	exports['default'] = BladeManager;

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = require("../utils/EventEmitter");

/***/ }

/******/ });
//# sourceMappingURL=BladeManager.js.map