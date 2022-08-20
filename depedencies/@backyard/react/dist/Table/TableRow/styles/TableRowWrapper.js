"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableRowWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var TableRowWrapper = _styledComponents["default"].tr.withConfig({
  displayName: "TableRowWrapper",
  componentId: "sc-x0qcq5-0"
})(["border-bottom:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);"]);

exports.TableRowWrapper = TableRowWrapper;
var _default = TableRowWrapper;
exports["default"] = _default;