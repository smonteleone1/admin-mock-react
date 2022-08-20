"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollToTopWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ScrollToTopWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ScrollToTopWrapper",
  componentId: "sc-q0trk5-0"
})(["display:block;position:fixed;z-index:var(--bds-zIndex-floating);&.hide{bottom:-3rem !important;}&.animate{transition:bottom ease-in-out 0.2s;}"]);

exports.ScrollToTopWrapper = ScrollToTopWrapper;
var _default = ScrollToTopWrapper;
exports["default"] = _default;