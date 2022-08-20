"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var Containers = (0, _styledComponents.css)([".grid{display:grid;}.gap{grid-column-gap:", ";}.container-xs{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-16);}.container-sm{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-md{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-lg{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-32);}.container-xl{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-40);}.container-xxl{max-width:", ";margin:auto;padding:0 var(--bds-sizes-size-56);}.container-fluid{width:100%;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_32;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.grid.breakpoint.xs.max;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.grid.breakpoint.sm.max;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.grid.breakpoint.md.max;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.grid.breakpoint.lg.max;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.grid.breakpoint.xl.max;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.grid.breakpoint.xxl.max;
});
var _default = Containers;
exports["default"] = _default;