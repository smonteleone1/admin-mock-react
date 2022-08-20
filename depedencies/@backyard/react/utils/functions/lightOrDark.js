"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightOrDark = exports["default"] = void 0;

var lightOrDark = function lightOrDark(theme, light, dark) {
  return theme.name === 'light' ? light : dark;
};

exports.lightOrDark = lightOrDark;
var _default = lightOrDark;
exports["default"] = _default;