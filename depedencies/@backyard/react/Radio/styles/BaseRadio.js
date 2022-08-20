"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var BaseRadio = (0, _styledComponents.css)(["position:relative;display:inline-flex;align-items:center;label{display:inline-flex;height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);position:relative;}input{height:100%;width:100%;position:absolute;opacity:0;margin:0;z-index:1;&:checked + label::after{opacity:1;}&:not(:checked) + label::after{opacity:0;}& + label::before{content:\"\";position:absolute;box-sizing:border-box;padding:0;margin:0;vertical-align:center;top:0;left:0;border-width:var(--bds-border-width-sm);border-style:solid;border-radius:var(--bds-border-radius-circle);height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);transition:0.2s all ease-in-out;}& + label::after{content:\"\";position:absolute;left:var(--bds-sizes-size-3);top:var(--bds-sizes-size-3);opacity:0;border-width:var(--bds-sizes-size-5);border-style:solid;border-radius:var(--bds-border-radius-circle);transition:opacity 0.2s ease-in-out;}}"]);
var _default = BaseRadio;
exports["default"] = _default;