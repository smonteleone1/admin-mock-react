"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var RadioOn = (0, _styledComponents.css)(["&.enabled,&:enabled{& + label::before{border-color:var(--bds-color-action-interactive);}& + label::after{border-color:var(--bds-color-action-interactive);}}&.hover,&:hover,&:focus:hover{& + label::before{border-color:var(--bds-color-action-interactive-hover);}}&.focus,&:focus{& + label::before{box-shadow:0 0 0 2px var(--bds-color-border-default);}}&.disabled,&:disabled{&,& + label{cursor:not-allowed;}& + label::before{border-color:var(--bds-color-border-disabled);}& + label::after{border-color:var(--bds-color-border-disabled);}}&,& + label{cursor:pointer;}"]);
var _default = RadioOn;
exports["default"] = _default;