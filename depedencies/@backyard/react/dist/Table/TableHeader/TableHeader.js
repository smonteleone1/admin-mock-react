"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

var _TooltipPopper = _interopRequireDefault(require("../../TooltipPopper"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _useForwardedRef = _interopRequireDefault(require("../../utils/hooks/useForwardedRef"));

var _useOverflowChildren = _interopRequireDefault(require("../hooks/useOverflowChildren"));

var _TableProvider = require("../TableProvider/TableProvider");

var _TableHeaderWrapper = _interopRequireDefault(require("./styles/TableHeaderWrapper"));

var _excluded = ["className", "children", "width", "info", "tooltipProps", "popoverProps", "popperProps", "infoProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Corresponding html '<th>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell and TableBody to build out the body of a table.
 * Used with TableRow, and TableHead to build out the header of a table.
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
 *   ...
 *
 * ex 2.
 * <Table>
 *   <TableBody>
 *       <TableRow>
 *           <TableHeader variant='outlined' width={30}>Header 1</TableHeader>
 *           <TableCell>Data 1</TableHeader>
 *       </TableRow>
 *       <TableRow>
 *           <TableHeader variant='outlined'
 *                        moreInfo='Here is some extra text'>
 *                Header 2
 *           </TableHeader>
 *           <TableCell>Data 2</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 */
var TableHeader = /*#__PURE__*/React.forwardRef(function TableHeader(_ref, ref) {
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
      _ref$infoProps = _ref.infoProps,
      infoProps = _ref$infoProps === void 0 ? {} : _ref$infoProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _React$useContext = React.useContext(_TableProvider.TableContext),
      shape = _React$useContext.shape;

  var headerRef = (0, _useForwardedRef["default"])(ref); // True if the cell contents are larger then the cell and thus have been truncated

  var hasOverflowChildren = (0, _useOverflowChildren["default"])(headerRef, false);
  return /*#__PURE__*/React.createElement(_TableHeaderWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("table-header-cell header-cell table-cell shape--".concat(shape), className, hasOverflowChildren && 'overflowing'),
    width: width
  }, props, {
    ref: headerRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "th-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-content"
  }, hasOverflowChildren ? /*#__PURE__*/React.createElement(_TooltipPopper["default"], (0, _extends2["default"])({
    tooltip: /*#__PURE__*/React.createElement(_Tooltip["default"], (0, _extends2["default"])({
      shape: shape
    }, tooltipProps), children)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(_Typography["default"], {
    className: "header-content",
    variant: "h5"
  }, children)) : /*#__PURE__*/React.createElement(_Typography["default"], {
    className: "header-content",
    variant: "h5"
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
exports.TableHeader = TableHeader;
TableHeader.bdsName = 'TableHeader';
var _default = TableHeader;
exports["default"] = _default;