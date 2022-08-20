"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _hooks = require("../hooks");

var _DataTableFooterWrapper = _interopRequireDefault(require("./styles/DataTableFooterWrapper"));

var _DataTablePagination = _interopRequireDefault(require("../DataTablePagination"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      size = _useDataTable.size,
      disableFooter = _useDataTable.disableFooter,
      rowsPerPageOptions = _useDataTable.rowsPerPageOptions,
      shape = _useDataTable.shape;

  return !disableFooter ? /*#__PURE__*/React.createElement(_DataTableFooterWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("data-table-footer shape--".concat(shape), className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "data-table-row size--".concat(size)
  }, /*#__PURE__*/React.createElement("div", {
    className: "data-table-cell"
  }, /*#__PURE__*/React.createElement(_DataTablePagination["default"], {
    rowsPerPageOptions: rowsPerPageOptions
  })))) : null;
};

exports.DataTableFooter = DataTableFooter;
var _default = DataTableFooter;
exports["default"] = _default;