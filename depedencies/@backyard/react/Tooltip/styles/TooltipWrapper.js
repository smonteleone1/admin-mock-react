"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TooltipBase", {
  enumerable: true,
  get: function get() {
    return _TooltipBase["default"];
  }
});
exports["default"] = exports.TooltipWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TooltipBase = _interopRequireDefault(require("./TooltipBase"));

var _LowContrast = _interopRequireDefault(require("./variants/LowContrast"));

var _HighContrast = _interopRequireDefault(require("./variants/HighContrast"));

var TooltipWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TooltipWrapper",
  componentId: "sc-6i8spg-0"
})(["", " &.variant{&--low_contrast{", "}&--high_contrast{", "}}"], _TooltipBase["default"], _LowContrast["default"], _HighContrast["default"]);

exports.TooltipWrapper = TooltipWrapper;
var _default = TooltipWrapper;
exports["default"] = _default;