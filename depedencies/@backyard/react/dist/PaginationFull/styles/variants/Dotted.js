"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Dotted = void 0;

var _styledComponents = require("styled-components");

var Dotted = (0, _styledComponents.css)(["&&& > ul{& > li{display:flex;align-items:center;padding:0 var(--bds-sizes-size-4);&:first-child{padding-left:0;}&:last-child{padding-right:0;}}.button{background:transparent;border:none;padding:0;svg path{fill:var(--bds-color-border-subdued);}&.selected{svg path{fill:var(--bds-color-action-interactive);}&:focus,&.focus{svg path{stroke:var(--bds-color-focus-default);stroke-width:var(--bds-sizes-size-2);}}}&:focus,&.focus{box-shadow:none;svg path{stroke:var(--bds-color-focus-interactive);stroke-width:var(--bds-sizes-size-2);}}&:hover:not(.selected),&.hover{svg path{fill:var(--bds-color-border-hover);}}}}"]);
exports.Dotted = Dotted;
var _default = Dotted;
exports["default"] = _default;