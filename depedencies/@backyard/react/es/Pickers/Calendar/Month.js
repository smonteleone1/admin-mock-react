import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["date", "focusedDay", "changeFocusedDay", "onChange", "currentMonth", "renderDay", "disableKeyboardControl", "isDateDisabled", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth", "className"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../../Typography';
import useAdapter from '../hooks/useAdapter';
import useNow from '../hooks/useNow';
import { useGlobalKeyDown, keycode } from '../../utils/hooks/useKeyDown';
import { Day } from './Day';
import MonthWrapper from './styles/MonthWrapper';

const getWeekArrays = (adapter, currentMonth) => {
  const thisMonth = adapter.getWeekArray(currentMonth);
  const nextMonth = adapter.getWeekArray(adapter.getNextMonth(currentMonth));

  if (nextMonth[0].every((day, index) => adapter.isEqual(day, thisMonth[thisMonth.length - 1][index]))) {
    nextMonth.shift();
  }

  return [...thisMonth, nextMonth[0]].slice(0, 6);
};

const Month = /*#__PURE__*/React.forwardRef(function Month(_ref, ref) {
  let {
    date,
    focusedDay,
    changeFocusedDay,
    onChange,
    currentMonth,
    renderDay,
    disableKeyboardControl,
    isDateDisabled,
    disableHighlightToday,
    disableDaysOutsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const now = useNow();
  const adapter = useAdapter();
  const handleDaySelect = React.useCallback(day => {
    onChange(Array.isArray(date) ? day : adapter.mergeDateAndTime(day, date || now));
  }, [date, now, onChange, adapter]);
  const initialDate = Array.isArray(date) ? date[0] : date;
  const nowFocusedDay = focusedDay || initialDate || now;
  useGlobalKeyDown(!disableKeyboardControl, {
    [keycode.ArrowUp]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, -7)),
    [keycode.ArrowDown]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, 7)),
    [keycode.ArrowLeft]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, -1)),
    [keycode.ArrowRight]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, 1)),
    [keycode.Home]: () => changeFocusedDay(adapter.startOfWeek(nowFocusedDay)),
    [keycode.End]: () => changeFocusedDay(adapter.endOfWeek(nowFocusedDay)),
    [keycode.PageUp]: () => changeFocusedDay(adapter.getNextMonth(nowFocusedDay)),
    [keycode.PageDown]: () => changeFocusedDay(adapter.getPreviousMonth(nowFocusedDay))
  });
  const currentMonthNumber = adapter.getMonth(currentMonth);
  const selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(selectedDateItem => adapter.startOfDay(selectedDateItem));
  return /*#__PURE__*/React.createElement(MonthWrapper, _extends({
    className: classNames('month', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "month-header"
  }, adapter.getWeekdays().map((day, i) => /*#__PURE__*/React.createElement(Typography, {
    "aria-hidden": true,
    key: day + i.toString(),
    variant: "h6",
    className: "month-label"
  }, `${day.charAt(0).toUpperCase()}${day.charAt(1)}`))), /*#__PURE__*/React.createElement("div", {
    role: "grid",
    className: "weeks"
  }, getWeekArrays(adapter, currentMonth).map(week => /*#__PURE__*/React.createElement("div", {
    role: "row",
    key: `week-${week[0]}`,
    className: "week"
  }, week.map(day => {
    const disabled = isDateDisabled(day);
    const isDayInCurrentMonth = adapter.getMonth(day) === currentMonthNumber;
    const dayProps = {
      key: day?.toString(),
      day,
      role: 'cell',
      disabled,
      disableKeyboardControl,
      focused: !disableKeyboardControl && Boolean(focusedDay) && adapter.isSameDay(day, focusedDay),
      today: adapter.isSameDay(day, now),
      inCurrentMonth: isDayInCurrentMonth,
      selected: selectedDates.some(selectedDate => adapter.isSameDay(selectedDate, day)),
      disableHighlightToday,
      disableDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth,
      focusable: !disableKeyboardControl && Boolean(nowFocusedDay) && adapter.toJsDate(nowFocusedDay).getDate() === adapter.toJsDate(day).getDate(),
      onDayFocus: changeFocusedDay,
      onDaySelect: handleDaySelect
    };
    return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/React.createElement(Day, dayProps);
  })))));
});
export { Month };
export default Month;