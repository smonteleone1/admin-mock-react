"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Switch = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useControlled3 = _interopRequireDefault(require("../utils/hooks/useControlled"));

var _ThemeProvider = require("../ThemeProvider");

var _SwitchWrapper = _interopRequireDefault(require("./styles/SwitchWrapper"));

var _excluded = ["id", "name", "size", "value", "checked", "defaultChecked", "disabled", "className", "onChange", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Switch
 *
 * Switch for interacting with boolean values in a form.
 *
 *  <Switch id="switch" />
 *
 * To give `Switch` a label, use `FormControlLabel`, similar to `Radio` and `Checkbox`:
 *
 *  <FormControlLabel
 *      control={<Switch id="switch" />}
 *      label="Label"
 *  />
 *
 * To give `Switch` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Switch id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
var Switch = /*#__PURE__*/React.forwardRef(function Switch(_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      value = _ref.value,
      checkedProp = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      onChange = _ref.onChange,
      wrapperProps = _ref.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Switch'); // Use Controlled to manage Uncontrolled behavior of the state of checked
  // Determined through defaultChecked

  var _useControlled = (0, _useControlled3["default"])({
    controlled: checkedProp,
    "default": Boolean(defaultChecked),
    name: "Backyard->Switch->[id=\"".concat(id, "\"]")
  }),
      _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
      checked = _useControlled2[0],
      setChecked = _useControlled2[1];
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleChange = function handleChange(event) {
    // Set checked value to target
    setChecked(event.target.checked); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` function
      // Provides `Event` argument and checked boolean
      onChange(event, event.target.checked);
    }
  };
  /**
   * Layout:
   *
   *  <SwitchWrapper>
   *      <input />
   *      <label />
   *  </SwitchWrapper>
   */


  return /*#__PURE__*/React.createElement(_SwitchWrapper["default"], (0, _extends2["default"])({
    className: "switch--wrapper size--".concat(size)
  }, wrapperProps), /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    id: id,
    "aria-label": value,
    name: name,
    value: value,
    className: (0, _classnames["default"])("backyard switch size--".concat(size), className, checked && "checked", disabled && "disabled"),
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: handleChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }));
});
exports.Switch = Switch;
Switch.bdsName = 'Switch';
var _default = Switch;
exports["default"] = _default;