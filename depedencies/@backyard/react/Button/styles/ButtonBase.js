"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _variants = _interopRequireDefault(require("./variants"));

var _Sizes = _interopRequireDefault(require("./Sizes"));

var _Shapes = _interopRequireDefault(require("./Shapes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shared = (0, _styledComponents.css)(["&.disabled{cursor:not-allowed;&:active{pointer-events:none;}}"]);
var BrowserCSS = (0, _styledComponents.css)(["&&&{outline:none;vertical-align:bottom;height:auto;&::-moz-focus-inner{border:0;}}"]);

var ButtonBase = _styledComponents["default"].button.withConfig({
  displayName: "ButtonBase",
  componentId: "sc-1ngvxvr-0"
})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-sizing:border-box;transition:all 0.2s ease-in-out;border-style:solid;border-width:var(--bds-border-width-sm);height:100%;.btn-label{display:inherit;align-items:center;justify-content:center;width:100%;letter-spacing:.015rem;font-family:", ";font-weight:", "}.btn-label > .btn-start-icon{margin-right:var(--bds-sizes-size-8);}.btn-label > .btn-end-icon{margin-left:var(--bds-sizes-size-8);svg{width:var(--bds-sizes-size-16);height:var(--bds-sizes-size-16);}}.btn-label > .btn-start-icon,.btn-label > .btn-end-icon,.btn-label > .icon{display:flex;}&.full-width{width:100%;padding:var(--bds-sizes-size-12) var(--bds-sizes-size-32);}&.elevation{box-shadow:var(--bds-shadows-shadow-03);}", " ", " ", " ", " ", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold;
}, _variants["default"], _Shapes["default"], _Sizes["default"], Shared, BrowserCSS);

exports.ButtonBase = ButtonBase;
var _default = ButtonBase;
exports["default"] = _default;