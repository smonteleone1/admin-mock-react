import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "width", "size", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backard BadgeSkeleton component.
 * Returns the skeleton state of the badge element with a defined height
 * and a variable width. The width should be set to the width of the
 * badge component in the designs. Take badge width and divide by 16
 * (ie. 112/16 = 7, so width would be 7rem)
 * 
 * <BadgeSkeleton />
*/

const BadgeSkeleton = /*#__PURE__*/React.forwardRef(function BadgeSkeleton(_ref, ref) {
  let {
    animate = false,
    width,
    size = 'medium',
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  /**
   * Returns a rectagle with a specific height and the desired width.
   * By default, width is 7rem (112px) but this scan be changed depending
   * on the width of the badge text in your design.
   */
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    variant: "rect",
    width: width || '7rem',
    height: size === 'medium' ? '1.5rem' : '2.5rem',
    animate: animate,
    className: classnames(className, 'badge--skeleton')
  }, props, {
    ref: ref
  }));
});
BadgeSkeleton.bdsName = 'BadgeSkeleton';
export { BadgeSkeleton };
export default BadgeSkeleton;