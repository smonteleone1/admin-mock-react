import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "width", "height", "variant", "shape", "as", "animate"];
import * as React from 'react';
import classnames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import SkeletonWrapper from './styles';
const Skeleton = /*#__PURE__*/React.forwardRef(function Skeleton(_ref, ref) {
  let {
    className,
    width,
    height,
    variant = 'text',
    shape: shapeProp,
    // = 'rounded'
    as,
    animate = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Skeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(SkeletonWrapper, _extends({
    className: classnames(`variant--${variant} shape--${shape}`, className, animate ? 'style--animated' : 'style--default'),
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