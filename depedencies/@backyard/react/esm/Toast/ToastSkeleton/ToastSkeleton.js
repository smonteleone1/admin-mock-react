import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate", "multiline"];
import * as React from 'react';
import classNames from 'classnames';
import AlertSkeleton from '../../Alert/AlertSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Toast Skeleton
 */

var ToastSkeleton = /*#__PURE__*/React.forwardRef(function ToastSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$multiline = _ref.multiline,
      multiline = _ref$multiline === void 0 ? true : _ref$multiline,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'ToastSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
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