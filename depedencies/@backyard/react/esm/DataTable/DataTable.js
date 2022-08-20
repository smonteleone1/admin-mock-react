import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";
var _excluded = ["children", "columns", "data", "enableSortBy", "enableRowSelection", "enableRowExpansion", "enableFilters", "enableSearch", "enableZebraStripes", "disableFooter", "disableFuzzyHighlight", "disableScrollbar", "menuItems", "showToolbar", "inverseHeader", "toolbar", "filters", "sortBy", "globalFilter", "pageIndex", "pageSize", "rowsPerPageOptions", "initialState", "options", "plugins", "filterTypes", "defaultColumn", "selectedRowIds", "expanded", "size", "shape", "showFilters", "showSearch", "onSelect", "onTableUpdate", "override"];
import * as React from 'react';
import DataTableBase from './DataTableBase';
import DataTableProvider from './DataTableProvider';

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
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(DataTableProvider, _extends({
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
  }, override), /*#__PURE__*/React.createElement(DataTableBase, props, children));
};

process.env.NODE_ENV !== "production" ? DataTable.propTypes = {
  enableFilters: _pt.bool,
  enableSearch: _pt.bool,
  menuItems: _pt.array,
  showToolbar: _pt.bool
} : void 0;
export { DataTable };
export default DataTable;