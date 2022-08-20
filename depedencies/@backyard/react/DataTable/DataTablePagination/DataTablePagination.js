"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTablePagination = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _Pagination = _interopRequireDefault(require("../../Pagination"));

var _Dropdown = require("../../Dropdown");

var _DataTablePaginationWrapper = _interopRequireDefault(require("./style/DataTablePaginationWrapper"));

var _hooks = require("../hooks");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTablePagination = function DataTablePagination(_ref) {
  var _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
      rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [10, 25, 50] : _ref$rowsPerPageOptio,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      onChange = _ref.onChange,
      paginationProps = _ref.paginationProps;

  // pull values from DataTableContext
  var _useDataTable = (0, _hooks.useDataTable)(),
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

  return /*#__PURE__*/React.createElement(_DataTablePaginationWrapper["default"], {
    className: "table-pagination size--".concat(size)
  }, /*#__PURE__*/React.createElement(_Dropdown.Dropdown, {
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
  }, /*#__PURE__*/React.createElement(_Pagination["default"], (0, _extends2["default"])({
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

exports.DataTablePagination = DataTablePagination;
process.env.NODE_ENV !== "production" ? DataTablePagination.propTypes = {
  rowsPerPageOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
  size: _propTypes["default"].oneOf(['large', 'medium', 'small']),
  onChange: _propTypes["default"].func
} : void 0;
var _default = DataTablePagination;
exports["default"] = _default;