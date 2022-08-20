import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "buttonProps", "options", "value", "defaultValue", "enableGlobalKeyDown", "onChange", "onMouseDown", "shape"],
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

var ListSelectorMultiple = /*#__PURE__*/React.forwardRef(function ListSelectorMultiple(_ref, ref) {
  var _useGlobalKeyDown;

  var children = _ref.children,
      className = _ref.className,
      buttonProps = _ref.buttonProps,
      _ref$options = _ref.options,
      optionsProp = _ref$options === void 0 ? [] : _ref$options,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
      _ref$enableGlobalKeyD = _ref.enableGlobalKeyDown,
      enableGlobalKeyDown = _ref$enableGlobalKeyD === void 0 ? false : _ref$enableGlobalKeyD,
      onChange = _ref.onChange,
      onMouseDown = _ref.onMouseDown,
      shape = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get options from either `options` or `children`
  var options = getOptions(optionsProp, children); // Focused option

  var _React$useState = React.useState(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusedOption = _React$useState2[0],
      setFocusedOptionState = _React$useState2[1]; // Holds the current value


  var _React$useState3 = React.useState(valueProp || defaultValue),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1]; // Holds the previous value, set to initial value


  var _React$useState5 = React.useState(valueProp || defaultValue),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      previousValue = _React$useState6[0],
      setPreviousValue = _React$useState6[1];

  var innerRef = useForwardedRef(ref); // Hold ref for each toggle

  var refs = React.useRef(_toConsumableArray(new Array(options ? options.length : React.Children.count(children))).map(React.createRef));
  /**
   * Handles the component change interaction
   *
   * @param event - change event
   * @param info - info object from `ListSelector`
   */

  var handleChange = function handleChange(event, info) {
    // Persist event propagation
    persistSyntheticEvent(event); // Set new value

    setValue(info);
  };
  /**
   * Logic to handle setting currently focused option
   *
   * @param type
   */


  var setFocusedOption = function setFocusedOption(type) {
    // Set new focused option
    setFocusedOptionState(function (option) {
      var _refs$current, _refs$current$lookahe, _refs$current$lookahe2;

      // Clamp new option
      var newOption = clampOption(type, option, options); // Look ahead to next option for scrolling

      var lookaheadOption = clampOption(type, newOption, options); // Get lookahead option

      var toggleButton = (_refs$current = refs.current) === null || _refs$current === void 0 ? void 0 : (_refs$current$lookahe = _refs$current[lookaheadOption]) === null || _refs$current$lookahe === void 0 ? void 0 : (_refs$current$lookahe2 = _refs$current$lookahe.current) === null || _refs$current$lookahe2 === void 0 ? void 0 : _refs$current$lookahe2.parentElement; // Scroll option into view

      toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
      return newOption;
    });
  };
  /**
   * Handle focused option click
   */


  var selectFocusedOption = function selectFocusedOption() {
    // If focused option is defined
    if (focusedOption >= 0) {
      var _refs$current2, _refs$current2$focuse, _refs$current2$focuse2;

      // Click current focused option
      (_refs$current2 = refs.current) === null || _refs$current2 === void 0 ? void 0 : (_refs$current2$focuse = _refs$current2[focusedOption]) === null || _refs$current2$focuse === void 0 ? void 0 : (_refs$current2$focuse2 = _refs$current2$focuse.current) === null || _refs$current2$focuse2 === void 0 ? void 0 : _refs$current2$focuse2.click();
    }
  };

  useGlobalKeyDown(enableGlobalKeyDown, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return setFocusedOption('decrement');
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return setFocusedOption('increment');
  }), _defineProperty(_useGlobalKeyDown, keycode.Enter, function () {
    return selectFocusedOption();
  }), _defineProperty(_useGlobalKeyDown, keycode.Space, function () {
    return selectFocusedOption();
  }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return setFocusedOption('first');
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return setFocusedOption('last');
  }), _useGlobalKeyDown)); // Side effect for when `value` changes...

  React.useEffect(function () {
    // If value is different,
    if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
      // Set new option
      setValue(valueProp);
    }
  }, [valueProp]); // Handle creation of toggles on a given level of options

  var createToggles = function createToggles(options, level) {
    return (// Map each option...
      options.map(function (_ref2, index) {
        var _span, _refs$current4;

        var label = _ref2.label,
            toggleValue = _ref2.value,
            options = _ref2.options,
            optionId = _ref2['data-option-id'],
            checkboxProps = _ref2.checkboxProps,
            toggleButtonProps = _objectWithoutProperties(_ref2, _excluded2);

        // Calculate lower level values for level
        var values = (options === null || options === void 0 ? void 0 : options.length) > 0 ? flattenOptions(options, optionId).map(function (option) {
          return option.value;
        }).filter(Boolean) : toggleValue; // If more than one option,

        if ((options === null || options === void 0 ? void 0 : options.length) > 0) {
          var _refs$current3;

          // Calculate checked and indeterminate state of group
          var checked = values.some(function (val) {
            return value.includes(val);
          });
          var indeterminate = checked && !values.every(function (val) {
            return value.includes(val);
          }); // Calculate padding left for level

          var paddingLeft = "calc(var(--bds-sizes-size-32) * ".concat(level, " + var(--bds-sizes-size-16))"); // Handle click even for the `OptionGroup`

          var handleClick = function handleClick() {
            // Fix race even condition...
            // After a short time,
            setTimeout(function () {
              // Set the new value to...
              setValue(function (value) {
                // If some values selected,
                if (values.some(function (val) {
                  return value.includes(val);
                })) {
                  // Filter out already selected values
                  return value.filter(function (val) {
                    return !values.includes(val);
                  });
                } // Else, concat all grouped values


                return value.concat(values);
              });
            }, 10);
          }; // Render the option group


          return /*#__PURE__*/React.createElement(React.Fragment, {
            key: "".concat(level, "-").concat(index)
          }, /*#__PURE__*/React.createElement(ToggleButton, _extends({
            className: focusedOption === index ? "focus" : "",
            state: "unselected",
            shape: "squared",
            onClick: handleClick,
            value: null,
            style: {
              paddingLeft: paddingLeft
            }
          }, toggleButtonProps), /*#__PURE__*/React.createElement(Checkbox, _extends({
            className: "list-checkbox",
            checked: checked,
            indeterminate: indeterminate,
            tabIndex: -1,
            shape: shape
          }, checkboxProps, {
            ref: (_refs$current3 = refs.current) === null || _refs$current3 === void 0 ? void 0 : _refs$current3[index]
          })), _span || (_span = /*#__PURE__*/React.createElement("span", {
            className: "list-label"
          }, label))), /*#__PURE__*/React.createElement("ul", {
            className: "list-options-level"
          }, createToggles(options, level + 1)));
        } // Else, render the toggle


        return /*#__PURE__*/React.createElement(ToggleButton, _extends({
          key: "".concat(level, "-").concat(index),
          className: focusedOption === index ? "focus" : "",
          value: toggleValue,
          state: "unselected",
          shape: "squared",
          style: {
            paddingLeft: "calc(var(--bds-sizes-size-32) * ".concat(level, " + var(--bds-sizes-size-16))")
          }
        }, toggleButtonProps), /*#__PURE__*/React.createElement(Checkbox, _extends({
          className: "list-checkbox",
          checked: value.indexOf("".concat(toggleValue)) >= 0,
          tabIndex: -1,
          shape: shape
        }, checkboxProps, {
          ref: (_refs$current4 = refs.current) === null || _refs$current4 === void 0 ? void 0 : _refs$current4[index]
        })), /*#__PURE__*/React.createElement("span", {
          className: "list-label"
        }, label));
      })
    );
  }; // Side effect for when `value` changes...


  React.useEffect(function () {
    // If `onChange` defined,
    if (onChange && !arrayEquals(value, previousValue)) {
      // Trigger `onChange`
      onChange(null, value); // Set new previous value

      setPreviousValue(value);
    }
  }, [value]); // Calculate toggle button children for popover

  var toggles = createToggles(options, 0);
  return /*#__PURE__*/React.createElement(ListSelectorMultipleWrapper, _extends({
    className: classNames("list list-selector multiple-selector shape--".concat(shape), className),
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