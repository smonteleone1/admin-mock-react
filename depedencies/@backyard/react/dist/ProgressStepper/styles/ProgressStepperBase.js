"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepperBase = void 0;

var _styledComponents = require("styled-components");

var ProgressStepperBase = (0, _styledComponents.css)(["position:relative;display:flex;min-width:", ";min-height:", ";.progress-stepper{&.direction--row{min-width:", ";}&.direction--column{min-height:", ";}}"], function (_ref) {
  var stretch = _ref.stretch;
  return stretch ? '100%' : 'auto';
}, function (_ref2) {
  var stretch = _ref2.stretch;
  return stretch ? '100%' : 'auto';
}, function (_ref3) {
  var width = _ref3.width;
  return width || '100%';
}, function (_ref4) {
  var height = _ref4.height;
  return height || '100%';
});
exports.ProgressStepperBase = ProgressStepperBase;
var _default = ProgressStepperBase;
exports["default"] = _default;