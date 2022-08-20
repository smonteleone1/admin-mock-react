"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatePickerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var DatePickerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DatePickerWrapper",
  componentId: "sc-1uwxgw6-0"
})(["&.interaction--completed.completed{label{top:-12px;left:16px;font-size:var(--bds-sizes-size-14);&.size--small{top:-12px;left:16px;font-size:var(--bds-sizes-size-12);}&.size--large{top:-12px;}&.size--jumbo{font-size:var(--bds-sizes-size-20);top:-12px;}}}"]);

exports.DatePickerWrapper = DatePickerWrapper;
var _default = DatePickerWrapper;
exports["default"] = _default;