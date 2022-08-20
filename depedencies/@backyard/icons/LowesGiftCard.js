"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LowesGiftCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#012169",
  d: "M13.52 4.25H2.48a.48.48 0 00-.48.48v6.54c0 .265.215.48.48.48h11.04a.48.48 0 00.48-.48V4.73a.48.48 0 00-.48-.48z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#fff",
  d: "M8 6.25l1.937.843h1.208v.344h.605V9.75h-7.5V7.437h.605v-.344h1.208L8 6.25zm2.469 1.69c-.174 0-.306.064-.392.19a.408.408 0 00-.02.393c.08.14.206.197.329.254.05.023.102.047.151.076.056.034.084.086.072.132-.012.047-.065.08-.133.08l-.027-.003h-.004a2.689 2.689 0 01-.396-.12l-.008-.002v.31l.004.002.016.005c.054.017.24.071.42.08l.048.001c.124 0 .217-.025.277-.075a.438.438 0 00.146-.306.34.34 0 00-.019-.121l-.016-.04-.002-.005-.002-.004-.004-.009c-.055-.11-.176-.203-.372-.283l-.007-.002c-.039-.016-.157-.063-.17-.139a.089.089 0 01.029-.075c.024-.026.062-.039.112-.039.08 0 .17.033.218.053l.186.08.009.003v-.283l-.003-.002a1.116 1.116 0 00-.378-.149.73.73 0 00-.064-.002zm-.756.047h-.816v1.299h.816v-.304h-.471v-.198h.471v-.292h-.471v-.2h.471v-.305zm-2.772 0h-.663a.164.164 0 00-.163.166v.967c0 .092.073.166.163.166h.663c.09 0 .163-.074.163-.166v-.967a.164.164 0 00-.163-.165zm.701 0H7.3V9.12c0 .092.073.166.163.166h.406c.068 0 .132-.048.132-.118 0 .07.064.118.132.118h.406c.09 0 .163-.074.163-.166V7.988h-.343v.994H8.15v-.994h-.302v.994h-.207v-.994zm-2.196-.279h-.342v1.578h.873v-.304h-.53V7.708zm1.314.585v.688H6.46v-.688h.301zm4.398-.36a.188.188 0 00-.188.191c0 .11.086.192.188.192.1 0 .187-.081.187-.192 0-.11-.087-.19-.187-.19zm0 .033c.083 0 .15.068.15.158 0 .092-.067.16-.15.16-.085 0-.151-.068-.151-.16 0-.09.066-.158.15-.158zm.01.049h-.082v.22h.033v-.096h.037l.056.096h.036l-.06-.097c.031-.004.055-.021.055-.06 0-.044-.025-.063-.075-.063zm-1.092-.306H9.79v.373h.238l.05-.373z"
});

var LowesGiftCard = /*#__PURE__*/_react["default"].forwardRef(function LowesGiftCard(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-LowesGiftCard', className].filter(Boolean).join(' '),
    overrideColor: true,
    size: size
  }, props, {
    ref: ref
  }), _ref2, _ref3);
});

exports.LowesGiftCard = LowesGiftCard;
var _default = LowesGiftCard;
exports["default"] = _default;