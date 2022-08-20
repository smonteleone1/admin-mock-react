"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimePickerSkeleton = void 0;

var _DatePickerSkeleton = _interopRequireDefault(require("../../DatePicker/DatePickerSkeleton"));

// Alias DatePicker Skeleton
var TimePickerSkeleton = _DatePickerSkeleton["default"];
exports.TimePickerSkeleton = TimePickerSkeleton;
TimePickerSkeleton.bdsName = 'TimePickerSkeleton';
var _default = TimePickerSkeleton;
exports["default"] = _default;