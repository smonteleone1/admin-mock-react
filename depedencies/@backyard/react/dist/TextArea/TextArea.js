"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextArea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _ThemeProvider = require("../ThemeProvider");

var _TextAreaWrapper = _interopRequireDefault(require("./styles/TextAreaWrapper"));

var _excluded = ["id", "className", "rows", "max", "label", "onChange", "state", "defaultValue", "value", "helperText", "resizer", "type", "shape", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextArea'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Count characters

  var _React$useState = React.useState(0),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1]; // Hold state for error or success


  var _React$useState3 = React.useState(stateProp || 'default'),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1]; // Hold forwarded ref


  var innerRef = (0, _useForwardedRef["default"])(ref);
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

  return /*#__PURE__*/React.createElement(_TextAreaWrapper["default"], (0, _extends2["default"])({
    rows: rows,
    resize: resizer ? 'vertical' : 'none',
    max: max
  }, wrapperProps), /*#__PURE__*/React.createElement(_TextInput["default"], (0, _extends2["default"])({
    id: id,
    className: (0, _classnames["default"])('textarea', className),
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
  })), max ? /*#__PURE__*/React.createElement(_FormHelperText["default"], {
    className: (0, _classnames["default"])('helper-counter', state)
  }, "".concat(count, " / ").concat(max)) : null);
});
exports.TextArea = TextArea;
TextArea.bdsName = 'TextArea';
var _default = TextArea;
exports["default"] = _default;