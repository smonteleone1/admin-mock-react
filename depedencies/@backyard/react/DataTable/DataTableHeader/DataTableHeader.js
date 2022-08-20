"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ArrowDown = _interopRequireDefault(require("@backyard/icons/ArrowDown"));

var _ArrowUp = _interopRequireDefault(require("@backyard/icons/ArrowUp"));

var _Sort = _interopRequireDefault(require("@backyard/icons/Sort"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _DataTableHeaderWrapper = _interopRequireDefault(require("./styles/DataTableHeaderWrapper"));

var _hooks = require("../hooks");

var _ArrowDownIcon, _ArrowUpIcon, _SortIcon;

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Data Table Header
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header of the data table
 */
var DataTableHeader = function DataTableHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      headerGroups = _useDataTable.headerGroups,
      enableSortBy = _useDataTable.enableSortBy,
      enableRowSelection = _useDataTable.enableRowSelection,
      enableZebraStripes = _useDataTable.enableZebraStripes,
      showFilters = _useDataTable.showFilters,
      inverseHeader = _useDataTable.inverseHeader,
      size = _useDataTable.size,
      getColumnWidths = _useDataTable.getColumnWidths,
      showToolbar = _useDataTable.showToolbar,
      shape = _useDataTable.shape;

  return /*#__PURE__*/React.createElement(_DataTableHeaderWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('data-table-header', className, !showToolbar && "shape--".concat(shape), enableZebraStripes && 'zebra-stripes', inverseHeader && 'inverse-header')
  }, props), headerGroups.map(function (headerGroup, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement("div", headerGroup.getHeaderGroupProps({
      className: "data-table-header-row data-table-row size--".concat(size) + (enableRowSelection ? " selectable" : "")
    }), headerGroup.headers.map(function (column) {
      var _column$placeholderOf;

      var columnId = ((_column$placeholderOf = column.placeholderOf) === null || _column$placeholderOf === void 0 ? void 0 : _column$placeholderOf.id) || column.id;
      var Cell = column.Wrapper || 'div';
      return /*#__PURE__*/React.createElement(Cell, column.getHeaderProps(column.getSortByToggleProps({
        // @ts-ignore
        className: (0, _classnames["default"])("data-table-header-cell data-table-cell", columnId),
        style: (0, _extends2["default"])({}, getColumnWidths(column.placeholderOf || column))
      })), /*#__PURE__*/React.createElement(_Typography["default"], {
        variant: "h6",
        as: "div",
        className: "data-table-header-cell-content cell-content" + (column.isSorted ? " sorted" : ""),
        color: inverseHeader ? 'text_primary_inverse' : 'text_primary'
      }, enableSortBy && column.canSort ? /*#__PURE__*/React.createElement("span", {
        className: 'sort-icon'
      }, column.isSorted ? column.isSortedDesc ? _ArrowDownIcon || (_ArrowDownIcon = /*#__PURE__*/React.createElement(_ArrowDown["default"], null)) : _ArrowUpIcon || (_ArrowUpIcon = /*#__PURE__*/React.createElement(_ArrowUp["default"], null)) : _SortIcon || (_SortIcon = /*#__PURE__*/React.createElement(_Sort["default"], null))) : null, column.render('Header')));
    })), /*#__PURE__*/React.createElement("div", headerGroup.getHeaderGroupProps({
      key: 'headerGroup_Filters',
      className: "data-table-row data-table-header-filters size--".concat(size) + (!(showFilters && index === headerGroups.length - 1) ? " hidden" : "")
    }), headerGroup.headers.map(function (column) {
      var render = column.canFilter ? column.render('Filter') : null;
      var hidden = !(showFilters && index === headerGroups.length - 1);
      return /*#__PURE__*/React.createElement("div", column.getHeaderProps({
        className: 'data-table-cell',
        style: (0, _extends2["default"])({}, getColumnWidths(column.placeholderOf || column), hidden ? {
          display: 'none'
        } : {})
      }), render || null);
    })));
  }));
};

exports.DataTableHeader = DataTableHeader;
var _default = DataTableHeader;
exports["default"] = _default;