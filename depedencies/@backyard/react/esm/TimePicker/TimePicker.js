import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["open", "openKeys", "closeKeys", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onKeyDown", "onClear", "state", "shape", "step", "times", "time", "render", "listPickerProps", "popoverProps", "popperProps", "clearButtonProps"];
import * as React from 'react';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import TimePickerNative from '../TimePickerNative';
import ClickAwayListener from '../ClickAwayListener';
import Popover, { usePopover } from '../Popover';
import ListPicker from '../Pickers/ListPicker';
import useAdapter from '../Pickers/hooks/useAdapter';
import { useBackyardTheme, getShape } from '../ThemeProvider';

var isArrayString = function isArrayString(str) {
  return str && str.match(/^\[.*\]$/);
};
/**
 * Backyard React Time Picker
 *
 * `TimePicker` is used for selecting times from a timepicker through the browser.
 * It provides a list selector popover for the user to select from, or a native time input/select.
 *
 * The text input of the picker uses `type` === 'time'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Time Picker with all times selectable, use the default:
 * ```
 *  <TimePicker />
 * ```
 * > This Time Picker gives the user a text `input` with `type` === 'time'
 * > For browsers that don't support `type` === 'time', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a time picker that only allows the user to select certain times, use the `times` prop:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          { label: '8:00 AM', value: '08:00' },
 *          { label: '9:15 AM', value: '09:15' },
 *          { label: '9:45 AM', value: '09:45' }
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          '08:00',
 *          '09:15',
 *          '09:45
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          new Date(2020, 06, 19, 8, 0),
 *          new Date(2020, 06, 19, 9, 15),
 *          new Date(2020, 06, 19, 9, 45)
 *      ]}
 *  />
 * ```
 * > This Time Picker gives the user a `select` and a list select popover
 * > `times` can take a list of `Date`s, time strings ('HH:mm' - 24h format), or an option object for custom labels with the value
 *
 * For a less defined time picker that has a min, max, and some disabled times in between, you can also use:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      min="8:00"
 *      max="12:00"
 *  />
 * ```
 * > This Time Picker gives the user a text `input` and a list selector input
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


var TimePicker = /*#__PURE__*/React.forwardRef(function TimePicker(_ref, ref) {
  var _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [' ', 'ArrowUp', 'ArrowDown', 'Enter'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onKeyDown = _ref.onKeyDown,
      onClear = _ref.onClear,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'default' : _ref$state,
      shapeProp = _ref.shape,
      _ref$step = _ref.step,
      stepProp = _ref$step === void 0 ? 3600 : _ref$step,
      timesProp = _ref.times,
      timeProp = _ref.time,
      renderProp = _ref.render,
      listPickerProps = _ref.listPickerProps,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$clearButtonProps = _ref.clearButtonProps,
      clearButtonProps = _ref$clearButtonProps === void 0 ? {} : _ref$clearButtonProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'TimePicker'
  });
  var isDesktop = theme.isDesktop;
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Calculate memoized props

  var context = React.useMemo(function () {
    return {
      render: renderProp,
      open: openProp,
      time: timeProp,
      times: timesProp,
      step: stepProp
    };
  }, [renderProp, openProp, timeProp, timesProp, stepProp]); // Holds the date adapter

  var adapter = useAdapter(); // Parse time from time prop

  var parsedTime = adapter.parse(timeProp, 'HH:mm'); // Holds the container ref for picker

  var containerRef = React.useRef(null); // Holds the native picker ref for the anchor element of the popover

  var pickerRef = useForwardedRef(ref); // Holds the list picker ref popover

  var listRef = React.useRef(null); // Holds the state of the picker element for the anchor of the popover

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pickerElement = _React$useState2[0],
      setPickerElement = _React$useState2[1]; // Holds the current time state


  var _React$useState3 = React.useState(typeof timeProp === 'string' && isArrayString(timeProp) ? timeProp : timeProp ? adapter.format(parsedTime, 'HH:mm') : null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      time = _React$useState4[0],
      setTime = _React$useState4[1]; // Holds the state of the native picker


  var _React$useState5 = React.useState(stateProp),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1]; // Use Popover hook for open/close state handling


  var _usePopover = usePopover({
    containerRef: containerRef,
    referenceElement: pickerElement,
    delayClose: delayClose,
    delayOpen: delayOpen,
    closeKeys: closeKeys,
    openKeys: openKeys,
    open: openProp,
    onOpen: onOpen,
    onClose: onClose,
    onKeyDown: onKeyDown
  }),
      open = _usePopover.open,
      handleOpen = _usePopover.handleOpen,
      handleClose = _usePopover.handleClose,
      handleKeyDown = _usePopover.handleKeyDown,
      closeAfterDelay = _usePopover.closeAfterDelay;
  /**
   * Parses time from input
   *
   * @param time
   */
  // eslint-disable-next-line no-shadow


  var parseTime = function parseTime(time) {
    // Parse time in 12h format
    var date = adapter.parse(time, 'hh:mm aa'); // If invalid,

    if (!date) {
      // Parse time in 24h format
      date = adapter.parse(time, 'HH:mm');
    } // Return time in 24h format if valid


    return adapter.isValid(date) ? adapter.format(date, 'HH:mm') : null;
  };
  /**
   * Handle times from array of strings or just single string
   *
   * @param time
   */
  // eslint-disable-next-line no-shadow


  var handleTimes = function handleTimes(time) {
    return (// Is an array of times?
      Array.isArray(time) ? // Range of times
      time.map(function (val) {
        return parseTime(val);
      }) : // Single time
      parseTime(time)
    );
  };
  /**
   * Handle native change interaction event
   *
   * Triggers `onChange` if defined
   *
   * @param event
   * @param info - info change object from `SelectPicker` or `TextPicker`
   */


  var handleNativeChange = function handleNativeChange(event, info) {
    // Calculate times from info
    // eslint-disable-next-line no-shadow
    var time = handleTimes(info.time); // Check array of times

    var value = time ? Array.isArray(time) ? JSON.stringify(time) : time : info.value; // Set new time

    setTime(value); // If `onChange` and time valid,

    if (onChange && time) {
      // Trigger `onChange`
      onChange(event, _extends({}, info, {
        value: value,
        time: time
      }));
    }
  };
  /**
   * Handle list picker change interaction event
   *
   * Trigger `onChange` if defined
   *
   * @param event
   * @param info - info change object from `ListPicker`
   */


  var handleListChange = function handleListChange(event, info) {
    // Set new time
    setTime(info.value); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(event, _extends({}, info, {
        from: 'ListPicker'
      }));
    } // Close list on list change


    closeAfterDelay();
  };
  /**
   * Handles `onClick` event for clear button
   *
   * @param event - click event from clear button
   */


  var handleClear = function handleClear(event) {
    // Reset time
    setTime(null); // Close picker after selection

    closeAfterDelay();

    if (onClear) {
      onClear(event);
    }
  }; // Side effect to handle when `time` changes externally


  React.useEffect(function () {
    // eslint-disable-next-line no-shadow
    var parsedTime = adapter.parse(timeProp, 'HH:mm');
    setTime(typeof timeProp === 'string' && isArrayString(timeProp) ? timeProp : timeProp ? adapter.format(parsedTime, 'HH:mm') : null);
  }, [timeProp]); // Side effect to handle when `state` changes externally

  React.useEffect(function () {
    return setState(stateProp);
  }, [stateProp]); // Side effect for when desktop/mobile view and native picker changes ref

  React.useEffect(function () {
    return setPickerElement(pickerRef.current);
  }, [isDesktop, pickerRef]); // Side effect to check for valid time value selected

  React.useEffect(function () {
    // Check desktop view, valid time, and list ref
    if (isDesktop && adapter.parse(time, 'HH:mm') && listRef && listRef.current) {
      setState(listRef.current.querySelector('.selected') ? 'default' : 'error');
    } else {
      setState('default');
    }
  }, [time]); // Alters rendered type of component

  var renderType = // If render type is not native,
  context.render !== 'native' ? {
    // Calculate whether render is set to custom or if automated switch is triggered
    disableNative: context.render === 'custom' || isDesktop
  } : {
    // Don't disable native if native type is given
    disableNative: false
  };
  /**
   * Layout:
   *  <div> // Click away listener listens for any click outside this div
   *      <TimePickerNative />
   *      <Popover> // Removes from DOM on mobile view
   *          <ListPicker />
   *      </Popover>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "picker timepicker",
    ref: containerRef
  }, /*#__PURE__*/React.createElement(TimePickerNative, _extends({
    key: "picker",
    withCustom: renderType.disableNative,
    state: state,
    shape: shape,
    step: context.step
  }, renderType, {
    className: open ? "focus" : "",
    textWrapperProps: {
      className: open ? 'interaction--active' : ''
    },
    onClick: handleOpen,
    onKeyDown: handleKeyDown,
    onChange: handleNativeChange,
    time: time || '' // When value is null/falsy, just show an empty string
    ,
    times: context.times,
    onClear: handleClear,
    clearButtonProps: clearButtonProps
  }, props, {
    // @todo
    ref: pickerRef
  })), context.times && renderType.disableNative && pickerElement ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: true,
    keepMounted: true,
    open: open,
    anchorEl: pickerElement,
    offset: [0, 10],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "timepicker-popover shape--".concat(shape)
    }, /*#__PURE__*/React.createElement(ListPicker, _extends({
      type: "time",
      value: time || '',
      options: context.times,
      shape: shape,
      onChange: handleListChange,
      enableGlobalKeyDown: open
    }, listPickerProps, {
      ref: listRef
    })))
  }, popoverProps, popperProps)) : null));
});
TimePicker.bdsName = 'TimePicker';
export { TimePicker };
export default TimePicker;