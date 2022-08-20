"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckboxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CheckboxBase = _interopRequireDefault(require("./CheckboxBase"));

var _CheckboxOff = _interopRequireDefault(require("./states/CheckboxOff"));

var _CheckboxOn = _interopRequireDefault(require("./states/CheckboxOn"));

var CheckboxWrapper = _styledComponents["default"].span.withConfig({
  displayName: "CheckboxWrapper",
  componentId: "sc-j2pgcr-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], _CheckboxBase["default"], _CheckboxOff["default"], _CheckboxOn["default"]);

exports.CheckboxWrapper = CheckboxWrapper;
var _default = CheckboxWrapper;
exports["default"] = _default;