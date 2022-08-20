import _pt from "prop-types";
import * as React from 'react';
import DataTableProvider from '../DataTableProvider';
import DataTablePagination from './DataTablePagination';
import makeData from '../utils/makeData';

var StubPagination = function StubPagination(props) {
  var rowsPerPageOptions = props.rowsPerPageOptions,
      size = props.size,
      onChange = props.onChange,
      paginationProps = props.paginationProps,
      length = props.length;
  var p = {
    rowsPerPageOptions: rowsPerPageOptions,
    size: size,
    onChange: onChange,
    paginationProps: paginationProps
  };
  var columns = React.useMemo(function () {
    return [{
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
    }];
  }, []);
  var data = React.useMemo(function () {
    return makeData(length);
  }, []);
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