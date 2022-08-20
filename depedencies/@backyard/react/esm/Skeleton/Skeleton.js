import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "width", "height", "variant", "shape", "as", "animate"];
import * as React from 'react';
import classnames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import SkeletonWrapper from './styles';
var Skeleton = /*#__PURE__*/React.forwardRef(function Skeleton(_ref, ref) {
  var className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      shapeProp = _ref.shape,
      as = _ref.as,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Skeleton'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    className: classnames("variant--".concat(variant, " shape--").concat(shape), className, animate ? 'style--animated' : 'style--default'),
    width: width,
    height: height,
    as: as
  }, props, {
    ref: ref
  }));
});
Skeleton.bdsName = 'Skeleton';
export { Skeleton };
export default Skeleton;