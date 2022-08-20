"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CarouselItemWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var CarouselItemWrapper = _styledComponents["default"].div.withConfig({
  displayName: "CarouselItemWrapper",
  componentId: "sc-34ce9d-0"
})(["flex-shrink:0;margin:0 ", ";"], function (_ref) {
  var theme = _ref.theme,
      padding = _ref.padding;
  return padding === 'none' ? 0 : theme.sizes[padding] || padding;
});

exports.CarouselItemWrapper = CarouselItemWrapper;
var _default = CarouselItemWrapper;
exports["default"] = _default;