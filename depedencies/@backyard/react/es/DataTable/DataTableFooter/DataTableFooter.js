import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
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

const DataTableFooter = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    size,
    disableFooter,
    rowsPerPageOptions,
    shape
  } = useDataTable();
  return !disableFooter ? /*#__PURE__*/React.createElement(DataTableFooterWrapper, _extends({
    className: classNames(`data-table-footer shape--${shape}`, className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: `data-table-row size--${size}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table-cell"
  }, /*#__PURE__*/React.createElement(DataTablePagination, {
    rowsPerPageOptions: rowsPerPageOptions
  })))) : null;
};

export { DataTableFooter };
export default DataTableFooter;