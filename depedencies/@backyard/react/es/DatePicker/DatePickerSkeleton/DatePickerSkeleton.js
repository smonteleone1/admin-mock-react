import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "size", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import SelectSkeleton from '../../Select/SelectSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Date Picker Skeleton
 */

const DatePickerSkeleton = /*#__PURE__*/React.forwardRef(function DatePickerSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    size = 'large',
    animate = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'DatePickerSkeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(SelectSkeleton, _extends({
    className: classNames('datepicker--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    size: size
  }, props, {
    ref: ref
  }));
});
DatePickerSkeleton.bdsName = 'DatePickerSkeleton';
export { DatePickerSkeleton };
export default DatePickerSkeleton;