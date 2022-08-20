"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ApplePay = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _components = _interopRequireDefault(require("./components"));

var _excluded = ["color", "size", "className"];

var _ref2 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#000",
  d: "M12.925 4.159H2.952c-.035 0-.07 0-.104.002a1.506 1.506 0 00-.226.02.72.72 0 00-.6.6c-.014.075-.018.15-.02.226L2 5.11v5.657a29.786 29.786 0 00.002.226c.002.075.006.151.02.226a.758.758 0 00.203.397.716.716 0 00.397.204c.075.013.15.017.226.02h.104l.123.001H13.048c.035 0 .07 0 .104-.002.075-.002.151-.006.226-.02a.76.76 0 00.397-.203.72.72 0 00.203-.397c.014-.075.018-.15.02-.226L14 10.89V5.234 5.11c0-.034 0-.069-.002-.103a1.498 1.498 0 00-.02-.226.757.757 0 00-.203-.397.719.719 0 00-.397-.203 1.509 1.509 0 00-.226-.02l-.104-.002h-.123z"
});

var _ref3 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#fff",
  d: "M12.925 4.415h.122c.032 0 .065 0 .098.002.058.001.125.004.187.016a.463.463 0 01.394.394c.011.062.015.129.016.187a4.555 4.555 0 01.002.22v5.655c0 .032 0 .065-.002.097a1.281 1.281 0 01-.016.188.497.497 0 01-.132.261.463.463 0 01-.261.133 1.293 1.293 0 01-.187.015 5.48 5.48 0 01-.1.002H3.075h-.122c-.033 0-.066 0-.098-.002a1.313 1.313 0 01-.187-.015.503.503 0 01-.262-.133.46.46 0 01-.132-.262 1.267 1.267 0 01-.016-.187 4.75 4.75 0 01-.002-.098V5.112c0-.033 0-.066.002-.098.001-.058.004-.125.016-.188a.502.502 0 01.132-.261.463.463 0 01.262-.132c.062-.012.13-.015.187-.016l.098-.002h9.972z"
});

var _ref4 = /*#__PURE__*/_react["default"].createElement("path", {
  fill: "#000",
  d: "M5.276 6.743a.67.67 0 00.154-.478.664.664 0 00-.44.228c-.096.11-.18.29-.158.459.169.015.337-.084.444-.21zM5.428 6.985c-.245-.015-.454.14-.57.14-.118 0-.297-.133-.491-.13a.723.723 0 00-.615.374c-.263.454-.07 1.128.187 1.498.124.183.274.384.472.377.186-.007.26-.12.487-.12.226 0 .292.12.49.116.205-.003.333-.183.457-.366.143-.208.201-.41.205-.42-.004-.004-.395-.155-.399-.605-.003-.377.308-.556.322-.568a.701.701 0 00-.545-.296zM7.563 6.475c.533 0 .904.367.904.902 0 .537-.379.906-.917.906h-.59v.938h-.427V6.475h1.03zm-.603 1.45h.489c.371 0 .582-.2.582-.546 0-.347-.211-.545-.58-.545H6.96v1.091zM8.578 8.652c0-.35.269-.565.745-.592l.548-.032v-.154c0-.223-.15-.356-.402-.356-.238 0-.386.114-.422.293h-.389c.023-.362.332-.628.827-.628.485 0 .795.257.795.658v1.38h-.394v-.329h-.01a.715.715 0 01-.631.364c-.392 0-.667-.244-.667-.604zm1.293-.18v-.159l-.493.03c-.246.018-.385.126-.385.298 0 .175.145.29.366.29.287 0 .512-.199.512-.46zM10.652 9.958v-.333c.03.007.099.007.133.007.19 0 .293-.08.356-.285 0-.004.036-.122.036-.124l-.723-2.004h.445l.507 1.63h.007l.507-1.63h.434l-.75 2.107c-.172.485-.37.641-.784.641a1.59 1.59 0 01-.168-.01z"
});

var ApplePay = /*#__PURE__*/_react["default"].forwardRef(function ApplePay(_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_components["default"], (0, _extends2["default"])({
    className: ['icon', 'icon-applepay', className].filter(Boolean).join(' '),
    size: size,
    overrideColor: true
  }, props, {
    ref: ref
  }), _ref2, _ref3, _ref4);
});

exports.ApplePay = ApplePay;
var _default = ApplePay;
exports["default"] = _default;