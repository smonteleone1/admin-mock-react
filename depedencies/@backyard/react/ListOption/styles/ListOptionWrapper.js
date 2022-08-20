"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListOptionWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ListOptionBase = _interopRequireDefault(require("./ListOptionBase"));

var ListOptionWrapper = _styledComponents["default"].li.withConfig({
  displayName: "ListOptionWrapper",
  componentId: "sc-l97wzm-0"
})(["box-sizing:border-box;", ""], _ListOptionBase["default"]);

exports.ListOptionWrapper = ListOptionWrapper;
var _default = ListOptionWrapper;
exports["default"] = _default;