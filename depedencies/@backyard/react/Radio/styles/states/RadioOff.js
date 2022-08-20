"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var RadioOff = (0, _styledComponents.css)(["&.enabled,&:enabled{& + label::before{border-color:var(--bds-color-border-default);}}&.hover,&:hover{& + label::before{border-color:var(--bds-color-action-interactive-hover);}}&.focus,&:focus{& + label::before{border-color:var(--bds-color-action-interactive);box-shadow:0 0 0 2px var(--bds-color-border-default);}}&.disabled,&:disabled{&,& + label{cursor:not-allowed;}& + label::before{border-color:var(--bds-color-border-disabled);}}&,& + label{cursor:pointer;}& + label{&::before{background-color:transparent;border-color:var(--bds-color-border-default);}}"]);
var _default = RadioOff;
exports["default"] = _default;