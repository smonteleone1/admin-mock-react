import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _Hr, _Hr2;

var _excluded = ["children", "openKeys", "closeKeys", "delayClose", "delayOpen", "open", "options", "listSelectorProps", "popoverProps", "popperProps", "state", "shape", "value", "defaultValue", "maxHeight", "label", "id", "popoverContent", "noSelectAll", "onChange", "onOpen", "onClose", "onMouseDown", "onKeyDown", "onBlur"];
import * as React from 'react';
import classNames from 'classnames';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import { arrayEquals, getOptions, flattenOptions } from '../ListSelector/utils';
import { ListSelector } from '../ListSelector';
import { ListSelectorMultiple } from '../ListSelector/ListSelectorMultiple';
import Select from '../Select';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import MultiselectWrapper from './styles/MultiselectWrapper';

/**
 * Misc. horizontal rule component
 *
 * Used for separating popover content
 */
var Hr = function Hr() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'var(--bds-color-border-subdued)',
      height: 'var(--bds-sizes-size-1)',
      margin: 'var(--bds-sizes-size-4) var(--bds-sizes-size-16)'
    }
  });
};
/**
 * Backyard React Multiselect
 *
 * Customized popover for multiple variant of `Select`
 *
 * Examples:
 *
 * - [Multiselect](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Multiselect)
 *
 * API:
 *
 * - [Multiselect API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Multiselect)
 *
 * - [Option API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Option)
 */


var Multiselect = /*#__PURE__*/React.forwardRef(function Multiselect(_ref, ref) {
  var children = _ref.children,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [' ', 'ArrowUp', 'ArrowDown', 'Enter'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      _ref$options = _ref.options,
      optionsProp = _ref$options === void 0 ? [] : _ref$options,
      _ref$listSelectorProp = _ref.listSelectorProps,
      listSelectorProps = _ref$listSelectorProp === void 0 ? {} : _ref$listSelectorProp,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'default' : _ref$state,
      shapeProp = _ref.shape,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      maxHeight = _ref.maxHeight,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      id = _ref.id,
      popoverContent = _ref.popoverContent,
      _ref$noSelectAll = _ref.noSelectAll,
      noSelectAll = _ref$noSelectAll === void 0 ? false : _ref$noSelectAll,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onMouseDown = _ref.onMouseDown,
      onKeyDown = _ref.onKeyDown,
      onBlur = _ref.onBlur,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Multiselect'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Get options from either `options` or `children`

  var options = getOptions(optionsProp, children); // Calculate and hold flat options and their values

  var flatOptions = flattenOptions(options, -1);
  var values = flatOptions.map(function (option) {
    return option.value;
  }).filter(Boolean); // Holds the current value of the dropdown

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1]; // Holds the native picker ref for the anchor point of the popover


  var forwardRef = useForwardedRef(ref); // Holds the current picker element set by the native picker for the anchor

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      referenceElement = _React$useState4[0],
      setReferenceElement = _React$useState4[1]; // Holds the list reference inside the popover


  var listRef = React.useRef(null); // Holds state of the current state of the native input (either 'error' or 'default')

  var _React$useState5 = React.useState(stateProp),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      state = _React$useState6[0],
      setState = _React$useState6[1]; // Hold the container ref


  var containerRef = React.useRef(null); // Hold the interaction state of the component

  var _React$useState7 = React.useState('enabled'),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      interaction = _React$useState8[0],
      setInteraction = _React$useState8[1]; // Use Popover hook for open/close state handling


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
    onKeyDown: onKeyDown,
    onBlur: onBlur,
    onMouseDown: onMouseDown
  }),
      open = _usePopover.open,
      handleOpen = _usePopover.handleOpen,
      handleClose = _usePopover.handleClose,
      handleBlur = _usePopover.handleBlur,
      handleMouseDown = _usePopover.handleMouseDown,
      handleKeyDown = _usePopover.handleKeyDown,
      clearPopoverTimeout = _usePopover.clearPopoverTimeout;
  /**
   * Handles the component change interaction
   *
   * @param event - change event
   * @param info - info object from either `Select` or `ListSelector`
   */


  var handleChange = function handleChange(event, info) {
    // Set new value
    setValue(info); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(event, info);
    }

    setInteraction('completed'); // Cancel close to keep popover open

    clearPopoverTimeout('close');
  }; // Side effect for when `value` changes...


  React.useEffect(function () {
    // If value is different,
    if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(function () {
    return setReferenceElement(forwardRef.current);
  }, [forwardRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(function () {
    return setState(stateProp);
  }, [stateProp]); // Calculate value and label of select

  var selectValue = (value || []).join(', ');
  var selectLabel = "".concat(value.length, " Selected"); // Select option is recalculated depending on value

  var selectOptions = [{
    value: selectValue,
    label: selectLabel,
    id: selectLabel
  }]; // Calculate whether some or every value is selected

  var every = values.every(function (val) {
    return value.includes(val);
  });
  var some = values.some(function (val) {
    return value.includes(val);
  });
  /**
   * Function for handling toggling all options and suboptions
   */

  var toggleAll = function toggleAll() {
    return !some ? setValue(values) : setValue([]);
  }; // Memoize content above popover


  var contentAbove = React.useMemo(function () {
    return (// If popover content above defined or select all disabled,
      // Render content above with Hr
      popoverContent !== null && popoverContent !== void 0 && popoverContent.above || !noSelectAll ? /*#__PURE__*/React.createElement("div", {
        className: "content-above"
      }, popoverContent === null || popoverContent === void 0 ? void 0 : popoverContent.above, !noSelectAll ? /*#__PURE__*/React.createElement(ListSelectorMultiple, {
        options: [{
          label: 'All',
          value: 'all',
          checkboxProps: {
            checked: some,
            indeterminate: some && !every
          }
        }],
        onChange: toggleAll
      }) : null, _Hr || (_Hr = /*#__PURE__*/React.createElement(Hr, null))) : null
    );
  }, [popoverContent, noSelectAll, some, every]); // Memoize content below popover

  var contentBelow = React.useMemo(function () {
    return (// If popover content below defined,
      // Render content below with Hr
      popoverContent !== null && popoverContent !== void 0 && popoverContent.below ? /*#__PURE__*/React.createElement("div", {
        className: "content-below"
      }, _Hr2 || (_Hr2 = /*#__PURE__*/React.createElement(Hr, null)), popoverContent === null || popoverContent === void 0 ? void 0 : popoverContent.below) : null
    );
  }, [popoverContent]);
  /**
   * Layout:
   *  <div> // click away listener listens for any click outside of this element
   *      <Select />
   *      <Popover> // appears open only on desktop
   *          <ListSelector />
   *      </Popover>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /*#__PURE__*/React.createElement(MultiselectWrapper, {
    className: "multiselect multiselect--wrapper shape--".concat(shape),
    maxHeight: maxHeight,
    ref: containerRef
  }, /*#__PURE__*/React.createElement(Select, _extends({
    key: "multiselect",
    id: id,
    readOnly: Boolean(referenceElement),
    className: classNames(value.length > 0 && 'completed', open && 'focus'),
    options: [{
      label: '',
      value: ''
    }].concat(selectOptions),
    onClick: handleOpen,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onMouseDown: handleMouseDown,
    state: state,
    interaction: interaction,
    label: label,
    value: selectValue || '',
    shape: shape,
    open: open
  }, props, {
    ref: forwardRef
  })), referenceElement ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: true,
    keepMounted: true,
    open: open,
    anchorEl: referenceElement,
    offset: [0, 0],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "popover--wrapper shape--".concat(shape)
    }, contentAbove, /*#__PURE__*/React.createElement(ListSelector, _extends({
      multiple: true,
      onChange: handleChange,
      value: value,
      options: options,
      enableGlobalKeyDown: open,
      shape: shape
    }, listSelectorProps, {
      ref: listRef
    })), contentBelow)
  }, popoverProps, popperProps)) : null));
});
Multiselect.bdsName = 'Multiselect';
export { Multiselect };
export default Multiselect;