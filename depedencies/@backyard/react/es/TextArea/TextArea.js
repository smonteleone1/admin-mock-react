import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["id", "className", "rows", "max", "label", "onChange", "state", "defaultValue", "value", "helperText", "resizer", "type", "shape", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import TextInput from '../TextInput';
import FormHelperText from '../FormHelperText';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import TextAreaWrapper from './styles/TextAreaWrapper';
/**
 * Backyard React Text Area
 *
 * Standard text area that extends `TextInput` for functionality.
 * TextArea is different from `TextField`, `Search`, etc. because it is wrapper in `FormControl`
 * in order to place the helper text on the same line as the counter.
 *
 *  <TextArea label="Label" max={500} />
 *
 * To include helper text, use `helperText` prop
 *
 *  <TextArea
 *      label="Comment"
 *      rows={10}
 *      max={2000}
 *      helperText="Type a comment here"
 *  />
 */

const TextArea = /*#__PURE__*/React.forwardRef(function TextArea(_ref, ref) {
  let {
    id,
    className,
    rows = 4,
    max,
    label = 'Label',
    onChange,
    state: stateProp,
    defaultValue,
    value,
    resizer = false,
    type = 'textarea',
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
    name: 'TextArea'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Count characters

  const [count, setCount] = React.useState(0); // Hold state for error or success

  const [state, setState] = React.useState(stateProp || 'default'); // Hold forwarded ref

  const innerRef = useForwardedRef(ref);
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Handle <textarea /> `onChange` event
   * Updates the current value and checks the length of the value
   * Triggers `onChange` prop function if defined
   *
   * @param {Event} event
   */


  const handleChange = event => {
    // Update count
    setCount(event.target.value.length); // If max defined and length of value is greater than,

    if (max && event.target.value.length > max) {
      // Set state to error
      setState('error'); // Else if state is already error (and not greater than),
    } else if (state === 'error') {
      // Set state back to default
      setState(stateProp || 'default');
    } // If `onChange` function defined,


    if (typeof onChange === 'function') {
      // Trigger `onChange`
      onChange(getEvent(event), innerRef.current.value);
    }
  }; // Side effect for when the `value` or `defaultValue` prop changes...


  React.useEffect(() => {
    // If `value` prop is defined,
    if (typeof value !== 'undefined') {
      // Count new `value` length
      setCount(value.length); // Else if `defaultValue` prop changes,
    } else if (typeof defaultValue !== 'undefined') {
      // Count new `defaultValue` length
      setCount(defaultValue.length);
    }
  }, [value, defaultValue]); // Side effect when stateProp changes...

  React.useEffect(() => {
    // If stateProp defined, and current state does not equal state prop,
    if (stateProp && state !== stateProp) {
      // Force state to be overridden by prop
      setState(stateProp);
    }
  }, [stateProp]);
  /**
   * Layout:
   *
   *  <TextAreaWrapper>
   *      <FormControl>
   *          <TextInput />
   *          <div>
   *              <FormHelperText 'helper-text' />
   *              <FormHelperText 'helper-counter' />
   *          </div>
   *      </FormControl>
   *  </TextAreaWrapper>
   */

  return /*#__PURE__*/React.createElement(TextAreaWrapper, _extends({
    rows: rows,
    resize: resizer ? 'vertical' : 'none',
    max: max
  }, wrapperProps), /*#__PURE__*/React.createElement(TextInput, _extends({
    id: id,
    className: classNames('textarea', className),
    onChange: handleChange,
    defaultValue: defaultValue,
    value: value,
    state: state,
    label: label,
    type: type,
    rows: rows,
    shape: shape
  }, props, {
    ref: innerRef
  })), max ? /*#__PURE__*/React.createElement(FormHelperText, {
    className: classNames('helper-counter', state)
  }, `${count} / ${max}`) : null);
});
TextArea.bdsName = 'TextArea';
export { TextArea };
export default TextArea;