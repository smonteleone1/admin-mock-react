import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["name", "label", "className", "disabled", "control"];
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

const FormControlLabel = /*#__PURE__*/React.forwardRef(function FormControlLabel(_ref, ref) {
  let {
    name = 'FormControlLabel',
    // eslint-disable-line @typescript-eslint/no-unused-vars
    label = 'Label',
    className,
    disabled: disabledProp,
    control
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'FormControlLabel'); // Get props from controlled input

  const controlProps = control.props || {}; // Uses FormControl

  const {
    disabled: controlDisabled
  } = useFormControl({
    disabled: disabledProp,
    indent: 'size_36'
  }); // Allow FormControl to override props

  const disabled = controlDisabled || disabledProp;
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
    ref
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "label"
  }, label));
});
FormControlLabel.bdsName = 'FormControlLabel';
export { FormControlLabel };
export default FormControlLabel;