"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabContentWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var TabContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TabContentWrapper",
  componentId: "sc-1ai7ipp-0"
})(["display:none;padding:0;&.selected{display:block;}@media only screen and (min-width:var(--bds-grid-breakpoint-md-max)){padding-top:var(--bds-sizes-size-16);}"]);

exports.TabContentWrapper = TabContentWrapper;
var _default = TabContentWrapper;
exports["default"] = _default;