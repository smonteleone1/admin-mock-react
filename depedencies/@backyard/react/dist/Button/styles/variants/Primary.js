"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;

var _styledComponents = require("styled-components");

var Primary = (0, _styledComponents.css)(["&:enabled,&.enabled{background-color:var(--btn-base);border-color:var(--btn-base);.btn-label{color:var(--btn-text);}.btn-label .icon path{fill:var(--btn-icon);}}&:hover,&.hover{background-color:var(--btn-hover);border-color:var(--btn-hover);}&:focus,&.focus{box-shadow:inset 0 0 0 1px var(--btn-base),inset 0px 0 0 2px var(--btn-focus);}&:focus:hover,&.focus:hover{box-shadow:inset 0 0 0 1px var(--btn-hover),inset 0px 0 0 2px var(--btn-focus);}&:active,&.active{background-color:var(--btn-pressed);border-color:var(--btn-pressed);}&:disabled,&.disabled{background-color:var(--btn-disabled);border-color:transparent;.btn-label{color:var(--btn-disabled);}.btn-label .icon path{fill:var(--btn-disabled);}}&&{&.size--jumbo{&:focus,&.focus{box-shadow:inset 0 0 0 2px var(--btn-base),inset 0px 0 0 4px var(--btn-focus);}}}"]);
exports.Primary = Primary;
var _default = Primary;
exports["default"] = _default;