import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyards IconButtonSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height / width based on
 * the value of the size prop (ie. 'small', 'medium', 'large').
 * 
 * <IconButtonSkeleton />
 */

const IconButtonSkeleton = /*#__PURE__*/React.forwardRef(function IconButtonSkeleton(_ref, ref) {
  let {
    animate = false,
    size,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  let skeletonWidth;
  let skeletonHeight;

  switch (size) {
    case 'small':
      skeletonWidth = '2.5rem';
      skeletonHeight = '2.5rem';
      break;

    case 'large':
      skeletonWidth = '3.5rem';
      skeletonHeight = '3.5rem';
      break;

    case 'jumbo':
      skeletonWidth = '6rem';
      skeletonHeight = '6rem';
      break;

    default:
      skeletonWidth = '3rem';
      skeletonHeight = '3rem';
      break;
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    width: skeletonWidth,
    height: skeletonHeight,
    animate: animate,
    className: classnames(className, 'icon-buton--skeleton')
  }, props, {
    ref: ref
  }));
});
IconButtonSkeleton.bdsName = 'IconButtonSkeleton';
export { IconButtonSkeleton };
export default IconButtonSkeleton;