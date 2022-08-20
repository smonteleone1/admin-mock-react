import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "size", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import SelectSkeleton from '../../Select/SelectSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Date Picker Skeleton
 */

var DatePickerSkeleton = /*#__PURE__*/React.forwardRef(function DatePickerSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'DatePickerSkeleton'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
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