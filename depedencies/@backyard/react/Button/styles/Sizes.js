"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Sizes = void 0;

var _styledComponents = require("styled-components");

var Sizes = (0, _styledComponents.css)(["&.size{&--small{min-height:var(--bds-sizes-size-40);padding:0 var(--bds-sizes-size-20);.btn-label{font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-16);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-12);height:var(--bds-sizes-size-12);}}&--medium{min-height:var(--bds-sizes-size-48);padding:0 var(--bds-sizes-size-32);.btn-label{font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}}&--large{min-height:var(--bds-sizes-size-56);padding:0 var(--bds-sizes-size-32);.btn-label{font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}&--jumbo{min-height:var(--bds-sizes-size-96);padding:0 var(--bds-sizes-size-56);.btn-label{font-size:var(--bds-sizes-size-24);line-height:var(--bds-sizes-size-40);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-24);height:var(--bds-sizes-size-24);}}}@media only screen and (min-width:", "){&.size{&--small{.btn-label{font-size:var(--bds-sizes-size-14);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}}&--medium{.btn-label{font-size:var(--bds-sizes-size-16);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}&--large{.btn-label{font-size:var(--bds-sizes-size-18);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-18);height:var(--bds-sizes-size-18);}}&--jumbo{.btn-label{font-size:var(--bds-sizes-size-28);}.btn-label .btn-start-icon,.btn-label .btn-end-icon,.btn-label .icon{width:var(--bds-sizes-size-28);height:var(--bds-sizes-size-28);}}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.grid.breakpoint.lg.min;
});
exports.Sizes = Sizes;
var _default = Sizes;
exports["default"] = _default;