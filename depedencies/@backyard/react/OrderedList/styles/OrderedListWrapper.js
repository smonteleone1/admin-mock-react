"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OrderedListWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var OrderedListWrapper = _styledComponents["default"].ol.withConfig({
  displayName: "OrderedListWrapper",
  componentId: "sc-gs67yf-0"
})(["list-style-type:decimal;color:var(--bds-color-text-primary);padding-left:var(--bds-sizes-size-16);li{font-family:", ";font-weight:var(--bds-font-weight-regular);font-size:var(--bds-sizes-size-16);line-height:var(--bds-sizes-size-24);}& ol ol ol{list-style-type:decimal;}& ol,& ol ol ol ol{padding-left:var(--bds-sizes-size-16);list-style-type:lower-latin;}& ol ol,& ol ol ol ol ol{padding-left:var(--bds-sizes-size-16);list-style-type:lower-roman;}&.density--condensed li{padding-top:var(--bds-sizes-size-4);}&.density--normal li{padding-top:var(--bds-sizes-size-8);}&.density--comfort li{padding-top:var(--bds-sizes-size-12);}"], function (_ref) {
  var theme = _ref.theme;
  return theme.font.family[theme.context.font];
});

exports.OrderedListWrapper = OrderedListWrapper;
var _default = OrderedListWrapper;
exports["default"] = _default;