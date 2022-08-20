"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNow = exports["default"] = void 0;

var _react = require("react");

var _useAdapter = _interopRequireDefault(require("./useAdapter"));

var useNow = function useNow() {
  var adapter = (0, _useAdapter["default"])();
  var now = (0, _react.useRef)(adapter.date());
  return now.current;
};

exports.useNow = useNow;
var _default = useNow;
exports["default"] = _default;