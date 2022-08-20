"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Dotted = void 0;

var _styledComponents = require("styled-components");

var Dotted = (0, _styledComponents.css)(["&&& > ul{& > li{display:flex;align-items:center;padding:", ";&:first-child{padding-left:0;}&:last-child{padding-right:0;}}.button{background:transparent;border:none;padding:0;svg path{fill:", ";}&.selected{svg path{fill:", ";}&:focus,&.focus{svg path{stroke:", ";stroke-width:", ";}}}&:focus,&.focus{box-shadow:none;svg path{stroke:", ";stroke-width:", ";}}&:hover:not(.selected),&.hover{svg path{fill:", ";}}&.size{&--medium{.label{height:", ";}svg{width:", ";height:", ";min-width:", ";min-height:", ";}}&--small{.label{height:", ";}svg{width:", ";height:", ";min-width:", ";min-height:", ";}}}}}"], function (_ref) {
  var theme = _ref.theme;
  return "0 ".concat(theme.sizes.size_4);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.border_subdued;
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return theme.color["".concat(color, "_01")] || theme.color[color];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.color.border_subdued;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.sizes.size_2;
}, function (_ref6) {
  var theme = _ref6.theme,
      color = _ref6.color;
  return theme.color["".concat(color, "_01")] || theme.color[color];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.sizes.size_2;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.border_default;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.sizes.size_16;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.sizes.size_16;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.sizes.size_16;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.sizes.size_16;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.sizes.size_16;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.sizes.size_12;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.sizes.size_12;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.sizes.size_12;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.sizes.size_12;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.sizes.size_12;
});
exports.Dotted = Dotted;
var _default = Dotted;
exports["default"] = _default;