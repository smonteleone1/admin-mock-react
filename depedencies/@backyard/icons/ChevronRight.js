"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChevronRight = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var ChevronRight = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M5.252 14c.1796 0 .3315-.069.4489-.1864l5.4752-5.351c.1312-.1312.2003-.29.2003-.4626 0-.1795-.0691-.3452-.2003-.4626l-5.4683-5.344C5.5835 2.069 5.4316 2 5.252 2c-.359 0-.6283.2762-.6283.6352 0 .1657.069.3314.1795.4488L9.8298 8l-5.0265 4.916a.6557.6557 0 0 0-.1795.4488c0 .359.2692.6352.6283.6352Z",
  clipRule: "evenodd"
}), 'ChevronRight');
exports.ChevronRight = ChevronRight;
var _default = ChevronRight;
exports["default"] = _default;