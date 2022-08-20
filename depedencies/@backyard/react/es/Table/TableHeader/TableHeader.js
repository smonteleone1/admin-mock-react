import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "width", "info", "tooltipProps", "popoverProps", "popperProps", "infoProps"];
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

const TableHeader = /*#__PURE__*/React.forwardRef(function TableHeader(_ref, ref) {
  let {
    className,
    children,
    width,
    info,
    tooltipProps = {},
    popoverProps = {},
    popperProps = {},
    infoProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    shape
  } = React.useContext(TableContext);
  const headerRef = useForwardedRef(ref); // True if the cell contents are larger then the cell and thus have been truncated

  const hasOverflowChildren = useOverflowChildren(headerRef, false);
  return /*#__PURE__*/React.createElement(TableHeaderWrapper, _extends({
    className: classNames(`table-header-cell header-cell table-cell shape--${shape}`, className, hasOverflowChildren && 'overflowing'),
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