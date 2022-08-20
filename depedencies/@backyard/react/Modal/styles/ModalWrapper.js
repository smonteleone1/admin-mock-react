"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ModalBase = _interopRequireDefault(require("./ModalBase"));

var ModalWrapper = _styledComponents["default"].div.withConfig({
  displayName: "ModalWrapper",
  componentId: "sc-1wfgcee-0"
})(["", ""], _ModalBase["default"]);

exports.ModalWrapper = ModalWrapper;
var _default = ModalWrapper;
exports["default"] = _default;