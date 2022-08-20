import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["date", "focusedDay", "changeFocusedDay", "onChange", "currentMonth", "renderDay", "disableKeyboardControl", "isDateDisabled", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth", "className"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../../Typography';
import useAdapter from '../hooks/useAdapter';
import useNow from '../hooks/useNow';
import { useGlobalKeyDown, keycode } from '../../utils/hooks/useKeyDown';
import { Day } from './Day';
import MonthWrapper from './styles/MonthWrapper';

var getWeekArrays = function getWeekArrays(adapter, currentMonth) {
  var thisMonth = adapter.getWeekArray(currentMonth);
  var nextMonth = adapter.getWeekArray(adapter.getNextMonth(currentMonth));

  if (nextMonth[0].every(function (day, index) {
    return adapter.isEqual(day, thisMonth[thisMonth.length - 1][index]);
  })) {
    nextMonth.shift();
  }

  return [].concat(_toConsumableArray(thisMonth), [nextMonth[0]]).slice(0, 6);
};

var Month = /*#__PURE__*/React.forwardRef(function Month(_ref, ref) {
  var _useGlobalKeyDown;

  var date = _ref.date,
      focusedDay = _ref.focusedDay,
      changeFocusedDay = _ref.changeFocusedDay,
      onChange = _ref.onChange,
      currentMonth = _ref.currentMonth,
      renderDay = _ref.renderDay,
      disableKeyboardControl = _ref.disableKeyboardControl,
      isDateDisabled = _ref.isDateDisabled,
      disableHighlightToday = _ref.disableHighlightToday,
      disableDaysOutsideCurrentMonth = _ref.disableDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth = _ref.showDaysOutsideCurrentMonth,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  var now = useNow();
  var adapter = useAdapter();
  var handleDaySelect = React.useCallback(function (day) {
    onChange(Array.isArray(date) ? day : adapter.mergeDateAndTime(day, date || now));
  }, [date, now, onChange, adapter]);
  var initialDate = Array.isArray(date) ? date[0] : date;
  var nowFocusedDay = focusedDay || initialDate || now;
  useGlobalKeyDown(!disableKeyboardControl, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, -7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, 7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, -1));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, 1));
  }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return changeFocusedDay(adapter.startOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return changeFocusedDay(adapter.endOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageUp, function () {
    return changeFocusedDay(adapter.getNextMonth(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageDown, function () {
    return changeFocusedDay(adapter.getPreviousMonth(nowFocusedDay));
  }), _useGlobalKeyDown));
  var currentMonthNumber = adapter.getMonth(currentMonth);
  var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return adapter.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/React.createElement(MonthWrapper, _extends({
    className: classNames('month', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "month-header"
  }, adapter.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/React.createElement(Typography, {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "h6",
      className: "month-label"
    }, "".concat(day.charAt(0).toUpperCase()).concat(day.charAt(1)));
  })), /*#__PURE__*/React.createElement("div", {
    role: "grid",
    className: "weeks"
  }, getWeekArrays(adapter, currentMonth).map(function (week) {
    return /*#__PURE__*/React.createElement("div", {
      role: "row",
      key: "week-".concat(week[0]),
      className: "week"
    }, week.map(function (day) {
      var disabled = isDateDisabled(day);
      var isDayInCurrentMonth = adapter.getMonth(day) === currentMonthNumber;
      var dayProps = {
        key: day === null || day === void 0 ? void 0 : day.toString(),
        day: day,
        role: 'cell',
        disabled: disabled,
        disableKeyboardControl: disableKeyboardControl,
        focused: !disableKeyboardControl && Boolean(focusedDay) && adapter.isSameDay(day, focusedDay),
        today: adapter.isSameDay(day, now),
        inCurrentMonth: isDayInCurrentMonth,
        selected: selectedDates.some(function (selectedDate) {
          return adapter.isSameDay(selectedDate, day);
        }),
        disableHighlightToday: disableHighlightToday,
        disableDaysOutsideCurrentMonth: disableDaysOutsideCurrentMonth,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        focusable: !disableKeyboardControl && Boolean(nowFocusedDay) && adapter.toJsDate(nowFocusedDay).getDate() === adapter.toJsDate(day).getDate(),
        onDayFocus: changeFocusedDay,
        onDaySelect: handleDaySelect
      };
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/React.createElement(Day, dayProps);
    }));
  })));
});
export { Month };
export default Month;