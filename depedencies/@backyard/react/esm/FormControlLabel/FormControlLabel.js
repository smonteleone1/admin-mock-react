import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["name", "label", "className", "disabled", "control"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import Typography from '../Typography';
import useFormControl from '../FormControl/hooks/useFormControl';
import FormControlLabelWrapper from './styles/FormControlLabelWrapper';
/**
 * Backyard React Form Control Label
 *
 *  <FormControlLabel
 *      control={<Radio />}
 *      label="Controlled Radio Label"
 *  />
 *
 * Provides Label to inputs such as
 *  <Checkbox />
 *  <Radio />
 *  <Switch />
 * that allows control over the input for interactions
 * like hovering, clicking, and focusing.
 *
 * Can be used in conjunction with <FormControl> to provide
 * helper text in addition to a controlled label:
 *
 * ```
 *  <FormControl>
 *      <FormControlLabel
 *          control={<Checkbox />}
 *          label="Controlled Label"
 *      />
 *      <FormHelperText>Helper Text for Checkbox</FormHelperText>
 *  </FormControl>
 * ```
 */

var FormControlLabel = /*#__PURE__*/React.forwardRef(function FormControlLabel(_ref, ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'FormControlLabel' : _ref$name,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      className = _ref.className,
      disabledProp = _ref.disabled,
      control = _ref.control,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'FormControlLabel'); // Get props from controlled input

  var controlProps = control.props || {}; // Uses FormControl

  var _useFormControl = useFormControl({
    disabled: disabledProp,
    indent: 'size_36'
  }),
      controlDisabled = _useFormControl.disabled; // Allow FormControl to override props


  var disabled = controlDisabled || disabledProp;
  /**
   * Layout:
   *
   *  <FormControlLabelWrapper>
   *      <Input>
   *      <Typography>
   *  </FormControlLabelWrapper>
   */

  return /*#__PURE__*/React.createElement(FormControlLabelWrapper, _extends({
    className: classNames(className, (disabled || controlProps.disabled) && "disabled"),
    disabled: disabled || controlProps.disabled
  }, props), /*#__PURE__*/React.cloneElement(control, {
    disabled: disabled || controlProps.disabled,
    ref: ref
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "label"
  }, label));
});
FormControlLabel.bdsName = 'FormControlLabel';
export { FormControlLabel };
export default FormControlLabel;