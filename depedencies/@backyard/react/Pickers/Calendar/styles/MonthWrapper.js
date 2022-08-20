"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MonthWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var MonthWrapper = _styledComponents["default"].div.withConfig({
  displayName: "MonthWrapper",
  componentId: "sc-pzm1ar-0"
})([".month-header{display:flex;justify-content:space-evenly;margin-bottom:var(--bds-sizes-size-4);h6{margin:0;}.month-label{display:inline-flex;justify-content:center;width:var(--bds-sizes-size-32);margin:0 var(--bds-sizes-size-5);}.month-label:first-child{margin-left:0;}.month-label:last-child{margin-right:0;}}.week{display:flex;justify-content:space-evenly;margin:var(--bds-sizes-size-6) 0;.day:first-child{margin-left:0;}.day:last-child{margin-right:0;}}.day{padding:var(--bds-sizes-size-5);margin:0 var(--bds-sizes-size-4);.label{height:var(--bds-sizes-size-20);width:var(--bds-sizes-size-20);font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-14);}}&&& .day-outside-month:not(.selected){.label{color:var(--bds-color-text-disabled);}}"]);

exports.MonthWrapper = MonthWrapper;
var _default = MonthWrapper;
exports["default"] = _default;