import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "openKeys", "closeKeys", "open", "options", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onFocus", "onKeyDown", "isSearch", "renderInput", "value", "defaultValue", "shape", "popoverProps", "popperProps"];
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import AutocompleteWrapper from './styles/Autocomplete';
var Autocomplete = /*#__PURE__*/React.forwardRef(function Autocomplete(_ref, ref) {
  var _renderInput$type;

  var className = _ref.className,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? ['ArrowUp', 'ArrowDown'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      options = _ref.options,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      isSearch = _ref.isSearch,
      renderInput = _ref.renderInput,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
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
  var funcs = {};
  var forwardRef = useForwardedRef(ref);
  /**
   * Setup all state hooks needed
   */

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      referenceElement = _React$useState4[0],
      setReferenceElement = _React$useState4[1]; // Hold the container ref


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
    onKeyDown: onKeyDown
  }),
      open = _usePopover.open,
      handleOpen = _usePopover.handleOpen,
      handleClose = _usePopover.handleClose,
      handleKeyDown = _usePopover.handleKeyDown;
  /** Handle change function to return the change event and value of input field */
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line @typescript-eslint/no-shadow


  var handleInputChange = function handleInputChange(event, value) {
    setValue(value);

    if (onChange) {
      onChange(event, value);
    }
  };

  var handleClearClick = function handleClearClick(event) {
    setValue('');

    if (onChange) {
      onChange(event, '');
    }
  };

  React.useEffect(function () {
    var _forwardRef$current;

    return setReferenceElement(((_forwardRef$current = forwardRef.current) === null || _forwardRef$current === void 0 ? void 0 : _forwardRef$current.parentElement) || forwardRef.current);
  }, [forwardRef, value]);
  React.useEffect(function () {
    if (typeof valueProp !== 'undefined') {
      setValue(valueProp);
    }
  }, [valueProp]);

  if (((_renderInput$type = renderInput.type) === null || _renderInput$type === void 0 ? void 0 : _renderInput$type.bdsName) === 'Search') {
    funcs = {
      onClearClick: handleClearClick,
      onClick: handleOpen,
      onFocus: handleOpen,
      onChange: handleInputChange,
      onKeyDown: handleKeyDown
    };
  } else {
    funcs = {
      onClick: handleOpen,
      onFocus: handleOpen,
      onChange: handleInputChange,
      onKeyDown: handleKeyDown
    };
  }

  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(AutocompleteWrapper, {
    className: classNames("autocomplete-wrapper shape--".concat(shape), className),
    ref: containerRef
  }, /*#__PURE__*/React.cloneElement(renderInput, _extends({
    className: classNames(renderInput.props.className, value && 'completed', open && 'focus')
  }, funcs, {
    value: value,
    shape: shape
  }, props, {
    ref: forwardRef
  })), referenceElement ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: true,
    open: open,
    anchorEl: referenceElement,
    offset: [0, 0],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "popover-wrapper"
    }, /*#__PURE__*/React.cloneElement(options))
  }, popoverProps, popperProps)) : null));
});
Autocomplete.bdsName = 'Autocomplete';
export { Autocomplete };
export default Autocomplete;