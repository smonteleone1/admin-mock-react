"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Clearance = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#F5B21F",
  fillRule: "evenodd",
  d: "M2 6h12v3.429L8 10l-6-.571V6z",
  clipRule: "evenodd"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#000",
  d: "M3.206 8.54c.16 0 .292-.05.395-.147a.655.655 0 00.192-.383h-.286a.458.458 0 01-.074.167.274.274 0 01-.231.103.3.3 0 01-.244-.12c-.064-.08-.096-.202-.096-.363 0-.162.03-.286.09-.375a.286.286 0 01.249-.132c.103 0 .18.031.233.094.03.035.054.087.073.156h.288a.53.53 0 00-.095-.269c-.108-.158-.278-.238-.51-.238a.566.566 0 00-.43.178c-.129.136-.194.33-.194.581 0 .232.057.415.17.549.115.133.27.199.47.199zm1.652-.04v-.259h-.684v-1.18h-.29V8.5h.974zm1.127 0v-.259H5.22v-.37h.672v-.25H5.22v-.306h.732v-.254H4.938V8.5h1.047zm.302 0l.095-.296h.51l.088.296h.314l-.49-1.44h-.326L5.985 8.5h.302zm.524-.544h-.35l.177-.566.173.566zm.819.544v-.564h.298c.085 0 .143.015.174.045.03.031.047.092.048.184l.002.134a.738.738 0 00.03.201h.319v-.036a.12.12 0 01-.053-.082.77.77 0 01-.007-.134v-.097a.49.49 0 00-.04-.225.26.26 0 00-.136-.114.28.28 0 00.164-.14.445.445 0 00.024-.353.45.45 0 00-.072-.12.35.35 0 00-.132-.101.609.609 0 00-.224-.037h-.678V8.5h.283zm.327-.803H7.63v-.386h.335c.063 0 .11.008.14.025.056.03.084.088.084.176 0 .08-.028.134-.086.162a.352.352 0 01-.146.023zm.847.803l.095-.296h.51l.089.296h.313l-.49-1.44h-.326L8.502 8.5h.302zm.524-.544h-.35l.177-.566.173.566zm.794.544V7.478l.565 1.022h.289V7.06h-.27v1.005l-.55-1.004h-.303V8.5h.27zm1.574.04c.16 0 .292-.05.395-.147a.655.655 0 00.192-.383h-.286a.457.457 0 01-.073.167.274.274 0 01-.232.103.3.3 0 01-.244-.12c-.064-.08-.096-.202-.096-.363 0-.162.03-.286.09-.375a.286.286 0 01.25-.132c.102 0 .18.031.233.094.029.035.053.087.072.156h.289a.53.53 0 00-.096-.269c-.107-.158-.277-.238-.51-.238a.566.566 0 00-.43.178c-.129.136-.194.33-.194.581 0 .232.057.415.171.549.114.133.27.199.469.199zm1.735-.04v-.259h-.765v-.37h.671v-.25h-.671v-.306h.731v-.254h-1.014V8.5h1.048z"
});

var Clearance = /*#__PURE__*/_react["default"].forwardRef(function Clearance(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-clearance', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3);
});

exports.Clearance = Clearance;
var _default = Clearance;
exports["default"] = _default;