import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["children", "columns", "data", "enableSortBy", "enableRowSelection", "enableRowExpansion", "enableFilters", "enableSearch", "enableZebraStripes", "disableFooter", "disableFuzzyHighlight", "disableScrollbar", "menuItems", "showToolbar", "inverseHeader", "toolbar", "filters", "sortBy", "globalFilter", "pageIndex", "pageSize", "rowsPerPageOptions", "initialState", "options", "plugins", "filterTypes", "defaultColumn", "selectedRowIds", "expanded", "size", "shape", "showFilters", "showSearch", "onSelect", "onTableUpdate", "override"];
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
const DataTable = _ref => {
  let {
    children,
    columns,
    data,
    enableSortBy = false,
    enableRowSelection = false,
    enableRowExpansion = false,
    enableFilters = false,
    enableSearch = false,
    enableZebraStripes = false,
    disableFooter = false,
    disableFuzzyHighlight = false,
    disableScrollbar = false,
    menuItems = [],
    showToolbar = false,
    inverseHeader = false,
    toolbar = [],
    filters,
    sortBy,
    globalFilter,
    pageIndex,
    pageSize,
    rowsPerPageOptions = [10, 20, 50],
    initialState = {},
    options = {},
    plugins = [],
    filterTypes = {},
    defaultColumn = {},
    selectedRowIds,
    expanded,
    size = 'large',
    shape,
    showFilters,
    showSearch,
    onSelect,
    onTableUpdate,
    override
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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