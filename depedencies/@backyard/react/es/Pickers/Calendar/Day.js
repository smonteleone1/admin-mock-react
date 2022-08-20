import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "day", "disabled", "inCurrentMonth", "today", "selected", "shape", "focused", "focusable", "onDayFocus", "onDaySelect", "onFocus", "onClick", "onKeyDown", "disableKeyboardControl", "disableHighlightToday", "disableDaysOutsideCurrentMonth", "showDaysOutsideCurrentMonth"];

/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../../utils/hooks/useForwardedRef';
import { Button } from '../../Button';
import useAdapter from '../hooks/useAdapter';
import onSpaceOrEnter from '../functions/onSpaceOrEnter';
const FORCE_FINISH_PICKER = true; // Symbol('Force closing picker, useful for accessibility')

const areDayPropsEqual = (prevProps, nextProps) => {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.disableKeyboardControl === nextProps.disableKeyboardControl && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};

const Day = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function Day(_ref, ref) {
  let {
    className,
    day,
    disabled,
    inCurrentMonth: isInCurrentMonth,
    today: isToday,
    selected,
    shape = 'circle',
    focused = false,
    focusable = false,
    onDayFocus,
    onDaySelect,
    onFocus,
    onClick,
    onKeyDown,
    disableKeyboardControl,
    disableHighlightToday = false,
    disableDaysOutsideCurrentMonth = false,
    showDaysOutsideCurrentMonth = true
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const innerRef = useForwardedRef(ref);
  const adapter = useAdapter();
  React.useEffect(() => {
    if (focused && !disabled && isInCurrentMonth && innerRef.current && !disableKeyboardControl) {
      innerRef.current.focus();
    }
  }, [disableKeyboardControl, disabled, focused, isInCurrentMonth]);

  const handleFocus = event => {
    if (!focused) {
      onDayFocus(day, 'keyboard');
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleClick = event => {
    if (!disabled) {
      onDaySelect(day, true);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = onSpaceOrEnter(() => {
    if (!disabled) {
      onDaySelect(day, FORCE_FINISH_PICKER);
    }
  }, onKeyDown);
  const dayClassName = classNames('day', className, selected && "selected", disabled && "disabled", !disableHighlightToday && isToday && 'today', !isInCurrentMonth && showDaysOutsideCurrentMonth && 'day-outside-month');

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