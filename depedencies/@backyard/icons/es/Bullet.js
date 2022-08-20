"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Bullet = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var Bullet = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Z",
  clipRule: "evenodd"
}), 'Bullet');
exports.Bullet = Bullet;
var _default = Bullet;
exports["default"] = _default;