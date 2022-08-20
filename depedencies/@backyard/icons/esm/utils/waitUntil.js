import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

function sleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

function waitUntil(_x) {
  return _waitUntil.apply(this, arguments);
}

function _waitUntil() {
  _waitUntil = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(test) {
    var options,
        _options$delay,
        delay,
        _options$tries,
        tries,
        _yield$test,
        predicate,
        result,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _options$delay = options.delay, delay = _options$delay === void 0 ? 5e3 : _options$delay, _options$tries = options.tries, tries = _options$tries === void 0 ? -1 : _options$tries;
            _context.next = 4;
            return test();

          case 4:
            _yield$test = _context.sent;
            predicate = _yield$test.predicate;
            result = _yield$test.result;

            if (!predicate) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", result);

          case 9:
            if (!(tries - 1 === 0)) {
              _context.next = 11;
              break;
            }

            throw new Error('tries limit reached');

          case 11:
            _context.next = 13;
            return sleep(delay);

          case 13:
            return _context.abrupt("return", waitUntil(test, _extends({}, options, {
              tries: tries > 0 ? tries - 1 : tries
            })));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _waitUntil.apply(this, arguments);
}

export default waitUntil;