import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { useDataTable } from '../hooks';
import DataTableFooterWrapper from './styles/DataTableFooterWrapper';
import DataTablePagination from '../DataTablePagination';
/**
 * Backyard React Data Table Footer
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the footer of the data table
 */

var DataTableFooter = function DataTableFooter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useDataTable = useDataTable(),
      size = _useDataTable.size,
      disableFooter = _useDataTable.disableFooter,
      rowsPerPageOptions = _useDataTable.rowsPerPageOptions,
      shape = _useDataTable.shape;

  return !disableFooter ? /*#__PURE__*/React.createElement(DataTableFooterWrapper, _extends({
    className: classNames("data-table-footer shape--".concat(shape), className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "data-table-row size--".concat(size)
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table-cell"
  }, /*#__PURE__*/React.createElement(DataTablePagination, {
    rowsPerPageOptions: rowsPerPageOptions
  })))) : null;
};

export { DataTableFooter };
export default DataTableFooter;