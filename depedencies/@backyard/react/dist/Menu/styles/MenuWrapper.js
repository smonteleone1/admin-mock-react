"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _MenuBase = _interopRequireDefault(require("./MenuBase"));

var MenuWrapper = _styledComponents["default"].div.withConfig({
  displayName: "MenuWrapper",
  componentId: "sc-qdxmkx-0"
})(["", ""], _MenuBase["default"]);

exports.MenuWrapper = MenuWrapper;
var _default = MenuWrapper;
exports["default"] = _default;