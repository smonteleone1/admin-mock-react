"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FAB = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconButton = _interopRequireDefault(require("../../IconButton"));

var FAB = (0, _styledComponents["default"])(_IconButton["default"]).withConfig({
  displayName: "FAB",
  componentId: "sc-jg3d95-0"
})(["&&&&{&:enabled,&.enabled{background-color:var(--bds-color-neutral-05);border-color:transparent;.icon path{fill:var(--bds-color-icon-solid-inverse);}}&:hover,&.hover{background-color:var(--bds-color-action-interactive);border-color:var(--bds-color-action-interactive);.icon path{fill:var(--bds-color-icon-solid-inverse);}}&:focus,&.focus{background-color:var(--bds-color-action-interactive);border-color:var(--bds-color-action-interactive);box-shadow:inset 0 0 0 1px var(--bds-color-action-interactive),inset 0px 0 0 2px var(--bds-color-icon-solid-inverse);.icon path{fill:var(--bds-color-icon-solid-inverse);}&:hover,&:hover{box-shadow:inset 0 0 0 1px var(--bds-color-action-interactive-hover),inset 0px 0 0 2px var(--bds-color-icon-solid-inverse);}}&:active,&.active{background-color:var(--bds-color-action-interactive-pressed);border-color:var(--bds-color-action-interactive-pressed);.icon path{fill:var(--bds-color-icon-solid-inverse);}}}"]);
exports.FAB = FAB;
var _default = FAB;
exports["default"] = _default;