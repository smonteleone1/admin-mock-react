"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Glue = require('@hapi/glue');

var Routes = require('./routes');

var Internals = require('./internals');

module.exports = {
  initialize: function () {
    var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(port, host) {
      var internals, server;
      return _regenerator["default"].wrap(function _callee$(_context) {
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