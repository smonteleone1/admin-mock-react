"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Jira = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#2684FF",
  d: "M13.467 7.664L8.304 2.501 7.804 2 3.915 5.887 2.14 7.664a.475.475 0 000 .672l3.551 3.551L7.803 14l3.887-3.887.06-.06 1.717-1.717a.475.475 0 000-.672zm-5.664 2.11L6.03 8l1.774-1.774L9.577 8 7.803 9.774z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "url(#jira_linear_1)",
  d: "M7.803 6.226a2.988 2.988 0 01-.013-4.212l-3.882 3.88 2.113 2.114 1.782-1.782z"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "url(#jira_linear_2)",
  d: "M9.582 7.995L7.803 9.774a2.989 2.989 0 010 4.226l3.892-3.892-2.113-2.113z"
});

var _ref5 = /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
  id: "jira_linear_1",
  x1: "6.544",
  x2: "4.783",
  y1: "4.431",
  y2: "6.193",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react["default"].createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})), /*#__PURE__*/_react["default"].createElement("linearGradient", {
  id: "jira_linear_2",
  x1: "72.327",
  x2: "122.944",
  y1: "369.961",
  y2: "337.156",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react["default"].createElement("stop", {
  offset: ".18",
  stopColor: "#0052CC"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "1",
  stopColor: "#2684FF"
})));

var Jira = /*#__PURE__*/_react["default"].forwardRef(function Jira(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-jira', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5);
});

exports.Jira = Jira;
var _default = Jira;
exports["default"] = _default;