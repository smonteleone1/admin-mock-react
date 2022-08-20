import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ArrowDownIcon, _ArrowUpIcon, _SortIcon;

var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import ArrowDownIcon from '@backyard/icons/ArrowDown';
import ArrowUpIcon from '@backyard/icons/ArrowUp';
import SortIcon from '@backyard/icons/Sort';
import Typography from '../../Typography';
import DataTableHeaderWrapper from './styles/DataTableHeaderWrapper';
import { useDataTable } from '../hooks';
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
      props = _objectWithoutProperties(_ref, _excluded);

  var _useDataTable = useDataTable(),
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

  return /*#__PURE__*/React.createElement(DataTableHeaderWrapper, _extends({
    className: classNames('data-table-header', className, !showToolbar && "shape--".concat(shape), enableZebraStripes && 'zebra-stripes', inverseHeader && 'inverse-header')
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
        className: classNames("data-table-header-cell data-table-cell", columnId),
        style: _extends({}, getColumnWidths(column.placeholderOf || column))
      })), /*#__PURE__*/React.createElement(Typography, {
        variant: "h6",
        as: "div",
        className: "data-table-header-cell-content cell-content" + (column.isSorted ? " sorted" : ""),
        color: inverseHeader ? 'text_primary_inverse' : 'text_primary'
      }, enableSortBy && column.canSort ? /*#__PURE__*/React.createElement("span", {
        className: 'sort-icon'
      }, column.isSorted ? column.isSortedDesc ? _ArrowDownIcon || (_ArrowDownIcon = /*#__PURE__*/React.createElement(ArrowDownIcon, null)) : _ArrowUpIcon || (_ArrowUpIcon = /*#__PURE__*/React.createElement(ArrowUpIcon, null)) : _SortIcon || (_SortIcon = /*#__PURE__*/React.createElement(SortIcon, null))) : null, column.render('Header')));
    })), /*#__PURE__*/React.createElement("div", headerGroup.getHeaderGroupProps({
      key: 'headerGroup_Filters',
      className: "data-table-row data-table-header-filters size--".concat(size) + (!(showFilters && index === headerGroups.length - 1) ? " hidden" : "")
    }), headerGroup.headers.map(function (column) {
      var render = column.canFilter ? column.render('Filter') : null;
      var hidden = !(showFilters && index === headerGroups.length - 1);
      return /*#__PURE__*/React.createElement("div", column.getHeaderProps({
        className: 'data-table-cell',
        style: _extends({}, getColumnWidths(column.placeholderOf || column), hidden ? {
          display: 'none'
        } : {})
      }), render || null);
    })));
  }));
};

export { DataTableHeader };
export default DataTableHeader;