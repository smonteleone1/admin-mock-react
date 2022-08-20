"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatePickerNative = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _SelectPicker = _interopRequireDefault(require("../Pickers/SelectPicker"));

var _TextPicker = _interopRequireDefault(require("../Pickers/TextPicker"));

var _types = require("../Pickers/typings/types");

var _useAdapter = _interopRequireDefault(require("../Pickers/hooks/useAdapter"));

var _ThemeProvider = require("../ThemeProvider");

var _excluded = ["date", "dates", "optionsLabel", "onChange", "withCustom", "shape", "alwaysShowMask"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Date Picker Native
 *
 * `DatePickerNative` is used for selecting dates from a calendar through the native browser.
 * It is only intended to be used in mobile-only environments to save data size.
 *
 * The text input of the picker uses `type` === 'date'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePickerNative />
 * ```
 * > This Date Picker gives the user a text `input` with `type` === 'date'
 * > For browsers that don't support `type` === 'date', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a `select`
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePickerNative
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *  />
 * ```
 * > This Date Picker gives the user a text `input`
 * > On mobile displays, uses the native `date` input
 *  >> NOTE: mobile browsers will utilize `minDate` and `maxDate`
 *
 * The props `date`, `minDate`, `maxDate`, and `disabledDates` all use the `ParsableDate` type
 * They can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *
 * The prop `dates` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Today, July 19, 2020',
 *      value: '2020-07-19' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Today, July 19, 2020',
 *      start: '2020-07-19' // Can be any `ParsableDate`
 *      end: '2020-07-20' // Can be any `ParsableDate`
 *  }
 */
var DatePickerNative = /*#__PURE__*/React.forwardRef(function DatePickerNative(_ref, ref) {
  var dateProp = _ref.date,
      datesProp = _ref.dates,
      _ref$optionsLabel = _ref.optionsLabel,
      optionsLabel = _ref$optionsLabel === void 0 ? '' : _ref$optionsLabel,
      onChange = _ref.onChange,
      _ref$withCustom = _ref.withCustom,
      withCustom = _ref$withCustom === void 0 ? false : _ref$withCustom,
      shapeProp = _ref.shape,
      alwaysShowMask = _ref.alwaysShowMask,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'DatePickerNative'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Holds the date adapter

  var adapter = (0, _useAdapter["default"])(); // Parse date from date prop

  var date = adapter.parse(dateProp, 'yyyy-MM-dd');
  /**
   * Handles the select change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event - change event
   * @param info - info from `SelectPicker` onChange trigger
   */

  var handleSelectChange = function handleSelectChange(event, info) {
    if (onChange) {
      onChange(event, (0, _extends2["default"])({
        from: 'SelectPicker'
      }, info));
    }
  };
  /**
   * Handles the text input change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event - change event
   * @param value - info from `TextPicker` onChange trigger
   */


  var handleTextChange = function handleTextChange(event, value) {
    // Parse date value from masked input
    // eslint-disable-next-line no-shadow
    var date = adapter.parse(value, 'MM/dd/yyyy');

    if (onChange) {
      onChange(event, {
        from: 'TextPicker',
        value: value,
        date: date || null
      });
    }
  };
  /**
   * Handles the select mouse down interaction event
   *
   * @param event
   */


  var handleSelectMouseDown = function handleSelectMouseDown(event) {
    // If desktop view and using with a custom DatePicker
    if (withCustom) {
      // Prevent default mousedown
      event.preventDefault();
      var target = event.target; // Force focus target

      target.focus();
    }
  };

  var picker; // If `dates` list defined,

  if (datesProp) {
    // Parse dates from `dates` prop
    // eslint-disable-next-line no-shadow
    var dates = datesProp.map(function (date) {
      // If already is `ParsableDateObject` type,
      if ((0, _types.isParsableDateObject)(date)) {
        // No change needed
        return date;
      } // Else, is a `ParsableDate` and needs formatting


      var parsedDate = adapter.parse(date, 'yyyy-MM-dd'); // Convert to `ParsableDateObject` with value and flavor label

      return {
        label: adapter.format(parsedDate, 'EEE MMM do, yyyy'),
        value: date
      };
    });
    /**
     * Layout:
     *  <Select>
     *      <Option />
     *      ...
     *  </Select>
     */

    picker = /*#__PURE__*/React.createElement(_SelectPicker["default"], (0, _extends2["default"])({
      type: "date",
      options: dates,
      optionsLabel: optionsLabel,
      readOnly: withCustom,
      onChange: handleSelectChange,
      onMouseDown: handleSelectMouseDown,
      shape: shape
    }, props, {
      value: date ? adapter.format(date, 'yyyy-MM-dd') : '',
      ref: ref
    }));
  } else {
    /**
     * Layout:
     *  <TextInput />
     */
    picker = /*#__PURE__*/React.createElement(_TextPicker["default"], (0, _extends2["default"])({
      type: "date",
      onChange: handleTextChange,
      shape: shape,
      alwaysShowMask: alwaysShowMask
    }, props, {
      value: date ? adapter.format(date, 'yyyy-MM-dd') : '',
      ref: ref
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "datepicker-native"
  }, picker);
});
exports.DatePickerNative = DatePickerNative;
DatePickerNative.bdsName = 'DatePickerNative';
var _default = DatePickerNative;
exports["default"] = _default;