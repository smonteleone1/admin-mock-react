"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepBase = void 0;

var _styledComponents = require("styled-components");

var ProgressStepColumn = (0, _styledComponents.css)(["flex-direction:row;.progress-step-label{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding-top:var(--bds-sizes-size-20);margin-left:var(--bds-sizes-size-24);.typography{text-align:left;}}.progress-step-connector{position:absolute;top:calc(-50% + var(--bds-sizes-size-16));bottom:calc(50% + var(--bds-sizes-size-24));right:0;.line-column{position:absolute;height:100%;border-left:2px;border-left-style:solid;border-left-color:var(--bds-color-border-subdued);}}.progress-step-connector{left:var(--bds-sizes-size-18);}"]);
var ProgressStepStates = (0, _styledComponents.css)(["&.success,&.complete{& + .progress-step.active,& + .progress-step.complete,& + .progress-step.success{.progress-step-connector{.line-row{border-top-color:var(--bds-color-border-interactive);}.line-column{border-left-color:var(--bds-color-border-interactive);}}}}&.error{.typography{color:var(--bds-color-border-red);}}&.disabled{.typography{color:var(--bds-color-text-disabled);}}"]);
var ProgressStepRow = (0, _styledComponents.css)(["flex-direction:column;.progress-step-label{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:var(--bds-sizes-size-8);.typography{text-align:center;}}.progress-step-connector{position:absolute;left:calc(-50% + var(--bds-sizes-size-8));right:calc(50% + var(--bds-sizes-size-24));top:var(--bds-sizes-size-28);bottom:0;.line-row{position:absolute;width:100%;border-top:2px;border-top-style:solid;border-top-color:var(--bds-color-border-subdued);}}"]);
var ProgressStepBase = (0, _styledComponents.css)(["position:relative;display:flex;justify-content:flex-start;align-items:center;flex:1;padding-top:var(--bds-sizes-size-8);padding-bottom:var(--bds-sizes-size-8);.progress-step-button{.icon.icon.icon{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);}.label{height:var(--bds-sizes-size-20);width:var(--bds-sizes-size-20);}}&.direction--column{", "}&.direction--row{", "}", ""], ProgressStepColumn, ProgressStepRow, ProgressStepStates);
exports.ProgressStepBase = ProgressStepBase;
var _default = ProgressStepBase;
exports["default"] = _default;