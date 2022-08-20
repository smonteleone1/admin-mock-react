import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/* eslint-disable no-undef */
import waitUntil from "./waitUntil";

var Queue = /*#__PURE__*/_createClass(function Queue(worker) {
  var _this = this;

  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Queue);

  this.pendingEntries = [];
  this.inFlight = 0;
  this.err = null;

  this.push = function (entries) {
    _this.pendingEntries = _this.pendingEntries.concat(entries);

    _this.process();
  };

  this.process = function () {
    var scheduled = _this.pendingEntries.splice(0, _this.concurrency - _this.inFlight);

    _this.inFlight += scheduled.length;
    scheduled.forEach( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(task) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.worker(task);

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                _this.err = _context.t0;

              case 8:
                _context.prev = 8;
                _this.inFlight -= 1;
                return _context.finish(8);

              case 11:
                if (_this.pendingEntries.length > 0) {
                  _this.process();
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5, 8, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  this.wait = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return waitUntil(function () {
      if (_this.err) {
        _this.pendingEntries = [];
        throw _this.err;
      }

      return {
        predicate: options.empty ? _this.inFlight === 0 && _this.pendingEntries.length === 0 : _this.concurrency > _this.pendingEntries.length
      };
    }, {
      delay: 50
    });
  };

  this.worker = worker;
  this.concurrency = _options.concurrency || 1;
});

export default Queue;