import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "className", "instances", "size"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyards ToggleSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height related to
 * the value of the size prop. Defauts to a 2 button instance of
 * a toggle but can be overwritten to contain more button instances.
 * Each increase of the button instances will increase the width
 * of the component.
 * 
 * <ToggleSkeleton />
 */

var ToggleSkeleton = /*#__PURE__*/React.forwardRef(function ToggleSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      _ref$instances = _ref.instances,
      instances = _ref$instances === void 0 ? 2 : _ref$instances,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  var height = '';

  switch (size) {
    case 'small':
      height = '2.375rem';
      break;

    case 'large':
      height = '3.375rem';
      break;

    default:
      height = '2.875rem';
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classnames("toggle--skeleton size--".concat(size), className),
    variant: "rect",
    width: "".concat(parseFloat(height) * instances, "rem"),
    height: height,
    animate: animate
  }, props, {
    ref: ref
  }));
});
ToggleSkeleton.bdsName = 'ToggleSkeleton';
export { ToggleSkeleton };
export default ToggleSkeleton;