import _extends from "@babel/runtime/helpers/esm/extends";
import _pt from "prop-types";
import * as React from 'react';
import Pagination from '../../Pagination';
import { Dropdown } from '../../Dropdown';
import DataTablePaginationWrapper from './style/DataTablePaginationWrapper';
import { useDataTable } from '../hooks';

const DataTablePagination = ({
  rowsPerPageOptions = [10, 25, 50],
  size = 'medium',
  onChange,
  paginationProps
}) => {
  // pull values from DataTableContext
  const {
    // canNextPage,
    // canPreviousPage,
    gotoPage,
    pageOptions,
    setPageSize,
    state: {
      pageIndex,
      pageSize
    },
    // options,
    // rows,
    shape
  } = useDataTable(); // @todo remove if no longer needed
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

  React.useEffect(() => {
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

  const onPageChangeHandler = (event, newPage) => {
    // correct the page value for zero based datasets in the data table library
    const pageValue = newPage - 1;
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


  const onSelectChangeHandler = (event, option) => {
    setPageSize(Number(option.value));
  };

  return /*#__PURE__*/React.createElement(DataTablePaginationWrapper, {
    className: `table-pagination size--${size}`
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "table-pagination-rows",
    label: "Rows",
    value: String(pageSize),
    onChange: onSelectChangeHandler,
    options: rowsPerPageOptions.map(text => ({
      label: String(text),
      value: String(text)
    })),
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