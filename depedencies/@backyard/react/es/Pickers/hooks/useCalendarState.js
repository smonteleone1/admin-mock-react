import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable consistent-return */

/* eslint-disable default-case */
import * as React from 'react';
import validateDate from '../functions/validateDate';
import useAdapter from './useAdapter';
import useNow from './useNow';

const createCalendarStateReducer = (disableSwitchToMonthOnDayFocus, adapter) => (state, action) => {
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
        const needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !adapter.isSameMonth(state.currentMonth, action.focusedDay);
        return _extends({}, state, {
          focusedDay: action.focusedDay,
          currentMonth: needMonthSwitch ? adapter.startOfMonth(action.focusedDay) : state.currentMonth
        });
      }
  }
};

function useCalendarState({
  date,
  dates,
  onMonthChange,
  disablePast,
  disableFuture,
  minDate,
  maxDate,
  shouldDisableDate,
  disableSwitchToMonthOnDayFocus = false,
  disableDates
}) {
  const now = useNow();
  const adapter = useAdapter();
  const dateForMonth = date || now;
  const reducerFn = React.useRef(createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter)).current;
  const [calendarState, dispatch] = React.useReducer(reducerFn, {
    focusedDay: date,
    currentMonth: adapter.startOfMonth(dateForMonth)
  });
  const handleChangeMonth = React.useCallback(payload => {
    dispatch(_extends({
      type: 'changeMonth'
    }, payload));

    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = React.useCallback(newDate => {
    const newDateRequested = newDate ?? now;

    if (adapter.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: adapter.startOfMonth(newDateRequested)
    });
  }, [calendarState.currentMonth, handleChangeMonth, now, adapter]);
  const isDateDisabled = React.useCallback(day => validateDate(adapter, day, {
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    dates,
    disableDates,
    shouldDisableDate
  }) !== null, [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, adapter]);
  const changeFocusedDay = React.useCallback(newFocusedDate => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }
  }, [isDateDisabled]);
  return {
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    handleChangeMonth
  };
}

export { useCalendarState, createCalendarStateReducer };
export default useCalendarState;