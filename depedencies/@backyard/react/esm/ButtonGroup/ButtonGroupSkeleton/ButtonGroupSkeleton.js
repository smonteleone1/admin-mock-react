import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "width", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyard ButtonGroupSkeleton component
 * 
 * Returns a Skeleton Rect with a predefined height based on the value of
 * the size prop passed. The width defaults to the width of a 4 button buttongroup
 * but can be overwritten to make it shorter or longer depending on need.
 * 
 * <ButtonGroupSkeleton />
 */

var ButtonGroupSkeleton = /*#__PURE__*/React.forwardRef(function ButtonGroupSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var skeletonWidth;
  var skeletonHeight;

  switch (size) {
    case 'small':
      skeletonWidth = width || '9.5rem';
      skeletonHeight = 'calc(var(--bds-sizes-size-48) + var(--bds-sizes-size-2))';
      break;

    default:
      skeletonWidth = width || '11.5rem';
      skeletonHeight = 'calc(var(--bds-sizes-size-56) + var(--bds-sizes-size-2))';
      break;
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    width: skeletonWidth,
    height: skeletonHeight,
    animate: animate,
    className: classnames(className, 'button-group--skeleton')
  }, props, {
    ref: ref
  }));
});
ButtonGroupSkeleton.bdsName = 'ButtonGroupSkeleton';
export { ButtonGroupSkeleton };
export default ButtonGroupSkeleton;