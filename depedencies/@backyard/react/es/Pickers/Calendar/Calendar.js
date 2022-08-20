import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "date", "onChange", "onMonthChange", "minDate", "maxDate", "disableKeyboardControl", "shouldDisableDate", "disablePast", "disableFuture", "disableDates", "dates", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import useAdapter from '../hooks/useAdapter';
import useCalendarState from '../hooks/useCalendarState';
import findClosestDate from '../functions/findClosestDate';
import CalendarWrapper from './styles/CalendarWrapper';
import Month from './Month';
import CalendarHeader from './CalendarHeader';
import { isParsableDateObject } from '../typings/types';

const isDatesObject = dates => isParsableDateObject(dates[0]);

const Calendar = /*#__PURE__*/React.forwardRef(function Calendar(_ref, ref) {
  let {
    className,
    date,
    onChange,
    onMonthChange,
    minDate: __minDate,
    maxDate: __maxDate,
    disableKeyboardControl = false,
    shouldDisableDate,
    disablePast,
    disableFuture,
    disableDates: disableDatesProp = [],
    dates: datesProp = [],
    shape
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const adapter = useAdapter();
  const minDate = adapter.parse(__minDate || adapter.date(new Date('1900-01-01')));
  const maxDate = adapter.parse(__maxDate || adapter.date(new Date('2099-12-31')));
  const dates = isDatesObject(datesProp) ? datesProp.map(info => adapter.parse(info.value)) : datesProp.map(value => adapter.parse(value));
  const disableDates = disableDatesProp.map(value => adapter.parse(value));
  const {
    calendarState,
    changeFocusedDay,
    changeMonth,
    isDateDisabled,
    handleChangeMonth
  } = useCalendarState({
    date,
    dates,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    disableDates
  });
  React.useEffect(() => {
    if (date && isDateDisabled(date)) {
      const closestEnabledDate = findClosestDate({
        adapter,
        date,
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

  React.useEffect(() => {
    changeMonth(date);
  }, [date]); // eslint-disable-line

  return /*#__PURE__*/React.createElement(CalendarWrapper, {
    className: classNames(`calendar shape--${shape}`, className),
    ref: ref
  }, /*#__PURE__*/React.createElement(CalendarHeader, _extends({
    className: "calendar-header",
    shape: shape
  }, props, {
    currentMonth: calendarState.currentMonth,
    onMonthChange: newMonth => handleChangeMonth({
      newMonth
    }),
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