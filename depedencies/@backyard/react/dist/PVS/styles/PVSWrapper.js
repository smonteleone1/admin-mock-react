"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PVSWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _SwatchBase = _interopRequireDefault(require("./SwatchBase"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Styles for the basic hover, focus and checked state of the PVS input */
var InputStates = (0, _styledComponents.css)(["&:hover + .radio-indicator,&.hover + .radio-indicator{border-color:var(--bds-color-action-interactive);cursor:pointer;}&:focus + .radio-indicator,&.focus + .radio-indicator{box-shadow:0 0 0 2px var(--bds-color-action-interactive);border:none;outline:none;}&:checked + .radio-indicator{box-shadow:0 0 0 2px var(--bds-color-border-default);border:none;.swatch{border:1px solid var(--bds-color-border-subdued);}}&:checked:focus + .radio-indicator,&:checked.focus + .radio-indicator{border:none;box-shadow:0 0 0 2px var(--bds-color-action-interactive);.swatch{border:1px solid var(--bds-color-border-subdued);}}&:not(:checked) + .radio-indicator{.selected-badge{display:none;}}"]);
/** Styles for states when the `unavailable` attribute is true */

var UnavailableState = (0, _styledComponents.css)(["&.unavailable{.radio-indicator,input:focus + .radio-indicator,input.focus + .radio-indicator{border:1px dashed var(--bds-color-text-disabled);}input:hover + .radio-indicator,input.hover + .radio-indicator{border-color:var(--bds-color-text-disabled);}input:checked + .radio-indicator{border:none;.swatch{border:1px dashed var(--bds-color-text-disabled);}}}"]);
/** Overrides for the PVS radio input */

var RadioOverrides = (0, _styledComponents.css)([".pvs-input{height:100%;width:100%;border-radius:100%;input{border-radius:100%;", "}.radio-indicator{height:100%;width:100%;border-radius:100%;border:1px solid var(--bds-color-text-disabled);display:flex;position:relative;justify-content:center;align-items:center;&:before,&:after{visibility:hidden;}", "}", "}"], InputStates, _SwatchBase["default"], UnavailableState);

var PVSWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PVSWrapper",
  componentId: "sc-fbbtui-0"
})(["height:var(--bds-sizes-size-40);width:var(--bds-sizes-size-40);", ""], RadioOverrides);

exports.PVSWrapper = PVSWrapper;
var _default = PVSWrapper;
exports["default"] = _default;