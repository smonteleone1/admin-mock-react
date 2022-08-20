"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchBase = void 0;

var _styledComponents = require("styled-components");

var Sizes = (0, _styledComponents.css)(["&.size{&--large{label{height:var(--bds-sizes-size-24);width:var(--bds-sizes-size-48);}input{& + label::before{height:var(--bds-sizes-size-24);width:var(--bds-sizes-size-48);}& + label::after{left:var(--bds-sizes-size-2);top:var(--bds-sizes-size-2);border-width:var(--bds-sizes-size-10);}}}&--small{label{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-32);}input{& + label::before{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-32);}& + label::after{left:var(--bds-sizes-size-2);top:var(--bds-sizes-size-2);border-width:var(--bds-sizes-size-6);}}}}"]);
var SwitchBase = (0, _styledComponents.css)(["position:relative;display:inline-flex;align-items:center;label{display:inline-flex;position:relative;}input{height:100%;width:100%;position:absolute;opacity:0;margin:0;z-index:1;& + label::before{content:'';position:absolute;top:0;left:0;border-radius:var(--bds-border-radius-circle);transition:background-color 0.2s ease-in-out;}& + label::after{content:'';position:absolute;border-style:solid;border-radius:var(--bds-border-radius-circle);transition:margin-left 0.2s ease-in-out;}}", ""], Sizes);
exports.SwitchBase = SwitchBase;
var _default = SwitchBase;
exports["default"] = _default;