"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LinkBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Sizes = (0, _styledComponents.css)(["&.size{&--small{.link-label{font-size:var(--bds-sizes-size-12);line-height:var(--bds-sizes-size-16);}.link-start-icon,.link-end-icon{width:var(--bds-sizes-size-12);height:var(--bds-sizes-size-12);}@media only screen and (min-width:82rem){&&{.link-label{font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);}.link-start-icon,.link-end-icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}}}}&--medium{.link-label{font-size:var(--bds-sizes-size-14);line-height:var(--bds-sizes-size-24);}.link-start-icon,.link-end-icon{width:var(--bds-sizes-size-14);height:var(--bds-sizes-size-14);}@media only screen and (min-width:82rem){&&{.link-label{font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}.link-start-icon,.link-end-icon{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}}}}"]);
var BrowserCSS = (0, _styledComponents.css)(["&&&{outline:none;vertical-align:bottom;white-space:nowrap;&::-moz-focus-inner{border:0;}}"]);
var Shared = (0, _styledComponents.css)(["text-decoration:var(--bds-link-style-underline);&:hover{text-decoration:underline;}&:focus{text-decoration:underline;}"]);
/** Default Base Link Styles */

var LinkBase = _styledComponents["default"].a.withConfig({
  displayName: "LinkBase",
  componentId: "sc-2ngoxx-0"
})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease-in-out;.link-label{display:inherit;align-items:center;justify-content:center;width:100%;font-family:var(--bds-link-style-font-family);font-weight:var(--bds-font-weight-regular);&.bold,b,bold,strong{font-family:var(--bds-link-style-font-family);font-weight:var(--bds-link-style-font-weight);}.link-start-icon,.link-end-icon{display:flex;}.link-start-icon{margin-right:var(--bds-sizes-size-8);}.link-end-icon{margin-left:var(--bds-sizes-size-8);}}&,&:visited,&:hover,&:active{color:var(--bds-link-style-color);text-decoration-color:var(--bds-link-style-color);.icon path,.link-start-icon path,.link-end-icon path{fill:var(--bds-link-style-color);}}", " ", " ", ""], Sizes, Shared, BrowserCSS);

exports.LinkBase = LinkBase;
var _default = LinkBase;
exports["default"] = _default;