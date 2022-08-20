"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var GalleryWrapper = _styledComponents["default"].div.withConfig({
  displayName: "GalleryWrapper",
  componentId: "sc-2ykn4h-0"
})([".gallery-viewport{margin-left:var(--bds-sizes-size-8);margin-right:var(--bds-sizes-size-8);}"]);

exports.GalleryWrapper = GalleryWrapper;
var _default = GalleryWrapper;
exports["default"] = _default;