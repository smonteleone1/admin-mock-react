import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["id", "name", "value", "checked", "defaultChecked", "disabled", "indeterminate", "checkedIcon", "indeterminateIcon", "className", "onChange", "shape", "wrapperProps"];

/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import classNames from 'classnames';
import Check from '@backyard/icons/Checkmark';
import Line from '@backyard/icons/Minus';
import useControlled from '../utils/hooks/useControlled';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import CheckboxWrapper from './styles/CheckboxWrapper';
/**
 * Backyard React Checkbox
 *
 * Checkbox for interacting with boolean values in a form.
 *
 *  <Checkbox id="checkbox" />
 *
 * To give `Checkbox` a label, use `FormControlLabel`, similar to `Radio` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Checkbox id="checkbox" />}
 *      label="Label"
 *  />
 *
 * To give `Checkbox` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */

var Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      checkedProp = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      _ref$checkedIcon = _ref.checkedIcon,
      checkedIcon = _ref$checkedIcon === void 0 ? Check : _ref$checkedIcon,
      _ref$indeterminateIco = _ref.indeterminateIcon,
      indeterminateIcon = _ref$indeterminateIco === void 0 ? Line : _ref$indeterminateIco,
      className = _ref.className,
      onChange = _ref.onChange,
      shapeProp = _ref.shape,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Checkbox'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Use Controlled to manage Uncontrolled behavior of the state of `checked`
  // Determined through default checked

  var _useControlled = useControlled({
    controlled: checkedProp,
    "default": defaultChecked,
    name: "Backyard->Checkbox->[id=\"".concat(id, "\"]")
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
    // Set `checked` to `event.target`'s
    setChecked(event.target.checked); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` prop function
      onChange(event, event.target.checked);
    }
  }; // Icon component depending on indeterminate state


  var Icon = React.useMemo(function () {
    return indeterminate ? indeterminateIcon : checkedIcon;
  }, [indeterminate]); // Render mark depending on checked and indeterminate state

  var mark = React.useMemo(function () {
    return checked ? /*#__PURE__*/React.createElement(Icon, {
      color: "var(--bds-color-icon-solid-inverse)",
      size: "var(--bds-sizes-size-12)",
      className: "checkbox-icon " + (indeterminate ? 'checkbox-line' : 'checkbox-mark')
    }) : null;
  }, [checked, indeterminate]);
  /**
   * Layout:
   *
   *  <CheckboxWrapper>
   *      <input />
   *      <label />
   *  </CheckboxWrapper>
   */

  return /*#__PURE__*/React.createElement(CheckboxWrapper, _extends({
    indeterminate: indeterminate
  }, wrapperProps), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id,
    name: name,
    value: value,
    className: classNames("backyard checkbox shape--".concat(shape), className, checked && "checked", disabled && "disabled", indeterminate && "indeterminate"),
    checked: checked,
    "data-indeterminate": indeterminate,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: handleChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "checkbox-label",
    htmlFor: id
  }, mark));
});
Checkbox.bdsName = 'Checkbox';
export { Checkbox };
export default Checkbox;