import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "day", "disabled", "inCurrentMonth", "today", "selected", "shape", "focused", "focusable", "onDayFocus", "onDaySelect", "onFocus", "onClick", "onKeyDown", "disableKeyboardControl", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth"];

/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../../utils/hooks/useForwardedRef';
import { Button } from '../../Button';
import useAdapter from '../hooks/useAdapter';
import onSpaceOrEnter from '../functions/onSpaceOrEnter';
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
      props = _objectWithoutProperties(_ref, _excluded);

  var innerRef = useForwardedRef(ref);
  var adapter = useAdapter();
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

  var handleKeyDown = onSpaceOrEnter(function () {
    if (!disabled) {
      onDaySelect(day, FORCE_FINISH_PICKER);
    }
  }, onKeyDown);
  var dayClassName = classNames('day', className, selected && "selected", disabled && "disabled", !disableHighlightToday && isToday && 'today', !isInCurrentMonth && showDaysOutsideCurrentMonth && 'day-outside-month');

  if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
    // Do not render button and not attach any listeners for empty days
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      className: classNames(dayClassName, 'day-hidden')
    });
  }

  return /*#__PURE__*/React.createElement(Button, _extends({
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
export { Day };
export default Day;