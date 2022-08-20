import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["id", "name", "value", "checked", "defaultChecked", "disabled", "indeterminate", "checkedIcon", "indeterminateIcon", "className", "onChange", "shape", "wrapperProps"];

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

const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(_ref, ref) {
  let {
    id,
    name,
    value,
    checked: checkedProp,
    defaultChecked,
    disabled = false,
    indeterminate = false,
    checkedIcon = Check,
    indeterminateIcon = Line,
    className,
    onChange,
    shape: shapeProp,
    // = 'rounded',
    wrapperProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Checkbox'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Use Controlled to manage Uncontrolled behavior of the state of `checked`
  // Determined through default checked

  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: defaultChecked,
    name: `Backyard->Checkbox->[id="${id}"]`
  });
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  const handleChange = event => {
    // Set `checked` to `event.target`'s
    setChecked(event.target.checked); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` prop function
      onChange(event, event.target.checked);
    }
  }; // Icon component depending on indeterminate state


  const Icon = React.useMemo(() => indeterminate ? indeterminateIcon : checkedIcon, [indeterminate]); // Render mark depending on checked and indeterminate state

  const mark = React.useMemo(() => checked ? /*#__PURE__*/React.createElement(Icon, {
    color: "var(--bds-color-icon-solid-inverse)",
    size: "var(--bds-sizes-size-12)",
    className: "checkbox-icon " + (indeterminate ? 'checkbox-line' : 'checkbox-mark')
  }) : null, [checked, indeterminate]);
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
    className: classNames(`backyard checkbox shape--${shape}`, className, checked && "checked", disabled && "disabled", indeterminate && "indeterminate"),
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