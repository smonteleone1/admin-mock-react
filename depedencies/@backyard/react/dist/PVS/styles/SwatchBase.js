"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwatchBase = void 0;

var _styledComponents = require("styled-components");

var Badge = (0, _styledComponents.css)(["svg{position:absolute;bottom:-0.25rem;right:-0.25rem;border:1px solid var(--bds-color-surface-default);border-radius:100%;background-color:var(--bds-color-surface-default);}"]);
var SwatchBase = (0, _styledComponents.css)([".swatch{width:var(--bds-sizes-size-36);height:var(--bds-sizes-size-36);border-radius:100%;border:none;img{width:100%;height:100%;object-fit:cover;border-radius:100%;display:block;}", "}"], Badge);
exports.SwatchBase = SwatchBase;
var _default = SwatchBase;
exports["default"] = _default;