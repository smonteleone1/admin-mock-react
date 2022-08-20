"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SpinnerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SpinnerBase = _interopRequireDefault(require("./SpinnerBase"));

var SpinnerWrapper = _styledComponents["default"].span.withConfig({
  displayName: "SpinnerWrapper",
  componentId: "sc-1ko0ltp-0"
})(["position:relative;z-index:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.overlay;
}, _SpinnerBase["default"]);

exports.SpinnerWrapper = SpinnerWrapper;
var _default = SpinnerWrapper;
exports["default"] = _default;