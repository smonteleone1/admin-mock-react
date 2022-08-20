"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StepperBase = void 0;

var _styledComponents = require("styled-components");

var BrowserCSS = (0, _styledComponents.css)(["outline:none;-moz-appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;}"]);
var StepperBase = (0, _styledComponents.css)(["position:relative;div.stepper--fields{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;input.textinput.textinput{display:inline-flex;justify-content:center;align-items:center;width:var(--style-stepper-length);padding:var(--bds-sizes-size-4);transition:0.2s all ease-in-out;text-align:center;", "}button{z-index:1;}button:first-child{margin-right:var(--bds-sizes-size-4);}button:last-child{margin-left:var(--bds-sizes-size-4);}}.stepper--label{display:block;text-align:center;padding-top:var(--bds-sizes-size-4);margin-top:var(--bds-sizes-size-1);margin-right:var(--bds-sizes-size-1);font-size:var(--bds-sizes-size-12);font-family:var(--style-stepper-font-family);font-weight:var(--bds-font-weight-regular);line-height:var(--bds-sizes-size-20);color:var(--bds-color-text-tertiary);}"], BrowserCSS);
exports.StepperBase = StepperBase;
var _default = StepperBase;
exports["default"] = _default;