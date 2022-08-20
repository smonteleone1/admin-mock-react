"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GalleryThumbnailWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}}"]);

var GalleryThumbnailWrapper = _styledComponents["default"].div.withConfig({
  displayName: "GalleryThumbnailWrapper",
  componentId: "sc-2lpjbq-0"
})(["position:relative;", " &&&{img{width:100%;height:100%;}button{position:relative;}&.image button,&.excess button{padding:var(--bds-sizes-size-4);height:var(--bds-sizes-size-72);width:var(--bds-sizes-size-72);background-color:var(--bds-color-surface-default);border:var(--bds-sizes-size-1) solid var(--bds-color-border-default);.label{width:100%;height:100%;}&:hover,&.hover{border:var(--bds-sizes-size-1) solid var(--bds-color-border-hover);}&:active,&.active,&.selected{border:var(--bds-sizes-size-1) solid var(--bds-color-border-pressed);}&:focus,&.focus{box-shadow:0px 0 0 2px var(--bds-color-border-subdued);}}&&&.image.selected button,&&&.excess.selected button{border:var(--bds-sizes-size-1) solid var(--bds-color-border-interactive);}&&&.excess button .typography.excess-custom{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}&&&.dot.selected button{svg path{fill:var(--bds-color-action-interactive);}&:focus,&.focus{svg path{stroke:var(--bds-color-border-subdued);stroke-width:var(--bds-sizes-size-2);}}}&.dot button{background:transparent;border:none;padding:0;svg path{fill:var(--bds-color-border-subdued);}&.selected{svg path{fill:var(--bds-color-action-interactive);}&:focus,&.focus{svg path{stroke:var(--bds-color-border-subdued);stroke-width:var(--bds-sizes-size-2);}}}&:focus,&.focus{box-shadow:none;svg path{stroke:var(--bds-color-border-subdued);stroke-width:var(--bds-sizes-size-2);}}&:hover:not(.selected),&.hover{svg path{fill:var(--bds-color-action-neutral-subdued-hover);}}&.size{&--medium{.label{height:var(--bds-sizes-size-16);}svg{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);min-width:var(--bds-sizes-size-16);min-height:var(--bds-sizes-size-16);}}&--small{.label{height:var(--bds-sizes-size-12);}svg{width:var(--bds-sizes-size-12);height:var(--bds-sizes-size-12);min-width:var(--bds-sizes-size-12);min-height:var(--bds-sizes-size-12);}}}}}"], Shapes);

exports.GalleryThumbnailWrapper = GalleryThumbnailWrapper;
var _default = GalleryThumbnailWrapper;
exports["default"] = _default;