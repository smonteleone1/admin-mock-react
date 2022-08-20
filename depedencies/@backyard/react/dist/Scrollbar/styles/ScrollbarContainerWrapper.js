"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollbarContainerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ScrollbarContainerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ScrollbarContainerWrapper",
  componentId: "sc-hztx12-0"
})(["width:100%;padding-top:var(--bds-sizes-size-4);padding-bottom:var(--bds-sizes-size-4);:hover{cursor:pointer;}&.hide-scrollbar{display:none;}"]);

exports.ScrollbarContainerWrapper = ScrollbarContainerWrapper;
var _default = ScrollbarContainerWrapper;
exports["default"] = _default;