import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant"];
import * as React from 'react';
import { PaginationCondensed } from '../PaginationCondensed';
import { PaginationFull } from '../PaginationFull';
/**
 * Backyard React Pagination
 *
 * @todo Comments
 */

var Pagination = /*#__PURE__*/React.forwardRef(function Pagination(_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'numbered' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  var Component = React.useMemo(function () {
    switch (variant) {
      case 'condensed':
        return PaginationCondensed;

      case 'numbered':
      case 'dotted':
      default:
        return PaginationFull;
    }
  }, [variant]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    variant: variant
  }, props, {
    ref: ref
  }));
});
Pagination.bdsName = 'Pagination';
export { Pagination };
export default Pagination;