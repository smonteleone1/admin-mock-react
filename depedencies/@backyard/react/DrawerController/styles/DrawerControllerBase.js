"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DrawerControllerBase = void 0;

var _styledComponents = require("styled-components");

var Anchors = (0, _styledComponents.css)(["&.anchor{&--left{.drawer{border-top-left-radius:0;border-bottom-left-radius:0;}}&--right{.drawer{border-top-right-radius:0;border-bottom-right-radius:0;}}&--top{.drawer{border-top-left-radius:0;border-top-right-radius:0;}}&--bottom{.drawer{border-bottom-left-radius:0;border-bottom-right-radius:0;}}}"]);
var DrawerControllerBase = (0, _styledComponents.css)(["", ""], Anchors);
exports.DrawerControllerBase = DrawerControllerBase;
var _default = DrawerControllerBase;
exports["default"] = _default;