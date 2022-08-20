"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimePickerNative = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _SelectPicker = _interopRequireDefault(require("../Pickers/SelectPicker"));

var _TextPicker = _interopRequireDefault(require("../Pickers/TextPicker"));

var _types = require("../Pickers/typings/types");

var _useAdapter = _interopRequireDefault(require("../Pickers/hooks/useAdapter"));

var _ThemeProvider = require("../ThemeProvider");

var _excluded = ["step", "time", "times", "minTime", "maxTime", "onChange", "optionsLabel", "shape", "withCustom"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isArrayString = function isArrayString(str) {
  return str.match(/^\[.*\]$/);
};
/**
 * Backyard React Time Picker Native
 *
 * `TimePickerNative` is used for selecting times from a timepicker through the native browser.
 * It is only intended to be used in mobile-only environments to save data size.
 *
 * The text input of the picker uses `type` === 'time'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Time Picker with all times selectable, use the default:
 * ```
 *  <TimePickerNative />
 * ```
 * > This Time Picker gives the user a text `input` with `type` === 'time'
 * > For browsers that don't support `type` === 'time', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a time picker that only allows the user to select certain times, use the `times` prop:
 * ```
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          { label: '8:00 AM', value: '08:00' },
 *          { label: '9:15 AM', value: '09:15' },
 *          { label: '9:45 AM', value: '09:45' }
 *      ]}
 *  />
 *  // Or...
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          '08:00',
 *          '09:15',
 *          '09:45
 *      ]}
 *  />
 *  // Or...
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          new Date(2020, 06, 19, 8, 0),
 *          new Date(2020, 06, 19, 9, 15),
 *          new Date(2020, 06, 19, 9, 45)
 *      ]}
 *  />
 * ```
 * > This Time Picker gives the user a `select`
 * > `times` can take a list of `Date`s, time strings ('HH:mm' - 24h format), or an option object for custom labels with the value
 *
 * For a less defined time picker that has a min, max, and some disabled times in between, you can also use:
 * ```
 *  <TimePickerNative
 *      label="Record Time"
 *      min="8:00"
 *      max="12:00"
 *  />
 * ```
 * > This Time Picker gives the user a text `input`
 * > On mobile displays, uses the native `time` input
 *  >> NOTE: mobile browsers will utilize `min` and `max`
 *
 * The prop `time` uses the `ParsableDate` type
 * It can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *
 * The prop `times` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Now, 8:00 AM',
 *      value: '08:00' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Afternoon, 12:00 PM - 1:00 PM',
 *      start: '12:00' // Can be any `ParsableDate`
 *      end: '13:00' // Can be any `ParsableDate`
 *  }
 */


var TimePickerNative = /*#__PURE__*/React.forwardRef(function TimePickerNative(_ref, ref) {
  var _ref$step = _ref.step,
      step = _ref$step === void 0 ? 3600 : _ref$step,
      timeProp = _ref.time,
      times = _ref.times,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      onChange = _ref.onChange,
      _ref$optionsLabel = _ref.optionsLabel,
      optionsLabel = _ref$optionsLabel === void 0 ? 'Select a time' : _ref$optionsLabel,
      shapeProp = _ref.shape,
      _ref$withCustom = _ref.withCustom,
      withCustom = _ref$withCustom === void 0 ? false : _ref$withCustom,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TimePickerNative'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Hold the date adapter

  var adapter = (0, _useAdapter["default"])(); // Calculate if parsable date is date range

  var isRangeList = Boolean(times && (0, _types.isParsableDateRange)(times[0]) && times[0].start); // Parse time from time prop

  var time = timeProp && isArrayString(String(timeProp)) ? String(timeProp) : adapter.parse(timeProp, 'HH:mm');
  /**
   * Handle select mouse down interaction event
   *
   * @param event
   */

  var handleSelectMouseDown = function handleSelectMouseDown(event) {
    // If view is desktop and custom time picker,
    if (withCustom) {
      // Prevent default mousedown
      event.preventDefault();
      var target = event.target; // Force focus on picker

      target.focus();
    }
  }; // Set value to time if 'string'


  var value = typeof time === 'string' ? time : // Else if time defined,
  time ? // Format time
  adapter.format(time, 'HH:mm') : // Else use empty string to keep input controlled
  '';
  /**
   * Handle select change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event
   * @param info - info object from `SelectPicker` change
   */

  var handleSelectChange = function handleSelectChange(event, info) {
    if (onChange) {
      onChange(event, (0, _extends2["default"])({
        from: 'SelectPicker'
      }, info));
    }
  };
  /**
   * Handle text change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event
   * @param value - info object from `TextPicker` change
   */
  // eslint-disable-next-line no-shadow


  var handleTextChange = function handleTextChange(event, value) {
    if (onChange) {
      onChange(event, {
        from: 'TextPicker',
        value: value,
        time: value
      });
    }
  };

  var picker; // If `times` prop or is a range list,

  if (times || isRangeList) {
    /**
     * Layout:
     *  <Select>
     *      <Option />
     *      ...
     *  </Select>
     */
    picker = /*#__PURE__*/React.createElement(_SelectPicker["default"], (0, _extends2["default"])({
      type: "time",
      value: value,
      options: times,
      optionsLabel: optionsLabel,
      onChange: handleSelectChange,
      onMouseDown: handleSelectMouseDown,
      readOnly: withCustom,
      shape: shape
    }, props, {
      ref: ref
    }));
  } else {
    /**
     * Layout:
     *  <TextInput />
     */
    picker = /*#__PURE__*/React.createElement(_TextPicker["default"], (0, _extends2["default"])({
      type: "time",
      value: value,
      step: step,
      onChange: handleTextChange,
      min: minTime,
      max: maxTime,
      shape: shape
    }, props, {
      ref: ref
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "timepicker-native"
  }, picker);
});
exports.TimePickerNative = TimePickerNative;
TimePickerNative.bdsName = 'TimePickerNative';
var _default = TimePickerNative;
exports["default"] = _default;