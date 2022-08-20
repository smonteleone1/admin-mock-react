"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableFooterWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _DataTableCellBase = _interopRequireDefault(require("../../DataTableBody/styles/DataTableCellBase"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Shapes = (0, _styledComponents.css)(["&.shape{&--rounded{& > .data-table-row:last-child{& > .data-table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}& > .data-table-cell:first-child{border-bottom-left-radius:var(--bds-border-radius-lg);}& > .data-table-cell:last-child{border-bottom-right-radius:var(--bds-border-radius-lg);}}}&--squared > .data-table-row > .data-table-cell{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;}}"]);
var DataTableFooterSizes = (0, _styledComponents.css)([".data-table-row.size{&--small{.data-table-cell{padding-top:var(--bds-sizes-size-2);padding-bottom:var(--bds-sizes-size-2);padding-left:var(--bds-sizes-size-0);padding-right:var(--bds-sizes-size-0);}}&--medium{.data-table-cell{padding-top:var(--bds-sizes-size-4);padding-bottom:var(--bds-sizes-size-4);padding-left:var(--bds-sizes-size-0);padding-right:var(--bds-sizes-size-0);}}&--large{.data-table-cell{padding-top:var(--bds-sizes-size-8);padding-bottom:var(--bds-sizes-size-8);padding-left:var(--bds-sizes-size-0);padding-right:var(--bds-sizes-size-0);}}}"]);

var DataTableFooterWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DataTableFooterWrapper",
  componentId: "sc-3cllym-0"
})([".data-table-row:first-child{.data-table-cell{border-top:0;width:100%;}}.data-table-row:last-child{.data-table-cell{border-bottom:0;}.data-table-cell:first-child{border-left:0;}.data-table-cell:last-child{border-right:0;}}", " ", " ", ""], _DataTableCellBase["default"], DataTableFooterSizes, Shapes);

exports.DataTableFooterWrapper = DataTableFooterWrapper;
var _default = DataTableFooterWrapper;
exports["default"] = _default;