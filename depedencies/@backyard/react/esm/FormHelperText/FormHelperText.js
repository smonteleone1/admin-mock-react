import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "indent", "icon", "disabled", "state", "className", "typographyProps", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import { useFormControl } from '../FormControl';
import FormHelperTextWrapper from './styles/FormHelperTextWrapper';
/**
 * Backyard React Helper Text
 *
 *  <FormControl>
 *      <TextField />
 *      <FormHelperText>Example Helper Text</FormHelperText>
 *  </FormControl>
 *
 * Text to display as helper with other components.
 * Used with <FormControl> to correctly indent from input `indentHelper`
 */

var FormHelperText = /*#__PURE__*/React.forwardRef(function FormHelperText(_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'Helper' : _ref$children,
      indentProp = _ref.indent,
      icon = _ref.icon,
      disabledProp = _ref.disabled,
      stateProp = _ref.state,
      className = _ref.className,
      typographyProps = _ref.typographyProps,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'FormHelperText'
  });
  validateBackyardTheme(theme, 'FormHelperText');

  var _useFormControl = useFormControl({
    noContext: true
  }),
      disabled = _useFormControl.disabled,
      state = _useFormControl.state,
      indent = _useFormControl.indent; // Props override calculated values


  if (indentProp !== undefined) indent = indentProp;
  if (disabledProp !== undefined) disabled = disabledProp;
  if (stateProp !== undefined) state = stateProp; // Default values

  if (indent === undefined) indent = 'size_16';
  return /*#__PURE__*/React.createElement(FormHelperTextWrapper, _extends({
    className: classNames('helper-text', state, className, disabled && "disabled", indent && "indent"),
    style: style
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "helper"
  }, typographyProps, {
    style: _extends({}, indent ? {
      paddingLeft: typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16
    } : {}, typographyProps === null || typographyProps === void 0 ? void 0 : typographyProps.style)
  }), /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
    className: 'helper-text-icon',
    size: 'size_12'
  }) : null, children));
});
FormHelperText.bdsName = 'FormHelperText';
export { FormHelperText };
export default FormHelperText;