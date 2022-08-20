import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["animate", "className", "instances", "size"];
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

const ToggleSkeleton = /*#__PURE__*/React.forwardRef(function ToggleSkeleton(_ref, ref) {
  let {
    animate = false,
    className,
    instances = 2,
    size = 'medium'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  let height = '';

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
    className: classnames(`toggle--skeleton size--${size}`, className),
    variant: "rect",
    width: `${parseFloat(height) * instances}rem`,
    height: height,
    animate: animate
  }, props, {
    ref: ref
  }));
});
ToggleSkeleton.bdsName = 'ToggleSkeleton';
export { ToggleSkeleton };
export default ToggleSkeleton;