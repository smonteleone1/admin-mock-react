"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListSelectorMultipleWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Toggle = _interopRequireDefault(require("../../Toggle"));

var _ListSelectorMultipleBase = _interopRequireDefault(require("./ListSelectorMultipleBase"));

var ListSelectorMultipleWrapper = (0, _styledComponents["default"])(_Toggle["default"]).withConfig({
  displayName: "ListSelectorMultipleWrapper",
  componentId: "sc-jio1p-0"
})(["", ""], _ListSelectorMultipleBase["default"]);
exports.ListSelectorMultipleWrapper = ListSelectorMultipleWrapper;
var _default = ListSelectorMultipleWrapper;
exports["default"] = _default;