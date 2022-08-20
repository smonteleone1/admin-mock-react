"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListSelectorMultiple = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Toggle = require("../Toggle");

var _persistSyntheticEvent = _interopRequireDefault(require("../utils/functions/persistSyntheticEvent"));

var _useKeyDown = require("../utils/hooks/useKeyDown");

var _useForwardedRef = require("../utils/hooks/useForwardedRef");

var _ListSelectorMultipleWrapper = _interopRequireDefault(require("./styles/ListSelectorMultipleWrapper"));

var _utils = require("./utils");

var _excluded = ["children", "className", "buttonProps", "options", "value", "defaultValue", "enableGlobalKeyDown", "onChange", "onMouseDown", "shape"],
    _excluded2 = ["label", "value", "options", "data-option-id", "checkboxProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get options from either `options` or `children`
  var options = (0, _utils.getOptions)(optionsProp, children); // Focused option

  var _React$useState = React.useState(-1),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      focusedOption = _React$useState2[0],
      setFocusedOptionState = _React$useState2[1]; // Holds the current value


  var _React$useState3 = React.useState(valueProp || defaultValue),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1]; // Holds the previous value, set to initial value


  var _React$useState5 = React.useState(valueProp || defaultValue),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      previousValue = _React$useState6[0],
      setPreviousValue = _React$useState6[1];

  var innerRef = (0, _useForwardedRef.useForwardedRef)(ref); // Hold ref for each toggle

  var refs = React.useRef((0, _toConsumableArray2["default"])(new Array(options ? options.length : React.Children.count(children))).map(React.createRef));
  /**
   * Handles the component change interaction
   *
   * @param event - change event
   * @param info - info object from `ListSelector`
   */

  var handleChange = function handleChange(event, info) {
    // Persist event propagation
    (0, _persistSyntheticEvent["default"])(event); // Set new value

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
      var newOption = (0, _utils.clampOption)(type, option, options); // Look ahead to next option for scrolling

      var lookaheadOption = (0, _utils.clampOption)(type, newOption, options); // Get lookahead option

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

  (0, _useKeyDown.useGlobalKeyDown)(enableGlobalKeyDown, (_useGlobalKeyDown = {}, (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowUp, function () {
    return setFocusedOption('decrement');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.ArrowDown, function () {
    return setFocusedOption('increment');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Enter, function () {
    return selectFocusedOption();
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Space, function () {
    return selectFocusedOption();
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.Home, function () {
    return setFocusedOption('first');
  }), (0, _defineProperty2["default"])(_useGlobalKeyDown, _useKeyDown.keycode.End, function () {
    return setFocusedOption('last');
  }), _useGlobalKeyDown)); // Side effect for when `value` changes...

  React.useEffect(function () {
    // If value is different,
    if (typeof valueProp !== 'undefined' && !(0, _utils.arrayEquals)(value, valueProp)) {
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
            toggleButtonProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
        // Calculate lower level values for level
        var values = (options === null || options === void 0 ? void 0 : options.length) > 0 ? (0, _utils.flattenOptions)(options, optionId).map(function (option) {
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
          }, /*#__PURE__*/React.createElement(_Toggle.ToggleButton, (0, _extends2["default"])({
            className: focusedOption === index ? "focus" : "",
            state: "unselected",
            shape: "squared",
            onClick: handleClick,
            value: null,
            style: {
              paddingLeft: paddingLeft
            }
          }, toggleButtonProps), /*#__PURE__*/React.createElement(_Checkbox["default"], (0, _extends2["default"])({
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


        return /*#__PURE__*/React.createElement(_Toggle.ToggleButton, (0, _extends2["default"])({
          key: "".concat(level, "-").concat(index),
          className: focusedOption === index ? "focus" : "",
          value: toggleValue,
          state: "unselected",
          shape: "squared",
          style: {
            paddingLeft: "calc(var(--bds-sizes-size-32) * ".concat(level, " + var(--bds-sizes-size-16))")
          }
        }, toggleButtonProps), /*#__PURE__*/React.createElement(_Checkbox["default"], (0, _extends2["default"])({
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
    if (onChange && !(0, _utils.arrayEquals)(value, previousValue)) {
      // Trigger `onChange`
      onChange(null, value); // Set new previous value

      setPreviousValue(value);
    }
  }, [value]); // Calculate toggle button children for popover

  var toggles = createToggles(options, 0);
  return /*#__PURE__*/React.createElement(_ListSelectorMultipleWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("list list-selector multiple-selector shape--".concat(shape), className),
    onChange: handleChange,
    value: value,
    buttonProps: (0, _extends2["default"])({}, buttonProps, {
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
exports.ListSelectorMultiple = ListSelectorMultiple;
var _default = ListSelectorMultiple;
exports["default"] = _default;