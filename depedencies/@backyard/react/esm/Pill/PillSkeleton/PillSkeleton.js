import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "variant", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyard's PillSkeleton component
 * 
 * Returns a Skeleton circle with predefined heights and widths related
 * to the value of the variant prop (ie. 'pill', 'indicator').
 * 
 * <PillSkeleton />
 */

var PillSkeleton = /*#__PURE__*/React.forwardRef(function PillSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'pill' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var height;
  var width;

  if (size === 'medium') {
    width = variant === 'pill' ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))' : 'var(--bds-sizes-size-18)';
    height = variant === 'pill' ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))' : 'var(--bds-sizes-size-18)';
  } else {
    width = variant === 'pill' ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))' : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))';
    height = variant === 'pill' ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))' : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))';
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "circle",
    width: height,
    height: width,
    animate: animate,
    className: classnames("pill--skeleton variant--".concat(variant), className)
  }, props, {
    ref: ref
  }));
});
PillSkeleton.bdsName = 'PillSkeleton';
export { PillSkeleton };
export default PillSkeleton;