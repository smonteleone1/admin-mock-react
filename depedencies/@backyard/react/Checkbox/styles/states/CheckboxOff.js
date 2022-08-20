"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckboxOff = void 0;

var _styledComponents = require("styled-components");

var CheckboxOff = (0, _styledComponents.css)(["&:enabled,&.enabled{& + label::before{border-color:var(--bds-color-border-default);}}&:hover,&.hover{& + label::before{border-color:var(--bds-color-action-interative-hover);}}&:focus,&.focus{& + label::before{border-color:var(--bds-color-action-interactive);box-shadow:0 0 0 2px var(--bds-color-action-interactive);}}&:disabled,&.disabled{&,& + label{cursor:not-allowed;color:var(--bds-color-text-disabled);}& + label::before{border-color:var(--bds-color-text-disabled);}}&,& + label{cursor:pointer;}& + label{&::before{background-color:transparent;border-color:var(--bds-color-border-default);}}"]);
exports.CheckboxOff = CheckboxOff;
var _default = CheckboxOff;
exports["default"] = _default;