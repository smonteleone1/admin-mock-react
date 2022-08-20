import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "children", "width", "info", "tooltipProps", "popoverProps", "popperProps", "infoProps"];
import * as React from 'react';
import classNames from 'classnames';
import Info from '@backyard/icons/InfoOutlined';
import Tooltip from '../../Tooltip';
import TooltipPopper from '../../TooltipPopper';
import Typography from '../../Typography';
import useForwardedRef from '../../utils/hooks/useForwardedRef';
import useOverflowChildren from '../hooks/useOverflowChildren';
import TableCellWrapper from './styles/TableCellWrapper';
import { TableContext } from '../TableProvider';
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

const TableCell = /*#__PURE__*/React.forwardRef(function TableCell(_ref, ref) {
  let {
    className,
    children,
    width,
    info,
    tooltipProps = {},
    popoverProps = {},
    popperProps = {},
    infoProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    shape
  } = React.useContext(TableContext);
  const cellRef = useForwardedRef(ref);
  const hasOverflowChildren = useOverflowChildren(cellRef, false);
  return /*#__PURE__*/React.createElement(TableCellWrapper, _extends({
    className: classNames(`table-body-cell table-cell data-cell shape--${shape}`, className, hasOverflowChildren && 'overflowing'),
    width: width
  }, props, {
    ref: cellRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "td-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-content"
  }, hasOverflowChildren ? /*#__PURE__*/React.createElement(TooltipPopper, _extends({
    tooltip: /*#__PURE__*/React.createElement(Tooltip, _extends({
      shape: shape
    }, tooltipProps), children)
  }, popoverProps, popperProps), /*#__PURE__*/React.createElement(Typography, {
    as: "div",
    variant: "body_1",
    color: "text_tertiary"
  }, children)) : /*#__PURE__*/React.createElement(Typography, {
    as: "div",
    variant: "body_1",
    color: "text_tertiary"
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
TableCell.bdsName = 'TableCell';
export { TableCell };
export default TableCell;