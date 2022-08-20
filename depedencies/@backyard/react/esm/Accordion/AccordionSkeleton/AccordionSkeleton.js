import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "size", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Backyard React Accordion Skeleton
 */
var AccordionSkeleton = /*#__PURE__*/React.forwardRef(function AccordionSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'AccordionSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Height values for skeleton
  // depending on `size` prop value

  var heightMap = {
    small: theme.sizes.size_40,
    medium: theme.sizes.size_48,
    large: theme.sizes.size_56
  };
  var width = 'auto';
  var height = heightMap[size] || '100%';
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('accordion--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    width: width,
    height: height,
    style: _extends({
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }, style)
  }, props, {
    ref: ref
  }));
});
AccordionSkeleton.bdsName = 'AccordionSkeleton';
export { AccordionSkeleton };
export default AccordionSkeleton;