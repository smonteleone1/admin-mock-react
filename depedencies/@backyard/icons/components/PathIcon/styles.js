"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledSVG = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledSVG = _styledComponents["default"].svg.withConfig({
  displayName: "styles__StyledSVG",
  componentId: "sc-1houmlx-0"
})(["width:var(--style-icon-width);height:var(--style-icon-height);&:not(.color-override){g,path{fill:var(--style-icon-color);&[stroke-width]{stroke:var(--style-icon-color);fill:none;*{fill:none;}}}}&.start{margin-right:var(--bds-sizes-size-8);}&.end{margin-left:var(--bds-sizes-size-8);}"]);

exports.StyledSVG = StyledSVG;
var _default = StyledSVG;
exports["default"] = _default;