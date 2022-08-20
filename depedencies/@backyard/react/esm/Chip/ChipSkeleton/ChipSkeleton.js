import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Chip Skeleton
 */

var ChipSkeleton = /*#__PURE__*/React.forwardRef(function ChipSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'ChipSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('chip--skeleton', className),
    variant: "circle",
    shape: shape,
    animate: animate,
    width: "calc(".concat(theme.sizes.size_112, " + ").concat(theme.sizes.size_2, ")"),
    height: "size_40"
  }, props, {
    ref: ref
  }));
});
ChipSkeleton.bdsName = 'ChipSkeleton';
export { ChipSkeleton };
export default ChipSkeleton;