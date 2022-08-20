import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "multiline"];
import * as React from 'react';
import classNames from 'classnames';
import AlertSkeleton from '../../Alert/AlertSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Toast Skeleton
 */

const ToastSkeleton = /*#__PURE__*/React.forwardRef(function ToastSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    multiline = true
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'ToastSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(AlertSkeleton, _extends({
    className: classNames('toast--skeleton', className),
    shape: shape,
    animate: animate,
    multiline: multiline
  }, props, {
    ref: ref
  }));
});
ToastSkeleton.bdsName = 'ToastSkeleton';
export { ToastSkeleton };
export default ToastSkeleton;