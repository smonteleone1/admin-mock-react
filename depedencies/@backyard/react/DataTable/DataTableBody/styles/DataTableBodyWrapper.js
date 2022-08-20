"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableBodyWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DataTableCellBase = _interopRequireDefault(require("./DataTableCellBase"));

var DataTableBodyWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTableBodyWrapper",
  componentId: "sc-y5wudd-0"
})(["display:flex;flex-direction:column;.data-table-row:first-child{.data-table-cell{border-top:0;}}&&&{.data-table-row:hover:not(.sub-row){& > .data-table-body-cell{background-color:var(--bds-color-action-neutral-hover);}}.data-table-row.selected{& > .data-table-body-cell,& > .data-table-header-cell{background-color:var(--bds-color-highlight);}}}", ""], _DataTableCellBase["default"]);

exports.DataTableBodyWrapper = DataTableBodyWrapper;
var _default = DataTableBodyWrapper;
exports["default"] = _default;