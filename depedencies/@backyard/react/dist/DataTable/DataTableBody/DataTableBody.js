"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableBody = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _resizeObserver = require("@juggle/resize-observer");

var _Typography = _interopRequireDefault(require("../../Typography"));

var _hooks = require("../hooks");

var _DataTableBodyWrapper = _interopRequireDefault(require("./styles/DataTableBodyWrapper"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      getTableBodyProps = _useDataTable.getTableBodyProps,
      page = _useDataTable.page,
      prepareRow = _useDataTable.prepareRow,
      size = _useDataTable.size,
      enableRowSelection = _useDataTable.enableRowSelection,
      enableRowExpansion = _useDataTable.enableRowExpansion,
      enableZebraStripes = _useDataTable.enableZebraStripes,
      getColumnWidths = _useDataTable.getColumnWidths;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      overflow = _React$useState2[0],
      setOverflow = _React$useState2[1];

  var bodyRef = React.useRef(null);

  var checkOverflow = function checkOverflow() {
    if (isOverflown(bodyRef.current)) {
      setOverflow(true);
    }
  };

  var ro = new _resizeObserver.ResizeObserver(checkOverflow);
  React.useEffect(function () {
    ro.observe(bodyRef.current);
    return function () {
      return ro.disconnect();
    };
  }, [bodyRef]);
  var visibleRowIndex = -1;
  return /*#__PURE__*/React.createElement(_DataTableBodyWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('data-table-body', className, enableZebraStripes && 'zebra-stripes')
  }, getTableBodyProps(), props, {
    ref: bodyRef
  }), page.map(function (row) {
    prepareRow(row);
    var isSubRow = row.id.indexOf('.') > -1;
    visibleRowIndex += isSubRow ? 0 : 1;
    return /*#__PURE__*/React.createElement("div", row.getRowProps({
      className: (0, _classnames["default"])("data-table-body-row data-table-row size--".concat(size), row.isSelected && "selected", row.canExpand && row.isExpanded && "expanded", isSubRow && 'sub-row', enableZebraStripes && visibleRowIndex % 2 && "zebra")
    }), row.cells.map(function (cell, index) {
      var isNotSpecialColumn = index < Number(enableRowExpansion) + Number(enableRowSelection);

      if (overflow && cell.column.id === 'scrollbar') {
        return null;
      }

      var Cell = cell.column.Wrapper || 'div';
      return !isSubRow || isSubRow && isNotSpecialColumn ? /*#__PURE__*/React.createElement(Cell, cell.getCellProps({
        className: (0, _classnames["default"])("data-table-body-cell data-table-cell", cell.column.id),
        style: (0, _extends2["default"])({}, getColumnWidths(cell.column))
      }), /*#__PURE__*/React.createElement(_Typography["default"], {
        variant: "body_1",
        as: "div",
        className: "data-table-body-cell-content cell-content"
      }, cell.render('Cell'))) : null;
    }), isSubRow ? /*#__PURE__*/React.createElement("div", {
      className: "data-table-subrow-cell data-table-cell"
    }, /*#__PURE__*/React.createElement(_Typography["default"], {
      variant: "body_1",
      as: "div",
      className: "data-table-subrow-cell-content cell-content"
    }, row.original)) : null);
  }));
};

exports.DataTableBody = DataTableBody;
var _default = DataTableBody;
exports["default"] = _default;