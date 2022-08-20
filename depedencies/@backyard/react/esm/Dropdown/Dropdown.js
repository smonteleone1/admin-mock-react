import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["children", "openKeys", "closeKeys", "label", "delayClose", "delayOpen", "disableCloseOnSelect", "disabled", "stacked", "open", "options", "listSelectorProps", "maxHeight", "popoverProps", "popperProps", "state", "shape", "value", "defaultValue", "onClick", "onChange", "onOpen", "onClose", "onKeyDown", "onBlur", "optionsLabel", "wrapperProps"];
import * as React from 'react';
import { isIOS } from 'react-device-detect';
import classNames from 'classnames';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import ClickAwayListener from '../ClickAwayListener';
import { Popover, usePopover } from '../Popover';
import ListSelector from '../ListSelector';
import Select from '../Select';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import DropdownWrapper from './styles/DropdownWrapper';
/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for dropdown
 * @param children - children `Option`s for dropdown
 */

var getOptions = function getOptions(options, children) {
  return (// If options are defined,
    (options === null || options === void 0 ? void 0 : options.length) > 0 ? // Then use options format
    options.map(function (option) {
      return _extends({
        tabIndex: '-1'
      }, option);
    }) : // Else, map children props to `options` format
    children ? React.Children.map(children, function (child) {
      var _child$props;

      return _extends({
        label: child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.children,
        tabIndex: '-1'
      }, child === null || child === void 0 ? void 0 : child.props);
    }) : []
  );
};
/**
 * Backyard React Dropdown
 *
 * Customized popover for `Select`
 *
 * Examples:
 *
 * - [Dropdown](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Dropdown)
 *
 * API:
 *
 * - [Dropdown API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Dropdown)
 *
 * - [Option API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Option)
 */


var Dropdown = /*#__PURE__*/React.forwardRef(function Dropdown(_ref, ref) {
  var _span, _span2;

  var children = _ref.children,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [' ', 'ArrowUp', 'ArrowDown', 'Enter'] : _ref$openKeys,
      _ref$closeKeys = _ref.closeKeys,
      closeKeys = _ref$closeKeys === void 0 ? ['Escape'] : _ref$closeKeys,
      labelProp = _ref.label,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? 300 : _ref$delayClose,
      _ref$delayOpen = _ref.delayOpen,
      delayOpen = _ref$delayOpen === void 0 ? 10 : _ref$delayOpen,
      _ref$disableCloseOnSe = _ref.disableCloseOnSelect,
      disableCloseOnSelect = _ref$disableCloseOnSe === void 0 ? false : _ref$disableCloseOnSe,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$stacked = _ref.stacked,
      stacked = _ref$stacked === void 0 ? false : _ref$stacked,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      _ref$options = _ref.options,
      optionsProp = _ref$options === void 0 ? [] : _ref$options,
      _ref$listSelectorProp = _ref.listSelectorProps,
      listSelectorProps = _ref$listSelectorProp === void 0 ? {} : _ref$listSelectorProp,
      maxHeight = _ref.maxHeight,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'default' : _ref$state,
      shapeProp = _ref.shape,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onKeyDown = _ref.onKeyDown,
      onBlur = _ref.onBlur,
      _ref$optionsLabel = _ref.optionsLabel,
      optionsLabel = _ref$optionsLabel === void 0 ? '' : _ref$optionsLabel,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'Dropdown'
  });
  var isDesktop = theme.isDesktop;
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Get options from either `options` or `children`

  var options = getOptions(optionsProp, children); // Holds the current value of the dropdown

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


  var containerRef = React.useRef(null); // Hold the label info

  var _React$useState7 = React.useState(labelProp),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dropdownLabel = _React$useState8[0],
      setDropdownLabel = _React$useState8[1];

  var _React$useState9 = React.useState('enabled'),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      interaction = _React$useState10[0],
      setInteraction = _React$useState10[1]; // Hold whether select will be read only


  var readOnly = Boolean(isDesktop && referenceElement); // Use Popover hook for open/close state handling

  var _usePopover = usePopover({
    disabled: !readOnly,
    containerRef: containerRef,
    referenceElement: referenceElement,
    delayClose: delayClose,
    delayOpen: delayOpen,
    openKeys: openKeys,
    closeKeys: closeKeys,
    open: openProp,
    onOpen: onOpen,
    onClose: onClose,
    onKeyDown: onKeyDown,
    onBlur: onBlur,
    ref: forwardRef
  }),
      open = _usePopover.open,
      handleOpen = _usePopover.handleOpen,
      handleClose = _usePopover.handleClose,
      handleBlur = _usePopover.handleBlur,
      handleMouseDown = _usePopover.handleMouseDown,
      handleKeyDown = _usePopover.handleKeyDown,
      closeAfterDelay = _usePopover.closeAfterDelay;
  /**
   * Handles the native component click interaction
   *
   * @param event - change event
   * @param info - info object
   */


  var handleClick = function handleClick(event, info) {
    // Open popover
    handleOpen(); // If `onClick` defined,

    if (onClick) {
      // Trigger `onClick`
      onClick(event, info);
    }
  };
  /**
   * Handles the native component change interaction
   *
   * @param event - change event
   * @param info - info object
   */


  var handleSelectChange = function handleSelectChange(event, info) {
    // Persist event propagation
    persistSyntheticEvent(event);
    var newValue = info.value;

    if (stacked) {
      var LabelElement = function LabelElement() {
        return /*#__PURE__*/React.createElement("div", {
          className: "label-element"
        }, _span || (_span = /*#__PURE__*/React.createElement("span", {
          className: "select--label"
        }, labelProp)), /*#__PURE__*/React.createElement("span", {
          className: "select--value"
        }, info.label));
      };

      setDropdownLabel( /*#__PURE__*/React.createElement(LabelElement, null));
    } // Set new date value


    setValue(newValue); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(event, info);
    }
  };
  /**
   * Handles the calendar change event interaction
   *
   * @param date - selected date from the `CalendarPicker`
   */


  var handleListChange = function handleListChange(event, info) {
    // Persist event propagation
    persistSyntheticEvent(event);
    var newValue = info.value;

    if (stacked) {
      var LabelElement = function LabelElement() {
        return /*#__PURE__*/React.createElement("div", {
          className: "label-element"
        }, _span2 || (_span2 = /*#__PURE__*/React.createElement("span", {
          className: "select--label"
        }, labelProp)), /*#__PURE__*/React.createElement("span", {
          className: "select--value"
        }, info.label));
      };

      setDropdownLabel( /*#__PURE__*/React.createElement(LabelElement, null));
    } // Set new date value


    setValue(newValue);
    setInteraction('completed'); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(event, info);
    }

    if (!disableCloseOnSelect) {
      // Delay close handling
      closeAfterDelay();
    } // IOS mobile devices render an overlay effect
    // when focused with the native select...
    // If not IOS device,


    if (!isIOS) {
      // Return autofocus to reference
      referenceElement.focus();
    }
  }; // Side effect for when `value` changes...


  React.useEffect(function () {
    // If value is different,
    if (typeof valueProp !== 'undefined' && value !== valueProp) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(function () {
    return setReferenceElement(forwardRef.current);
  }, [isDesktop, forwardRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(function () {
    return setState(stateProp);
  }, [stateProp]);
  var selectOptions = [{
    label: optionsLabel,
    value: '',
    disabled: true,
    hidden: readOnly
  }].concat(_toConsumableArray(options.map(function (option) {
    return _extends({}, option, {
      hidden: readOnly
    });
  })));
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
  }, /*#__PURE__*/React.createElement(DropdownWrapper, _extends({
    maxHeight: maxHeight,
    ref: containerRef
  }, wrapperProps, {
    className: classNames("dropdown--wrapper shape--".concat(shape), wrapperProps.className)
  }), /*#__PURE__*/React.createElement(Select, _extends({
    key: "dropdown",
    readOnly: readOnly,
    className: classNames(value && 'completed', open && 'focus'),
    stacked: stacked,
    options: selectOptions,
    onClick: handleClick,
    onBlur: handleBlur,
    label: dropdownLabel,
    onKeyDown: handleKeyDown,
    onChange: handleSelectChange,
    onMouseDown: handleMouseDown,
    interaction: interaction,
    state: state,
    value: value,
    shape: shape,
    disabled: disabled,
    open: open
  }, props, {
    ref: forwardRef
  })), readOnly ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: true,
    open: open,
    anchorEl: referenceElement,
    offset: [0, 2],
    pop: /*#__PURE__*/React.createElement("div", {
      className: "popover--wrapper shape--".concat(shape)
    }, /*#__PURE__*/React.createElement(ListSelector, _extends({
      options: options,
      onChange: handleListChange,
      value: value,
      enableGlobalKeyDown: open,
      shape: "squared"
    }, listSelectorProps, {
      ref: listRef
    })))
  }, popoverProps, popperProps)) : null));
});
Dropdown.bdsName = 'Dropdown';
export { Dropdown };
export default Dropdown;