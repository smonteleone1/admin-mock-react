import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "defaultValue", "name", "value", "onChange"];
import * as React from 'react';
import FormGroup from '../FormGroup';
import useForkRef from '../utils/hooks/useForkRef';
import useControlled from '../utils/hooks/useControlled';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import RadioGroupContext from './RadioGroupContext';

/**
 * Backyard React Radio Group
 *
 * `RadioGroup` allows for grouping radio inputs and syncing them together.
 * It extends from `FormGroup` to provide extra functionality for `Radio` components.
 *
 * For `Checkbox` or `Switch` it is recommended to use `FormGroup`.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading</FormHeading>
 *      <RadioGroup
 *          name="radios"
 *          defaultValue="2"
 *          direction="row"
 *      >
 *          <FormControlLabel
 *              control={<Radio value="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
var RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup(_ref, ref) {
  var children = _ref.children,
      defaultValue = _ref.defaultValue,
      name = _ref.name,
      valueProp = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'RadioGroup'); // Reference <FormControl>

  var rootRef = React.useRef(null); // Use Controlled to manage Uncontrolled behavior of the state of value
  // Determined through default value

  var _useControlled = useControlled({
    controlled: valueProp,
    "default": defaultValue,
    name: "Backyard->RadioGroup->[name=\"".concat(name, "\"]")
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1]; // Fork forwarded ref and <FormControl> ref


  var handleRef = useForkRef(ref, rootRef);
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  var handleChange = function handleChange(event) {
    // Set value from target
    setValue(event.target.value); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` function
      // Provides `Event` type and current target value
      onChange(event, event.target.value);
    }
  };

  var radioGroupValue = {
    name: name,
    onChange: handleChange,
    value: value,
    defaultValue: defaultValue
  };
  /**
   * Layout:
   *
   *  <RadioGroupContext.Provider>
   *      <FormGroup>
   *          ...
   *      </FormGroup>
   *  </RadioGroupContext.Provider>
   */

  return /*#__PURE__*/React.createElement(RadioGroupContext.Provider, {
    value: radioGroupValue
  }, /*#__PURE__*/React.createElement(FormGroup, _extends({
    role: "radiogroup",
    ref: handleRef
  }, props), children));
});
RadioGroup.bdsName = 'RadioGroup';
export { RadioGroup };
export default RadioGroup;