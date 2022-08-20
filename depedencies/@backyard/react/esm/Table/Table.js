import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "shape", "rightRule", "variant"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import TableWrapper from './styles/TableWrapper';
import TableProvider from './TableProvider/TableProvider';
/**
 * Corresponding html '<table>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell, TableHeader, TableHeader and TableBody to build out various tables.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader>Column 2</TableHeader>
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
 *           <TableCell>Data 2.2</TableCell>
 *           <TableCell>Data 2.3</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableHeader>Header 1</TableHeader>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableHeader>Header 2</TableHeader>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
 */

var Table = /*#__PURE__*/React.forwardRef(function Table(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      shapeProp = _ref.shape,
      _ref$rightRule = _ref.rightRule,
      rightRule = _ref$rightRule === void 0 ? true : _ref$rightRule,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Table'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TableProvider, {
    shape: shape
  }, /*#__PURE__*/React.createElement(TableWrapper, _extends({
    className: classNames("table shape--".concat(shape, " variant--").concat(variant), className, String(rightRule) === 'true' && 'right-rule-on')
  }, props, {
    ref: ref
  }), children));
});
Table.bdsName = 'Table';
export { Table };
export default Table;