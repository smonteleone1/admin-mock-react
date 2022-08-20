import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronLeft, _ChevronRight;

const _excluded = ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text", "shape", "disableKeyboardControl"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import Typography from '../../Typography';
import IconButton from '../../IconButton';
const MonthSwitcher = /*#__PURE__*/React.forwardRef(function MonthSwitcher(_ref, ref) {
  let {
    className,
    isLeftDisabled,
    isLeftHidden,
    isRightDisabled,
    isRightHidden,
    leftArrowButtonProps,
    leftArrowButtonText,
    leftArrowIcon = _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null)),
    onLeftClick,
    onRightClick,
    rightArrowButtonProps,
    rightArrowButtonText,
    rightArrowIcon = _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
    text,
    shape,
    disableKeyboardControl = false
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
    className: classNames(leftArrowButtonProps?.className, Boolean(isLeftHidden) && "hidden", !text && "previousMonthButtonMargin"),
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
    className: classNames(rightArrowButtonProps?.className, Boolean(isRightHidden) && "hidden"),
    tabIndex: disableKeyboardControl ? -1 : 0
  }), rightArrowIcon));
});
export { MonthSwitcher };
export default MonthSwitcher;