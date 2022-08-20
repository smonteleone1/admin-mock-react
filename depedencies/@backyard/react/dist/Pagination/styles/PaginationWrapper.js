"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PillWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PaginationBase = _interopRequireDefault(require("./PaginationBase"));

var _Numbered = _interopRequireDefault(require("./variants/Numbered"));

var _Dotted = _interopRequireDefault(require("./variants/Dotted"));

var PillWrapper = _styledComponents["default"].nav.withConfig({
  displayName: "PaginationWrapper__PillWrapper",
  componentId: "sc-1mx0qk9-0"
})(["", " &.variant{&--numbered{", "}&--dotted{", "}}"], _PaginationBase["default"], _Numbered["default"], _Dotted["default"]);

exports.PillWrapper = PillWrapper;
var _default = PillWrapper;
exports["default"] = _default;