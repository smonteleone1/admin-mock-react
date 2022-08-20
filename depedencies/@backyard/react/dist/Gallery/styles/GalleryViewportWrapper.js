"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryViewportWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);

var GalleryViewportWrapper = _styledComponents["default"].div.withConfig({
  displayName: "GalleryViewportWrapper",
  componentId: "sc-1eobsa2-0"
})(["position:relative;display:flex;align-items:center;height:var(--style-gallery-viewport-height);width:var(--style-gallery-viewport-width);overflow:hidden;background-color:var(--bds-color-surface-default);border:var(--bds-sizes-size-1) solid var(--bds-color-border-default);", " .viewport{position:absolute;display:flex;justify-content:center;align-items:center;top:0;left:0;right:0;bottom:0;padding:var(--style-gallery-viewport-padding);}img{position:relative;max-width:100%;max-height:100%;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){position:absolute;padding:var(--style-gallery-viewport-padding);transform:translate(-50%,-50%);}}.gallery-list{display:flex;width:100%;height:100%;padding:0;margin:0;transition:1s ease-in-out;.gallery-list-item{position:relative;display:flex;min-width:100%;align-items:center;justify-content:center;}}&&& .viewport-button{position:absolute;z-index:1;top:50%;transform:translateY(-50%);border:none;&.prev{left:var(--bds-sizes-size-16);}&.next{right:var(--bds-sizes-size-16);}}"], Shapes);

exports.GalleryViewportWrapper = GalleryViewportWrapper;
var _default = GalleryViewportWrapper;
exports["default"] = _default;