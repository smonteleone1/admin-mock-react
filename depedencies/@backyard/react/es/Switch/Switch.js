import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["id", "name", "size", "value", "checked", "defaultChecked", "disabled", "className", "onChange", "wrapperProps"];

/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import classNames from 'classnames';
import useControlled from '../utils/hooks/useControlled';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import SwitchWrapper from './styles/SwitchWrapper';
/**
 * Backyard React Switch
 *
 * Switch for interacting with boolean values in a form.
 *
 *  <Switch id="switch" />
 *
 * To give `Switch` a label, use `FormControlLabel`, similar to `Radio` and `Checkbox`:
 *
 *  <FormControlLabel
 *      control={<Switch id="switch" />}
 *      label="Label"
 *  />
 *
 * To give `Switch` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Switch id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */

const Switch = /*#__PURE__*/React.forwardRef(function Switch(_ref, ref) {
  let {
    id,
    name,
    size = 'large',
    value,
    checked: checkedProp,
    defaultChecked,
    disabled = false,
    className,
    onChange,
    wrapperProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Switch'); // Use Controlled to manage Uncontrolled behavior of the state of checked
  // Determined through defaultChecked

  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: `Backyard->Switch->[id="${id}"]`
  });
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  const handleChange = event => {
    // Set checked value to target
    setChecked(event.target.checked); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` function
      // Provides `Event` argument and checked boolean
      onChange(event, event.target.checked);
    }
  };
  /**
   * Layout:
   *
   *  <SwitchWrapper>
   *      <input />
   *      <label />
   *  </SwitchWrapper>
   */


  return /*#__PURE__*/React.createElement(SwitchWrapper, _extends({
    className: `switch--wrapper size--${size}`
  }, wrapperProps), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    "aria-label": value,
    name: name,
    value: value,
    className: classNames(`backyard switch size--${size}`, className, checked && "checked", disabled && "disabled"),
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: handleChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }));
});
Switch.bdsName = 'Switch';
export { Switch };
export default Switch;