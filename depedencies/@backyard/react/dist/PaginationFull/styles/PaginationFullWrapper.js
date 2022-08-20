"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationFullWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PaginationBase = _interopRequireDefault(require("./PaginationBase"));

var _Numbered = _interopRequireDefault(require("./variants/Numbered"));

var _Dotted = _interopRequireDefault(require("./variants/Dotted"));

var PaginationFullWrapper = _styledComponents["default"].nav.withConfig({
  displayName: "PaginationFullWrapper",
  componentId: "sc-17xxfy9-0"
})(["", " &.variant{&--numbered{", "}&--dotted{", "}}"], _PaginationBase["default"], _Numbered["default"], _Dotted["default"]);

exports.PaginationFullWrapper = PaginationFullWrapper;
var _default = PaginationFullWrapper;
exports["default"] = _default;