"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DrawerBase = void 0;

var _styledComponents = require("styled-components");

var Orientation = (0, _styledComponents.css)(["&&.orientation{&--vertical{height:100%;max-height:100%;max-width:100%;&.size{&--large{width:31.3125rem;}&--medium{width:28.25rem;}&--small{width:23.4375rem;}}}&--horizontal{width:100%;max-height:100%;max-width:100%;}}"]);
var DrawerBase = (0, _styledComponents.css)(["&{", "}"], Orientation);
exports.DrawerBase = DrawerBase;
var _default = DrawerBase;
exports["default"] = _default;