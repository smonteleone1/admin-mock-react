"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Filled = void 0;

var _styledComponents = require("styled-components");

var _lightOrDark = _interopRequireDefault(require("../../../utils/functions/lightOrDark"));

var Filled = (0, _styledComponents.css)(["&.color{&--dark-blue{background-color:var(--bds-color-marketing-dark-blue);border-color:var(--bds-color-marketing-dark-blue);}&--blue{background-color:var(--bds-color-marketing-blue);border-color:var(--bds-color-marketing-blue);}&--light-blue{background-color:var(--bds-color-marketing-light-blue);border-color:var(--bds-color-marketing-light-blue);}&--interactive{background-color:var(--bds-color-marketing-interactive);border-color:var(--bds-color-marketing-interactive);}&--green{background-color:var(--bds-color-action-green);border-color:var(--bds-color-action-green);}&--red{background-color:var(--bds-color-action-red);border-color:var(--bds-color-action-red);}&--gold{background-color:var(--bds-color-marketing-gold);border-color:var(--bds-color-marketing-gold);}&--lfp-yellow{background-color:var(--bds-color-marketing-lfp-yellow);border-color:var(--bds-color-marketing-lfp-yellow);}&--neutral{background-color:", ";border-color:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _lightOrDark["default"])(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)');
});
exports.Filled = Filled;
var _default = Filled;
exports["default"] = _default;