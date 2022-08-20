"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuBase = void 0;

var _styledComponents = require("styled-components");

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);li > button{border-radius:0;}li:first-of-type > button{border-top-left-radius:var(--bds-border-radius-lg);border-top-right-radius:var(--bds-border-radius-lg);border-bottom-left-radius:0;border-bottom-right-radius:0;}li:last-of-type > button{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--bds-border-radius-lg);border-bottom-right-radius:var(--bds-border-radius-lg);}}&--squared{border-radius:0;li > button{border-radius:0;}}}"]);
var MenuBase = (0, _styledComponents.css)(["box-sizing:border-box;display:flex;flex-direction:column;justify-content:stretch;", " width:var(--style-menu-width);height:var(--style-menu-height);& > ul{list-style:none;padding:0;margin:0;}"], Shapes);
exports.MenuBase = MenuBase;
var _default = MenuBase;
exports["default"] = _default;