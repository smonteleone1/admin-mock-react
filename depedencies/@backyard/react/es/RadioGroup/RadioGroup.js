import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "defaultValue", "name", "value", "onChange"];
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
const RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup(_ref, ref) {
  let {
    children,
    defaultValue,
    name,
    value: valueProp,
    onChange
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'RadioGroup'); // Reference <FormControl>

  const rootRef = React.useRef(null); // Use Controlled to manage Uncontrolled behavior of the state of value
  // Determined through default value

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: `Backyard->RadioGroup->[name="${name}"]`
  }); // Fork forwarded ref and <FormControl> ref

  const handleRef = useForkRef(ref, rootRef);
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */

  const handleChange = event => {
    // Set value from target
    setValue(event.target.value); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` function
      // Provides `Event` type and current target value
      onChange(event, event.target.value);
    }
  };

  const radioGroupValue = {
    name,
    onChange: handleChange,
    value,
    defaultValue
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