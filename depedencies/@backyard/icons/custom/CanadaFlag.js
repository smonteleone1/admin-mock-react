"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CanadaFlag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "red",
  d: "M2 5h3l.124.124h5.752L11 5h3v6h-3l-.124-.124H5.124L5 11H2V5z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#fff",
  d: "M5 5h6v6H5V5zm3.113 5.537L8.056 9.46a.119.119 0 01.139-.123l1.074.189-.145-.4a.081.081 0 01.025-.091l1.176-.953-.265-.123a.081.081 0 01-.043-.1l.233-.714-.678.143a.081.081 0 01-.09-.047l-.132-.309-.529.568a.081.081 0 01-.139-.071l.255-1.316-.408.237a.081.081 0 01-.114-.034L8 5.5l-.415.815a.081.081 0 01-.114.034l-.409-.237.255 1.316a.081.081 0 01-.138.07l-.529-.567-.131.309a.081.081 0 01-.091.047l-.678-.143.232.715a.081.081 0 01-.042.098l-.265.124 1.176.953a.081.081 0 01.025.091l-.145.4 1.074-.189a.119.119 0 01.139.123l-.056 1.079h.225z"
});

var CanadaFlag = /*#__PURE__*/_react["default"].forwardRef(function CanadaFlag(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-canada-flag', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3);
});

exports.CanadaFlag = CanadaFlag;
var _default = CanadaFlag;
exports["default"] = _default;