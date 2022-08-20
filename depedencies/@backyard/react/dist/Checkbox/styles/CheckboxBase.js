"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckboxBase = void 0;

var _styledComponents = require("styled-components");

var CheckboxBase = (0, _styledComponents.css)(["position:relative;display:inline-flex;align-items:center;box-sizing:border-box;height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);label{position:relative;display:inline-flex;justify-content:center;align-items:center;height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);font-family:", ";font-weight:var(--bds-font-weight-regular);pointer-events:none;.checkbox-icon{z-index:1;}}input{height:100%;width:100%;position:absolute;opacity:0;margin:0;z-index:1;&:checked + label::after{opacity:1;}&:not(:checked) + label::after{opacity:0;}& + label::before{content:\"\";position:absolute;top:0;left:0;height:var(--bds-sizes-size-14);width:var(--bds-sizes-size-14);border-width:var(--bds-border-width-sm);border-style:solid;}&.shape{&--rounded{& + label::before{border-radius:var(--bds-border-radius-md);}}&--squared{& + label::before{border-radius:0;}}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});
exports.CheckboxBase = CheckboxBase;
var _default = CheckboxBase;
exports["default"] = _default;