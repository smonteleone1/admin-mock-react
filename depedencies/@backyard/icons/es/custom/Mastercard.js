"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Mastercard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M2 10.75a1 1 0 001 1h10a1 1 0 001-1v-5.5a1 1 0 00-1-1H3a1 1 0 00-1 1v5.5z",
  fill: "#0F1518"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M6.605 10.553h2.83V5.444h-2.83v5.11z",
  fill: "#E15E29"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M6.82 8c0-1.037.461-1.96 1.18-2.555a2.983 2.983 0 00-1.91-.695C4.384 4.75 3 6.205 3 8s1.384 3.25 3.09 3.25c.721 0 1.384-.26 1.91-.695A3.307 3.307 0 016.82 8z",
  fill: "#D3292A"
});

var _ref5 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M9.91 4.75c-.721 0-1.384.26-1.91.695A3.307 3.307 0 019.18 8c0 1.037-.461 1.96-1.18 2.555a2.982 2.982 0 001.91.695C11.617 11.25 13 9.795 13 8s-1.383-3.25-3.09-3.25z",
  fill: "#EC972D"
});

var Mastercard = /*#__PURE__*/_react["default"].forwardRef(function Mastercard(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-mastercard', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5);
});

exports.Mastercard = Mastercard;
var _default = Mastercard;
exports["default"] = _default;