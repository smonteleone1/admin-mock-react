"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LargeView = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var LargeView = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M3 2c-.5523 0-1 .4477-1 1v7c0 .5523.4477 1 1 1h10c.5523 0 1-.4477 1-1V3c0-.5523-.4477-1-1-1H3ZM2.6875 12.625a.6875.6875 0 1 0 0 1.375h10.625a.6875.6875 0 1 0 0-1.375H2.6875Z"
}), 'LargeView');
exports.LargeView = LargeView;
var _default = LargeView;
exports["default"] = _default;