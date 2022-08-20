"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

var _TooltipPopper = _interopRequireDefault(require("../../TooltipPopper"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _useForwardedRef = _interopRequireDefault(require("../../utils/hooks/useForwardedRef"));

var _useOverflowChildren = _interopRequireDefault(require("../hooks/useOverflowChildren"));

var _TableCellWrapper = _interopRequireDefault(require("./styles/TableCellWrapper"));

var _TableProvider = require("../TableProvider");

var _excluded = ["className", "children", "width", "info", "tooltipProps", "popoverProps", "popperProps", "infoProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Corresponding html '<td>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableHeader and TableBody to build out the body of a table.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader width={30}>Column 2</TableHeader>
 *           <TableHeader>Column 3</TableHeader>
 *       </TableRow>
 *   </TableHead>
 *   <TableBody>
 *       <TableRow>
 *           <TableCell>Data 1.1</TableCell>
 *           <TableCell>Data 1.2</TableCell>
 *           <TableCell>Data 1.3</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableCell>Data 2.1</TableCell>
 *   ...
 *
 * ex.
 * <Table>
 *   <TableBody>
 *       <TableRow>
 *           <TableHeader>Header 1</TableHeader>
 *           <TableCell>Data 1</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableHeader>Header 2</TableHeader>
 *           <TableCell>Data 2</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableCell>Header 1</TableCell>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableCell>Header 2</TableCell>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
 */
var TableCell = /*#__PURE__*/React.forwardRef(function TableCell(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      width = _ref.width,
      info = _ref.info,
      _ref$tooltipProps = _ref.tooltipProps,
      tooltipProps = _ref$tooltipProps === void 0 ? {} : _ref$tooltipProps,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      infoProps = _ref.infoProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _React$useContext = React.useContext(_TableProvider.TableContext),
      shape = _React$useContext.shape;

  var cellRef = (0, _useForwardedRef["default"])(ref);
  var hasOverflowChildren = (0, _useOverflowChildren["default"])(cellRef, false);
  return /*#__PURE__*/React.createElement(_TableCellWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("table-body-cell table-cell data-cell shape--".concat(shape), className, hasOverflowChildren && 'overflowing'),
    width: width
  }, props, {
    ref: cellRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "td-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-content"
  }, hasOverflowChildren ? /*#__PURE__*/React.createElement(_TooltipPopper["default"], (0, _extends2["default"])({
    tooltip: /*#__PURE__*/React.createElement(_Tooltip["default"], (0, _extends2["default"])({
      shape: shape
    }, tooltipProps), children)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(_Typography["default"], {
    as: "div",
    variant: "body_1",
    color: "text_tertiary"
  }, children)) : /*#__PURE__*/React.createElement(_Typography["default"], {
    as: "div",
    variant: "body_1",
    color: "text_tertiary"
  }, children)), info ? /*#__PURE__*/React.createElement(_TooltipPopper["default"], (0, _extends2["default"])({
    tooltip: /*#__PURE__*/React.createElement(_Tooltip["default"], (0, _extends2["default"])({
      shape: shape
    }, tooltipProps), info)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(_InfoOutlined["default"], (0, _extends2["default"])({
    className: "more-info",
    size: "size_18",
    color: "icon_interactive"
  }, infoProps))) : null));
});
exports.TableCell = TableCell;
TableCell.bdsName = 'TableCell';
var _default = TableCell;
exports["default"] = _default;