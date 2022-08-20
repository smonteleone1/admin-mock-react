"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Loading = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var Loading = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 2c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6a5.9877 5.9877 0 0 1-2.113-.3826l.849-1.2974c.401.1172.8251.18 1.264.18 2.4853 0 4.5-2.0147 4.5-4.5S10.4853 3.5 8 3.5 3.5 5.5147 3.5 8c0 .777.197 1.5082.5437 2.146l-1.1202 1.0538C2.3385 10.2737 2 9.1764 2 8c0-3.3137 2.6863-6 6-6Z",
  clipRule: "evenodd"
}), 'Loading');
exports.Loading = Loading;
var _default = Loading;
exports["default"] = _default;