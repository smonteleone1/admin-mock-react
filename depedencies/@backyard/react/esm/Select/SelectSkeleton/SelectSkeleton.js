import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
// Height values for skeleton 
// depending on `size` prop value
var heightMap = {
  small: '2.375rem',
  // 38px
  medium: '2.875rem',
  // 46px
  large: '3.375rem' // 54px

};
/**
 * Backyard React Select Skeleton
 */

var SelectSkeleton = /*#__PURE__*/React.forwardRef(function SelectSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'SelectSkeleton'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var width = 'auto';
  var height = heightMap[size] || '100%';
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('select--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    width: width,
    height: height
  }, props, {
    ref: ref
  }));
});
SelectSkeleton.bdsName = 'SelectSkeleton';
export { SelectSkeleton };
export default SelectSkeleton;