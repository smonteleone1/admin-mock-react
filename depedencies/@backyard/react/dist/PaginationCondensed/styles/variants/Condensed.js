"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Condensed = void 0;

var _styledComponents = require("styled-components");

var Condensed = (0, _styledComponents.css)(["& > ul{& > li{padding:0 var(--bds-sizes-size-8);&.pagination-select{padding-right:0;}&:first-child,&:last-child{padding:0;}}}"]);
exports.Condensed = Condensed;
var _default = Condensed;
exports["default"] = _default;