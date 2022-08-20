"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlertWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AlertBase = _interopRequireDefault(require("./AlertBase"));

var _Default = _interopRequireDefault(require("./variants/Default"));

var AlertWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AlertWrapper",
  componentId: "sc-1uch1a4-0"
})(["", " ", ""], _AlertBase["default"], _Default["default"]);

exports.AlertWrapper = AlertWrapper;
var _default = AlertWrapper;
exports["default"] = _default;