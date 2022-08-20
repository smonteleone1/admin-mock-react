"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SwitchBase = _interopRequireDefault(require("./SwitchBase"));

var _SwitchOff = _interopRequireDefault(require("./states/SwitchOff"));

var _SwitchOn = _interopRequireDefault(require("./states/SwitchOn"));

var SwitchWrapper = _styledComponents["default"].span.withConfig({
  displayName: "SwitchWrapper",
  componentId: "sc-1tok1ht-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], _SwitchBase["default"], _SwitchOff["default"], _SwitchOn["default"]);

exports.SwitchWrapper = SwitchWrapper;
var _default = SwitchWrapper;
exports["default"] = _default;