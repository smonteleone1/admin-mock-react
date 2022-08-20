"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableCellWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TableCellBase = _interopRequireDefault(require("./TableCellBase"));

var TableCellWrapper = _styledComponents["default"].td.withConfig({
  displayName: "TableCellWrapper",
  componentId: "sc-134dz0p-0"
})(["", ""], _TableCellBase["default"]);

exports.TableCellWrapper = TableCellWrapper;
var _default = TableCellWrapper;
exports["default"] = _default;