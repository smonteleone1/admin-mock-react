import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "shape", "rightRule", "variant"];
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

const Table = /*#__PURE__*/React.forwardRef(function Table(_ref, ref) {
  let {
    children,
    className,
    shape: shapeProp,
    // = 'rounded',
    rightRule = true,
    variant = 'filled'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Table'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TableProvider, {
    shape: shape
  }, /*#__PURE__*/React.createElement(TableWrapper, _extends({
    className: classNames(`table shape--${shape} variant--${variant}`, className, String(rightRule) === 'true' && 'right-rule-on')
  }, props, {
    ref: ref
  }), children));
});
Table.bdsName = 'Table';
export { Table };
export default Table;