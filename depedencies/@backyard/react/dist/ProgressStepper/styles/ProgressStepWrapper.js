"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ProgressStepBase = _interopRequireDefault(require("./ProgressStepBase"));

var ProgressStepWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ProgressStepWrapper",
  componentId: "sc-1ljc2d8-0"
})(["", ""], _ProgressStepBase["default"]);

exports.ProgressStepWrapper = ProgressStepWrapper;
var _default = ProgressStepWrapper;
exports["default"] = _default;