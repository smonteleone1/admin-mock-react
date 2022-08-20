"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isParsableDateObject = isParsableDateObject;
exports.isParsableDateRange = isParsableDateRange;

/* eslint-disable import/prefer-default-export */
function isParsableDateObject(value) {
  return value && value.label !== undefined && value.value !== undefined;
}

function isParsableDateRange(value) {
  return value && value.label !== undefined && value.start !== undefined && value.end !== undefined;
}