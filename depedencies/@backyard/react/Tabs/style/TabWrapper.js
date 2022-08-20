"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Focused = (0, _styledComponents.css)(["&:focus,&.focus{outline:none;z-index:1;box-shadow:0 0 0 var(--bds-sizes-size-1) var(--bds-color-action-interactive);}"]);

var TabWrapper = _styledComponents["default"].button.withConfig({
  displayName: "TabWrapper",
  componentId: "sc-104mwhi-0"
})(["&.tab{display:flex;justify-content:center;align-items:center;white-space:nowrap;width:100%;height:var(--bds-sizes-size-40);outline:none;text-decoration:none;padding:0 var(--bds-sizes-size-20);margin:0;border-radius:0;border:none;border-bottom:1px solid var(--bds-color-border-subdued);background-color:transparent;cursor:pointer;&:hover:not(.selected):not(.disabled),&.hover:not(.selected):not(.disabled){border-bottom-color:var(--bds-color-action-interactive);}&.selected{border-bottom-color:var(--bds-color-action-interactive);box-shadow:0 1px 0 var(--bds-color-action-interactive);", ";}&.disabled{z-index:0;cursor:not-allowed;& > p{color:var(--bds-color-text-disabled);}}", ";}"], Focused, Focused);

exports.TabWrapper = TabWrapper;
var _default = TabWrapper;
exports["default"] = _default;