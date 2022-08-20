import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Tile Skeleton
 */

var TileSkeleton = /*#__PURE__*/React.forwardRef(function TileSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'TileSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
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