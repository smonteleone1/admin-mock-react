import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["size", "fullWidth", "width", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyard ButtonSkeleton component
 * 
 * Returns a Skeleton Rect with a predefined height depending on the
 * value passed to the size prop. The skeleton has a default width also
 * that can be overwritten depending on the width of the button with it's
 * label.
 * 
 * <ButtonSkeleton />
 */

const ButtonSkeleton = /*#__PURE__*/React.forwardRef(function ButtonSkeleton(_ref, ref) {
  let {
    size = 'medium',
    fullWidth = false,
    width,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  let skeletonHeight;
  let skeletonWidth;

  switch (size) {
    case 'jumbo':
      skeletonHeight = '6rem';
      skeletonWidth = width || '12rem';
      break;

    case 'large':
      skeletonHeight = '3.5rem';
      skeletonWidth = width || '7.5rem';
      break;

    case 'small':
      skeletonHeight = '2.5rem';
      skeletonWidth = width || '5.5rem';
      break;

    default:
      skeletonHeight = '3rem';
      skeletonWidth = width || '7.5rem';
  }

  if (fullWidth) {
    skeletonWidth = '100%';
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    width: skeletonWidth,
    height: skeletonHeight,
    className: classnames(`button--skeleton size-${size}`, className)
  }, props, {
    ref: ref
  }));
});
ButtonSkeleton.bdsName = 'ButtonSkeleton';
export { ButtonSkeleton };
export default ButtonSkeleton;