"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollbarTrackWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ScrollbarTrackWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ScrollbarTrackWrapper",
  componentId: "sc-j3ba3d-0"
})(["position:relative;background:var(--bds-color-surface-subdued);height:4px;order:10;width:100%;border-radius:var(--bds-border-radius-circle);"]);

exports.ScrollbarTrackWrapper = ScrollbarTrackWrapper;
var _default = ScrollbarTrackWrapper;
exports["default"] = _default;