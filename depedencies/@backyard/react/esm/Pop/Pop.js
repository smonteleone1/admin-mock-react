import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "openKeys", "closeKeys", "open", "pop", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onFocus", "isSearch", "anchor", "shape", "popoverProps", "popperProps"];
import * as React from 'react';
import classNames from 'classnames';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PopWrapper from './styles/PopWrapper';
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
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Autocomplete'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var anchorRef = React.useRef(null);
  /**
   * Setup all state hooks needed
   */

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1]; // Hold the container ref


  var containerRef = React.useRef(null); // Use Popover hook for open/close state handling

  var _usePopover = usePopover({
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
  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(PopWrapper, {
    className: classNames("autocomplete-wrapper shape--".concat(shape), className),
    ref: containerRef
  }, /*#__PURE__*/React.cloneElement(anchor, _extends({
    className: classNames(anchor.props.className, open && 'focus')
  }, funcs, {
    shape: shape
  }, props, {
    ref: anchorRef
  })), referenceElement ? /*#__PURE__*/React.createElement(Popover, _extends({
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
Pop.bdsName = 'Pop';
export { Pop };
export default Pop;