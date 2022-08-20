import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "className", "width"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyards TabsSkeleton component
 * 
 * Returns a Skeleton Rect of a predefined height that changes between two
 * values depending on if the viewport is 'desktop' or 'mobile.' Width
 * defaults to 100% but can be overwritten if needed.
 * 
 * <TabsSkeleton />
 */

var TabsSkeleton = /*#__PURE__*/React.forwardRef(function TabsSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classnames(className, 'tabs--skeleton'),
    variant: "rect",
    width: width,
    height: "2.5rem",
    animate: animate
  }, props, {
    ref: ref
  }));
});
TabsSkeleton.bdsName = 'TabsSkeleton';
export { TabsSkeleton };
export default TabsSkeleton;