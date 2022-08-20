"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuItemBase = void 0;

var _styledComponents = require("styled-components");

var MenuItemBase = (0, _styledComponents.css)(["position:relative;display:flex;justify-content:stretch;&&& > .button{width:100%;padding-left:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-16);z-index:1;.label{justify-content:flex-start;font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);.list-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}.menu-item-icon-before{margin-right:var(--bds-sizes-size-8);width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}.menu-item-icon-after{position:absolute;right:var(--bds-sizes-size-16);}&.selected{z-index:0;}}"]);
exports.MenuItemBase = MenuItemBase;
var _default = MenuItemBase;
exports["default"] = _default;