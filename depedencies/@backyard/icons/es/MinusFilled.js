"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MinusFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var MinusFilled = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 14c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm4-6.0028c0 .2737-.1988.5028-.4315.5028h-7.137C4.1988 8.5 4 8.271 4 7.9972c0-.2737.1988-.4972.4315-.4972h7.137c.2327 0 .4315.2235.4315.4972Z",
  clipRule: "evenodd"
}), 'MinusFilled');
exports.MinusFilled = MinusFilled;
var _default = MinusFilled;
exports["default"] = _default;