"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuItemWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MenuItemBase = _interopRequireDefault(require("./MenuItemBase"));

var MenuItemWrapper = _styledComponents["default"].li.withConfig({
  displayName: "MenuItemWrapper",
  componentId: "sc-1rjrxs7-0"
})(["", ""], _MenuItemBase["default"]);

exports.MenuItemWrapper = MenuItemWrapper;
var _default = MenuItemWrapper;
exports["default"] = _default;