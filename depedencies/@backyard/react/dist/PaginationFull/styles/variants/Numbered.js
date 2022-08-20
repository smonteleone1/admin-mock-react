"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Numbered = void 0;

var _styledComponents = require("styled-components");

var Numbered = (0, _styledComponents.css)(["& > ul{& > li{padding:0 var(--bds-sizes-size-8);&:first-child,&:last-child{padding:0;}}}"]);
exports.Numbered = Numbered;
var _default = Numbered;
exports["default"] = _default;