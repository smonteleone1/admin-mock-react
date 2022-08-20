"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkmark = _interopRequireDefault(require("@backyard/icons/Checkmark"));

var _Minus = _interopRequireDefault(require("@backyard/icons/Minus"));

var _useControlled3 = _interopRequireDefault(require("../utils/hooks/useControlled"));

var _ThemeProvider = require("../ThemeProvider");

var _CheckboxWrapper = _interopRequireDefault(require("./styles/CheckboxWrapper"));

var _excluded = ["id", "name", "value", "checked", "defaultChecked", "disabled", "indeterminate", "checkedIcon", "indeterminateIcon", "className", "onChange", "shape", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Checkbox
 *
 * Checkbox for interacting with boolean values in a form.
 *
 *  <Checkbox id="checkbox" />
 *
 * To give `Checkbox` a label, use `FormControlLabel`, similar to `Radio` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Checkbox id="checkbox" />}
 *      label="Label"
 *  />
 *
 * To give `Checkbox` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
var Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox(_ref, ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      checkedProp = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      _ref$checkedIcon = _ref.checkedIcon,
      checkedIcon = _ref$checkedIcon === void 0 ? _Checkmark["default"] : _ref$checkedIcon,
      _ref$indeterminateIco = _ref.indeterminateIcon,
      indeterminateIcon = _ref$indeterminateIco === void 0 ? _Minus["default"] : _ref$indeterminateIco,
      className = _ref.className,
      onChange = _ref.onChange,
      shapeProp = _ref.shape,
      wrapperProps = _ref.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Checkbox'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Use Controlled to manage Uncontrolled behavior of the state of `checked`
  // Determined through default checked

  var _useControlled = (0, _useControlled3["default"])({
    controlled: checkedProp,
    "default": defaultChecked,
    name: "Backyard->Checkbox->[id=\"".concat(id, "\"]")
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
    // Set `checked` to `event.target`'s
    setChecked(event.target.checked); // If `onChange` prop defined,

    if (onChange) {
      // Trigger `onChange` prop function
      onChange(event, event.target.checked);
    }
  }; // Icon component depending on indeterminate state


  var Icon = React.useMemo(function () {
    return indeterminate ? indeterminateIcon : checkedIcon;
  }, [indeterminate]); // Render mark depending on checked and indeterminate state

  var mark = React.useMemo(function () {
    return checked ? /*#__PURE__*/React.createElement(Icon, {
      color: "var(--bds-color-icon-solid-inverse)",
      size: "var(--bds-sizes-size-12)",
      className: "checkbox-icon " + (indeterminate ? 'checkbox-line' : 'checkbox-mark')
    }) : null;
  }, [checked, indeterminate]);
  /**
   * Layout:
   *
   *  <CheckboxWrapper>
   *      <input />
   *      <label />
   *  </CheckboxWrapper>
   */

  return /*#__PURE__*/React.createElement(_CheckboxWrapper["default"], (0, _extends2["default"])({
    indeterminate: indeterminate
  }, wrapperProps), /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    id: id,
    name: name,
    value: value,
    className: (0, _classnames["default"])("backyard checkbox shape--".concat(shape), className, checked && "checked", disabled && "disabled", indeterminate && "indeterminate"),
    checked: checked,
    "data-indeterminate": indeterminate,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: handleChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "checkbox-label",
    htmlFor: id
  }, mark));
});
exports.Checkbox = Checkbox;
Checkbox.bdsName = 'Checkbox';
var _default = Checkbox;
exports["default"] = _default;