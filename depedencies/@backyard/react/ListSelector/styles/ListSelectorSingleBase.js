"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListBase = void 0;

var _styledComponents = require("styled-components");

var Shapes = (0, _styledComponents.css)(["&.shape{li > button{border-radius:0;}}"]);
var ListBase = (0, _styledComponents.css)(["display:flex;flex-direction:column;justify-content:stretch;width:", ";padding:0;list-style:none;", ""], function (_ref) {
  var theme = _ref.theme,
      width = _ref.width;
  return theme.sizes[width] || width;
}, Shapes);
exports.ListBase = ListBase;
var _default = ListBase;
exports["default"] = _default;