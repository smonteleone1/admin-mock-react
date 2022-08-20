"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createCalendarStateReducer = void 0;
exports.useCalendarState = useCalendarState;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _validateDate = _interopRequireDefault(require("../functions/validateDate"));

var _useAdapter = _interopRequireDefault(require("./useAdapter"));

var _useNow = _interopRequireDefault(require("./useNow"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable consistent-return */

/* eslint-disable default-case */
var createCalendarStateReducer = function createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter) {
  return function (state, action) {
    switch (action.type) {
      case 'changeMonth':
        {
          return (0, _extends2["default"])({}, state, {
            currentMonth: action.newMonth
          });
        }

      case 'changeFocusedDay':
        {
          // action.focusedDay = action.focusedDay || adapter.date()
          var needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !adapter.isSameMonth(state.currentMonth, action.focusedDay);
          return (0, _extends2["default"])({}, state, {
            focusedDay: action.focusedDay,
            currentMonth: needMonthSwitch ? adapter.startOfMonth(action.focusedDay) : state.currentMonth
          });
        }
    }
  };
};

exports.createCalendarStateReducer = createCalendarStateReducer;

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
  var now = (0, _useNow["default"])();
  var adapter = (0, _useAdapter["default"])();
  var dateForMonth = date || now;
  var reducerFn = React.useRef(createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter)).current;

  var _React$useReducer = React.useReducer(reducerFn, {
    focusedDay: date,
    currentMonth: adapter.startOfMonth(dateForMonth)
  }),
      _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
      calendarState = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var handleChangeMonth = React.useCallback(function (payload) {
    dispatch((0, _extends2["default"])({
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
    return (0, _validateDate["default"])(adapter, day, {
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

var _default = useCalendarState;
exports["default"] = _default;