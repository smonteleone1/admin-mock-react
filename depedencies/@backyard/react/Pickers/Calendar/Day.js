"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Day = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useForwardedRef = _interopRequireDefault(require("../../utils/hooks/useForwardedRef"));

var _Button = require("../../Button");

var _useAdapter = _interopRequireDefault(require("../hooks/useAdapter"));

var _onSpaceOrEnter = _interopRequireDefault(require("../functions/onSpaceOrEnter"));

var _excluded = ["className", "day", "disabled", "inCurrentMonth", "today", "selected", "shape", "focused", "focusable", "onDayFocus", "onDaySelect", "onFocus", "onClick", "onKeyDown", "disableKeyboardControl", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FORCE_FINISH_PICKER = true; // Symbol('Force closing picker, useful for accessibility')

var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.disableKeyboardControl === nextProps.disableKeyboardControl && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};

var Day = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function Day(_ref, ref) {
  var className = _ref.className,
      day = _ref.day,
      disabled = _ref.disabled,
      isInCurrentMonth = _ref.inCurrentMonth,
      isToday = _ref.today,
      selected = _ref.selected,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
      _ref$focused = _ref.focused,
      focused = _ref$focused === void 0 ? false : _ref$focused,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? false : _ref$focusable,
      onDayFocus = _ref.onDayFocus,
      onDaySelect = _ref.onDaySelect,
      onFocus = _ref.onFocus,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      disableKeyboardControl = _ref.disableKeyboardControl,
      _ref$disableHighlight = _ref.disableHighlightToday,
      disableHighlightToday = _ref$disableHighlight === void 0 ? false : _ref$disableHighlight,
      _ref$disableDaysOutsi = _ref.disableDaysOutsideCurrentMonth,
      disableDaysOutsideCurrentMonth = _ref$disableDaysOutsi === void 0 ? false : _ref$disableDaysOutsi,
      _ref$showDaysOutsideC = _ref.showDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth = _ref$showDaysOutsideC === void 0 ? true : _ref$showDaysOutsideC,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var innerRef = (0, _useForwardedRef["default"])(ref);
  var adapter = (0, _useAdapter["default"])();
  React.useEffect(function () {
    if (focused && !disabled && isInCurrentMonth && innerRef.current && !disableKeyboardControl) {
      innerRef.current.focus();
    }
  }, [disableKeyboardControl, disabled, focused, isInCurrentMonth]);

  var handleFocus = function handleFocus(event) {
    if (!focused) {
      onDayFocus(day, 'keyboard');
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  var handleClick = function handleClick(event) {
    if (!disabled) {
      onDaySelect(day, true);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = (0, _onSpaceOrEnter["default"])(function () {
    if (!disabled) {
      onDaySelect(day, FORCE_FINISH_PICKER);
    }
  }, onKeyDown);
  var dayClassName = (0, _classnames["default"])('day', className, selected && "selected", disabled && "disabled", !disableHighlightToday && isToday && 'today', !isInCurrentMonth && showDaysOutsideCurrentMonth && 'day-outside-month');

  if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
    // Do not render button and not attach any listeners for empty days
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      className: (0, _classnames["default"])(dayClassName, 'day-hidden')
    });
  }

  return /*#__PURE__*/React.createElement(_Button.Button, (0, _extends2["default"])({
    variant: selected ? 'primary' : 'ghost',
    color: selected ? 'interactive' : 'neutral',
    shape: shape,
    size: "extra_small",
    disabled: disabled || disableDaysOutsideCurrentMonth && !isInCurrentMonth,
    ref: innerRef,
    "aria-label": adapter.format(day, 'fullDate'),
    tabIndex: focused || focusable ? 0 : -1,
    className: dayClassName,
    type: "button"
  }, props, {
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onMouseDown: handleClick
  }), adapter.format(day, 'dayOfMonth'));
}), areDayPropsEqual);
exports.Day = Day;
var _default = Day;
exports["default"] = _default;