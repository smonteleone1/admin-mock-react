"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Outlined = void 0;

var _styledComponents = require("styled-components");

var _lightOrDark = _interopRequireDefault(require("../../../utils/functions/lightOrDark"));

var Outlined = (0, _styledComponents.css)(["&.variant{&--outlined{&.shape{&--dot{visibility:hidden;}}}}&.color{&--dark-blue{background-color:transparent;border-color:var(--bds-color-marketing-dark-blue);color:", ";}&--blue{background-color:transparent;border-color:var(--bds-color-marketing-blue);color:var(--bds-color-text-primary);}&--light-blue{background-color:transparent;border-color:var(--bds-color-marketing-light-blue);color:var(--bds-color-text-primary);}&--interactive{background-color:transparent;border-color:var(--bds-color-marketing-interactive);color:var(--bds-color-text-interactive);}&--green{background-color:transparent;border-color:var(--bds-color-action-green);color:var(--bds-color-text-green);}&--red{background-color:transparent;border-color:var(--bds-color-action-red);color:var(--bds-color-text-red);}&--gold{background-color:transparent;border-color:var(--bds-color-marketing-gold);color:var(--bds-color-text-primary);}&--lfp-yellow{background-color:transparent;border-color:var(--bds-color-marketing-lfp-yellow);color:var(--bds-color-text-primary);}&--neutral{background-color:transparent;border-color:", ";color:var(--bds-color-text-primary);}}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-marketing-dark-blue)', 'var(--bds-color-text-primary)');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
});
exports.Outlined = Outlined;
var _default = Outlined;
exports["default"] = _default;