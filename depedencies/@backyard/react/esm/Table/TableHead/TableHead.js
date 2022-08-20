import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import TableHeadWrapper from './styles/TableHeadWrapper';
/**
 * Corresponding html '<thead>' tag of the Backyard Design System's table component.
 * Used with TableRow and TableHeader to build out the headers for a table.
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
 * ...
 */

var TableHead = /*#__PURE__*/React.forwardRef(function TableHead(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(TableHeadWrapper, _extends({
    className: classNames('table-head', className)
  }, props, {
    ref: ref
  }), children);
});
TableHead.bdsName = 'TableHead';
export { TableHead };
export default TableHead;