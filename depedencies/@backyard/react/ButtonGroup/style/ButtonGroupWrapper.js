"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ButtonGroupWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ButtonGroupWrapper",
  componentId: "sc-ydmw89-0"
})(["display:inline-flex;flex-direction:row;padding:var(--bds-sizes-size-4);padding-right:0;border-width:var(--bds-sizes-size-1);border-style:solid;border-radius:var(--bds-border-radius-lg);&.color--interactive{border-color:var(--bds-color-border-interactive);}&.color--neutral{border-color:var(--bds-color-border-default);}&.variant--ghost{border-color:transparent;}.button{margin-right:var(--bds-sizes-size-4);}"]);

var _default = ButtonGroupWrapper;
exports["default"] = _default;