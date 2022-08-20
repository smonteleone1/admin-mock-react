import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "animate", "style", "indent"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
import { useFormControl } from '../../FormControl';

/**
 * Backyard React Text Field Skeleton
 */
var FormHelperTextSkeleton = /*#__PURE__*/React.forwardRef(function FormHelperTextSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      indentProp = _ref.indent,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'TextField'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);

  var _useFormControl = useFormControl({
    noContext: true
  }),
      indent = _useFormControl.indent; // Props override calculated values


  if (indentProp !== undefined) indent = indentProp; // Default values

  if (indent === undefined) indent = 'size_16';
  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('helper-text--skeleton', className),
    variant: "text",
    shape: shape,
    animate: animate,
    height: "size_16",
    style: _extends({
      width: 'auto'
    }, indent ? {
      margin: "0 ".concat(typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16)
    } : {}, {
      marginTop: theme.sizes.size_8
    }, style)
  }, props, {
    ref: ref
  }));
});
FormHelperTextSkeleton.bdsName = 'FormHelperTextSkeleton';
export { FormHelperTextSkeleton };
export default FormHelperTextSkeleton;