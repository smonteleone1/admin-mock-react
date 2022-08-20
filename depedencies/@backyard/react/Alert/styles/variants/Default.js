"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Colors = void 0;

var _styledComponents = require("styled-components");

var Colors = (0, _styledComponents.css)(["background-color:var(--style-alert-color-background);.alert,.toast{&-indicator{background-color:var(--style-alert-color-indicator);border-radius:var(--bds-border-radius-circle);}&-icon{.icon path{fill:var(--style-alert-color-icon);}}&-title,&-subtitle,&-timestamp{color:var(--bds-color-text-primary);}&-close{.icon path{fill:var(--style-alert-color-icon);}}}"]);
exports.Colors = Colors;
var _default = Colors;
exports["default"] = _default;