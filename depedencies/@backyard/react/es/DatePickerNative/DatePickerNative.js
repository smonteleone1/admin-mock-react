import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["date", "dates", "optionsLabel", "onChange", "withCustom", "shape", "alwaysShowMask"];
import * as React from 'react';
import SelectPicker from '../Pickers/SelectPicker';
import TextPicker from '../Pickers/TextPicker';
import { isParsableDateObject } from '../Pickers/typings/types';
import useAdapter from '../Pickers/hooks/useAdapter';
import { useBackyardTheme, getShape } from '../ThemeProvider';
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

const DatePickerNative = /*#__PURE__*/React.forwardRef(function DatePickerNative(_ref, ref) {
  let {
    date: dateProp,
    dates: datesProp,
    optionsLabel = '',
    onChange,
    withCustom = false,
    shape: shapeProp,
    // = 'rounded',
    alwaysShowMask
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'DatePickerNative'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Holds the date adapter

  const adapter = useAdapter(); // Parse date from date prop

  const date = adapter.parse(dateProp, 'yyyy-MM-dd');
  /**
   * Handles the select change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event - change event
   * @param info - info from `SelectPicker` onChange trigger
   */

  const handleSelectChange = (event, info) => {
    if (onChange) {
      onChange(event, _extends({
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


  const handleTextChange = (event, value) => {
    // Parse date value from masked input
    // eslint-disable-next-line no-shadow
    const date = adapter.parse(value, 'MM/dd/yyyy');

    if (onChange) {
      onChange(event, {
        from: 'TextPicker',
        value,
        date: date || null
      });
    }
  };
  /**
   * Handles the select mouse down interaction event
   *
   * @param event
   */


  const handleSelectMouseDown = event => {
    // If desktop view and using with a custom DatePicker
    if (withCustom) {
      // Prevent default mousedown
      event.preventDefault();
      const target = event.target; // Force focus target

      target.focus();
    }
  };

  let picker; // If `dates` list defined,

  if (datesProp) {
    // Parse dates from `dates` prop
    // eslint-disable-next-line no-shadow
    const dates = datesProp.map(date => {
      // If already is `ParsableDateObject` type,
      if (isParsableDateObject(date)) {
        // No change needed
        return date;
      } // Else, is a `ParsableDate` and needs formatting


      const parsedDate = adapter.parse(date, 'yyyy-MM-dd'); // Convert to `ParsableDateObject` with value and flavor label

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

    picker = /*#__PURE__*/React.createElement(SelectPicker, _extends({
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
    picker = /*#__PURE__*/React.createElement(TextPicker, _extends({
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
DatePickerNative.bdsName = 'DatePickerNative';
export { DatePickerNative };
export default DatePickerNative;