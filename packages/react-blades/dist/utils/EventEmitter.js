Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function () {
      function on(event, fn) {
        var _this = this;

        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }
        this.listeners[event].push(fn);
        return function () {
          _this.listeners = _this.listeners[event].filter(function (l) {
            return l !== fn;
          });
        };
      }

      return on;
    }()
  }, {
    key: "trigger",
    value: function () {
      function trigger(event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (!this.listeners[event]) return;
        this.listeners[event].forEach(function (fn) {
          fn.apply(undefined, args);
        });
      }

      return trigger;
    }()
  }]);

  return EventEmitter;
}();

exports["default"] = EventEmitter;