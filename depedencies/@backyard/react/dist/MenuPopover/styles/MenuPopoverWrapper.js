"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuPopoverWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MenuPopoverBase = _interopRequireDefault(require("./MenuPopoverBase"));

var MenuPopoverWrapper = _styledComponents["default"].div.withConfig({
  displayName: "MenuPopoverWrapper",
  componentId: "sc-zwvu3o-0"
})(["", ""], _MenuPopoverBase["default"]);

exports.MenuPopoverWrapper = MenuPopoverWrapper;
var _default = MenuPopoverWrapper;
exports["default"] = _default;