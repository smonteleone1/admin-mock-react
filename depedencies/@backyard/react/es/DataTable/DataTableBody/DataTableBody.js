import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { ResizeObserver } from '@juggle/resize-observer';
import Typography from '../../Typography';
import { useDataTable } from '../hooks';
import DataTableBodyWrapper from './styles/DataTableBodyWrapper';

const isOverflown = ({
  clientHeight,
  scrollHeight
}) => {
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


const DataTableBody = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    getTableBodyProps,
    page,
    prepareRow,
    size,
    enableRowSelection,
    enableRowExpansion,
    enableZebraStripes,
    getColumnWidths
  } = useDataTable();
  const [overflow, setOverflow] = React.useState(false);
  const bodyRef = React.useRef(null);

  const checkOverflow = () => {
    if (isOverflown(bodyRef.current)) {
      setOverflow(true);
    }
  };

  const ro = new ResizeObserver(checkOverflow);
  React.useEffect(() => {
    ro.observe(bodyRef.current);
    return () => ro.disconnect();
  }, [bodyRef]);
  let visibleRowIndex = -1;
  return /*#__PURE__*/React.createElement(DataTableBodyWrapper, _extends({
    className: classNames('data-table-body', className, enableZebraStripes && 'zebra-stripes')
  }, getTableBodyProps(), props, {
    ref: bodyRef
  }), page.map(row => {
    prepareRow(row);
    const isSubRow = row.id.indexOf('.') > -1;
    visibleRowIndex += isSubRow ? 0 : 1;
    return /*#__PURE__*/React.createElement("div", row.getRowProps({
      className: classNames(`data-table-body-row data-table-row size--${size}`, row.isSelected && "selected", row.canExpand && row.isExpanded && "expanded", isSubRow && 'sub-row', enableZebraStripes && visibleRowIndex % 2 && "zebra")
    }), row.cells.map((cell, index) => {
      const isNotSpecialColumn = index < Number(enableRowExpansion) + Number(enableRowSelection);

      if (overflow && cell.column.id === 'scrollbar') {
        return null;
      }

      const Cell = cell.column.Wrapper || 'div';
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