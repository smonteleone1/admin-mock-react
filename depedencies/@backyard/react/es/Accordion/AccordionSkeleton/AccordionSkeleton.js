import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "size", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Backyard React Accordion Skeleton
 */
const AccordionSkeleton = /*#__PURE__*/React.forwardRef(function AccordionSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    size = 'medium',
    animate = false,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'AccordionSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Height values for skeleton
  // depending on `size` prop value

  const heightMap = {
    small: theme.sizes.size_40,
    medium: theme.sizes.size_48,
    large: theme.sizes.size_56
  };
  const width = 'auto';
  const height = heightMap[size] || '100%';
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