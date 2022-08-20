"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BreadcrumbMobileBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var BreadcrumbMobileBase = _styledComponents["default"].nav.withConfig({
  displayName: "BreadcrumbMobileBase",
  componentId: "sc-pai73i-0"
})(["display:inline-flex;flex-direction:row;align-items:center;& > .crumb-current{margin-left:var(--bds-sizes-size-8);}.crumb{border:none;.label > .menu-item-label{font-weight:var(--bds-font-weight-medium);}}"]);

exports.BreadcrumbMobileBase = BreadcrumbMobileBase;
var _default = BreadcrumbMobileBase;
exports["default"] = _default;