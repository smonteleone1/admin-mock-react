"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MonthSwitcher = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _IconButton = _interopRequireDefault(require("../../IconButton"));

var _ChevronLeft, _ChevronRight;

var _excluded = ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text", "shape", "disableKeyboardControl"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MonthSwitcher = /*#__PURE__*/React.forwardRef(function MonthSwitcher(_ref, ref) {
  var className = _ref.className,
      isLeftDisabled = _ref.isLeftDisabled,
      isLeftHidden = _ref.isLeftHidden,
      isRightDisabled = _ref.isRightDisabled,
      isRightHidden = _ref.isRightHidden,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      leftArrowButtonText = _ref.leftArrowButtonText,
      _ref$leftArrowIcon = _ref.leftArrowIcon,
      leftArrowIcon = _ref$leftArrowIcon === void 0 ? _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(_ChevronLeft2["default"], null)) : _ref$leftArrowIcon,
      onLeftClick = _ref.onLeftClick,
      onRightClick = _ref.onRightClick,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      rightArrowButtonText = _ref.rightArrowButtonText,
      _ref$rightArrowIcon = _ref.rightArrowIcon,
      rightArrowIcon = _ref$rightArrowIcon === void 0 ? _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(_ChevronRight2["default"], null)) : _ref$rightArrowIcon,
      text = _ref.text,
      shape = _ref.shape,
      _ref$disableKeyboardC = _ref.disableKeyboardControl,
      disableKeyboardControl = _ref$disableKeyboardC === void 0 ? false : _ref$disableKeyboardC,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('month-switcher', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    variant: "ghost",
    color: "neutral",
    size: "small",
    "aria-label": leftArrowButtonText,
    shape: shape
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: (0, _classnames["default"])(leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, Boolean(isLeftHidden) && "hidden", !text && "previousMonthButtonMargin"),
    tabIndex: disableKeyboardControl ? -1 : 0
  }), leftArrowIcon), text && /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "body_1",
    display: "inline"
  }, text), /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    variant: "ghost",
    color: "neutral",
    size: "small",
    "aria-label": rightArrowButtonText,
    shape: shape
  }, rightArrowButtonProps, {
    disabled: isRightDisabled,
    onClick: onRightClick,
    className: (0, _classnames["default"])(rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Boolean(isRightHidden) && "hidden"),
    tabIndex: disableKeyboardControl ? -1 : 0
  }), rightArrowIcon));
});
exports.MonthSwitcher = MonthSwitcher;
var _default = MonthSwitcher;
exports["default"] = _default;