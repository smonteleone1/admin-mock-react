import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "buttonProps", "options", "value", "defaultValue", "enableGlobalKeyDown", "onChange", "onMouseDown", "shape"],
      _excluded2 = ["label", "value", "options", "data-option-id", "checkboxProps"];
import * as React from 'react';
import classNames from 'classnames';
import Checkbox from '../Checkbox';
import { ToggleButton } from '../Toggle';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import { useGlobalKeyDown, keycode } from '../utils/hooks/useKeyDown';
import { useForwardedRef } from '../utils/hooks/useForwardedRef';
import ListSelectorMultipleWrapper from './styles/ListSelectorMultipleWrapper';
import { arrayEquals, clampOption, flattenOptions, getOptions } from './utils';
/**
 * Backyard React List Selector Multiple
 *
 * @internal
 *
 * Multiple selection list selection handler
 */

const ListSelectorMultiple = /*#__PURE__*/React.forwardRef(function ListSelectorMultiple(_ref, ref) {
  let {
    children,
    className,
    buttonProps,
    options: optionsProp = [],
    value: valueProp,
    defaultValue = [],
    enableGlobalKeyDown = false,
    onChange,
    shape
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get options from either `options` or `children`
  const options = getOptions(optionsProp, children); // Focused option

  const [focusedOption, setFocusedOptionState] = React.useState(-1); // Holds the current value

  const [value, setValue] = React.useState(valueProp || defaultValue); // Holds the previous value, set to initial value

  const [previousValue, setPreviousValue] = React.useState(valueProp || defaultValue);
  const innerRef = useForwardedRef(ref); // Hold ref for each toggle

  const refs = React.useRef([...new Array(options ? options.length : React.Children.count(children))].map(React.createRef));
  /**
   * Handles the component change interaction
   *
   * @param event - change event
   * @param info - info object from `ListSelector`
   */

  const handleChange = (event, info) => {
    // Persist event propagation
    persistSyntheticEvent(event); // Set new value

    setValue(info);
  };
  /**
   * Logic to handle setting currently focused option
   *
   * @param type
   */


  const setFocusedOption = type => {
    // Set new focused option
    setFocusedOptionState(option => {
      // Clamp new option
      const newOption = clampOption(type, option, options); // Look ahead to next option for scrolling

      const lookaheadOption = clampOption(type, newOption, options); // Get lookahead option

      const toggleButton = refs.current?.[lookaheadOption]?.current?.parentElement; // Scroll option into view

      toggleButton?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return newOption;
    });
  };
  /**
   * Handle focused option click
   */


  const selectFocusedOption = () => {
    // If focused option is defined
    if (focusedOption >= 0) {
      // Click current focused option
      refs.current?.[focusedOption]?.current?.click();
    }
  };

  useGlobalKeyDown(enableGlobalKeyDown, {
    [keycode.ArrowUp]: () => setFocusedOption('decrement'),
    [keycode.ArrowDown]: () => setFocusedOption('increment'),
    [keycode.Enter]: () => selectFocusedOption(),
    [keycode.Space]: () => selectFocusedOption(),
    [keycode.Home]: () => setFocusedOption('first'),
    [keycode.End]: () => setFocusedOption('last')
  }); // Side effect for when `value` changes...

  React.useEffect(() => {
    // If value is different,
    if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Handle creation of toggles on a given level of options

  const createToggles = (options, level) => // Map each option...
  options.map((_ref2, index) => {
    var _span;

    let {
      label,
      value: toggleValue,
      options,
      // eslint-disable-next-line no-useless-computed-key
      ['data-option-id']: optionId,
      checkboxProps
    } = _ref2,
        toggleButtonProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

    // Calculate lower level values for level
    const values = options?.length > 0 ? flattenOptions(options, optionId).map(option => option.value).filter(Boolean) : toggleValue; // If more than one option,

    if (options?.length > 0) {
      // Calculate checked and indeterminate state of group
      const checked = values.some(val => value.includes(val));
      const indeterminate = checked && !values.every(val => value.includes(val)); // Calculate padding left for level

      const paddingLeft = `calc(var(--bds-sizes-size-32) * ${level} + var(--bds-sizes-size-16))`; // Handle click even for the `OptionGroup`

      const handleClick = () => {
        // Fix race even condition...
        // After a short time,
        setTimeout(() => {
          // Set the new value to...
          setValue(value => {
            // If some values selected,
            if (values.some(val => value.includes(val))) {
              // Filter out already selected values
              return value.filter(val => !values.includes(val));
            } // Else, concat all grouped values


            return value.concat(values);
          });
        }, 10);
      }; // Render the option group


      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: `${level}-${index}`
      }, /*#__PURE__*/React.createElement(ToggleButton, _extends({
        className: focusedOption === index ? "focus" : "",
        state: "unselected",
        shape: "squared",
        onClick: handleClick,
        value: null,
        style: {
          paddingLeft
        }
      }, toggleButtonProps), /*#__PURE__*/React.createElement(Checkbox, _extends({
        className: "list-checkbox",
        checked: checked,
        indeterminate: indeterminate,
        tabIndex: -1,
        shape: shape
      }, checkboxProps, {
        ref: refs.current?.[index]
      })), _span || (_span = /*#__PURE__*/React.createElement("span", {
        className: "list-label"
      }, label))), /*#__PURE__*/React.createElement("ul", {
        className: "list-options-level"
      }, createToggles(options, level + 1)));
    } // Else, render the toggle


    return /*#__PURE__*/React.createElement(ToggleButton, _extends({
      key: `${level}-${index}`,
      className: focusedOption === index ? "focus" : "",
      value: toggleValue,
      state: "unselected",
      shape: "squared",
      style: {
        paddingLeft: `calc(var(--bds-sizes-size-32) * ${level} + var(--bds-sizes-size-16))`
      }
    }, toggleButtonProps), /*#__PURE__*/React.createElement(Checkbox, _extends({
      className: "list-checkbox",
      checked: value.indexOf(`${toggleValue}`) >= 0,
      tabIndex: -1,
      shape: shape
    }, checkboxProps, {
      ref: refs.current?.[index]
    })), /*#__PURE__*/React.createElement("span", {
      className: "list-label"
    }, label));
  }); // Side effect for when `value` changes...


  React.useEffect(() => {
    // If `onChange` defined,
    if (onChange && !arrayEquals(value, previousValue)) {
      // Trigger `onChange`
      onChange(null, value); // Set new previous value

      setPreviousValue(value);
    }
  }, [value]); // Calculate toggle button children for popover

  const toggles = createToggles(options, 0);
  return /*#__PURE__*/React.createElement(ListSelectorMultipleWrapper, _extends({
    className: classNames(`list list-selector multiple-selector shape--${shape}`, className),
    onChange: handleChange,
    value: value,
    buttonProps: _extends({}, buttonProps, {
      variant: 'ghost',
      color: 'unselected'
    }),
    selectedButtonProps: {
      variant: 'ghost',
      color: 'unselected'
    },
    shape: shape
  }, props, {
    ref: innerRef
  }), /*#__PURE__*/React.createElement("ul", {
    className: "list-selector-list"
  }, toggles));
});
export { ListSelectorMultiple };
export default ListSelectorMultiple;