"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SliderInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SliderInputWrapper",
  componentId: "sc-1350vsk-0"
})(["&.slider-input{background:red;&--visible{width:48px;padding:14px 0px;}}&.slider-input--hidden.slider-input--hidden{display:none;}"]);

var _default = SliderInputWrapper;
exports["default"] = _default;