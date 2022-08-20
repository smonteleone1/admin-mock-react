"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverlayBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var OverlayBase = _styledComponents["default"].div.withConfig({
  displayName: "OverlayBase",
  componentId: "sc-1pri68q-0"
})(["z-index:var(--bds-zIndex-overlay);position:fixed;right:0;bottom:0;top:0;left:0;background-color:var(--bds-color-overlay);-webkit-tap-highlight-color:transparent;&.invisible{background-color:transparent;}"]);

exports.OverlayBase = OverlayBase;
var _default = OverlayBase;
exports["default"] = _default;