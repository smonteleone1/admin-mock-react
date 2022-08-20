import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "multiline", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Alert Skeleton
 */

var AlertSkeleton = /*#__PURE__*/React.forwardRef(function AlertSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$multiline = _ref.multiline,
      multiline = _ref$multiline === void 0 ? false : _ref$multiline,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'AlertSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var height = !multiline ? theme.sizes.size_56 : theme.sizes.size_88;
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