"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableHeaderWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _DataTableCellBase = _interopRequireDefault(require("../../DataTableBody/styles/DataTableCellBase"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{& > .data-table-row:first-child{& > .data-table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}& > .data-table-cell:first-child{border-top-left-radius:var(--bds-border-radius-lg);}& > .data-table-cell:last-child,& > .data-table-cell:nth-last-child(2){border-top-right-radius:var(--bds-border-radius-lg);}}}&--squared > .data-table-row > .data-table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}"]);

var DataTableHeaderWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTableHeaderWrapper",
  componentId: "sc-1oub0nx-0"
})(["display:flex;flex-direction:column;min-height:fit-content;.data-table-row:first-child{.data-table-cell{border-top:0;}.data-table-cell:first-child{border-left:0;}.data-table-cell:last-child{border-right:0;}}.data-table-row:nth-last-child(2){.data-table-cell.data-table-cell{border-bottom:var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);}}&.zebra-stripes{& > .data-table-row{& > .data-table-cell{background-color:var(--bds-color-surface-subdued);}}}&&.inverse-header{& > .data-table-row{& > .data-table-cell:not([class*='selection']):not([class*='expansion']){background-color:var(--bds-color-surface-default-inverse);}& > .data-table-cell{background-color:var(--bds-color-surface-default);}}}&&&{.data-table-row.data-table-header-filters{& > .data-table-cell{background-color:var(--bds-color-surface-dark-blue-subdued);border:none;}&.hidden{display:none;}}.custom,.expansion,.selection{.data-table-header-cell-content{margin-left:0;}}.data-table-header-cell-content{margin-left:var(--bds-sizes-size-20);&.hover,&:hover,&.sorted{.sort-icon{opacity:1;}}.sort-icon{position:absolute;display:inline-flex;align-items:center;opacity:0;transform:translateX(calc(-1 * var(--bds-sizes-size-20)));}}}", " ", ""], _DataTableCellBase["default"], Shapes);

exports.DataTableHeaderWrapper = DataTableHeaderWrapper;
var _default = DataTableHeaderWrapper;
exports["default"] = _default;