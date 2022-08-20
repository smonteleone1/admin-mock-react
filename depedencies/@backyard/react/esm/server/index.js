import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

/* eslint-disable consistent-return */
require('make-promises-safe');

var Server = require('./server');

var start = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(port, host) {
    var server;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Server.initialize(port, host);

          case 3:
            server = _context.sent;
            _context.next = 6;
            return server.start();

          case 6:
            console.log('Server running at: ', server.info.uri); // eslint-disable-line no-console

            return _context.abrupt("return", server);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log('Server failed to start...', _context.t0); // eslint-disable-line no-console

            /* istanbul ignore if */

            if (!(require.main === module)) {
              _context.next = 17;
              break;
            }

            process.exit(1);
            _context.next = 18;
            break;

          case 17:
            return _context.abrupt("return", _context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function start(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* istanbul ignore if */


if (require.main === module) {
  start();
} else {
  module.exports = {
    start: start
  };
}