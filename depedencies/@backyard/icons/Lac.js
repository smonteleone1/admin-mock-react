"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Lac = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.445 4.222s-.444 0-.444.445v6.666s0 .444.444.444h11.11s.445 0 .445-.444V4.667s0-.445-.444-.445H2.446z",
  fill: "#FEFEFE"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("mask", {
  id: "laca",
  maskUnits: "userSpaceOnUse",
  x: "1",
  y: "4",
  width: "13",
  height: "8"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.445 4.222S2 4.222 2 4.667v6.667s0 .444.444.444h11.11s.445 0 .445-.444V4.667s0-.445-.444-.445H2.445z",
  fill: "#fff"
}));

var _ref4 = /*#__PURE__*/_react["default"].createElement("g", {
  mask: "url(#laca)",
  fillRule: "evenodd",
  clipRule: "evenodd"
}, /*#__PURE__*/_react["default"].createElement("path", {
  d: "M1.402 12.74H3.74V3.263H1.402v9.475z",
  fill: "#14377C"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M3.727 12.74h1.677V3.263H3.727v9.475z",
  fill: "#054F96"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M5.401 12.74H7.11V3.263H5.4v9.475z",
  fill: "#105FA4"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M7.089 12.74h1.722V3.263H7.089v9.475z",
  fill: "#0872B5"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M8.8 12.74h1.733V3.263H8.8v9.475z",
  fill: "#0082C2"
}), /*#__PURE__*/_react["default"].createElement("path", {
  d: "M10.526 12.738h1.734V3.262h-1.734v9.476z",
  fill: "#0097D5"
}));

var _ref5 = /*#__PURE__*/_react["default"].createElement("mask", {
  id: "lacb",
  maskUnits: "userSpaceOnUse",
  x: "1",
  y: "4",
  width: "13",
  height: "8"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.445 4.222S2 4.222 2 4.667v6.667s0 .444.444.444h11.11s.445 0 .445-.444V4.667s0-.445-.444-.445H2.445z",
  fill: "#fff"
}));

var _ref6 = /*#__PURE__*/_react["default"].createElement("g", {
  mask: "url(#lacb)"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12.293 12.738h2.601V3.496h-2.601v9.242z",
  fill: "#BADFF0"
}));

var _ref7 = /*#__PURE__*/_react["default"].createElement("mask", {
  id: "lacc",
  maskUnits: "userSpaceOnUse",
  x: "1",
  y: "4",
  width: "13",
  height: "8"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M2.445 4.222S2 4.222 2 4.667v6.667s0 .444.444.444h11.11s.445 0 .445-.444V4.667s0-.445-.444-.445H2.445z",
  fill: "#fff"
}));

var _ref8 = /*#__PURE__*/_react["default"].createElement("g", {
  mask: "url(#lacc)"
}, /*#__PURE__*/_react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6.05 6.066c.011.022.016.044.015.066-.002.079-.06.125-.06.126-.025.02-.064.03-.115.03-.094 0-.2-.035-.201-.035l-.002-.001v-.127l.003.001c.001 0 .11.041.165.049H5.868c.028 0 .05-.012.055-.032.005-.018-.007-.04-.03-.053a.617.617 0 00-.063-.031c-.051-.023-.103-.047-.136-.104a.165.165 0 01.008-.16c.035-.052.09-.078.163-.078h.026c.079.012.156.06.157.062h.001v.116l-.003-.001-.078-.033a.263.263 0 00-.09-.022c-.02 0-.036.006-.047.016a.036.036 0 00-.011.031c.005.031.054.05.07.057h.003c.081.033.132.07.154.116v.002l.003.003v.002zm-1.062-.33h.143V6.2c0 .038-.03.068-.068.068h-.168c-.029 0-.055-.02-.055-.048 0 .029-.027.048-.055.048h-.169a.068.068 0 01-.067-.068v-.462h.143v.406h.085v-.406h.125v.406h.086v-.406zm-.788.406h.125V5.86H4.2v.28zm.2-.406h-.275a.068.068 0 00-.067.068v.395c0 .038.03.068.067.068H4.4c.038 0 .068-.03.068-.068v-.395a.068.068 0 00-.068-.068zm.812 0h.339v.125h-.196v.081h.196v.12h-.196v.08h.196v.125h-.339v-.53zm-1.432.407H4v.124h-.362v-.645h.142v.52zm2.341-.372h.02c.009 0 .02.002.02.013 0 .014-.012.015-.023.015H6.12v-.028zm0 .03h.016l.023.04h.015L6.15 5.8c.013-.001.023-.008.023-.025s-.01-.025-.031-.025h-.035v.09h.014V5.8zm.008-.061c.025 0 .045.02.045.045 0 .026-.02.045-.045.045a.044.044 0 01-.046-.045c0-.026.02-.045.046-.045zm-.01.082a.045.045 0 00.042-.062.045.045 0 00-.041-.027.045.045 0 00-.046.045c0 .025.022.044.046.044zm-.438-.047h-.099v-.152h.12l-.02.152zm.651.615h-2.98v-.811h.251v-.14h.447l.003-.002.79-.338.788.338h.45v.141h.251v.812zm-.184-.879v-.14h-.502l-.8-.343-.004-.001-.003.001-.8.343h-.502v.14h-.251v.945h3.112v-.945h-.25z",
  fill: "#FEFEFE"
}));

var Lac = /*#__PURE__*/_react["default"].forwardRef(function Lac(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-lac', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8);
});

exports.Lac = Lac;
var _default = Lac;
exports["default"] = _default;