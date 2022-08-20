"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PickerBase = void 0;

var _styledComponents = require("styled-components");

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-md);}&--squared{border-radius:0;}}"]);
var PickerBase = (0, _styledComponents.css)(["position:relative;", " width:calc(var(--bds-sizes-size-60) * 5);max-height:calc(var(--bds-sizes-size-112) * 3);border:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);background-color:var(--bds-color-elevation-04);box-shadow:var(--bds-shadows-shadow-04);"], Shapes);
exports.PickerBase = PickerBase;
var _default = PickerBase;
exports["default"] = _default;