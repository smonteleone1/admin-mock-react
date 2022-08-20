"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatePicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _DatePickerNative = _interopRequireDefault(require("../DatePickerNative"));

var _ClickAwayListener = _interopRequireDefault(require("../ClickAwayListener"));

var _Popover = _interopRequireWildcard(require("../Popover"));

var _ThemeProvider = require("../ThemeProvider");

var _CalendarPicker = _interopRequireDefault(require("../Pickers/CalendarPicker"));

var _useAdapter = _interopRequireDefault(require("../Pickers/hooks/useAdapter"));

var _DatePickerWrapper = _interopRequireDefault(require("./styles/DatePickerWrapper"));

var _excluded = ["open", "openKeys", "closeKeys", "delayClose", "delayOpen", "minDate", "maxDate", "date", "dates", "disableDates", "disableFuture", "disablePast", "render", "state", "shape", "onChange", "onOpen", "onClose", "onKeyDown", "onClear", "calendarProps", "popoverProps", "popperProps", "clearButtonProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Date Picker
 *
 * `DatePicker` is used for selecting dates from a calendar, either through
 * the native date picker for mobile devices, or through a custom calendar popover.
 *
 * The text input of the picker uses `type` === 'date' for supporting browser, while gracefully
 * defaulting to a `text` input type with masking to help the user enter the correct date.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePicker />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select any date
 * > On Mobile displays, this component switches to an `input` with `type` === 'date' for native browsers
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a read-only `select` and a calendar popover to use to select only the dates provided
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 * > On mobile displays, removes the popover and uses the native `select` to select the date
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *      disableDates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select and dates that are not disabled
 * > `disableDates`, `minDate`, and `maxDate` can take a list of `Date`s, date strings ('yyyy-MM-dd')
 * > On mobile displays, removes the popover and uses the native `date` input
 *  >> NOTE: mobile browsers do not utilize `disableDates`, but will utilize `minDate` and `maxDate`
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
var DatePicker = /*#__PURE__*/React.forwardRef(function DatePicker(_ref, ref) {
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
      minDateProp = _ref.minDate,
      maxDateProp = _ref.maxDate,
      dateProp = _ref.date,
      datesProp = _ref.dates,
      disableDatesProp = _ref.disableDates,
      disableFutureProp = _ref.disableFuture,
      disablePastProp = _ref.disablePast,
      renderProp = _ref.render,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'default' : _ref$state,
      shapeProp = _ref.shape,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onKeyDown = _ref.onKeyDown,
      onClear = _ref.onClear,
      calendarProps = _ref.calendarProps,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$clearButtonProps = _ref.clearButtonProps,
      clearButtonProps = _ref$clearButtonProps === void 0 ? {} : _ref$clearButtonProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'DatePicker'
  });
  var isDesktop = theme.isDesktop;
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Calculate memoized props

  var context = React.useMemo(function () {
    return {
      render: renderProp,
      open: openProp,
      date: dateProp,
      dates: datesProp,
      disableDates: disableDatesProp,
      disableFuture: disableFutureProp,
      disablePast: disablePastProp,
      minDate: minDateProp,
      maxDate: maxDateProp
    };
  }, [renderProp, openProp, dateProp, datesProp, disableDatesProp, disableFutureProp, disablePastProp, minDateProp, maxDateProp]); // Holds date adapter

  var adapter = (0, _useAdapter["default"])(); // Parse date

  var parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd'); // Holds the container ref for picker

  var containerRef = React.useRef(null); // Holds the native picker ref for the anchor point of the popover

  var pickerRef = (0, _useForwardedRef["default"])(ref); // Holds the calendar picker ref from the popover

  var calendarRef = React.useRef(null); // Holds the current picker element set by the native picker for the anchor

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      pickerElement = _React$useState2[0],
      setPickerElement = _React$useState2[1]; // Holds state of the current date


  var _React$useState3 = React.useState(parsedDate ? adapter.format(parsedDate, 'yyyy-MM-dd') : null),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      date = _React$useState4[0],
      setDate = _React$useState4[1]; // Holds state of the current state of the native input (either 'error' or 'default')


  var _React$useState5 = React.useState(stateProp),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1]; // Parse the `minDate` and `maxDate` props if given


  var minDate = context.minDate ? adapter.parse(context.minDate) : null;
  var maxDate = context.maxDate ? adapter.parse(context.maxDate) : null; // Use Popover hook for open/close state handling

  var _usePopover = (0, _Popover.usePopover)({
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
   * Handles the native component change interaction
   *
   * @param event - change event
   * @param info - info object from either `SelectPicker` or `TextPicker`
   */


  var handleNativeChange = function handleNativeChange(event, info) {
    var value = info.value; // Parse value from text input, or handle select's date if invalid
    // eslint-disable-next-line no-shadow

    var date = adapter.parse(value, 'MM/dd/yyyy');

    if (!date) {
      date = adapter.parse(value, 'yyyy-MM-dd') || info.date;
    } // Check whether or not parsed date was valid


    var isValid = adapter.isValid(date);

    if (isValid) {
      // Reformat value from info into normalized date string
      value = adapter.format(date, 'yyyy-MM-dd');
    } // Set new date value


    setDate(value); // If `onChange` defined and is valid date,

    if (onChange && isValid) {
      // Trigger `onChange`
      onChange(event, (0, _extends2["default"])({}, info, {
        value: value
      }));
    }
  };
  /**
   * Handles the calendar change event interaction
   *
   * @param date - selected date from the `CalendarPicker`
   */
  // eslint-disable-next-line no-shadow


  var handleCalendarChange = function handleCalendarChange(date) {
    // Format normalized date string from date given
    var value = adapter.format(date, 'yyyy-MM-dd'); // Set new date value

    setDate(value); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(null, {
        from: 'CalendarPicker',
        value: value,
        date: date
      });
    } // Close picker after selection


    closeAfterDelay(); // IOS mobile devices render an overlay effect
    // when focused with the native select...
    // If not IOS device,

    if (!_reactDeviceDetect.isIOS) {
      var _pickerRef$current;

      // Keep focus on picker
      (_pickerRef$current = pickerRef.current) === null || _pickerRef$current === void 0 ? void 0 : _pickerRef$current.focus();
    }
  };
  /**
   * Handles the clear button click event interaction
   *
   * @param event - click even from clear button
   */


  var handleClear = function handleClear(event) {
    // Close picker after selection
    closeAfterDelay(); // If `onClear` prop defined,

    if (onClear) {
      // Trigger `onClear`
      onClear(event);
    }
  }; // Side effect to handle when `time` changes externally


  React.useEffect(function () {
    // eslint-disable-next-line no-shadow
    var parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd');
    setDate(parsedDate ? adapter.format(parsedDate) : null);
  }, [dateProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(function () {
    var _pickerRef$current2;

    return setPickerElement(((_pickerRef$current2 = pickerRef.current) === null || _pickerRef$current2 === void 0 ? void 0 : _pickerRef$current2.parentElement) || pickerRef.current);
  }, [isDesktop, pickerRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(function () {
    return setState(stateProp);
  }, [stateProp]); // Side effect to check whether or not a valid date was selected

  React.useEffect(function () {
    // If we are in the desktop view and the date is parsable,
    if (isDesktop && adapter.parse(date, 'yyyy-MM-dd') && calendarRef !== null && calendarRef !== void 0 && calendarRef.current) {
      // Check whether or not a disabled date was selected
      setTimeout(function () {
        return setState(calendarRef.current.querySelector('.selected.disabled') ? 'error' : 'default');
      }, 50);
    } else {
      setState('default');
    }
  }, [date, calendarRef]); // Alters rendered type of component

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
   *  <div> // click away listener listens for any click outside of this element
   *      <DatePickerNative />
   *      <Popover> // appears open only on desktop
   *          <CalendarPicker />
   *      </Popover>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_ClickAwayListener["default"], {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(_DatePickerWrapper["default"], {
    className: "picker datepicker" + (dateProp ? " interaction--completed completed" : ""),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(_DatePickerNative["default"], (0, _extends2["default"])({
    key: "picker",
    withCustom: renderType.disableNative,
    dates: context.dates
  }, renderType, {
    className: open ? "focus" : "",
    selectWrapperProps: {
      className: open ? 'interaction--active' : ""
    },
    textWrapperProps: {
      className: open ? 'interactive--active' : ""
    },
    onClick: handleOpen,
    onChange: handleNativeChange,
    onKeyDown: handleKeyDown,
    state: state,
    date: date || '' // When value is null/falsy, just show an empty string
    ,
    min: minDate ? adapter.format(minDate, 'yyyy-MM-dd') : null,
    max: maxDate ? adapter.format(maxDate, 'yyyy-MM-dd') : null,
    shape: shape,
    onClear: handleClear,
    clearButtonProps: clearButtonProps,
    alwaysShowMask: open
  }, props, {
    // @todo
    ref: pickerRef
  })), renderType.disableNative && pickerElement ? /*#__PURE__*/React.createElement(_Popover["default"], (0, _extends2["default"])({
    disablePortal: true,
    keepMounted: true,
    open: open,
    anchorEl: pickerElement,
    offset: [0, 0],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "datepicker-popover shape--".concat(shape)
    }, /*#__PURE__*/React.createElement(_CalendarPicker["default"], (0, _extends2["default"])({
      date: date,
      dates: context.dates,
      disableDates: context.disableDates,
      disableFuture: context.disableFuture,
      disablePast: context.disablePast,
      minDate: minDate,
      maxDate: maxDate,
      onChange: handleCalendarChange,
      disableKeyboardControl: !open,
      shape: shape
    }, calendarProps, {
      ref: calendarRef
    })))
  }, popoverProps, popperProps)) : null));
});
exports.DatePicker = DatePicker;
DatePicker.bdsName = 'DatePicker';
var _default = DatePicker;
exports["default"] = _default;