"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IDFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var IDFilled = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M12.8 4H3.2c-.666 0-1.194.445-1.194 1L2 11c0 .555.534 1 1.2 1h9.6c.666 0 1.2-.445 1.2-1V5c0-.555-.534-1-1.2-1ZM5 7c0-.5525.4475-1 1-1s1 .4475 1 1-.4475 1-1 1-1-.4475-1-1ZM4 9.25c0-.665 1.3325-1 2-1s2 .335 2 1V10H4v-.75ZM12 6H8.9v.75H12V6ZM8.9 7.5H12v.75H8.9V7.5ZM12 9H8.9v.75H12V9Z",
  clipRule: "evenodd"
}), 'IDFilled');
exports.IDFilled = IDFilled;
var _default = IDFilled;
exports["default"] = _default;