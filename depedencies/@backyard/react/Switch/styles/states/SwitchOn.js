"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var SwitchOn = (0, _styledComponents.css)(["&:enabled,&.enabled{& + label::before{background-color:var(--bds-color-action-interactive);}& + label::after{border-color:var(--bds-color-surface-default);}}&:hover,&:focus:hover,&.hover{& + label::before{background-color:var(--bds-color-action-interactive-hover);}& + label::after{border-color:var(--bds-color-surface-default);}}&:focus,&.focus{& + label::before{box-shadow:0 0 0 2px var(--bds-color-border-default);}& + label::after{border-color:var(--bds-color-surface-default);}}&:disabled,&.disabled{&,& + label{cursor:not-allowed;}& + label::before{background-color:var(--bds-color-text-disabled);}& + label::after{border-color:var(--bds-color-text-disabled);}}&,& + label{cursor:pointer;}&.size--large + label{&::after{margin-left:var(--bds-sizes-size-24);}}&.size--small + label{&::after{margin-left:var(--bds-sizes-size-16);}}"]);
var _default = SwitchOn;
exports["default"] = _default;