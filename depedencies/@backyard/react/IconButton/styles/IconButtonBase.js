"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconButtonBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Button = _interopRequireDefault(require("../../Button"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Sizes = (0, _styledComponents.css)(["&.size{&--extra_small{min-width:var(--bds-sizes-size-32);min-height:var(--bds-sizes-size-32);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}}}&--small{min-width:var(--bds-sizes-size-40);min-height:var(--bds-sizes-size-40);padding:var(--bds-sizes-size-8);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}}&--medium{min-width:var(--bds-sizes-size-48);min-height:var(--bds-sizes-size-48);padding:var(--bds-sizes-size-12);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-20);height:var(--bds-sizes-size-20);}}}&--large{min-width:var(--bds-sizes-size-56);min-height:var(--bds-sizes-size-56);padding:var(--bds-sizes-size-16);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-24);height:var(--bds-sizes-size-24);}}}&--jumbo{min-width:var(--bds-sizes-size-96);min-height:var(--bds-sizes-size-96);padding:var(--bds-sizes-size-32);.btn-label{& > .btn-start-icon,& > .btn-end-icon,& > .icon{width:var(--bds-sizes-size-48);height:var(--bds-sizes-size-48);}}}}"]);
/** Default Base Button Styles */

var IconButtonBase = (0, _styledComponents["default"])(_Button["default"]).withConfig({
  displayName: "IconButtonBase",
  componentId: "sc-y8g6tj-0"
})(["", ""], Sizes);
exports.IconButtonBase = IconButtonBase;
var _default = IconButtonBase;
exports["default"] = _default;