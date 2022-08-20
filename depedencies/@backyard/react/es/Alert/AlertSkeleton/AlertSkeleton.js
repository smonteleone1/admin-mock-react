import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "multiline", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Alert Skeleton
 */

const AlertSkeleton = /*#__PURE__*/React.forwardRef(function AlertSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    multiline = false,
    animate = false,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'AlertSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const height = !multiline ? theme.sizes.size_56 : theme.sizes.size_88;
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('alert--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: height,
    style: _extends({}, style)
  }, props, {
    ref: ref
  }));
});
AlertSkeleton.bdsName = 'AlertSkeleton';
export { AlertSkeleton };
export default AlertSkeleton;