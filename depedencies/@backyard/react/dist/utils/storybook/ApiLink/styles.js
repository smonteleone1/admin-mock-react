"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Wrapper = _styledComponents["default"].span.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-rycoek-0"
})(["display:inline-flex;align-items:center;justify-content:center;padding:4px 12px;background-color:var(--bds-color-surface-subdued);position:absolute;right:var(--bds-sizes-size-8);top:var(--bds-sizes-size-8);border-radius:var(--bds-border-radius-circle);"]);

exports.Wrapper = Wrapper;
var _default = Wrapper;
exports["default"] = _default;