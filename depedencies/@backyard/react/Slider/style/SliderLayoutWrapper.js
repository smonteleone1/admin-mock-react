"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SliderLayoutWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SliderLayoutWrapper",
  componentId: "sc-nk5yfm-0"
})(["position:relative;display:flex;justify-content:center;align-items:center;&.horizontal{flex-direction:row;}&.vertical{flex-direction:column;}.slider-wrapper{display:flex;flex-direction:row;}.slider-min-label{position:relative;bottom:var(--bds-sizes-size-7);padding-right:var(--bds-sizes-size-16);&.horizontal{padding-left:var(--bds-sizes-size-16);bottom:0;}}.slider-max-label{position:relative;top:var(--bds-sizes-size-7);padding-right:var(--bds-sizes-size-16);&.horizontal{top:0;padding-left:var(--bds-sizes-size-16);}}.labels{position:relative;top:-1rem;display:flex;flex-direction:column-reverse;justify-content:space-between;margin-bottom:0;margin-left:var(--bds-sizes-size-12);}"]);

var _default = SliderLayoutWrapper;
exports["default"] = _default;