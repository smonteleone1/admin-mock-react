import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["variant"];
import * as React from 'react';
import { PaginationCondensed } from '../PaginationCondensed';
import { PaginationFull } from '../PaginationFull';
/**
 * Backyard React Pagination
 *
 * @todo Comments
 */

const Pagination = /*#__PURE__*/React.forwardRef(function Pagination(_ref, ref) {
  let {
    variant = 'numbered'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const Component = React.useMemo(() => {
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