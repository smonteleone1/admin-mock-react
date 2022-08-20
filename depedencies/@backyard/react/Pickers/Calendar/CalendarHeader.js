"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CalendarHeader = void 0;

var React = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _useAdapter = _interopRequireDefault(require("../hooks/useAdapter"));

var _useMonthDisabled = require("../hooks/useMonthDisabled");

var _MonthSwitcher = require("./MonthSwitcher");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var adapter = (0, _useAdapter["default"])();

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(adapter.getNextMonth(month));
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(adapter.getPreviousMonth(month));
  };

  var isNextMonthDisabled = (0, _useMonthDisabled.useNextMonthDisabled)(month, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = (0, _useMonthDisabled.usePreviousMonthDisabled)(month, {
    disablePast: disablePast,
    minDate: minDate
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "month-container"
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    "aria-live": "polite",
    align: "center",
    variant: "h5",
    color: "text_secondary",
    className: "month"
  }, adapter.format(month, 'month').toUpperCase()), /*#__PURE__*/React.createElement(_Typography["default"], {
    "aria-live": "polite",
    align: "center",
    variant: "h5",
    color: "text_secondary",
    className: "year"
  }, adapter.format(month, 'year'))), /*#__PURE__*/React.createElement(_MonthSwitcher.MonthSwitcher, {
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
exports.CalendarHeader = CalendarHeader;
var _default = CalendarHeader;
exports["default"] = _default;