import * as React from 'react';
import Typography from '../../Typography';
import useAdapter from '../hooks/useAdapter';
import { usePreviousMonthDisabled, useNextMonthDisabled } from '../hooks/useMonthDisabled';
import { MonthSwitcher } from './MonthSwitcher';
var CalendarHeader = /*#__PURE__*/React.forwardRef(function CalendarHeader(_ref, ref) {
  var className = _ref.className,
      month = _ref.currentMonth,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      onMonthChange = _ref.onMonthChange,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      _ref$leftArrowButtonT = _ref.leftArrowButtonText,
      leftArrowButtonText = _ref$leftArrowButtonT === void 0 ? 'previous month' : _ref$leftArrowButtonT,
      _ref$rightArrowButton = _ref.rightArrowButtonText,
      rightArrowButtonText = _ref$rightArrowButton === void 0 ? 'next month' : _ref$rightArrowButton,
      _ref$disableKeyboardC = _ref.disableKeyboardControl,
      disableKeyboardControl = _ref$disableKeyboardC === void 0 ? false : _ref$disableKeyboardC,
      shape = _ref.shape;
  var adapter = useAdapter();

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(adapter.getNextMonth(month));
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(adapter.getPreviousMonth(month));
  };

  var isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast: disablePast,
    minDate: minDate
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