"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckCircleFilled = void 0;

var _react = _interopRequireDefault(require("react"));

var _createPathIcon = _interopRequireDefault(require("./components/PathIcon/createPathIcon"));

var CheckCircleFilled = (0, _createPathIcon["default"])( /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  d: "M14 8c0 3.2824-2.7176 6-6 6-3.2765 0-6-2.7176-6-6 0-3.2765 2.7176-6 5.9941-6C11.2765 2 14 4.7235 14 8Zm-8.1464.308 1.212 1.212 3.3736-3.3735a.5001.5001 0 0 1 .7072.707L7.431 10.569a.4557.4557 0 0 1-.031.0285.5.5 0 0 1-.6887-.0175L5.1465 9.0151a.5.5 0 1 1 .707-.7071Z",
  clipRule: "evenodd"
}), 'CheckCircleFilled');
exports.CheckCircleFilled = CheckCircleFilled;
var _default = CheckCircleFilled;
exports["default"] = _default;