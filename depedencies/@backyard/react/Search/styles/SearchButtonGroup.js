"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SearchButtonGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SearchButtonGroup = _styledComponents["default"].div.withConfig({
  displayName: "SearchButtonGroup",
  componentId: "sc-1mdgatl-0"
})(["display:flex;flex-direction:row;list-style:none;padding:0;margin:0;align-items:center;.button .btn-label .icon.icon-search-icon,.button .btn-label .icon.icon-close{path{fill:var(--bds-color-icon-tertiary);}}.divider{height:32px;border-style:solid;border-width:1px;border-color:var(--bds-color-border-subdued);margin:0 2px;}&.size--small{.divider{height:24px;}}&.size--jumbo{.divider{height:40px;}}"]);

exports.SearchButtonGroup = SearchButtonGroup;
var _default = SearchButtonGroup;
exports["default"] = _default;