"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Bitbucket = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#2684FF",
  d: "M2.39 3a.385.385 0 00-.385.446l1.632 9.908a.523.523 0 00.511.437h7.83a.385.385 0 00.385-.323l1.632-10.02a.385.385 0 00-.384-.446L2.389 3zm6.872 7.161h-2.5l-.676-3.535h3.782l-.606 3.535z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "url(#bitbucket_linear_1)",
  d: "M13.476 6.626H9.868l-.606 3.535h-2.5l-2.95 3.503c.094.08.213.126.336.127h7.832a.385.385 0 00.385-.323l1.111-6.842z"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
  id: "bitbucket_linear_1",
  x1: "14.31",
  x2: "9.364",
  y1: "8.783",
  y2: "12.644",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react["default"].createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})));

var Bitbucket = /*#__PURE__*/_react["default"].forwardRef(function Bitbucket(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-bitbucket', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});

exports.Bitbucket = Bitbucket;
var _default = Bitbucket;
exports["default"] = _default;