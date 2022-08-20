"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Filled = void 0;

var _styledComponents = require("styled-components");

var _lightOrDark = _interopRequireDefault(require("../../../utils/functions/lightOrDark"));

var Filled = (0, _styledComponents.css)(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);color:", ";}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);color:", ";}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);color:", ";}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-primary-inverse);}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);color:var(--bds-color-text-primary-inverse);}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);color:var(--bds-color-text-primary-inverse);}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);color:", ";}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);color:", ";}&--neutral{background-color:", ";border-color:", ";color:var(--bds-color-text-primary);}}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-text-primary-inverse)', 'var(--bds-color-text-primary)');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref4) {
  var theme = _ref4.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)');
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
}, function (_ref7) {
  var theme = _ref7.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
});
exports.Filled = Filled;
var _default = Filled;
exports["default"] = _default;