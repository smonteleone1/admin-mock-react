"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DataTableContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DataTableContentWrapper = _interopRequireDefault(require("./styles/DataTableContentWrapper"));

var _DataTableHeader2 = _interopRequireDefault(require("../DataTableHeader"));

var _DataTableBody2 = _interopRequireDefault(require("../DataTableBody"));

var _DataTableFooter2 = _interopRequireDefault(require("../DataTableFooter"));

var _hooks = require("../hooks");

var _DataTableHeader, _DataTableBody, _DataTableFooter;

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Data Table Content
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the header, body, and footer of the data table, without the toolbar
 */
var DataTableContent = function DataTableContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useDataTable = (0, _hooks.useDataTable)(),
      getTableProps = _useDataTable.getTableProps,
      disableFooter = _useDataTable.disableFooter,
      disableScrollbar = _useDataTable.disableScrollbar,
      showToolbar = _useDataTable.showToolbar,
      shape = _useDataTable.shape;

  return /*#__PURE__*/React.createElement(_DataTableContentWrapper["default"], getTableProps((0, _extends2["default"])({
    className: (0, _classnames["default"])("data-table-content shape--".concat(shape), className, disableFooter && 'no-footer', disableScrollbar && 'disable-scrollbar', !showToolbar && 'no-toolbar')
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "data-table-content-scrollable shape--".concat(shape, " no-footer") + (!showToolbar ? " no-toolbar" : "")
  }, _DataTableHeader || (_DataTableHeader = /*#__PURE__*/React.createElement(_DataTableHeader2["default"], null)), _DataTableBody || (_DataTableBody = /*#__PURE__*/React.createElement(_DataTableBody2["default"], null))), _DataTableFooter || (_DataTableFooter = /*#__PURE__*/React.createElement(_DataTableFooter2["default"], null)));
};

exports.DataTableContent = DataTableContent;
var _default = DataTableContent;
exports["default"] = _default;