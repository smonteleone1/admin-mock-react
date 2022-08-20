"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BreadcrumbDesktopBase = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var BreadcrumbDesktopBase = _styledComponents["default"].nav.withConfig({
  displayName: "BreadcrumbDesktopBase",
  componentId: "sc-e8flgh-0"
})(["display:inline-flex;flex-direction:row;align-items:flex-end;ol{margin:0;padding-left:0;list-style:none;display:inline-flex;flex-direction:row;align-items:center;}li{display:inline-flex;flex-direction:row;align-items:center;}li + li::before{display:inline-flex;flex-direction:row;align-items:center;margin:0 0.5rem;transform:rotate(15deg);border-right:0.1rem solid var(--bds-color-text-primary);height:0.8rem;content:'';}a{text-decoration:none;}[aria-current='page']{text-decoration:none;}"]);

exports.BreadcrumbDesktopBase = BreadcrumbDesktopBase;
var _default = BreadcrumbDesktopBase;
exports["default"] = _default;