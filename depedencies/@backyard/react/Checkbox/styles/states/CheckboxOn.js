"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckboxOn = void 0;

var _styledComponents = require("styled-components");

var CheckboxOn = (0, _styledComponents.css)(["&:enabled,&.enabled{& + label::before{background-color:var(--bds-color-action-interactive);}}&:hover,&:focus:hover,&.hover{& + label::before{background-color:var(--bds-color-action-interactive-hover);border-color:var(--bds-color-action-interactive-hover);}}&:focus,&.focus{& + label::before{box-shadow:0 0 0 2px var(--bds-color-border-default);}}&:disabled,&.disabled{&,& + label{cursor:not-allowed;color:var(--bds-color-text-disabled);}& + label::before{background-color:var(--bds-color-text-disabled);border-color:transparent;}}&,& + label{cursor:pointer;}& + label{&::before{background-color:var(--bds-color-action-interactive);border-color:var(--bds-color-action-interactive);}}"]);
exports.CheckboxOn = CheckboxOn;
var _default = CheckboxOn;
exports["default"] = _default;