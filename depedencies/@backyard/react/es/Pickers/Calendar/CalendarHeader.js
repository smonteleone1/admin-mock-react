import * as React from 'react';
import Typography from '../../Typography';
import useAdapter from '../hooks/useAdapter';
import { usePreviousMonthDisabled, useNextMonthDisabled } from '../hooks/useMonthDisabled';
import { MonthSwitcher } from './MonthSwitcher';
const CalendarHeader = /*#__PURE__*/React.forwardRef(function CalendarHeader({
  className,
  currentMonth: month,
  minDate,
  maxDate,
  disablePast,
  disableFuture,
  onMonthChange,
  leftArrowButtonProps,
  rightArrowButtonProps,
  leftArrowIcon,
  rightArrowIcon,
  leftArrowButtonText = 'previous month',
  rightArrowButtonText = 'next month',
  disableKeyboardControl = false,
  shape
}, ref) {
  const adapter = useAdapter();

  const selectNextMonth = () => onMonthChange(adapter.getNextMonth(month));

  const selectPreviousMonth = () => onMonthChange(adapter.getPreviousMonth(month));

  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "month-container"
  }, /*#__PURE__*/React.createElement(Typography, {
    "aria-live": "polite",
    align: "center",
    variant: "h5",
    color: "text_secondary",
    className: "month"
  }, adapter.format(month, 'month').toUpperCase()), /*#__PURE__*/React.createElement(Typography, {
    "aria-live": "polite",
    align: "center",
    variant: "h5",
    color: "text_secondary",
    className: "year"
  }, adapter.format(month, 'year'))), /*#__PURE__*/React.createElement(MonthSwitcher, {
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: selectPreviousMonth,
    onRightClick: selectNextMonth,
    isLeftDisabled: isPreviousMonthDisabled,
    isRightDisabled: isNextMonthDisabled,
    disableKeyboardControl: disableKeyboardControl,
    shape: shape
  }));
});
export { CalendarHeader };
export default CalendarHeader;