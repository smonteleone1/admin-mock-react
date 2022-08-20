"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Month = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _useAdapter = _interopRequireDefault(require("../hooks/useAdapter"));

var _useNow = _interopRequireDefault(require("../hooks/useNow"));

var _useKeyDown = require("../../utils/hooks/useKeyDown");

var _Day = require("./Day");

var _MonthWrapper = _interopRequireDefault(require("./styles/MonthWrapper"));

var _excluded = ["date", "focusedDay", "changeFocusedDay", "onChange", "currentMonth", "renderDay", "disableKeyboardControl", "isDateDisabled", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getWeekArrays = function getWeekArrays(adapter, currentMonth) {
  var thisMonth = adapter.getWeekArray(currentMonth);
  var nextMonth = adapter.getWeekArray(adapter.getNextMonth(currentMonth));

  if (nextMonth[0].every(function (day, index) {
    return adapter.isEqual(day, thisMonth[thisMonth.length - 1][index]);
  })) {
    nextMonth.shift();
  }

  return [].concat((0, _toConsumableArray2["default"])(thisMonth), [nextMonth[0]]).slice(0, 6);
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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var now = (0, _useNow["default"])();
  var adapter = (0, _useAdapter["default"])();
  var handleDaySelect = React.useCallback(function (day) {
    onChange(Array.isArray(date) ? day : adapter.mergeDateAndTime(day, date || now));
  }, [date, now, onChange, adapter]);
  var initialDate = Array.isArray(date) ? date[0] : date;
  var nowFocusedDay = focusedDay || initialDate || now;
  (0, _useKeyDown.useGlobalKeyDown)(!disableKeyboardControl, (_useGlobalKeyDown = {}, (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowUp, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, -7));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowDown, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, 7));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowLeft, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, -1));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowRight, function () {
    return changeFocusedDay(adapter.addDays(nowFocusedDay, 1));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Home, function () {
    return changeFocusedDay(adapter.startOfWeek(nowFocusedDay));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.End, function () {
    return changeFocusedDay(adapter.endOfWeek(nowFocusedDay));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.PageUp, function () {
    return changeFocusedDay(adapter.getNextMonth(nowFocusedDay));
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.PageDown, function () {
    return changeFocusedDay(adapter.getPreviousMonth(nowFocusedDay));
  }), _useGlobalKeyDown));
  var currentMonthNumber = adapter.getMonth(currentMonth);
  var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return adapter.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/React.createElement(_MonthWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('month', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "month-header"
  }, adapter.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/React.createElement(_Typography["default"], {
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
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/React.createElement(_Day.Day, dayProps);
    }));
  })));
});
exports.Month = Month;
var _default = Month;
exports["default"] = _default;