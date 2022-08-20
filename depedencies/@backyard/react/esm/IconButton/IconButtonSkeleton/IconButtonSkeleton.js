import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "size", "className"];
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

var IconButtonSkeleton = /*#__PURE__*/React.forwardRef(function IconButtonSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var skeletonWidth;
  var skeletonHeight;

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