"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _DataTableBase = _interopRequireDefault(require("./DataTableBase"));

var _DataTableProvider = _interopRequireDefault(require("./DataTableProvider"));

var _excluded = ["children", "columns", "data", "enableSortBy", "enableRowSelection", "enableRowExpansion", "enableFilters", "enableSearch", "enableZebraStripes", "disableFooter", "disableFuzzyHighlight", "disableScrollbar", "menuItems", "showToolbar", "inverseHeader", "toolbar", "filters", "sortBy", "globalFilter", "pageIndex", "pageSize", "rowsPerPageOptions", "initialState", "options", "plugins", "filterTypes", "defaultColumn", "selectedRowIds", "expanded", "size", "shape", "showFilters", "showSearch", "onSelect", "onTableUpdate", "override"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Data Table
 *
 * Examples:
 *
 * - [DataTable](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/DataTable)
 *
 * API:
 *
 * - [DataTable API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/DataTable)
 */
var DataTable = function DataTable(_ref) {
  var children = _ref.children,
      columns = _ref.columns,
      data = _ref.data,
      _ref$enableSortBy = _ref.enableSortBy,
      enableSortBy = _ref$enableSortBy === void 0 ? false : _ref$enableSortBy,
      _ref$enableRowSelecti = _ref.enableRowSelection,
      enableRowSelection = _ref$enableRowSelecti === void 0 ? false : _ref$enableRowSelecti,
      _ref$enableRowExpansi = _ref.enableRowExpansion,
      enableRowExpansion = _ref$enableRowExpansi === void 0 ? false : _ref$enableRowExpansi,
      _ref$enableFilters = _ref.enableFilters,
      enableFilters = _ref$enableFilters === void 0 ? false : _ref$enableFilters,
      _ref$enableSearch = _ref.enableSearch,
      enableSearch = _ref$enableSearch === void 0 ? false : _ref$enableSearch,
      _ref$enableZebraStrip = _ref.enableZebraStripes,
      enableZebraStripes = _ref$enableZebraStrip === void 0 ? false : _ref$enableZebraStrip,
      _ref$disableFooter = _ref.disableFooter,
      disableFooter = _ref$disableFooter === void 0 ? false : _ref$disableFooter,
      _ref$disableFuzzyHigh = _ref.disableFuzzyHighlight,
      disableFuzzyHighlight = _ref$disableFuzzyHigh === void 0 ? false : _ref$disableFuzzyHigh,
      _ref$disableScrollbar = _ref.disableScrollbar,
      disableScrollbar = _ref$disableScrollbar === void 0 ? false : _ref$disableScrollbar,
      _ref$menuItems = _ref.menuItems,
      menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
      _ref$showToolbar = _ref.showToolbar,
      showToolbar = _ref$showToolbar === void 0 ? false : _ref$showToolbar,
      _ref$inverseHeader = _ref.inverseHeader,
      inverseHeader = _ref$inverseHeader === void 0 ? false : _ref$inverseHeader,
      _ref$toolbar = _ref.toolbar,
      toolbar = _ref$toolbar === void 0 ? [] : _ref$toolbar,
      filters = _ref.filters,
      sortBy = _ref.sortBy,
      globalFilter = _ref.globalFilter,
      pageIndex = _ref.pageIndex,
      pageSize = _ref.pageSize,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [10, 20, 50] : _ref$rowsPerPageOptio,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
      _ref$filterTypes = _ref.filterTypes,
      filterTypes = _ref$filterTypes === void 0 ? {} : _ref$filterTypes,
      _ref$defaultColumn = _ref.defaultColumn,
      defaultColumn = _ref$defaultColumn === void 0 ? {} : _ref$defaultColumn,
      selectedRowIds = _ref.selectedRowIds,
      expanded = _ref.expanded,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      shape = _ref.shape,
      showFilters = _ref.showFilters,
      showSearch = _ref.showSearch,
      onSelect = _ref.onSelect,
      onTableUpdate = _ref.onTableUpdate,
      override = _ref.override,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_DataTableProvider["default"], (0, _extends2["default"])({
    columns: columns,
    data: data,
    enableSortBy: enableSortBy,
    enableRowSelection: enableRowSelection,
    enableRowExpansion: enableRowExpansion,
    enableFilters: enableFilters,
    enableSearch: enableSearch,
    disableFooter: disableFooter,
    enableZebraStripes: enableZebraStripes,
    disableFuzzyHighlight: disableFuzzyHighlight,
    disableScrollbar: disableScrollbar,
    menuItems: menuItems,
    showToolbar: showToolbar,
    filters: filters,
    sortBy: sortBy,
    globalFilter: globalFilter,
    toolbar: toolbar,
    inverseHeader: inverseHeader,
    rowsPerPageOptions: rowsPerPageOptions,
    initialState: initialState,
    options: options,
    plugins: plugins,
    filterTypes: filterTypes,
    defaultColumn: defaultColumn,
    selectedRowIds: selectedRowIds,
    expanded: expanded,
    size: size,
    shape: shape,
    pageIndex: pageIndex,
    pageSize: pageSize,
    showFilters: showFilters,
    showSearch: showSearch,
    onSelect: onSelect,
    onTableUpdate: onTableUpdate
  }, override), /*#__PURE__*/React.createElement(_DataTableBase["default"], props, children));
};

exports.DataTable = DataTable;
process.env.NODE_ENV !== "production" ? DataTable.propTypes = {
  enableFilters: _propTypes["default"].bool,
  enableSearch: _propTypes["default"].bool,
  menuItems: _propTypes["default"].array,
  showToolbar: _propTypes["default"].bool
} : void 0;
var _default = DataTable;
exports["default"] = _default;