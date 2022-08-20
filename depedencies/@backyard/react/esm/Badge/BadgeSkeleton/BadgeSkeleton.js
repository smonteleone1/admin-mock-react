import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "width", "size", "className"];
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

var BadgeSkeleton = /*#__PURE__*/React.forwardRef(function BadgeSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

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