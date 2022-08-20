"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Facebook = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#3B5998",
  d: "M12.714 2H3.286A1.286 1.286 0 002 3.286v9.428A1.286 1.286 0 003.286 14h3.676V9.92H5.275V8h1.687V6.536c0-1.664.991-2.584 2.51-2.584.726 0 1.486.13 1.486.13v1.634h-.837c-.826 0-1.083.512-1.083 1.037V8h1.842l-.294 1.92H9.038V14h3.676A1.286 1.286 0 0014 12.714V3.286A1.286 1.286 0 0012.714 2z"
});

var Facebook = /*#__PURE__*/_react["default"].forwardRef(function Facebook(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-facebook', className].filter(Boolean).join(' '),
    color: "rgb(59, 89, 152)",
    size: size
  }, props, {
    ref: ref
  }), _ref2);
});

exports.Facebook = Facebook;
var _default = Facebook;
exports["default"] = _default;