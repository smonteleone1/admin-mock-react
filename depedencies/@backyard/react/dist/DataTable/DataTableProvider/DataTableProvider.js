"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableProvider = exports.DataTableContext = exports.DataTableConsumer = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactTable = require("react-table");

var _filters = require("./filters");

var _DataTableFilters = require("../DataTableFilters");

var _ThemeProvider = require("../../ThemeProvider");

var _useSelectColumn = _interopRequireDefault(require("../hooks/useSelectColumn"));

var _useExpandColumn = _interopRequireDefault(require("../hooks/useExpandColumn"));

var _useHighlightCell = _interopRequireDefault(require("../hooks/useHighlightCell"));

var _useGlobalFilter = _interopRequireDefault(require("../hooks/react-table/useGlobalFilter"));

var _useFilters = _interopRequireDefault(require("../hooks/react-table/useFilters"));

var _useRowSelect = _interopRequireDefault(require("../hooks/react-table/useRowSelect"));

var _excluded = ["children", "columns", "data", "enableSortBy", "enableRowSelection", "enableRowExpansion", "enableFilters", "enableSearch", "enableZebraStripes", "disableFooter", "disableFuzzyHighlight", "disableScrollbar", "inverseHeader", "globalFilter", "filters", "sortBy", "pageIndex", "pageSize", "rowsPerPageOptions", "initialState", "options", "plugins", "filterTypes", "defaultColumn", "selectedRowIds", "expanded", "menuItems", "showToolbar", "showFilters", "showSearch", "toolbar", "size", "shape", "onSelect", "onTableUpdate"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * DataTable Context
 */
var DataTableContext = /*#__PURE__*/React.createContext(null);
/**
 * DataTable Consumer
 */

exports.DataTableContext = DataTableContext;
var DataTableConsumer = DataTableContext.Consumer;
exports.DataTableConsumer = DataTableConsumer;
var defaultFilters = [];
var defaultGlobalFilter = '';
var defaultSortBy = [];
var defaultPageIndex = 0;
var defaultPageSize = 10;
/**
 * Backyard React Data Table Provider
 *
 * Provides values to children and handles state management of the `DataTable`.
 */

var DataTableProvider = function DataTableProvider(_ref) {
  var children = _ref.children,
      columnsProp = _ref.columns,
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
      _ref$inverseHeader = _ref.inverseHeader,
      inverseHeader = _ref$inverseHeader === void 0 ? false : _ref$inverseHeader,
      _ref$globalFilter = _ref.globalFilter,
      globalFilter = _ref$globalFilter === void 0 ? defaultGlobalFilter : _ref$globalFilter,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? defaultFilters : _ref$filters,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? defaultSortBy : _ref$sortBy,
      _ref$pageIndex = _ref.pageIndex,
      pageIndex = _ref$pageIndex === void 0 ? defaultPageIndex : _ref$pageIndex,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? defaultPageSize : _ref$pageSize,
      _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [10, 20, 50] : _ref$rowsPerPageOptio,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? {} : _ref$initialState,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
      _ref$filterTypes = _ref.filterTypes,
      filterTypesProp = _ref$filterTypes === void 0 ? {} : _ref$filterTypes,
      _ref$defaultColumn = _ref.defaultColumn,
      defaultColumnProp = _ref$defaultColumn === void 0 ? {} : _ref$defaultColumn,
      selectedRowIds = _ref.selectedRowIds,
      expanded = _ref.expanded,
      menuItems = _ref.menuItems,
      showToolbar = _ref.showToolbar,
      showFiltersProp = _ref.showFilters,
      showSearchProp = _ref.showSearch,
      _ref$toolbar = _ref.toolbar,
      toolbar = _ref$toolbar === void 0 ? [] : _ref$toolbar,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      shapeProp = _ref.shape,
      onSelect = _ref.onSelect,
      onTableUpdate = _ref.onTableUpdate,
      override = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  var shapeContext = theme.context.shape;
  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // whether to show the filters

  var _React$useState = React.useState(showFiltersProp || filters.length > 0),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      showFilters = _React$useState2[0],
      setShowFilters = _React$useState2[1]; // whether to show the search bar


  var _React$useState3 = React.useState(showSearchProp || globalFilter),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      showSearch = _React$useState4[0],
      setShowSearch = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      previousSelectedRowIds = _React$useState6[0],
      setPreviousSelectedRowIds = _React$useState6[1]; // previous state


  var _React$useState7 = React.useState(null),
      _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
      previousState = _React$useState8[0],
      setPreviousState = _React$useState8[1];

  var columns = columnsProp; // filtering algorithms available

  var filterTypes = React.useMemo(function () {
    return (0, _extends2["default"])({
      contains: _filters.contains,
      equals: _filters.equals,
      startsWith: _filters.startsWith
    }, filterTypesProp);
  }, []);
  var sortTypes = React.useMemo(function () {
    return {};
  }, []); // the fallback filter

  var defaultColumn = React.useMemo(function () {
    return (0, _extends2["default"])({
      Filter: _DataTableFilters.TextFilter
    }, defaultColumnProp);
  }, []);
  var values = {
    scrollbarWidth: React.useMemo(function () {
      // If SSR,
      if (typeof document === 'undefined') {
        return 16; // average scrollbar size
      } // thanks too https://davidwalsh.name/detect-scrollbar-width


      var scrollDiv = document.createElement('div');
      scrollDiv.setAttribute('style', 'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;');
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }, [])
  };
  var context = React.useMemo(function () {
    return {
      showSearch: showSearch,
      showFilters: showFilters,
      pageIndex: pageIndex,
      pageSize: pageSize,
      enableSortBy: enableSortBy,
      enableRowSelection: enableRowSelection,
      enableRowExpansion: enableRowExpansion,
      enableZebraStripes: enableZebraStripes,
      disableFooter: disableFooter,
      disableFuzzyHighlight: disableFuzzyHighlight,
      disableScrollbar: disableScrollbar,
      size: size,
      shape: shape,
      enableFilters: enableFilters,
      enableSearch: enableSearch,
      inverseHeader: inverseHeader,
      menuItems: menuItems,
      showToolbar: showToolbar,
      toolbar: toolbar,
      globalFilter: globalFilter,
      filters: filters,
      rowsPerPageOptions: rowsPerPageOptions,
      selectedRowIds: selectedRowIds,
      sortBy: sortBy,
      expanded: expanded,
      options: options
    };
  }, [showSearchProp, showFiltersProp, pageIndex, pageSize, enableSortBy, enableRowSelection, enableRowExpansion, enableZebraStripes, disableFooter, disableFuzzyHighlight, disableScrollbar, size, shape, data, enableFilters, enableSearch, inverseHeader, menuItems, showToolbar, globalFilter, filters, toolbar, rowsPerPageOptions, selectedRowIds, sortBy, expanded, options]);

  var table = _reactTable.useTable.apply(void 0, [(0, _extends2["default"])({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    filterTypes: filterTypes,
    sortTypes: sortTypes,
    disableFilters: !enableFilters,
    disableSortBy: !enableSortBy,
    initialState: (0, _extends2["default"])({
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
    getSubRows: function getSubRows(row) {
      return row.subRows;
    }
  }, options), _useFilters["default"], _useGlobalFilter["default"], _reactTable.useSortBy, _reactTable.useExpanded, _reactTable.usePagination, _useRowSelect["default"], (0, _useExpandColumn["default"])(theme, enableRowExpansion), (0, _useSelectColumn["default"])(theme, enableRowSelection), (0, _useHighlightCell["default"])(disableFuzzyHighlight), _reactTable.useFlexLayout].concat((0, _toConsumableArray2["default"])(plugins)));

  var states = {
    showFilters: showFilters,
    showSearch: showSearch,
    setShowFilters: setShowFilters,
    setShowSearch: setShowSearch
  };
  var functions = {
    onSelect: onSelect,
    getColumnWidths: function getColumnWidths(column) {
      return (0, _extends2["default"])({}, column.width ? {
        width: column.width
      } : {}, column.totalWidth ? {
        width: column.totalWidth
      } : {}, column.minWidth ? {
        minWidth: column.minWidth
      } : {}, column.maxWidth ? {
        maxWidth: column.maxWidth
      } : {});
    }
  };
  React.useEffect(function () {
    if (typeof showFiltersProp !== 'undefined' && showFiltersProp !== showFilters) {
      setShowFilters(showFiltersProp);
    }
  }, [showFiltersProp]);
  React.useEffect(function () {
    if (typeof showSearchProp !== 'undefined' && showSearchProp !== showSearch) {
      setShowSearch(showSearchProp);
    }
  }, [showSearchProp]);
  React.useEffect(function () {
    table.setAllFilters(context.filters || defaultFilters);
  }, [context.filters]);
  React.useEffect(function () {
    table.setGlobalFilter(context.globalFilter || defaultGlobalFilter);
  }, [context.globalFilter]);
  React.useEffect(function () {
    table.setSortBy(context.sortBy || defaultSortBy);
  }, [context.sortBy]);
  React.useEffect(function () {
    if (context.selectedRowIds) {
      table.selectedFlatRows.forEach(function (row) {
        if (typeof (row === null || row === void 0 ? void 0 : row.toggleRowExpanded) === 'function') {
          row.toggleRowSelected(Boolean(context.selectedRowIds[row.id]));
        }
      });
    }
  }, [context.selectedRowIds]);
  React.useEffect(function () {
    table.gotoPage(context.pageIndex || defaultPageIndex);
  }, [context.pageIndex]);
  React.useEffect(function () {
    table.setPageSize(context.pageSize || defaultPageSize);
  }, [context.pageSize]);
  React.useEffect(function () {
    if (context.expanded) {
      table.expandedRows.forEach(function (row) {
        if (typeof (row === null || row === void 0 ? void 0 : row.toggleRowExpanded) === 'function') {
          row.toggleRowExpanded(Boolean(context.expanded[row.id]));
        }
      });
    }
  }, [context.expanded]);
  React.useEffect(function () {
    if (onSelect) {
      var selected = table.selectedFlatRows.filter(function (row) {
        return !(previousSelectedRowIds !== null && previousSelectedRowIds !== void 0 && previousSelectedRowIds[row.id]);
      });
      var unselected = Object.keys(previousSelectedRowIds || {}).filter(function (id) {
        return !table.state.selectedRowIds[id];
      }).map(function (id) {
        return table.rowsById[id];
      });
      onSelect({
        ids: table.state.selectedRowIds,
        rows: table.selectedFlatRows,
        table: table,
        state: table.state,
        selected: selected,
        unselected: unselected
      });
      setPreviousSelectedRowIds(table.state.selectedRowIds);
    }
  }, [table.state.selectedRowIds]); // Side effect for when table's instance state changes...

  React.useEffect(function () {
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
    value: (0, _extends2["default"])({}, table, context, states, functions, values, override)
  }, children);
};

exports.DataTableProvider = DataTableProvider;
process.env.NODE_ENV !== "production" ? DataTableProvider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  data: _propTypes["default"].array.isRequired,
  enableSortBy: _propTypes["default"].bool,
  enableRowExpansion: _propTypes["default"].bool,
  enableRowSelection: _propTypes["default"].bool,
  enableZebraStripes: _propTypes["default"].bool,
  disableFooter: _propTypes["default"].bool,
  disableFuzzyHighlight: _propTypes["default"].bool,
  disableScrollbar: _propTypes["default"].bool,
  inverseHeader: _propTypes["default"].bool,
  rowsPerPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  plugins: _propTypes["default"].array,
  pageIndex: _propTypes["default"].number,
  pageSize: _propTypes["default"].number,
  showSearch: _propTypes["default"].bool,
  showFilters: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func,
  onTableUpdate: _propTypes["default"].func,
  enableFilters: _propTypes["default"].bool,
  enableSearch: _propTypes["default"].bool,
  menuItems: _propTypes["default"].array,
  showToolbar: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large', 'custom']),
  shape: _propTypes["default"].oneOf(['rounded', 'squared']),
  override: _propTypes["default"].object
} : void 0;
var _default = DataTableProvider;
exports["default"] = _default;