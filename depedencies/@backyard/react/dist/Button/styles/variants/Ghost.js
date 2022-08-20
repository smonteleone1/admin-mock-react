"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Ghost = void 0;

var _styledComponents = require("styled-components");

var Ghost = (0, _styledComponents.css)(["&:enabled,&.enabled{background-color:transparent;border-color:transparent;.btn-label{color:var(--btn-text);}.btn-label .icon path{fill:var(--btn-icon);}}&:hover,&.hover{background-color:var(--btn-hover);border-color:transparent;}&:focus,&.focus{background-color:transparent;border-color:transparent;box-shadow:0px 0 0 2px var(--btn-focus);}&:focus:hover,&.focus:hover{background-color:var(--btn-hover);border-color:transparent;}&:active,&:focus:active,&.active{background-color:var(--btn-pressed);border-color:transparent;}&:disabled,&.disabled{background-color:transparent;border-color:transparent;.btn-label{color:var(--btn-disabled);}.btn-label .icon path{fill:var(--btn-disabled);}}"]);
exports.Ghost = Ghost;
var _default = Ghost;
exports["default"] = _default;