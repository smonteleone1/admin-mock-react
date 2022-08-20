import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "indent", "icon", "disabled", "state", "className", "typographyProps", "style"];
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

const FormHelperText = /*#__PURE__*/React.forwardRef(function FormHelperText(_ref, ref) {
  let {
    children = 'Helper',
    indent: indentProp,
    icon,
    disabled: disabledProp,
    state: stateProp,
    className,
    typographyProps,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'FormHelperText'
  });
  validateBackyardTheme(theme, 'FormHelperText');
  let {
    disabled,
    state,
    indent
  } = useFormControl({
    noContext: true
  }); // Props override calculated values

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
    } : {}, typographyProps?.style)
  }), /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
    className: 'helper-text-icon',
    size: 'size_12'
  }) : null, children));
});
FormHelperText.bdsName = 'FormHelperText';
export { FormHelperText };
export default FormHelperText;