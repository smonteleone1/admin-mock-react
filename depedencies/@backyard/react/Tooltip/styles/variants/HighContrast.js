"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HighContrast = void 0;

var _styledComponents = require("styled-components");

var HighContrast = (0, _styledComponents.css)([".tooltip-background{background:var(--bds-color-surface-default-inverse);}.tooltip-icon{svg path{fill:var(--bds-color-icon-primary-inverse);}}.tooltip-title{color:var(--bds-color-text-primary-inverse);}.tooltip-subtitle{color:var(--bds-color-text-primary-inverse);}.tooltip-arrow::before{background:var(--bds-color-surface-default-inverse);}"]);
exports.HighContrast = HighContrast;
var _default = HighContrast;
exports["default"] = _default;