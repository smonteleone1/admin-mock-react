"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollbarKnobWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ScrollbarKnobWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ScrollbarKnobWrapper",
  componentId: "sc-g9uc4a-0"
})(["position:absolute;left:0;width:10%;height:var(--bds-sizes-size-4);background-color:var(--bds-color-action-interactive);border-radius:var(--bds-border-radius-circle);-webkit-transition:top 0.08s;-moz-transition:top 0.08s;-ms-transition:top 0.08s;-o-transition:top 0.08s;transition:top 0.08s;&:hover{background-color:var(--bds-color-action-interactive-hover);}&:hover,&:focus,&:active{margin-top:-0.0625rem;height:var(--bds-sizes-size-6);}"]);

exports.ScrollbarKnobWrapper = ScrollbarKnobWrapper;
var _default = ScrollbarKnobWrapper;
exports["default"] = _default;