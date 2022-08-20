import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ArrowDownIcon, _ArrowUpIcon, _SortIcon;

const _excluded = ["children", "className"];
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

const DataTableHeader = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    headerGroups,
    enableSortBy,
    enableRowSelection,
    enableZebraStripes,
    showFilters,
    inverseHeader,
    size,
    getColumnWidths,
    showToolbar,
    shape
  } = useDataTable();
  return /*#__PURE__*/React.createElement(DataTableHeaderWrapper, _extends({
    className: classNames('data-table-header', className, !showToolbar && `shape--${shape}`, enableZebraStripes && 'zebra-stripes', inverseHeader && 'inverse-header')
  }, props), headerGroups.map((headerGroup, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: index
  }, /*#__PURE__*/React.createElement("div", headerGroup.getHeaderGroupProps({
    className: `data-table-header-row data-table-row size--${size}` + (enableRowSelection ? " selectable" : "")
  }), headerGroup.headers.map(column => {
    const columnId = column.placeholderOf?.id || column.id;
    const Cell = column.Wrapper || 'div';
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
    className: `data-table-row data-table-header-filters size--${size}` + (!(showFilters && index === headerGroups.length - 1) ? " hidden" : "")
  }), headerGroup.headers.map(column => {
    const render = column.canFilter ? column.render('Filter') : null;
    const hidden = !(showFilters && index === headerGroups.length - 1);
    return /*#__PURE__*/React.createElement("div", column.getHeaderProps({
      className: 'data-table-cell',
      style: _extends({}, getColumnWidths(column.placeholderOf || column), hidden ? {
        display: 'none'
      } : {})
    }), render || null);
  })))));
};

export { DataTableHeader };
export default DataTableHeader;