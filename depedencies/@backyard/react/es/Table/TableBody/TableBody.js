import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import TableBodyWrapper from './styles/TableBodyWrapper';
/**
 * Corresponding html '<tBody>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell and (optionally) TableHeader to build out the body of a table.
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
 */

const TableBody = /*#__PURE__*/React.forwardRef(function TableBody(_ref, ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TableBodyWrapper, _extends({
    className: classNames('table-body', className)
  }, props, {
    ref: ref
  }), children);
});
TableBody.bdsName = 'TableBody';
export { TableBody };
export default TableBody;