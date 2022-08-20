"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Calendar = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useAdapter = _interopRequireDefault(require("../hooks/useAdapter"));

var _useCalendarState2 = _interopRequireDefault(require("../hooks/useCalendarState"));

var _findClosestDate = _interopRequireDefault(require("../functions/findClosestDate"));

var _CalendarWrapper = _interopRequireDefault(require("./styles/CalendarWrapper"));

var _Month = _interopRequireDefault(require("./Month"));

var _CalendarHeader = _interopRequireDefault(require("./CalendarHeader"));

var _types = require("../typings/types");

var _excluded = ["className", "date", "onChange", "onMonthChange", "minDate", "maxDate", "disableKeyboardControl", "shouldDisableDate", "disablePast", "disableFuture", "disableDates", "dates", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isDatesObject = function isDatesObject(dates) {
  return (0, _types.isParsableDateObject)(dates[0]);
};

var Calendar = /*#__PURE__*/React.forwardRef(function Calendar(_ref, ref) {
  var className = _ref.className,
      date = _ref.date,
      onChange = _ref.onChange,
      onMonthChange = _ref.onMonthChange,
      __minDate = _ref.minDate,
      __maxDate = _ref.maxDate,
      _ref$disableKeyboardC = _ref.disableKeyboardControl,
      disableKeyboardControl = _ref$disableKeyboardC === void 0 ? false : _ref$disableKeyboardC,
      shouldDisableDate = _ref.shouldDisableDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      _ref$disableDates = _ref.disableDates,
      disableDatesProp = _ref$disableDates === void 0 ? [] : _ref$disableDates,
      _ref$dates = _ref.dates,
      datesProp = _ref$dates === void 0 ? [] : _ref$dates,
      shape = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var adapter = (0, _useAdapter["default"])();
  var minDate = adapter.parse(__minDate || adapter.date(new Date('1900-01-01')));
  var maxDate = adapter.parse(__maxDate || adapter.date(new Date('2099-12-31')));
  var dates = isDatesObject(datesProp) ? datesProp.map(function (info) {
    return adapter.parse(info.value);
  }) : datesProp.map(function (value) {
    return adapter.parse(value);
  });
  var disableDates = disableDatesProp.map(function (value) {
    return adapter.parse(value);
  });

  var _useCalendarState = (0, _useCalendarState2["default"])({
    date: date,
    dates: dates,
    onMonthChange: onMonthChange,
    minDate: minDate,
    maxDate: maxDate,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    disableDates: disableDates
  }),
      calendarState = _useCalendarState.calendarState,
      changeFocusedDay = _useCalendarState.changeFocusedDay,
      changeMonth = _useCalendarState.changeMonth,
      isDateDisabled = _useCalendarState.isDateDisabled,
      handleChangeMonth = _useCalendarState.handleChangeMonth;

  React.useEffect(function () {
    if (date && isDateDisabled(date)) {
      var closestEnabledDate = (0, _findClosestDate["default"])({
        adapter: adapter,
        date: date,
        minDate: adapter.date(minDate),
        maxDate: adapter.date(maxDate),
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      onChange(closestEnabledDate, false);
    } // This call is too expensive to run it on each prop change.
    // So just ensure that we are not rendering disabled as selected on mount.

  }, []); // eslint-disable-line

  React.useEffect(function () {
    changeMonth(date);
  }, [date]); // eslint-disable-line

  return /*#__PURE__*/React.createElement(_CalendarWrapper["default"], {
    className: (0, _classnames["default"])("calendar shape--".concat(shape), className),
    ref: ref
  }, /*#__PURE__*/React.createElement(_CalendarHeader["default"], (0, _extends2["default"])({
    className: "calendar-header",
    shape: shape
  }, props, {
    currentMonth: calendarState.currentMonth,
    onMonthChange: function onMonthChange(newMonth) {
      return handleChangeMonth({
        newMonth: newMonth
      });
    },
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    disableKeyboardControl: disableKeyboardControl
  })), /*#__PURE__*/React.createElement("div", {
    className: 'calendar-body'
  }, /*#__PURE__*/React.createElement(_Month["default"], (0, _extends2["default"])({}, props, calendarState, {
    disableKeyboardControl: disableKeyboardControl,
    changeFocusedDay: changeFocusedDay,
    date: date,
    onChange: onChange,
    isDateDisabled: isDateDisabled
  }))));
});
exports.Calendar = Calendar;
var _default = Calendar;
exports["default"] = _default;