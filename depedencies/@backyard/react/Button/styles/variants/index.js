"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Variants = void 0;

var _styledComponents = require("styled-components");

var _Primary = _interopRequireDefault(require("./Primary"));

var _Secondary = _interopRequireDefault(require("./Secondary"));

var _Teritary = _interopRequireDefault(require("./Teritary"));

var _Ghost = _interopRequireDefault(require("./Ghost"));

var _Inverse = _interopRequireDefault(require("./Inverse"));

var Variants = (0, _styledComponents.css)(["&.variant{&--primary{", "}&--secondary{", "}&--tertiary{", "}&--ghost{", "}&--inverse{", "}}"], _Primary["default"], _Secondary["default"], _Teritary["default"], _Ghost["default"], _Inverse["default"]);
exports.Variants = Variants;
var _default = Variants;
exports["default"] = _default;