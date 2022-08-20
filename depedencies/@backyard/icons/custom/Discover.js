"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Discover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M2.04102 4.20895H13.9558V11.7942H2.04417L2.04102 4.20895Z",
  fill: "white"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.9147 8.4279C13.9147 8.4279 10.6589 10.7237 4.69678 11.7532H13.9147V8.4279Z",
  fill: "#F48120"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.9558 4.16474H2V11.8384H14V4.16158H13.9558V4.16474ZM13.9147 4.25C13.9147 4.33526 13.9147 11.6647 13.9147 11.75C13.8295 11.75 2.17368 11.75 2.08842 11.75C2.08842 11.6647 2.08842 4.33526 2.08842 4.25C2.17368 4.25 13.8263 4.25 13.9147 4.25Z",
  fill: "#231F20"
});

var _ref5 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M3.0484 6.51105H2.55261V8.2479H3.0484C3.31051 8.2479 3.49998 8.18474 3.66735 8.04895C3.8663 7.88474 3.98314 7.63842 3.98314 7.38263C3.97998 6.8679 3.59788 6.51105 3.0484 6.51105ZM3.4463 7.81842C3.33893 7.91316 3.20314 7.95737 2.98209 7.95737H2.89051V6.8079H2.98209C3.19998 6.8079 3.33261 6.84579 3.4463 6.94684C3.56314 7.05105 3.63261 7.21211 3.63261 7.37947C3.63261 7.54684 3.56314 7.71421 3.4463 7.81842Z",
  fill: "#231F20"
});

var _ref6 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M4.63794 6.51105H4.13794V8.2479H4.63794V6.51105Z",
  fill: "#231F20"
});

var _ref7 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M5.30309 7.17737C5.10098 7.10158 5.04098 7.05105 5.04098 6.95947C5.04098 6.84895 5.14835 6.76684 5.29361 6.76684C5.39467 6.76684 5.47993 6.80789 5.56519 6.90895L5.74203 6.67842C5.59677 6.55211 5.42309 6.48579 5.23046 6.48579C4.92414 6.48579 4.6873 6.70053 4.6873 6.98474C4.6873 7.22474 4.79782 7.34789 5.11361 7.46158C5.24625 7.50895 5.31256 7.54053 5.3473 7.55947C5.41361 7.60368 5.44835 7.66684 5.44835 7.73947C5.44835 7.88158 5.33782 7.98579 5.18625 7.98579C5.02519 7.98579 4.89572 7.90368 4.81677 7.75526L4.59888 7.96684C4.75361 8.19737 4.94309 8.29842 5.19888 8.29842C5.5494 8.29842 5.79888 8.06474 5.79888 7.72684C5.80519 7.44579 5.68835 7.31947 5.30309 7.17737Z",
  fill: "#231F20"
});

var _ref8 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M5.90942 7.38263C5.90942 7.89421 6.31048 8.28895 6.82521 8.28895C6.97048 8.28895 7.09679 8.26053 7.24837 8.18789V7.79C7.11258 7.92579 6.99258 7.97947 6.841 7.97947C6.49995 7.97947 6.25679 7.73316 6.25679 7.37947C6.25679 7.04474 6.50627 6.78263 6.82521 6.78263C6.98627 6.78263 7.10942 6.83947 7.24837 6.97842V6.58053C7.09995 6.50474 6.97679 6.47316 6.83153 6.47316C6.32311 6.47316 5.90942 6.87737 5.90942 7.38263Z",
  fill: "#231F20"
});

var _ref9 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M9.93891 7.67947L9.4747 6.51105H9.10522L9.84101 8.29211H10.0242L10.7726 6.51105H10.4063L9.93891 7.67947Z",
  fill: "#231F20"
});

var _ref10 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M10.9274 8.2479H11.8874V7.95421H11.2653V7.48684H11.8653V7.19316H11.2653V6.8079H11.8874V6.51105H10.9274V8.2479Z",
  fill: "#231F20"
});

var _ref11 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.2295 7.02579C13.2295 6.70053 13.0053 6.51421 12.6137 6.51421H12.1116V8.25105H12.4495V7.55316H12.4937L12.961 8.25105H13.3779L12.8316 7.51842C13.0874 7.46474 13.2295 7.29105 13.2295 7.02579ZM12.5474 7.31316H12.4495V6.78579H12.5537C12.7653 6.78579 12.8789 6.87421 12.8789 7.04474C12.8789 7.21842 12.7653 7.31316 12.5474 7.31316Z",
  fill: "#231F20"
});

var _ref12 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M8.28732 8.31105C8.79833 8.31105 9.21259 7.8968 9.21259 7.38579C9.21259 6.87478 8.79833 6.46053 8.28732 6.46053C7.77631 6.46053 7.36206 6.87478 7.36206 7.38579C7.36206 7.8968 7.77631 8.31105 8.28732 8.31105Z",
  fill: "url(#disvoer-gradiant-1)"
});

var _ref13 = /*#__PURE__*/_react["default"].createElement("path", {
  opacity: "0.65",
  d: "M8.28732 8.31105C8.79833 8.31105 9.21259 7.8968 9.21259 7.38579C9.21259 6.87478 8.79833 6.46053 8.28732 6.46053C7.77631 6.46053 7.36206 6.87478 7.36206 7.38579C7.36206 7.8968 7.77631 8.31105 8.28732 8.31105Z",
  fill: "url(#disvoer-gradiant-2)"
});

var _ref14 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.4443 6.57737C13.4443 6.54579 13.4222 6.53 13.3874 6.53H13.3369V6.68158H13.3748V6.62158L13.419 6.68158H13.4632L13.4127 6.61842C13.4317 6.61526 13.4443 6.59947 13.4443 6.57737ZM13.3839 6.60842H13.3748V6.55842H13.3839C13.4112 6.55842 13.4248 6.56611 13.4248 6.5815C13.4248 6.60073 13.4112 6.60842 13.3839 6.60842Z",
  fill: "#231F20"
});

var _ref15 = /*#__PURE__*/_react["default"].createElement("path", {
  d: "M13.3936 6.47316C13.321 6.47316 13.261 6.53316 13.261 6.60579C13.261 6.67842 13.321 6.73842 13.3936 6.73842C13.4662 6.73842 13.5262 6.67842 13.5262 6.60579C13.5262 6.53316 13.4662 6.47316 13.3936 6.47316ZM13.3936 6.71632C13.3368 6.71632 13.2862 6.66895 13.2862 6.60579C13.2862 6.54579 13.3336 6.49526 13.3936 6.49526C13.4505 6.49526 13.4978 6.54579 13.4978 6.60579C13.4978 6.66579 13.4505 6.71632 13.3936 6.71632Z",
  fill: "#231F20"
});

var _ref16 = /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
  id: "disvoer-gradiant-1",
  x1: "8.76023",
  y1: "8.12622",
  x2: "8.12063",
  y2: "7.1248",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react["default"].createElement("stop", {
  stopColor: "#F89F20"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.2502",
  stopColor: "#F79A20"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.5331",
  stopColor: "#F68D20"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.6196",
  stopColor: "#F58720"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.7232",
  stopColor: "#F48120"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "1",
  stopColor: "#F37521"
})), /*#__PURE__*/_react["default"].createElement("linearGradient", {
  id: "discover-gradiant-2",
  x1: "8.65925",
  y1: "8.11274",
  x2: "7.72446",
  y2: "6.28564",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react["default"].createElement("stop", {
  stopColor: "#F58720"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.3587",
  stopColor: "#E16F27"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.703",
  stopColor: "#D4602C"
}), /*#__PURE__*/_react["default"].createElement("stop", {
  offset: "0.9816",
  stopColor: "#D05B2E"
})));

var Discover = /*#__PURE__*/_react["default"].forwardRef(function Discover(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-discover', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16);
});

exports.Discover = Discover;
var _default = Discover;
exports["default"] = _default;