"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Checkmark = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var Checkmark = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M5.6338 10.9115 3.141 8.4188a.6684.6684 0 0 0-.9453.9453l2.9495 2.9495a.6661.6661 0 0 0 .4885.1956.6661.6661 0 0 0 .4884-.1956l7.682-7.682a.6685.6685 0 0 0-.9453-.9452l-7.2252 7.2251Z"
}), 'Checkmark');
exports.Checkmark = Checkmark;
var _default = Checkmark;
exports["default"] = _default;