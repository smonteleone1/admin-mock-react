"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalHandlerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var ModalHandlerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ModalHandlerWrapper",
  componentId: "sc-zw60mm-0"
})(["&.keep-mounted{&.closed{display:none;pointer-events:none;}}"]);

exports.ModalHandlerWrapper = ModalHandlerWrapper;
var _default = ModalHandlerWrapper;
exports["default"] = _default;