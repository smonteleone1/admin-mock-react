import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "variant", "size", "className"];
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

const PillSkeleton = /*#__PURE__*/React.forwardRef(function PillSkeleton(_ref, ref) {
  let {
    animate = false,
    variant = 'pill',
    size = 'medium',
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  let height;
  let width;

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
    className: classnames(`pill--skeleton variant--${variant}`, className)
  }, props, {
    ref: ref
  }));
});
PillSkeleton.bdsName = 'PillSkeleton';
export { PillSkeleton };
export default PillSkeleton;