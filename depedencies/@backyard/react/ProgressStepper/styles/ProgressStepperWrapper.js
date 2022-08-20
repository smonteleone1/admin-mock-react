"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepperWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ProgressStepperBase = _interopRequireDefault(require("./ProgressStepperBase"));

var ProgressStepperWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ProgressStepperWrapper",
  componentId: "sc-5llt25-0"
})(["", ""], _ProgressStepperBase["default"]);

exports.ProgressStepperWrapper = ProgressStepperWrapper;
var _default = ProgressStepperWrapper;
exports["default"] = _default;