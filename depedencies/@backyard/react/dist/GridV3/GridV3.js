"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GridV3 = void 0;

var _ContainerV = _interopRequireDefault(require("./ContainerV3"));

var _RowV = _interopRequireDefault(require("./RowV3"));

var _ColumnV = _interopRequireDefault(require("./ColumnV3"));

var GridV3 = {
  Container: _ContainerV["default"],
  Row: _RowV["default"],
  Column: _ColumnV["default"]
};
exports.GridV3 = GridV3;
var _default = GridV3;
exports["default"] = _default;