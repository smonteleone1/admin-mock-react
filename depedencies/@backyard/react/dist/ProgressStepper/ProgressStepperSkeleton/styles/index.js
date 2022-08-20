"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalWrapper = exports.StepSkeleton = exports.HorizontalWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var HorizontalWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__HorizontalWrapper",
  componentId: "sc-1wmnymo-0"
})(["width:100%;display:flex;flex-direction:row;position:relative;.progress-step-connector{position:absolute;left:calc(-50% + var(--bds-sizes-size-24));right:calc(50% + var(--bds-sizes-size-24));top:var(--bds-sizes-size-36);bottom:0;}"]);

exports.HorizontalWrapper = HorizontalWrapper;

var VerticalWrapper = _styledComponents["default"].div.withConfig({
  displayName: "styles__VerticalWrapper",
  componentId: "sc-1wmnymo-1"
})(["height:100%;display:flex;flex-direction:column;position:relative;.progress-step-connector{position:absolute;top:calc(-50% + var(--bds-sizes-size-12));bottom:calc(50% + var(--bds-sizes-size-48));left:var(--bds-sizes-size-20);}&.size--small{.progress-step-connector{left:var(--bds-sizes-size-18);top:calc(-50% + var(--bds-sizes-size-12));}.skeleton--step{min-height:4.75rem !important;}}"]);

exports.VerticalWrapper = VerticalWrapper;

var StepSkeleton = _styledComponents["default"].span.withConfig({
  displayName: "styles__StepSkeleton",
  componentId: "sc-1wmnymo-2"
})(["display:flex;flex-direction:column;align-items:center;flex-grow:1;padding:", ";margin:", ";.indicator{margin-bottom:", ";}.heading{margin-top:", ";margin-bottom:", ";}.caption{margin-top:", ";margin-bottom:", ";}&&&.skeleton--step{flex-direction:row;align-items:start;position:relative;padding:", ";margin:", ";min-height:5.25rem;.label-group{margin-left:", ";margin-top:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.sizes.size_8, " 0px");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_8;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_8;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_4;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.sizes.size_4;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.sizes.size_5;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.sizes.size_5;
}, function (_ref8) {
  var theme = _ref8.theme;
  return "".concat(theme.sizes.size_8, " 0");
}, function (_ref9) {
  var theme = _ref9.theme;
  return "".concat(theme.sizes.size_4, " 0");
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.sizes.size_24;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.sizes.size_12;
});

exports.StepSkeleton = StepSkeleton;