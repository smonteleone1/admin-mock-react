import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable consistent-return */

/* eslint-disable default-case */
import * as React from 'react';
import validateDate from '../functions/validateDate';
import useAdapter from './useAdapter';
import useNow from './useNow';

var createCalendarStateReducer = function createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter) {
  return function (state, action) {
    switch (action.type) {
      case 'changeMonth':
        {
          return _extends({}, state, {
            currentMonth: action.newMonth
          });
        }

      case 'changeFocusedDay':
        {
          // action.focusedDay = action.focusedDay || adapter.date()
          var needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !adapter.isSameMonth(state.currentMonth, action.focusedDay);
          return _extends({}, state, {
            focusedDay: action.focusedDay,
            currentMonth: needMonthSwitch ? adapter.startOfMonth(action.focusedDay) : state.currentMonth
          });
        }
    }
  };
};

function useCalendarState(_ref) {
  var date = _ref.date,
      dates = _ref.dates,
      onMonthChange = _ref.onMonthChange,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      shouldDisableDate = _ref.shouldDisableDate,
      _ref$disableSwitchToM = _ref.disableSwitchToMonthOnDayFocus,
      disableSwitchToMonthOnDayFocus = _ref$disableSwitchToM === void 0 ? false : _ref$disableSwitchToM,
      disableDates = _ref.disableDates;
  var now = useNow();
  var adapter = useAdapter();
  var dateForMonth = date || now;
  var reducerFn = React.useRef(createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter)).current;

  var _React$useReducer = React.useReducer(reducerFn, {
    focusedDay: date,
    currentMonth: adapter.startOfMonth(dateForMonth)
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      calendarState = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var handleChangeMonth = React.useCallback(function (payload) {
    dispatch(_extends({
      type: 'changeMonth'
    }, payload));

    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  var changeMonth = React.useCallback(function (newDate) {
    var newDateRequested = newDate !== null && newDate !== void 0 ? newDate : now;

    if (adapter.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: adapter.startOfMonth(newDateRequested)
    });
  }, [calendarState.currentMonth, handleChangeMonth, now, adapter]);
  var isDateDisabled = React.useCallback(function (day) {
    return validateDate(adapter, day, {
      disablePast: disablePast,
      disableFuture: disableFuture,
      minDate: minDate,
      maxDate: maxDate,
      dates: dates,
      disableDates: disableDates,
      shouldDisableDate: shouldDisableDate
    }) !== null;
  }, [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, adapter]);
  var changeFocusedDay = React.useCallback(function (newFocusedDate) {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }
  }, [isDateDisabled]);
  return {
    calendarState: calendarState,
    changeMonth: changeMonth,
    changeFocusedDay: changeFocusedDay,
    isDateDisabled: isDateDisabled,
    handleChangeMonth: handleChangeMonth
  };
}

export { useCalendarState, createCalendarStateReducer };
export default useCalendarState;