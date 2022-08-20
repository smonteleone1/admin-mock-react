"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var SwitchOff = (0, _styledComponents.css)(["&:enabled,&.enabled{& + label::before{background-color:var(--bds-color-neutral-04);}& + label::after{border-color:var(--bds-color-surface-default);}}&:hover,&.hover{& + label::before{background-color:var(--bds-color-border-hover);}& + label::after{border-color:var(--bds-color-surface-default);}}&:focus,&.focus{& + label::before{box-shadow:0 0 0 2px var(--bds-color-action-interactive);}& + label::after{border-color:var(--bds-color-surface-default);}}&:disabled,&.disabled{&,& + label{cursor:not-allowed;}& + label::before{background-color:var(--bds-color-text-disabled);}& + label::after{border-color:var(--bds-color-icon-disabled);}}&,& + label{cursor:pointer;}"]);
var _default = SwitchOff;
exports["default"] = _default;