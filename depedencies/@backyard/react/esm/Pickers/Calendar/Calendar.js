import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "date", "onChange", "onMonthChange", "minDate", "maxDate", "disableKeyboardControl", "shouldDisableDate", "disablePast", "disableFuture", "disableDates", "dates", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import useAdapter from '../hooks/useAdapter';
import useCalendarState from '../hooks/useCalendarState';
import findClosestDate from '../functions/findClosestDate';
import CalendarWrapper from './styles/CalendarWrapper';
import Month from './Month';
import CalendarHeader from './CalendarHeader';
import { isParsableDateObject } from '../typings/types';

var isDatesObject = function isDatesObject(dates) {
  return isParsableDateObject(dates[0]);
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
      props = _objectWithoutProperties(_ref, _excluded);

  var adapter = useAdapter();
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

  var _useCalendarState = useCalendarState({
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
      var closestEnabledDate = findClosestDate({
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

  return /*#__PURE__*/React.createElement(CalendarWrapper, {
    className: classNames("calendar shape--".concat(shape), className),
    ref: ref
  }, /*#__PURE__*/React.createElement(CalendarHeader, _extends({
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
  }, /*#__PURE__*/React.createElement(Month, _extends({}, props, calendarState, {
    disableKeyboardControl: disableKeyboardControl,
    changeFocusedDay: changeFocusedDay,
    date: date,
    onChange: onChange,
    isDateDisabled: isDateDisabled
  }))));
});
export { Calendar };
export default Calendar;