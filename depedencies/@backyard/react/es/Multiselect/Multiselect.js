import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _Hr, _Hr2;

const _excluded = ["children", "openKeys", "closeKeys", "delayClose", "delayOpen", "open", "options", "listSelectorProps", "popoverProps", "popperProps", "state", "shape", "value", "defaultValue", "maxHeight", "label", "id", "popoverContent", "noSelectAll", "onChange", "onOpen", "onClose", "onMouseDown", "onKeyDown", "onBlur"];
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
const Hr = () => /*#__PURE__*/React.createElement("div", {
  style: {
    backgroundColor: 'var(--bds-color-border-subdued)',
    height: 'var(--bds-sizes-size-1)',
    margin: 'var(--bds-sizes-size-4) var(--bds-sizes-size-16)'
  }
});
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


const Multiselect = /*#__PURE__*/React.forwardRef(function Multiselect(_ref, ref) {
  let {
    children,
    openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
    closeKeys = ['Escape'],
    delayClose = 300,
    delayOpen = 10,
    open: openProp = false,
    options: optionsProp = [],
    listSelectorProps = {},
    popoverProps = {},
    popperProps = {},
    state: stateProp = 'default',
    shape: shapeProp,
    // = 'rounded',
    value: valueProp,
    defaultValue = [],
    maxHeight,
    label = 'Label',
    id,
    popoverContent,
    noSelectAll = false,
    onChange,
    onOpen,
    onClose,
    onMouseDown,
    onKeyDown,
    onBlur
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Multiselect'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Get options from either `options` or `children`

  const options = getOptions(optionsProp, children); // Calculate and hold flat options and their values

  const flatOptions = flattenOptions(options, -1);
  const values = flatOptions.map(option => option.value).filter(Boolean); // Holds the current value of the dropdown

  const [value, setValue] = React.useState(valueProp || defaultValue); // Holds the native picker ref for the anchor point of the popover

  const forwardRef = useForwardedRef(ref); // Holds the current picker element set by the native picker for the anchor

  const [referenceElement, setReferenceElement] = React.useState(null); // Holds the list reference inside the popover

  const listRef = React.useRef(null); // Holds state of the current state of the native input (either 'error' or 'default')

  const [state, setState] = React.useState(stateProp); // Hold the container ref

  const containerRef = React.useRef(null); // Hold the interaction state of the component

  const [interaction, setInteraction] = React.useState('enabled'); // Use Popover hook for open/close state handling

  const {
    open,
    handleOpen,
    handleClose,
    handleBlur,
    handleMouseDown,
    handleKeyDown,
    clearPopoverTimeout
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
    onKeyDown,
    onBlur,
    onMouseDown
  });
  /**
   * Handles the component change interaction
   *
   * @param event - change event
   * @param info - info object from either `Select` or `ListSelector`
   */

  const handleChange = (event, info) => {
    // Set new value
    setValue(info); // If `onChange` defined,

    if (onChange) {
      // Trigger `onChange`
      onChange(event, info);
    }

    setInteraction('completed'); // Cancel close to keep popover open

    clearPopoverTimeout('close');
  }; // Side effect for when `value` changes...


  React.useEffect(() => {
    // If value is different,
    if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes

  React.useEffect(() => setReferenceElement(forwardRef.current), [forwardRef]); // Side effect for when the `state` prop is updated externally

  React.useEffect(() => setState(stateProp), [stateProp]); // Calculate value and label of select

  const selectValue = (value || []).join(', ');
  const selectLabel = `${value.length} Selected`; // Select option is recalculated depending on value

  const selectOptions = [{
    value: selectValue,
    label: selectLabel,
    id: selectLabel
  }]; // Calculate whether some or every value is selected

  const every = values.every(val => value.includes(val));
  const some = values.some(val => value.includes(val));
  /**
   * Function for handling toggling all options and suboptions
   */

  const toggleAll = () => !some ? setValue(values) : setValue([]); // Memoize content above popover


  const contentAbove = React.useMemo(() => // If popover content above defined or select all disabled,
  // Render content above with Hr
  popoverContent?.above || !noSelectAll ? /*#__PURE__*/React.createElement("div", {
    className: "content-above"
  }, popoverContent?.above, !noSelectAll ? /*#__PURE__*/React.createElement(ListSelectorMultiple, {
    options: [{
      label: 'All',
      value: 'all',
      checkboxProps: {
        checked: some,
        indeterminate: some && !every
      }
    }],
    onChange: toggleAll
  }) : null, _Hr || (_Hr = /*#__PURE__*/React.createElement(Hr, null))) : null, [popoverContent, noSelectAll, some, every]); // Memoize content below popover

  const contentBelow = React.useMemo(() => // If popover content below defined,
  // Render content below with Hr
  popoverContent?.below ? /*#__PURE__*/React.createElement("div", {
    className: "content-below"
  }, _Hr2 || (_Hr2 = /*#__PURE__*/React.createElement(Hr, null)), popoverContent?.below) : null, [popoverContent]);
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
    className: `multiselect multiselect--wrapper shape--${shape}`,
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
    }, ...selectOptions],
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
      className: `popover--wrapper shape--${shape}`
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