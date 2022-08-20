"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimePickerNativeSkeleton = void 0;

var _DatePickerSkeleton = _interopRequireDefault(require("../../DatePicker/DatePickerSkeleton"));

// Alias DatePicker Skeleton
var TimePickerNativeSkeleton = _DatePickerSkeleton["default"];
exports.TimePickerNativeSkeleton = TimePickerNativeSkeleton;
TimePickerNativeSkeleton.bdsName = 'TimePickerNativeSkeleton';
var _default = TimePickerNativeSkeleton;
exports["default"] = _default;