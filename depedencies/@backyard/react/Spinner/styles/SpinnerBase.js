"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SpinnerBase = void 0;

var _styledComponents = require("styled-components");

var spin = (0, _styledComponents.keyframes)(["0%{-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg);}"]);
var SpinnerBase = (0, _styledComponents.css)(["&.inline-spinner{margin-left:var(--bds-sizes-size-8);display:", ";justify-content:center;align-items:center;vertical-align:middle;}.spinner-overlay{display:flex;justify-content:center;align-items:center;.icon-wrapper{background-color:var(--bds-color-text-tertiary);border-radius:100%;padding:var(--bds-sizes-size-32);&.size--small{padding:var(--bds-sizes-size-16);}}svg{display:block;}}&.inline-spinner,.icon-wrapper{svg{height:var(--bds-sizes-size-64);width:var(--bds-sizes-size-64);-webkit-animation:", " 1s linear infinite;-moz-animation:", " 1s linear infinite;animation:", " 1s linear infinite;path{fill:", ";}}&.size--small{svg{height:var(--bds-sizes-size-16);width:var(--bds-sizes-size-16);}}}"], function (_ref) {
  var show = _ref.show;
  return show ? 'inline-flex' : 'none';
}, spin, spin, spin, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.color[color];
});
exports.SpinnerBase = SpinnerBase;
var _default = SpinnerBase;
exports["default"] = _default;