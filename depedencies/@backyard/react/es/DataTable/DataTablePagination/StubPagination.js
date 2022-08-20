import _pt from "prop-types";
import * as React from 'react';
import DataTableProvider from '../DataTableProvider';
import DataTablePagination from './DataTablePagination';
import makeData from '../utils/makeData';

const StubPagination = props => {
  const {
    rowsPerPageOptions,
    size,
    onChange,
    paginationProps,
    length
  } = props;
  const p = {
    rowsPerPageOptions,
    size,
    onChange,
    paginationProps
  };
  const columns = React.useMemo(() => [{
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }, {
    Header: 'Age',
    accessor: 'age'
  }, {
    Header: 'Visits',
    accessor: 'visits'
  }, {
    Header: 'Status',
    accessor: 'status'
  }, {
    Header: 'Profile Progress',
    accessor: 'progress'
  }], []);
  const data = React.useMemo(() => makeData(length), []);
  return /*#__PURE__*/React.createElement(DataTableProvider, {
    columns: columns,
    data: data
  }, /*#__PURE__*/React.createElement(DataTablePagination, p));
};

process.env.NODE_ENV !== "production" ? StubPagination.propTypes = {
  length: _pt.number
} : void 0;
export { StubPagination };
export default StubPagination;