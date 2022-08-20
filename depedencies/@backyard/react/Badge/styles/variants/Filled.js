"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Filled = void 0;

var _styledComponents = require("styled-components");

var _lightOrDark = require("../../../utils/functions/lightOrDark");

var Filled = (0, _styledComponents.css)(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);}}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);}}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);}}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);}}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);}}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);color:var(--bds-color-text-primary-inverse);&+ .arrow{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);}}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);}}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);color:", ";&+ .arrow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);}}&--neutral{background-color:", ";border-color:", ";color:var(--bds-color-text-primary);&+ .arrow{background-color:", ";border-color:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-text-primary-inverse)', 'var(--bds-color-text-primary)');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
}, function (_ref9) {
  var theme = _ref9.theme;
  return (0, _lightOrDark.lightOrDark)(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
});
exports.Filled = Filled;
var _default = Filled;
exports["default"] = _default;