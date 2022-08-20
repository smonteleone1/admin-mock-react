import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["children", "openKeys", "closeKeys", "label", "delayClose", "delayOpen", "disableCloseOnSelect", "disabled", "stacked", "open", "options", "listSelectorProps", "maxHeight", "popoverProps", "popperProps", "state", "shape", "value", "defaultValue", "onClick", "onChange", "onOpen", "onClose", "onKeyDown", "onBlur", "optionsLabel", "wrapperProps"];
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

const getOptions = (options, children) => // If options are defined,
options?.length > 0 ? // Then use options format
options.map(option => _extends({
  tabIndex: '-1'
}, option)) : // Else, map children props to `options` format
children ? React.Children.map(children, child => _extends({
  label: child?.props?.children,
  tabIndex: '-1'
}, child?.props)) : [];
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


const Dropdown = /*#__PURE__*/React.forwardRef(function Dropdown(_ref, ref) {
  var _span, _span2;

  let {
    children,
    openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
    closeKeys = ['Escape'],
    label: labelProp,
    delayClose = 300,
    delayOpen = 10,
    disableCloseOnSelect = false,
    disabled = false,
    stacked = false,
    open: openProp = false,
    options: optionsProp = [],
    listSelectorProps = {},
    maxHeight,
    popoverProps = {},
    popperProps = {},
    state: stateProp = 'default',
    shape: shapeProp,
    // = 'rounded',
    value: valueProp,
    defaultValue = '',
    onClick,
    onChange,
    onOpen,
    onClose,
    onKeyDown,
    onBlur,
    optionsLabel = '',
    wrapperProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'Dropdown'
  });
  const {
    isDesktop
  } = theme;
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Get options from either `options` or `children`

  const options = getOptions(optionsProp, children); // Holds the current value of the dropdown

  const [value, setValue] = React.useState(valueProp || defaultValue); // Holds the native picker ref for the anchor point of the popover

  const forwardRef = useForwardedRef(ref); // Holds the current picker element set by the native picker for the anchor

  const [referenceElement, setReferenceElement] = React.useState(null); // Holds the list reference inside the popover

  const listRef = React.useRef(null); // Holds state of the current state of the native input (either 'error' or 'default')

  const [state, setState] = React.useState(stateProp); // Hold the container ref

  const containerRef = React.useRef(null); // Hold the label info

  const [dropdownLabel, setDropdownLabel] = React.useState(labelProp);
  const [interaction, setInteraction] = React.useState('enabled'); // Hold whether select will be read only

  const readOnly = Boolean(isDesktop && referenceElement); // Use Popover hook for open/close state handling

  const {
    open,
    handleOpen,
    handleClose,
    handleBlur,
    handleMouseDown,
    handleKeyDown,
    closeAfterDelay
  } = usePopover({
    disabled: !readOnly,
    containerRef,
    referenceElement,
    delayClose,
    delayOpen,
    openKeys,
    closeKeys,
    open: openProp,
    onOpen,
    onClose,
    onKeyDown,
    onBlur,
    ref: forwardRef
  });
  /**
   * Handles the native component click interaction
   *
   * @param event - change event
   * @param info - info object
   */

  const handleClick = (event, info) => {
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


  const handleSelectChange = (event, info) => {
    // Persist event propagation
    persistSyntheticEvent(event);
    const {
      value: newValue
    } = info;

    if (stacked) {
      const LabelElement = () => /*#__PURE__*/React.createElement("div", {
        className: "label-element"
      }, _span || (_span = /*#__PURE__*/React.createElement("span", {
        className: "select--label"
      }, labelProp)), /*#__PURE__*/React.createElement("span", {
        className: "select--value"
      }, info.label));

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


  const handleListChange = (event, info) => {
    // Persist event propagation
    persistSyntheticEvent(event);
    const {
      value: newValue
    } = info;

    if (stacked) {
      const LabelElement = () => /*#__PURE__*/React.createElement("div", {
        className: "label-element"
      }, _span2 || (_span2 = /*#__PURE__*/React.createElement("span", {
        className: "select--label"
      }, labelProp)), /*#__PURE__*/React.createElement("span", {
        className: "select--value"
      }, info.label));

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


  React.useEffect(() => {
    // If value is different,
    if (typeof valueProp !== 'undefined' && value !== valueProp) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(() => setReferenceElement(forwardRef.current), [isDesktop, forwardRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(() => setState(stateProp), [stateProp]);
  const selectOptions = [{
    label: optionsLabel,
    value: '',
    disabled: true,
    hidden: readOnly
  }, ...options.map(option => _extends({}, option, {
    hidden: readOnly
  }))];
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
    className: classNames(`dropdown--wrapper shape--${shape}`, wrapperProps.className)
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
      className: `popover--wrapper shape--${shape}`
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