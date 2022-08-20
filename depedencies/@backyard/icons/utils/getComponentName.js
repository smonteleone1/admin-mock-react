"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

function getComponentName(destPath) {
  var splitregex = new RegExp("[\\".concat(_path["default"].sep, "-]+"));
  var parts = destPath.replace('.js', '').split(splitregex).map(function (part) {
    return part.charAt(0).toUpperCase() + part.substring(1);
  });
  return parts.join('');
}

var _default = getComponentName;
exports["default"] = _default;