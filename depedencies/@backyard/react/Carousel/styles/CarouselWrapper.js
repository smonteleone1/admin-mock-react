"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CarouselWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Scrollbar = _interopRequireDefault(require("../../Scrollbar"));

var _CarouselItemWrapper = _interopRequireDefault(require("../CarouselItem/styles/CarouselItemWrapper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CarouselButtons = (0, _styledComponents.css)([".carousel-button-right,.carousel-button-left{display:none;position:absolute;align-self:center;&.show-button{display:flex;}}.carousel-button-left{left:0;}.carousel-button-right{right:0;}"]);
var CarouselWrapper = (0, _styledComponents["default"])(_Scrollbar["default"]).withConfig({
  displayName: "CarouselWrapper",
  componentId: "sc-fh91tk-0"
})(["display:flex;flex-wrap:wrap;position:relative;min-width:0;padding-top:var(--bds-sizes-size-16);padding-right:var(--bds-sizes-size-20);padding-left:var(--bds-sizes-size-20);.scrollbar-container{padding-top:var(--bds-sizes-size-20);padding-bottom:var(--bds-sizes-size-20);}&.no-scrollbar > .scrollbar-container{display:none;}.content-container{display:flex;flex-direction:row;min-width:0;", "{&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;}}", "}"], _CarouselItemWrapper["default"], CarouselButtons);
exports.CarouselWrapper = CarouselWrapper;
var _default = CarouselWrapper;
exports["default"] = _default;