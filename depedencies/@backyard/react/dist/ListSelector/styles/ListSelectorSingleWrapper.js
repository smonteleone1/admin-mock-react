"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ListSelectorSingleBase = _interopRequireDefault(require("./ListSelectorSingleBase"));

var ListWrapper = _styledComponents["default"].ul.withConfig({
  displayName: "ListSelectorSingleWrapper__ListWrapper",
  componentId: "sc-tg724h-0"
})(["", ""], _ListSelectorSingleBase["default"]);

exports.ListWrapper = ListWrapper;
var _default = ListWrapper;
exports["default"] = _default;