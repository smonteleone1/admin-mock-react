import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ChevronLeft, _ChevronRight;

var _excluded = ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text", "shape", "disableKeyboardControl"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import Typography from '../../Typography';
import IconButton from '../../IconButton';
var MonthSwitcher = /*#__PURE__*/React.forwardRef(function MonthSwitcher(_ref, ref) {
  var className = _ref.className,
      isLeftDisabled = _ref.isLeftDisabled,
      isLeftHidden = _ref.isLeftHidden,
      isRightDisabled = _ref.isRightDisabled,
      isRightHidden = _ref.isRightHidden,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      leftArrowButtonText = _ref.leftArrowButtonText,
      _ref$leftArrowIcon = _ref.leftArrowIcon,
      leftArrowIcon = _ref$leftArrowIcon === void 0 ? _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null)) : _ref$leftArrowIcon,
      onLeftClick = _ref.onLeftClick,
      onRightClick = _ref.onRightClick,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      rightArrowButtonText = _ref.rightArrowButtonText,
      _ref$rightArrowIcon = _ref.rightArrowIcon,
      rightArrowIcon = _ref$rightArrowIcon === void 0 ? _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)) : _ref$rightArrowIcon,
      text = _ref.text,
      shape = _ref.shape,
      _ref$disableKeyboardC = _ref.disableKeyboardControl,
      disableKeyboardControl = _ref$disableKeyboardC === void 0 ? false : _ref$disableKeyboardC,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('month-switcher', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: "ghost",
    color: "neutral",
    size: "small",
    "aria-label": leftArrowButtonText,
    shape: shape
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: classNames(leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, Boolean(isLeftHidden) && "hidden", !text && "previousMonthButtonMargin"),
    tabIndex: disableKeyboardControl ? -1 : 0
  }), leftArrowIcon), text && /*#__PURE__*/React.createElement(Typography, {
    variant: "body_1",
    display: "inline"
  }, text), /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: "ghost",
    color: "neutral",
    size: "small",
    "aria-label": rightArrowButtonText,
    shape: shape
  }, rightArrowButtonProps, {
    disabled: isRightDisabled,
    onClick: onRightClick,
    className: classNames(rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Boolean(isRightHidden) && "hidden"),
    tabIndex: disableKeyboardControl ? -1 : 0
  }), rightArrowIcon));
});
export { MonthSwitcher };
export default MonthSwitcher;