import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { ResizeObserver } from '@juggle/resize-observer';
import Typography from '../../Typography';
import { useDataTable } from '../hooks';
import DataTableBodyWrapper from './styles/DataTableBodyWrapper';

var isOverflown = function isOverflown(_ref) {
  var clientHeight = _ref.clientHeight,
      scrollHeight = _ref.scrollHeight;
  return scrollHeight > clientHeight;
};
/**
 * Backyard React Data Table Body
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the body of the data table
 */


var DataTableBody = function DataTableBody(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, _excluded);

  var _useDataTable = useDataTable(),
      getTableBodyProps = _useDataTable.getTableBodyProps,
      page = _useDataTable.page,
      prepareRow = _useDataTable.prepareRow,
      size = _useDataTable.size,
      enableRowSelection = _useDataTable.enableRowSelection,
      enableRowExpansion = _useDataTable.enableRowExpansion,
      enableZebraStripes = _useDataTable.enableZebraStripes,
      getColumnWidths = _useDataTable.getColumnWidths;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      overflow = _React$useState2[0],
      setOverflow = _React$useState2[1];

  var bodyRef = React.useRef(null);

  var checkOverflow = function checkOverflow() {
    if (isOverflown(bodyRef.current)) {
      setOverflow(true);
    }
  };

  var ro = new ResizeObserver(checkOverflow);
  React.useEffect(function () {
    ro.observe(bodyRef.current);
    return function () {
      return ro.disconnect();
    };
  }, [bodyRef]);
  var visibleRowIndex = -1;
  return /*#__PURE__*/React.createElement(DataTableBodyWrapper, _extends({
    className: classNames('data-table-body', className, enableZebraStripes && 'zebra-stripes')
  }, getTableBodyProps(), props, {
    ref: bodyRef
  }), page.map(function (row) {
    prepareRow(row);
    var isSubRow = row.id.indexOf('.') > -1;
    visibleRowIndex += isSubRow ? 0 : 1;
    return /*#__PURE__*/React.createElement("div", row.getRowProps({
      className: classNames("data-table-body-row data-table-row size--".concat(size), row.isSelected && "selected", row.canExpand && row.isExpanded && "expanded", isSubRow && 'sub-row', enableZebraStripes && visibleRowIndex % 2 && "zebra")
    }), row.cells.map(function (cell, index) {
      var isNotSpecialColumn = index < Number(enableRowExpansion) + Number(enableRowSelection);

      if (overflow && cell.column.id === 'scrollbar') {
        return null;
      }

      var Cell = cell.column.Wrapper || 'div';
      return !isSubRow || isSubRow && isNotSpecialColumn ? /*#__PURE__*/React.createElement(Cell, cell.getCellProps({
        className: classNames("data-table-body-cell data-table-cell", cell.column.id),
        style: _extends({}, getColumnWidths(cell.column))
      }), /*#__PURE__*/React.createElement(Typography, {
        variant: "body_1",
        as: "div",
        className: "data-table-body-cell-content cell-content"
      }, cell.render('Cell'))) : null;
    }), isSubRow ? /*#__PURE__*/React.createElement("div", {
      className: "data-table-subrow-cell data-table-cell"
    }, /*#__PURE__*/React.createElement(Typography, {
      variant: "body_1",
      as: "div",
      className: "data-table-subrow-cell-content cell-content"
    }, row.original)) : null);
  }));
};

export { DataTableBody };
export default DataTableBody;