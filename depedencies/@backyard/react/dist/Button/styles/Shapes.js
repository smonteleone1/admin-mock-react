"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Shapes = void 0;

var _styledComponents = require("styled-components");

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{border-radius:var(--bds-border-radius-lg);}&--squared{border-radius:0;}&--circle{border-radius:var(--bds-border-radius-circle);}}"]);
exports.Shapes = Shapes;
var _default = Shapes;
exports["default"] = _default;