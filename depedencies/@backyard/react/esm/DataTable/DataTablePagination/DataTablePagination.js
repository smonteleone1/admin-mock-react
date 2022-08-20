import _extends from "@babel/runtime/helpers/esm/extends";
import _pt from "prop-types";
import * as React from 'react';
import Pagination from '../../Pagination';
import { Dropdown } from '../../Dropdown';
import DataTablePaginationWrapper from './style/DataTablePaginationWrapper';
import { useDataTable } from '../hooks';

var DataTablePagination = function DataTablePagination(_ref) {
  var _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [10, 25, 50] : _ref$rowsPerPageOptio,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      onChange = _ref.onChange,
      paginationProps = _ref.paginationProps;

  // pull values from DataTableContext
  var _useDataTable = useDataTable(),
      gotoPage = _useDataTable.gotoPage,
      pageOptions = _useDataTable.pageOptions,
      setPageSize = _useDataTable.setPageSize,
      _useDataTable$state = _useDataTable.state,
      pageIndex = _useDataTable$state.pageIndex,
      pageSize = _useDataTable$state.pageSize,
      shape = _useDataTable.shape; // @todo remove if no longer needed
  // Extract row count and page count from options
  // Will react to changes from external sources (such as a server)
  // const { manualPagination, rowCount, pageCount } = options
  // @todo remove if no longer needed
  // Calculate the total number of rows
  // const rowTotal = manualPagination ? rowCount || pageCount * pageSize : rows.length
  // @todo remove if no longer needed
  // Calculate the minimum and maximum row counts for a given page
  // const rowMin = pageIndex * pageSize + 1
  // const rowMax = Math.min((pageIndex + 1) * pageSize, rowTotal)
  // set the initial page size


  React.useEffect(function () {
    if (!pageSize) {
      setPageSize(Number(rowsPerPageOptions[0]));
    }
  }, []);
  /**
   * Event trigger for the `onChange` event.
   *
   * Invokes the `onChange` prop function if available.
   *
   * Invokes the `gotoPage` prop function if available.
   *
   * @param event - the React onChange event
   * @param value - the new page value
   */

  var onPageChangeHandler = function onPageChangeHandler(event, newPage) {
    // correct the page value for zero based datasets in the data table library
    var pageValue = newPage - 1;
    gotoPage(pageValue);

    if (onChange) {
      onChange(event, pageValue);
    }
  };
  /**
   * Event trigger for the `onChange` event.
   *
   * Invokes the `setItemsPerPage` function.
   *
   * @param event -
   * @param option -
   */


  var onSelectChangeHandler = function onSelectChangeHandler(event, option) {
    setPageSize(Number(option.value));
  };

  return /*#__PURE__*/React.createElement(DataTablePaginationWrapper, {
    className: "table-pagination size--".concat(size)
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "table-pagination-rows",
    label: "Rows",
    value: String(pageSize),
    onChange: onSelectChangeHandler,
    options: rowsPerPageOptions.map(function (text) {
      return {
        label: String(text),
        value: String(text)
      };
    }),
    shape: shape
  }), /*#__PURE__*/React.createElement("div", {
    className: "table-pagination-container"
  }, /*#__PURE__*/React.createElement(Pagination, _extends({
    count: pageOptions.length // hideNextButton={!canNextPage}
    // hidePrevButton={!canPreviousPage}
    // correct the page value for the non-zero based pagination component
    ,
    page: pageIndex + 1 // shape={shape}
    ,
    onChange: onPageChangeHandler // showFirstButton
    // showLastButton

  }, paginationProps))));
};

process.env.NODE_ENV !== "production" ? DataTablePagination.propTypes = {
  rowsPerPageOptions: _pt.arrayOf(_pt.number),
  size: _pt.oneOf(['large', 'medium', 'small']),
  onChange: _pt.func
} : void 0;
export { DataTablePagination };
export default DataTablePagination;