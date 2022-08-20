import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import SelectSkeleton from '../../Select/SelectSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Dropdown Skeleton
 */

const DropdownSkeleton = /*#__PURE__*/React.forwardRef(function DropdownSkeleton(_ref, ref) {
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
    name: 'DropdownSkeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(SelectSkeleton, _extends({
    className: classNames('dropdown--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    size: size
  }, props, {
    ref: ref
  }));
});
DropdownSkeleton.bdsName = 'DropdownSkeleton';
export { DropdownSkeleton };
export default DropdownSkeleton;