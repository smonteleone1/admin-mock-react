import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["id", "name", "size", "value", "checked", "defaultChecked", "disabled", "className", "onChange", "wrapperProps"];

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

var Switch = /*#__PURE__*/React.forwardRef(function Switch(_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      value = _ref.value,
      checkedProp = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      onChange = _ref.onChange,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Switch'); // Use Controlled to manage Uncontrolled behavior of the state of checked
  // Determined through defaultChecked

  var _useControlled = useControlled({
    controlled: checkedProp,
    "default": Boolean(defaultChecked),
    name: "Backyard->Switch->[id=\"".concat(id, "\"]")
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      checked = _useControlled2[0],
      setChecked = _useControlled2[1];
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleChange = function handleChange(event) {
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
    className: "switch--wrapper size--".concat(size)
  }, wrapperProps), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    "aria-label": value,
    name: name,
    value: value,
    className: classNames("backyard switch size--".concat(size), className, checked && "checked", disabled && "disabled"),
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