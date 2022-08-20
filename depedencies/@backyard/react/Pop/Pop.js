"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pop = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ClickAwayListener = _interopRequireDefault(require("../ClickAwayListener"));

var _Popover = require("../Popover");

var _ThemeProvider = require("../ThemeProvider");

var _PopWrapper = _interopRequireDefault(require("./styles/PopWrapper"));

var _excluded = ["className", "openKeys", "closeKeys", "open", "pop", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onFocus", "isSearch", "anchor", "shape", "popoverProps", "popperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Pop = /*#__PURE__*/React.forwardRef(function Pop(_ref, ref) {
  var className = _ref.className,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? ['ArrowUp', 'ArrowDown'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      pop = _ref.pop,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onFocus = _ref.onFocus,
      isSearch = _ref.isSearch,
      anchor = _ref.anchor,
      shapeProp = _ref.shape,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Autocomplete'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var anchorRef = React.useRef(null);
  /**
   * Setup all state hooks needed
   */

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1]; // Hold the container ref


  var containerRef = React.useRef(null); // Use Popover hook for open/close state handling

  var _usePopover = (0, _Popover.usePopover)({
    containerRef: containerRef,
    referenceElement: referenceElement,
    delayClose: delayClose,
    delayOpen: delayOpen,
    closeKeys: closeKeys,
    openKeys: openKeys,
    open: openProp,
    onOpen: onOpen,
    onClose: onClose,
    ref: anchorRef
  }),
      open = _usePopover.open,
      handleOpen = _usePopover.handleOpen,
      handleClose = _usePopover.handleClose;

  React.useEffect(function () {
    return setReferenceElement(anchorRef.current);
  }, [anchorRef]);
  var funcs = {
    onClick: handleOpen,
    onFocus: handleOpen
  };
  return /*#__PURE__*/React.createElement(_ClickAwayListener["default"], {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(_PopWrapper["default"], {
    className: (0, _classnames["default"])("autocomplete-wrapper shape--".concat(shape), className),
    ref: containerRef
  }, /*#__PURE__*/React.cloneElement(anchor, (0, _extends2["default"])({
    className: (0, _classnames["default"])(anchor.props.className, open && 'focus')
  }, funcs, {
    shape: shape
  }, props, {
    ref: anchorRef
  })), referenceElement ? /*#__PURE__*/React.createElement(_Popover.Popover, (0, _extends2["default"])({
    disablePortal: true,
    keepMounted: true,
    open: open,
    anchorEl: referenceElement,
    offset: [0, 16],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "popover-wrapper"
    }, /*#__PURE__*/React.cloneElement(pop))
  }, popoverProps, popperProps, {
    ref: ref
  })) : null));
});
exports.Pop = Pop;
Pop.bdsName = 'Pop';
var _default = Pop;
exports["default"] = _default;