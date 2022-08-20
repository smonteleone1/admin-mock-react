import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["step", "time", "times", "minTime", "maxTime", "onChange", "optionsLabel", "shape", "withCustom"];
import * as React from 'react';
import SelectPicker from '../Pickers/SelectPicker';
import TextPicker from '../Pickers/TextPicker';
import { isParsableDateRange } from '../Pickers/typings/types';
import useAdapter from '../Pickers/hooks/useAdapter';
import { useBackyardTheme, getShape } from '../ThemeProvider';

const isArrayString = str => str.match(/^\[.*\]$/);
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


const TimePickerNative = /*#__PURE__*/React.forwardRef(function TimePickerNative(_ref, ref) {
  let {
    step = 3600,
    time: timeProp,
    times,
    minTime,
    maxTime,
    onChange,
    optionsLabel = 'Select a time',
    shape: shapeProp,
    // = 'rounded',
    withCustom = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'TimePickerNative'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Hold the date adapter

  const adapter = useAdapter(); // Calculate if parsable date is date range

  const isRangeList = Boolean(times && isParsableDateRange(times[0]) && times[0].start); // Parse time from time prop

  const time = timeProp && isArrayString(String(timeProp)) ? String(timeProp) : adapter.parse(timeProp, 'HH:mm');
  /**
   * Handle select mouse down interaction event
   *
   * @param event
   */

  const handleSelectMouseDown = event => {
    // If view is desktop and custom time picker,
    if (withCustom) {
      // Prevent default mousedown
      event.preventDefault();
      const target = event.target; // Force focus on picker

      target.focus();
    }
  }; // Set value to time if 'string'


  const value = typeof time === 'string' ? time : // Else if time defined,
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

  const handleSelectChange = (event, info) => {
    if (onChange) {
      onChange(event, _extends({
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


  const handleTextChange = (event, value) => {
    if (onChange) {
      onChange(event, {
        from: 'TextPicker',
        value,
        time: value
      });
    }
  };

  let picker; // If `times` prop or is a range list,

  if (times || isRangeList) {
    /**
     * Layout:
     *  <Select>
     *      <Option />
     *      ...
     *  </Select>
     */
    picker = /*#__PURE__*/React.createElement(SelectPicker, _extends({
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
    picker = /*#__PURE__*/React.createElement(TextPicker, _extends({
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
TimePickerNative.bdsName = 'TimePickerNative';
export { TimePickerNative };
export default TimePickerNative;