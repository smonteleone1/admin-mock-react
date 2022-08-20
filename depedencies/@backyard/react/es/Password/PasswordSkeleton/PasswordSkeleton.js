import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "size"];
import * as React from 'react';
import classNames from 'classnames';
import TextFieldSkeleton from '../../TextField/TextFieldSkeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React Password Skeleton
 */

const PasswordSkeleton = /*#__PURE__*/React.forwardRef(function PasswordSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    size = 'large'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'PasswordSkeleton'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(TextFieldSkeleton, _extends({
    className: classNames('password--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    size: size
  }, props, {
    ref: ref
  }));
});
PasswordSkeleton.bdsName = 'PasswordSkeleton';
export { PasswordSkeleton };
export default PasswordSkeleton;