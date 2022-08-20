import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["children", "columns", "data", "enableSortBy", "enableRowSelection", "enableRowExpansion", "enableFilters", "enableSearch", "enableZebraStripes", "disableFooter", "disableFuzzyHighlight", "disableScrollbar", "inverseHeader", "globalFilter", "filters", "sortBy", "pageIndex", "pageSize", "rowsPerPageOptions", "initialState", "options", "plugins", "filterTypes", "defaultColumn", "selectedRowIds", "expanded", "menuItems", "showToolbar", "showFilters", "showSearch", "toolbar", "size", "shape", "onSelect", "onTableUpdate"];
import * as React from 'react';
import { useTable, usePagination, useExpanded, useSortBy, useFlexLayout } from 'react-table';
import { contains, equals, startsWith } from './filters';
import { TextFilter } from '../DataTableFilters';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
import useSelectColumn from '../hooks/useSelectColumn';
import useExpandColumn from '../hooks/useExpandColumn';
import useHighlightCell from '../hooks/useHighlightCell'; // @todo remove at a later date if decided it is not needed
// import useScrollbarColumn from '../hooks/useScrollbarColumn'
// @todo Temp `react-table` imports

import useGlobalFilter from '../hooks/react-table/useGlobalFilter';
import useFilters from '../hooks/react-table/useFilters';
import useRowSelect from '../hooks/react-table/useRowSelect';
/**
 * DataTable Context
 */

const DataTableContext = /*#__PURE__*/React.createContext(null);
/**
 * DataTable Consumer
 */

const DataTableConsumer = DataTableContext.Consumer;
const defaultFilters = [];
const defaultGlobalFilter = '';
const defaultSortBy = [];
const defaultPageIndex = 0;
const defaultPageSize = 10;
/**
 * Backyard React Data Table Provider
 *
 * Provides values to children and handles state management of the `DataTable`.
 */

const DataTableProvider = _ref => {
  let {
    children,
    columns: columnsProp,
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
    inverseHeader = false,
    globalFilter = defaultGlobalFilter,
    filters = defaultFilters,
    sortBy = defaultSortBy,
    pageIndex = defaultPageIndex,
    pageSize = defaultPageSize,
    rowsPerPageOptions = [10, 20, 50],
    initialState = {},
    options = {},
    plugins = [],
    filterTypes: filterTypesProp = {},
    defaultColumn: defaultColumnProp = {},
    selectedRowIds,
    expanded,
    menuItems,
    showToolbar,
    showFilters: showFiltersProp,
    showSearch: showSearchProp,
    toolbar = [],
    size = 'large',
    shape: shapeProp,
    // = 'rounded',
    onSelect,
    onTableUpdate
  } = _ref,
      override = _objectWithoutPropertiesLoose(_ref, _excluded);

  const theme = useBackyardTheme();
  const {
    shape: shapeContext
  } = theme.context;
  const shape = getShape(shapeProp, shapeContext); // whether to show the filters

  const [showFilters, setShowFilters] = React.useState(showFiltersProp || filters.length > 0); // whether to show the search bar

  const [showSearch, setShowSearch] = React.useState(showSearchProp || globalFilter);
  const [previousSelectedRowIds, setPreviousSelectedRowIds] = React.useState(null); // previous state

  const [previousState, setPreviousState] = React.useState(null);
  const columns = columnsProp; // filtering algorithms available

  const filterTypes = React.useMemo(() => _extends({
    contains,
    equals,
    startsWith
  }, filterTypesProp), []);
  const sortTypes = React.useMemo(() => ({}), []); // the fallback filter

  const defaultColumn = React.useMemo(() => _extends({
    Filter: TextFilter
  }, defaultColumnProp), []);
  const values = {
    scrollbarWidth: React.useMemo(() => {
      // If SSR,
      if (typeof document === 'undefined') {
        return 16; // average scrollbar size
      } // thanks too https://davidwalsh.name/detect-scrollbar-width


      const scrollDiv = document.createElement('div');
      scrollDiv.setAttribute('style', 'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;');
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }, [])
  };
  const context = React.useMemo(() => ({
    showSearch,
    showFilters,
    pageIndex,
    pageSize,
    enableSortBy,
    enableRowSelection,
    enableRowExpansion,
    enableZebraStripes,
    disableFooter,
    disableFuzzyHighlight,
    disableScrollbar,
    size,
    shape,
    enableFilters,
    enableSearch,
    inverseHeader,
    menuItems,
    showToolbar,
    toolbar,
    globalFilter,
    filters,
    rowsPerPageOptions,
    selectedRowIds,
    sortBy,
    expanded,
    options
  }), [showSearchProp, showFiltersProp, pageIndex, pageSize, enableSortBy, enableRowSelection, enableRowExpansion, enableZebraStripes, disableFooter, disableFuzzyHighlight, disableScrollbar, size, shape, data, enableFilters, enableSearch, inverseHeader, menuItems, showToolbar, globalFilter, filters, toolbar, rowsPerPageOptions, selectedRowIds, sortBy, expanded, options]);
  const table = useTable(_extends({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    filterTypes,
    sortTypes,
    disableFilters: !enableFilters,
    disableSortBy: !enableSortBy,
    initialState: _extends({
      pageIndex: context.pageIndex,
      pageSize: context.pageSize,
      globalFilter: context.globalFilter,
      filters: context.filters,
      sortBy: context.sortBy
    }, context.selectedRowIds ? {
      selectedRowIds: context.selectedRowIds
    } : {}, context.expanded ? {
      expanded: context.expanded
    } : {}, initialState),
    paginateExpandedRows: false,
    getSubRows: row => row.subRows
  }, options), useFilters, useGlobalFilter, useSortBy, useExpanded, usePagination, useRowSelect, useExpandColumn(theme, enableRowExpansion), useSelectColumn(theme, enableRowSelection), useHighlightCell(disableFuzzyHighlight), useFlexLayout, ...plugins // useScrollbarColumn(values.scrollbarWidth, disableScrollbar),
  );
  const states = {
    showFilters,
    showSearch,
    setShowFilters,
    setShowSearch
  };
  const functions = {
    onSelect,
    getColumnWidths: column => _extends({}, column.width ? {
      width: column.width
    } : {}, column.totalWidth ? {
      width: column.totalWidth
    } : {}, column.minWidth ? {
      minWidth: column.minWidth
    } : {}, column.maxWidth ? {
      maxWidth: column.maxWidth
    } : {})
  };
  React.useEffect(() => {
    if (typeof showFiltersProp !== 'undefined' && showFiltersProp !== showFilters) {
      setShowFilters(showFiltersProp);
    }
  }, [showFiltersProp]);
  React.useEffect(() => {
    if (typeof showSearchProp !== 'undefined' && showSearchProp !== showSearch) {
      setShowSearch(showSearchProp);
    }
  }, [showSearchProp]);
  React.useEffect(() => {
    table.setAllFilters(context.filters || defaultFilters);
  }, [context.filters]);
  React.useEffect(() => {
    table.setGlobalFilter(context.globalFilter || defaultGlobalFilter);
  }, [context.globalFilter]);
  React.useEffect(() => {
    table.setSortBy(context.sortBy || defaultSortBy);
  }, [context.sortBy]);
  React.useEffect(() => {
    if (context.selectedRowIds) {
      table.selectedFlatRows.forEach(row => {
        if (typeof row?.toggleRowExpanded === 'function') {
          row.toggleRowSelected(Boolean(context.selectedRowIds[row.id]));
        }
      });
    }
  }, [context.selectedRowIds]);
  React.useEffect(() => {
    table.gotoPage(context.pageIndex || defaultPageIndex);
  }, [context.pageIndex]);
  React.useEffect(() => {
    table.setPageSize(context.pageSize || defaultPageSize);
  }, [context.pageSize]);
  React.useEffect(() => {
    if (context.expanded) {
      table.expandedRows.forEach(row => {
        if (typeof row?.toggleRowExpanded === 'function') {
          row.toggleRowExpanded(Boolean(context.expanded[row.id]));
        }
      });
    }
  }, [context.expanded]);
  React.useEffect(() => {
    if (onSelect) {
      const selected = table.selectedFlatRows.filter(row => !previousSelectedRowIds?.[row.id]);
      const unselected = Object.keys(previousSelectedRowIds || {}).filter(id => !table.state.selectedRowIds[id]).map(id => table.rowsById[id]);
      onSelect({
        ids: table.state.selectedRowIds,
        rows: table.selectedFlatRows,
        table,
        state: table.state,
        selected,
        unselected
      });
      setPreviousSelectedRowIds(table.state.selectedRowIds);
    }
  }, [table.state.selectedRowIds]); // Side effect for when table's instance state changes...

  React.useEffect(() => {
    // If `onTableUpdate` trigger defined update has not already been called for the
    // currently given instance state,
    if (onTableUpdate && JSON.stringify(previousState) !== JSON.stringify(table.state)) {
      // Trigger `onTableUpdate` callback
      onTableUpdate(table); // Set previous state so the same call does
      // not trigger twice for the same exact
      // state of the table

      setPreviousState(table.state);
    }
  }, [table.state]);
  return /*#__PURE__*/React.createElement(DataTableContext.Provider, {
    value: _extends({}, table, context, states, functions, values, override)
  }, children);
};

process.env.NODE_ENV !== "production" ? DataTableProvider.propTypes = {
  children: _pt.node.isRequired,
  data: _pt.array.isRequired,
  enableSortBy: _pt.bool,
  enableRowExpansion: _pt.bool,
  enableRowSelection: _pt.bool,
  enableZebraStripes: _pt.bool,
  disableFooter: _pt.bool,
  disableFuzzyHighlight: _pt.bool,
  disableScrollbar: _pt.bool,
  inverseHeader: _pt.bool,
  rowsPerPageOptions: _pt.arrayOf(_pt.number),
  plugins: _pt.array,
  pageIndex: _pt.number,
  pageSize: _pt.number,
  showSearch: _pt.bool,
  showFilters: _pt.bool,
  onSelect: _pt.func,
  onTableUpdate: _pt.func,
  enableFilters: _pt.bool,
  enableSearch: _pt.bool,
  menuItems: _pt.array,
  showToolbar: _pt.bool,
  size: _pt.oneOf(['small', 'medium', 'large', 'custom']),
  shape: _pt.oneOf(['rounded', 'squared']),
  override: _pt.object
} : void 0;
export { DataTableProvider, DataTableContext, DataTableConsumer };
export default DataTableProvider;