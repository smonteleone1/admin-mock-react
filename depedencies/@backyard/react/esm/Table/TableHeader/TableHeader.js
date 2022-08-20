import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children", "width", "info", "tooltipProps", "popoverProps", "popperProps", "infoProps"];
import Info from '@backyard/icons/InfoOutlined';
import classNames from 'classnames';
import * as React from 'react';
import Tooltip from '../../Tooltip';
import TooltipPopper from '../../TooltipPopper';
import Typography from '../../Typography';
import useForwardedRef from '../../utils/hooks/useForwardedRef';
import useOverflowChildren from '../hooks/useOverflowChildren';
import { TableContext } from '../TableProvider/TableProvider';
import TableHeaderWrapper from './styles/TableHeaderWrapper';
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
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = React.useContext(TableContext),
      shape = _React$useContext.shape;

  var headerRef = useForwardedRef(ref); // True if the cell contents are larger then the cell and thus have been truncated

  var hasOverflowChildren = useOverflowChildren(headerRef, false);
  return /*#__PURE__*/React.createElement(TableHeaderWrapper, _extends({
    className: classNames("table-header-cell header-cell table-cell shape--".concat(shape), className, hasOverflowChildren && 'overflowing'),
    width: width
  }, props, {
    ref: headerRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "th-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-content"
  }, hasOverflowChildren ? /*#__PURE__*/React.createElement(TooltipPopper, _extends({
    tooltip: /*#__PURE__*/React.createElement(Tooltip, _extends({
      shape: shape
    }, tooltipProps), children)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(Typography, {
    className: "header-content",
    variant: "h5"
  }, children)) : /*#__PURE__*/React.createElement(Typography, {
    className: "header-content",
    variant: "h5"
  }, children)), info ? /*#__PURE__*/React.createElement(TooltipPopper, _extends({
    tooltip: /*#__PURE__*/React.createElement(Tooltip, _extends({
      shape: shape
    }, tooltipProps), info)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(Info, _extends({
    className: "more-info",
    size: "size_18",
    color: "icon_interactive"
  }, infoProps))) : null));
});
TableHeader.bdsName = 'TableHeader';
export { TableHeader };
export default TableHeader;