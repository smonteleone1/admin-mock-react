"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListPickerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PickerBase = _interopRequireDefault(require("./PickerBase"));

var ListPickerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ListPickerWrapper",
  componentId: "sc-e378cy-0"
})(["", " padding:", " 0;overflow-y:auto;li{overflow:overlay;}"], _PickerBase["default"], function (_ref) {
  var theme = _ref.theme;
  return theme.sizes.size_8;
});

exports.ListPickerWrapper = ListPickerWrapper;
var _default = ListPickerWrapper;
exports["default"] = _default;