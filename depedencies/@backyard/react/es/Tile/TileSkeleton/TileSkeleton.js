import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Tile Skeleton
 */

const TileSkeleton = /*#__PURE__*/React.forwardRef(function TileSkeleton(_ref, ref) {
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
    name: 'TileSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('tile--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    height: "20rem",
    width: "20rem"
  }, props, {
    ref: ref
  }));
});
TileSkeleton.bdsName = 'TileSkeleton';
export { TileSkeleton };
export default TileSkeleton;