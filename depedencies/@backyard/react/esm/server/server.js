import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";

var Glue = require('@hapi/glue');

var Routes = require('./routes');

var Internals = require('./internals');

module.exports = {
  initialize: function () {
    var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(port, host) {
      var internals, server;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              internals = Internals.initialize(port, host);
              _context.next = 3;
              return Glue.compose(internals.manifest);

            case 3:
              server = _context.sent;
              server.route(Routes);
              return _context.abrupt("return", server);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function initialize(_x, _x2) {
      return _initialize.apply(this, arguments);
    }

    return initialize;
  }()
};