"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AccordionWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AccordionBase = _interopRequireDefault(require("./AccordionBase"));

var AccordionWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionWrapper",
  componentId: "sc-pnamy6-0"
})(["", ""], _AccordionBase["default"]);

exports.AccordionWrapper = AccordionWrapper;
var _default = AccordionWrapper;
exports["default"] = _default;