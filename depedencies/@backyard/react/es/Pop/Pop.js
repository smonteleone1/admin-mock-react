import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "openKeys", "closeKeys", "open", "pop", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onFocus", "isSearch", "anchor", "shape", "popoverProps", "popperProps"];
import * as React from 'react';
import classNames from 'classnames';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PopWrapper from './styles/PopWrapper';
const Pop = /*#__PURE__*/React.forwardRef(function Pop(_ref, ref) {
  let {
    className,
    openKeys = ['ArrowUp', 'ArrowDown'],
    closeKeys = ['Escape'],
    open: openProp = false,
    pop,
    delayClose = 300,
    delayOpen = 10,
    onOpen,
    onClose,
    anchor,
    shape: shapeProp,
    // = 'rounded',
    popoverProps = {},
    popperProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Autocomplete'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const anchorRef = React.useRef(null);
  /**
   * Setup all state hooks needed
   */

  const [referenceElement, setReferenceElement] = React.useState(null); // Hold the container ref

  const containerRef = React.useRef(null); // Use Popover hook for open/close state handling

  const {
    open,
    handleOpen,
    handleClose
  } = usePopover({
    containerRef,
    referenceElement,
    delayClose,
    delayOpen,
    closeKeys,
    openKeys,
    open: openProp,
    onOpen,
    onClose,
    ref: anchorRef
  });
  React.useEffect(() => setReferenceElement(anchorRef.current), [anchorRef]);
  const funcs = {
    onClick: handleOpen,
    onFocus: handleOpen
  };
  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(PopWrapper, {
    className: classNames(`autocomplete-wrapper shape--${shape}`, className),
    ref: containerRef
  }, /*#__PURE__*/React.cloneElement(anchor, _extends({
    className: classNames(anchor.props.className, open && 'focus')
  }, funcs, {
    shape
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