"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SkeletonWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-187norp-0"
})(["display:flex;flex-direction:column;width:", ";&.density--normal{.variant--rect{margin-top:", ";}}&.density--comfort{.variant--rect{margin-top:", ";}}&.density--condensed{.variant--rect{margin-top:", ";}}"], function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_8;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_12;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_4;
});

exports.SkeletonWrapper = SkeletonWrapper;
var _default = SkeletonWrapper;
exports["default"] = _default;