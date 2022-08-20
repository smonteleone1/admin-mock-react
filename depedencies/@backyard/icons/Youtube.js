"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Youtube = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.7492 5.07645C13.6112 4.55232 13.2046 4.13953 12.6883 3.99944C11.7525 3.74489 8 3.74489 8 3.74489C8 3.74489 4.24751 3.74489 3.31168 3.99944C2.79539 4.13955 2.38876 4.55232 2.25075 5.07645C2 6.02647 2 8.0086 2 8.0086C2 8.0086 2 9.99073 2.25075 10.9407C2.38876 11.4649 2.79539 11.8605 3.31168 12.0006C4.24751 12.2551 8 12.2551 8 12.2551C8 12.2551 11.7525 12.2551 12.6883 12.0006C13.2046 11.8605 13.6112 11.4649 13.7492 10.9407C14 9.99073 14 8.0086 14 8.0086C14 8.0086 14 6.02647 13.7492 5.07645ZM6.77272 9.80822V6.20897L9.90907 8.00864L6.77272 9.80822Z"
});

var Youtube = /*#__PURE__*/_react["default"].forwardRef(function Youtube(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-youtube', className].filter(Boolean).join(' '),
    color: "rgb(229, 45, 39)",
    size: size
  }, props, {
    ref: ref
  }), _ref2);
});

exports.Youtube = Youtube;
var _default = Youtube;
exports["default"] = _default;