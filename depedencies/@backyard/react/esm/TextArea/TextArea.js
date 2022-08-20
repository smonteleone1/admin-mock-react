import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["id", "className", "rows", "max", "label", "onChange", "state", "defaultValue", "value", "helperText", "resizer", "type", "shape", "wrapperProps"];
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

var TextArea = /*#__PURE__*/React.forwardRef(function TextArea(_ref, ref) {
  var id = _ref.id,
      className = _ref.className,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 4 : _ref$rows,
      max = _ref.max,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      onChange = _ref.onChange,
      stateProp = _ref.state,
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      helperText = _ref.helperText,
      _ref$resizer = _ref.resizer,
      resizer = _ref$resizer === void 0 ? false : _ref$resizer,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'textarea' : _ref$type,
      shapeProp = _ref.shape,
      wrapperProps = _ref.wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'TextArea'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Count characters

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1]; // Hold state for error or success


  var _React$useState3 = React.useState(stateProp || 'default'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1]; // Hold forwarded ref


  var innerRef = useForwardedRef(ref);
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


  var handleChange = function handleChange(event) {
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


  React.useEffect(function () {
    // If `value` prop is defined,
    if (typeof value !== 'undefined') {
      // Count new `value` length
      setCount(value.length); // Else if `defaultValue` prop changes,
    } else if (typeof defaultValue !== 'undefined') {
      // Count new `defaultValue` length
      setCount(defaultValue.length);
    }
  }, [value, defaultValue]); // Side effect when stateProp changes...

  React.useEffect(function () {
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
  }, "".concat(count, " / ").concat(max)) : null);
});
TextArea.bdsName = 'TextArea';
export { TextArea };
export default TextArea;