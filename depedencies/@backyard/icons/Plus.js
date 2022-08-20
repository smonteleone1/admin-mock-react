"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Plus = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var Plus = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M8 14c.3492 0 .6413-.2779.6413-.62V8.6413h4.6034c.342 0 .6342-.2921.6342-.6413 0-.3492-.2922-.6342-.6342-.6342H8.6413V2.6199C8.6413 2.278 8.3492 2 8 2c-.3491 0-.6342.278-.6342.62v4.7458H2.7554c-.342 0-.6342.285-.6342.6342s.2921.6413.6342.6413h4.6104V13.38c0 .3421.285.62.6342.62Z",
  clipRule: "evenodd"
}), 'Plus');
exports.Plus = Plus;
var _default = Plus;
exports["default"] = _default;