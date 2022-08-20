"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReadOnly = void 0;

var _styledComponents = require("styled-components");

var ReadOnly = (0, _styledComponents.css)([".rating-icon{&.filled{path{fill:var(--bds-color-surface-gold);}}&.empty{path{fill:var(--bds-color-surface-gold);}}}.rating-count{color:var(--bds-color-text-interactive);}"]);
exports.ReadOnly = ReadOnly;
var _default = ReadOnly;
exports["default"] = _default;