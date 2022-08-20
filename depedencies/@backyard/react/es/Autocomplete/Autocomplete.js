import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "openKeys", "closeKeys", "open", "options", "delayClose", "delayOpen", "onChange", "onOpen", "onClose", "onFocus", "onKeyDown", "isSearch", "renderInput", "value", "defaultValue", "shape", "popoverProps", "popperProps"];
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import AutocompleteWrapper from './styles/Autocomplete';
const Autocomplete = /*#__PURE__*/React.forwardRef(function Autocomplete(_ref, ref) {
  let {
    className,
    openKeys = ['ArrowUp', 'ArrowDown'],
    closeKeys = ['Escape'],
    open: openProp = false,
    options,
    delayClose = 300,
    delayOpen = 10,
    onChange,
    onOpen,
    onClose,
    onKeyDown,
    renderInput,
    value: valueProp,
    defaultValue = '',
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
  let funcs = {};
  const forwardRef = useForwardedRef(ref);
  /**
   * Setup all state hooks needed
   */

  const [value, setValue] = React.useState(valueProp || defaultValue);
  const [referenceElement, setReferenceElement] = React.useState(null); // Hold the container ref

  const containerRef = React.useRef(null); // Use Popover hook for open/close state handling

  const {
    open,
    handleOpen,
    handleClose,
    handleKeyDown
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
    onKeyDown
  });
  /** Handle change function to return the change event and value of input field */
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line @typescript-eslint/no-shadow

  const handleInputChange = (event, value) => {
    setValue(value);

    if (onChange) {
      onChange(event, value);
    }
  };

  const handleClearClick = event => {
    setValue('');

    if (onChange) {
      onChange(event, '');
    }
  };

  React.useEffect(() => setReferenceElement(forwardRef.current?.parentElement || forwardRef.current), [forwardRef, value]);
  React.useEffect(() => {
    if (typeof valueProp !== 'undefined') {
      setValue(valueProp);
    }
  }, [valueProp]);

  if (renderInput.type?.bdsName === 'Search') {
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
    className: classNames(`autocomplete-wrapper shape--${shape}`, className),
    ref: containerRef
  }, /*#__PURE__*/React.cloneElement(renderInput, _extends({
    className: classNames(renderInput.props.className, value && 'completed', open && 'focus')
  }, funcs, {
    value,
    shape
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