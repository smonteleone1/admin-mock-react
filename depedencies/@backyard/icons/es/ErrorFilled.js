"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ErrorFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var ErrorFilled = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm2.4824-5.4765H5.5118c-.347 0-.5883-.1823-.5883-.5117 0-.3353.2294-.5236.5883-.5236h4.9706c.3588 0 .5823.1883.5823.5236 0 .3294-.2353.5117-.5823.5117Z",
  clipRule: "evenodd"
}), 'ErrorFilled');
exports.ErrorFilled = ErrorFilled;
var _default = ErrorFilled;
exports["default"] = _default;