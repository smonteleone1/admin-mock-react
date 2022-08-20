"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Colors = void 0;

var _styledComponents = require("styled-components");

var Colors = (0, _styledComponents.css)(["background-color:var(--bds-color-surface-default-inverse);.alert,.toast{&-icon{.icon path{fill:var(--style-alert-color-icon);}}&-title,&-subtitle{color:var(--bds-color-text-primary-inverse);}&-timestamp{color:var(--bds-color-text-tertiary-inverse);}&-action .link-label{color:var(--bds-color-text-interactive-inverse);}&-close{.icon path{fill:var(--bds-color-icon-primary-inverse) !important;}}}"]);
exports.Colors = Colors;
var _default = Colors;
exports["default"] = _default;