"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PlusFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var PlusFilled = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 14c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Zm.5-2.9737c0 .2315-.3036.3487-.5.3487-.1964 0-.5-.1563-.5-.3487V8.5H5.0499c-.1924 0-.3568-.3036-.3568-.5 0-.1964.1644-.5.3568-.5H7.5V4.9737c0-.1924.3036-.3487.5-.3487.1964 0 .5.1563.5.3487V7.5h2.4501c.1924 0 .3568.3036.3568.5 0 .1964-.1644.5-.3568.5H8.5v2.5263Z",
  clipRule: "evenodd"
}), 'PlusFilled');
exports.PlusFilled = PlusFilled;
var _default = PlusFilled;
exports["default"] = _default;