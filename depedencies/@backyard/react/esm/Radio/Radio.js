import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["checked", "children", "defaultChecked", "className", "disabled", "id", "name", "onChange", "value", "wrapperProps"];

/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import * as React from 'react';
import useRadioGroup from '../RadioGroup/useRadioGroup';
import createChainedFunction from '../utils/functions/createChainedFunction';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import RadioWrapper from './styles/RadioWrapper';
/**
 * Backyard React Radio
 *
 * Radio for interacting with selections in a form.
 *
 * > Note: `name` is required when not a child of `RadioGroup` with a name
 *
 *  <Radio id="radio" />
 *
 * To give `Radio` a label, use `FormControlLabel`, similar to `Checkbox` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Radio id="radio" name="radio" />}
 *      label="Label"
 *  />
 *
 * To give `Radio` helper text, use `FormHelperText` inside a `FormControl`:
 *
 * > Note: When grouping `Radio`s together, use the `RadioGroup` to sync multiple
 * > radios together with one `name`, one `onChange`, and even set a `defaultValue`.
 *
 *  <FormControl>
 *      <FormHeading>What color was Gandalf's robes in LotR?</FormHeading>
 *      <RadioGroup
 *          name="gandalf_robe"
 *          defaultValue="gray"
 *      >
 *          <FormControlLabel
 *              control={<Radio id="radio_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_both" value="both" />}
 *              label="Both"
 *          />
 *      </RadioGroup>
 *      <FormHelperText>Select the right answer</FormHelperText>
 *  </FormControl>
 */

var Radio = /*#__PURE__*/React.forwardRef(function Radio(_ref, ref) {
  var checkedProp = _ref.checked,
      children = _ref.children,
      defaultChecked = _ref.defaultChecked,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      nameProp = _ref.name,
      onChangeProp = _ref.onChange,
      value = _ref.value,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Radio'); // Use Radio Group Hook to manage Context of <RadioGroup>

  var radioGroup = useRadioGroup(); // Chain `checked` and `name` from <RadioGroup>

  var checked = checkedProp;
  var onChange = createChainedFunction(onChangeProp, radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.onChange);
  var name = nameProp; // If using <RadioGroup>,

  if (radioGroup) {
    // Sync `checked` value from <RadioGroup>
    if (typeof checked === 'undefined' && typeof defaultChecked === 'undefined') {
      checked = radioGroup.value === value;
    } // Sync `name` value from <RadioGroup>


    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }
  /**
   * Layout:
   *
   *  <RadioWrapper>
   *      <input />
   *      <label />
   *  </RadioWrapper>
   */


  return /*#__PURE__*/React.createElement(RadioWrapper, wrapperProps, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: id,
    "aria-label": id,
    name: name,
    value: value,
    className: classNames("backyard radio", className, checked && "checked", disabled && "disabled"),
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "radio-indicator"
  }, children));
});
Radio.bdsName = 'Radio';
export { Radio };
export default Radio;