import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Chip Skeleton
 */

const ChipSkeleton = /*#__PURE__*/React.forwardRef(function ChipSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'ChipSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('chip--skeleton', className),
    variant: "circle",
    shape: shape,
    animate: animate,
    width: `calc(${theme.sizes.size_112} + ${theme.sizes.size_2})`,
    height: "size_40"
  }, props, {
    ref: ref
  }));
});
ChipSkeleton.bdsName = 'ChipSkeleton';
export { ChipSkeleton };
export default ChipSkeleton;