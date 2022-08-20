"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Visa = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#15195a",
  d: "M13.52 4.4H2.48a.48.48 0 00-.48.48v6.24c0 .265.215.48.48.48h11.04a.48.48 0 00.48-.48V4.88a.48.48 0 00-.48-.48z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#fffffe",
  fillRule: "evenodd",
  d: "M6.979 9.146l.369-2.29h.59l-.37 2.29h-.59zM9.708 6.913a1.458 1.458 0 00-.529-.096c-.583 0-.993.31-.997.755-.003.33.293.513.517.622.23.112.307.184.306.284-.001.153-.183.224-.353.224-.236 0-.361-.035-.555-.12l-.076-.037-.083.513c.138.063.393.119.657.122.62 0 1.023-.307 1.027-.782.003-.261-.155-.459-.495-.622-.206-.106-.333-.177-.331-.284 0-.095.107-.197.338-.197.193-.003.332.041.441.088l.053.026.08-.496zM10.493 8.334c.05-.131.235-.64.235-.64-.003.006.049-.132.079-.218l.04.197.136.661h-.49zm.728-1.475h-.456c-.141 0-.247.04-.31.19L9.58 9.146h.62l.123-.344.756.001c.018.08.072.343.072.343h.547l-.477-2.287zM6.484 6.859l-.577 1.56-.062-.317c-.108-.366-.443-.762-.817-.96l.528 2.002h.624l.929-2.285h-.625z",
  clipRule: "evenodd"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#ffffff",
  fillRule: "evenodd",
  d: "M5.37 6.857h-.95l-.008.048c.74.19 1.23.647 1.433 1.197L5.638 7.05c-.035-.145-.14-.188-.267-.193z",
  clipRule: "evenodd"
});

var Visa = /*#__PURE__*/_react["default"].forwardRef(function Visa(_ref, ref) {
  var size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-Visa', className].filter(Boolean).join(' '),
    size: size,
    overrideColor: true
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});

exports.Visa = Visa;
var _default = Visa;
exports["default"] = _default;