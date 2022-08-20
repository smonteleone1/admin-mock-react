"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleButtonBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _IconButtonBase = require("../../IconButton/styles/IconButtonBase");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Unselected = (0, _styledComponents.css)(["border-color:transparent;border-radius:var(--bds-border-radius-md);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}&:enabled,&.enabled{background-color:transparent;}&:hover,&.hover{background-color:var(--bds-color-action-neutral-hover);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}}&:focus,&.focus{box-shadow:0px 0 0 2px var(--bds-color-border-default);}&:active,&:focus:active,&.active{background-color:var(--bds-color-action-neutral-pressed);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}}&:disabled,&.disabled{background-color:transparent;border-color:transparent;.btn-label{color:var(--bds-color-text-disabled);}.btn-label > .icon path{fill:var(--bds-color-icon-disabled);}}"]);
var Selected = (0, _styledComponents.css)(["border-color:transparent;border-radius:var(--bds-border-radius-md);.btn-label{color:var(--bds-color-text-primary);}.btn-label > .icon path{fill:var(--bds-color-icon-primary);}&:enabled,&.enabled{background-color:var(--bds-color-neutral-03);}&:hover,&.hover{background-color:var(--bds-color-neutral-04);}&:focus,&.focus{box-shadow:0px 0 0 2px var(--bds-color-border-default);}&:active,&:focus:active,&.active{background-color:var(--bds-color-neutral-05);}"]);
var ToggleButtonBase = (0, _styledComponents["default"])(_IconButtonBase.IconButtonBase).withConfig({
  displayName: "ToggleButtonBase",
  componentId: "sc-16kri5-0"
})(["&&&{&.state{&--unselected{", "}&--selected{", "}}}"], Unselected, Selected);
exports.ToggleButtonBase = ToggleButtonBase;
var _default = ToggleButtonBase;
exports["default"] = _default;