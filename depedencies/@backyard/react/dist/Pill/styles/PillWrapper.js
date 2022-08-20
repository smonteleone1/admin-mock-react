"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PillWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PillBase = _interopRequireDefault(require("./PillBase"));

var _Filled = _interopRequireDefault(require("./variants/Filled"));

var _Outlined = _interopRequireDefault(require("./variants/Outlined"));

var _Indicator = _interopRequireDefault(require("./variants/Indicator"));

var PillWrapper = _styledComponents["default"].span.withConfig({
  displayName: "PillWrapper",
  componentId: "sc-16kvfnm-0"
})(["", " .pill{&.variant{&--filled{", "}&--outlined{", "}&--indicator{", "}}}"], _PillBase["default"], _Filled["default"], _Outlined["default"], _Indicator["default"]);

exports.PillWrapper = PillWrapper;
var _default = PillWrapper;
exports["default"] = _default;