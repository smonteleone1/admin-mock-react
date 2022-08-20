import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "style", "indent"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
import { useFormControl } from '../../FormControl';

/**
 * Backyard React Text Field Skeleton
 */
const FormHelperTextSkeleton = /*#__PURE__*/React.forwardRef(function FormHelperTextSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    style,
    indent: indentProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'TextField'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  let {
    indent
  } = useFormControl({
    noContext: true
  }); // Props override calculated values

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
      margin: `0 ${typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16}`
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