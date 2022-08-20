"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TileWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TileBase = _interopRequireDefault(require("./TileBase"));

var TileWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TileWrapper",
  componentId: "sc-1p90u5l-0"
})(["", ""], _TileBase["default"]);

exports.TileWrapper = TileWrapper;
var _default = TileWrapper;
exports["default"] = _default;