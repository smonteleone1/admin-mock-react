"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchSkeletonWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SwitchSkeletonWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__SwitchSkeletonWrapper",
  componentId: "sc-fz54kq-0"
})(["display:inline-flex;flex-direction:row;align-items:center;.skeleton--label{margin-left:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_16;
});

exports.SwitchSkeletonWrapper = SwitchSkeletonWrapper;
var _default = SwitchSkeletonWrapper;
exports["default"] = _default;