"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _BaseRadio = _interopRequireDefault(require("./BaseRadio"));

var _RadioOff = _interopRequireDefault(require("./states/RadioOff"));

var _RadioOn = _interopRequireDefault(require("./states/RadioOn"));

var RadioWrapper = _styledComponents["default"].span.withConfig({
  displayName: "RadioWrapper",
  componentId: "sc-rdx1gv-0"
})(["", " input{&:not(:checked){", "}&:checked{", "}}"], _BaseRadio["default"], _RadioOff["default"], _RadioOn["default"]);

var _default = RadioWrapper;
exports["default"] = _default;