"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaginationCondensedWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PaginationCondensedBase = _interopRequireDefault(require("./PaginationCondensedBase"));

var _Condensed = _interopRequireDefault(require("./variants/Condensed"));

var PaginationCondensedWrapper = _styledComponents["default"].nav.withConfig({
  displayName: "PaginationCondensedWrapper",
  componentId: "sc-1n9b8lo-0"
})(["", " &.variant{&--condensed{", "}}"], _PaginationCondensedBase["default"], _Condensed["default"]);

exports.PaginationCondensedWrapper = PaginationCondensedWrapper;
var _default = PaginationCondensedWrapper;
exports["default"] = _default;