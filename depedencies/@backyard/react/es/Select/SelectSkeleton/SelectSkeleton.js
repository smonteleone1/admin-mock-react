import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
// Height values for skeleton 
// depending on `size` prop value
const heightMap = {
  small: '2.375rem',
  // 38px
  medium: '2.875rem',
  // 46px
  large: '3.375rem' // 54px

};
/**
 * Backyard React Select Skeleton
 */

const SelectSkeleton = /*#__PURE__*/React.forwardRef(function SelectSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    size = 'large'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'SelectSkeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const width = 'auto';
  const height = heightMap[size] || '100%';
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