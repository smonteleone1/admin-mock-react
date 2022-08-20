"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SkeletonWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SkeletonWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__SkeletonWrapper",
  componentId: "sc-fz68n6-0"
})(["display:inline-flex;flex-direction:column;.label-wrapper{display:inline-flex;flex-direction:row;.label--skeleton{margin-left:", ";}}.helper-text--skeleton{margin-top:", ";margin-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_16;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_8;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_36;
});

exports.SkeletonWrapper = SkeletonWrapper;
var _default = SkeletonWrapper;
exports["default"] = _default;