import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import TableRowWrapper from './styles/TableRowWrapper';
/**
 * Corresponding html '<tr>' tag of the Backyard Design System's table component.
 * Used with TableCell, TableHeader and TableBody to build out the body of a table.
 * Used with TableHeader and TableHead to build out the header of a table.
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
 */

var TableRow = /*#__PURE__*/React.forwardRef(function TableRow(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TableRowWrapper, _extends({
    className: classNames('table-row', className)
  }, props, {
    ref: ref
  }), children);
});
TableRow.bdsName = 'TableRow';
export { TableRow };
export default TableRow;