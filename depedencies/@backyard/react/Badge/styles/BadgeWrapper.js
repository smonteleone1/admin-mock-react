"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BadgeWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BadgeBase = _interopRequireDefault(require("./BadgeBase"));

var _Filled = _interopRequireDefault(require("./variants/Filled"));

var _Outlined = _interopRequireDefault(require("./variants/Outlined"));

var _Arrows = _interopRequireDefault(require("./Arrows"));

var BadgeWrapper = _styledComponents["default"].span.withConfig({
  displayName: "BadgeWrapper",
  componentId: "sc-ah9c1g-0"
})(["display:inline-flex;flex-direction:", ";align-items:center;justify-content:center;.arrow{box-sizing:border-box;height:1.125rem;width:1.125rem;border-width:0.0625rem;border-style:solid;transform:rotateY(0deg) rotate(45deg);border-radius:var(--bds-border-radius-md);}", " .badge-label{&.variant{&--filled{", "}&--outlined{", "}}", "}.bold{font-weight:", "}"], function (_ref) {
  var arrow = _ref.arrow;
  return arrow === 'left' ? 'row-reverse' : 'row';
}, _BadgeBase["default"], _Filled["default"], _Outlined["default"], _Arrows["default"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
});

exports.BadgeWrapper = BadgeWrapper;
var _default = BadgeWrapper;
exports["default"] = _default;