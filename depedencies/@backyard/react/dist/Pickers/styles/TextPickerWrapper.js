"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextPickerWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EnabledNative = (0, _styledComponents.css)(["input::-webkit-calendar-picker-indicator{opacity:0;cursor:pointer;margin-top:-", ";margin-right:-", ";height:", ";width:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_18;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.sizes.size_40;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.sizes.size_32;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.sizes.size_32;
});
var DisabledNative = (0, _styledComponents.css)(["input::-webkit-calendar-picker-indicator{display:none;}"]);
var BrowserCSS = (0, _styledComponents.css)(["input::-webkit-inner-spin-button,input::-webkit-clear-button,input::-ms-clear{display:none;}input::-moz-placeholder{opacity:1;color:black;}input::-webkit-input-placeholder{opacity:1;color:black;}input:-ms-input-placeholder{opacity:1;color:black;}", ";"], function (_ref5) {
  var disableNative = _ref5.disableNative,
      theme = _ref5.theme;
  return disableNative || theme.isDesktop ? DisabledNative : EnabledNative;
});

var TextPickerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TextPickerWrapper",
  componentId: "sc-1hgtwoq-0"
})(["width:calc(", " * 5);select{height:auto;margin-bottom:", ";}.textinput--wrapper input.incomplete:not(.focus):not(:focus){opacity:0;}.no-interaction{pointer-events:none;}&&&{.icon--after,&.icon--after{display:flex;align-items:center;justify-content:center;z-index:1;.picker-clear-button,&.picker-clear-button{height:", ";width:", ";padding:", ";z-index:1;pointer-events:all;.icon.icon.icon{path{fill:", ";}}}&.picker-clear-button{margin-right:", ";}}}", ""], function (_ref6) {
  var theme = _ref6.theme;
  return theme.sizes.size_60;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.sizes.size_8;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.sizes.size_40;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.sizes.size_40;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.sizes.size_0;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.color.text_tertiary;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.sizes.size_10;
}, BrowserCSS);

exports.TextPickerWrapper = TextPickerWrapper;
var _default = TextPickerWrapper;
exports["default"] = _default;