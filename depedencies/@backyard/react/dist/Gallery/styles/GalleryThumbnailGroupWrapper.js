"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryThumbnailGroupWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var GalleryThumbnailGroupWrapper = _styledComponents["default"].div.withConfig({
  displayName: "GalleryThumbnailGroupWrapper",
  componentId: "sc-crifkl-0"
})(["&&&&{display:flex;justify-content:center;margin-left:var(--bds-sizes-size-16);.gallery-thumbnail-group{display:flex;&.mobile{justify-content:center;}&.desktop{justify-content:flex-start;}width:100%;margin:0;.gallery-thumbnail{margin:0;padding-top:var(--bds-sizes-size-16);padding-left:var(--bds-sizes-size-4);padding-right:var(--bds-sizes-size-4);}&.mobile .gallery-thumbnail{padding-top:var(--bds-sizes-size-24);}}}"]);

exports.GalleryThumbnailGroupWrapper = GalleryThumbnailGroupWrapper;
var _default = GalleryThumbnailGroupWrapper;
exports["default"] = _default;