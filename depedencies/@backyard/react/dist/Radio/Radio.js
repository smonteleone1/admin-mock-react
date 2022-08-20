"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Radio = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _useRadioGroup = _interopRequireDefault(require("../RadioGroup/useRadioGroup"));

var _createChainedFunction = _interopRequireDefault(require("../utils/functions/createChainedFunction"));

var _ThemeProvider = require("../ThemeProvider");

var _RadioWrapper = _interopRequireDefault(require("./styles/RadioWrapper"));

var _excluded = ["checked", "children", "defaultChecked", "className", "disabled", "id", "name", "onChange", "value", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Radio
 *
 * Radio for interacting with selections in a form.
 *
 * > Note: `name` is required when not a child of `RadioGroup` with a name
 *
 *  <Radio id="radio" />
 *
 * To give `Radio` a label, use `FormControlLabel`, similar to `Checkbox` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Radio id="radio" name="radio" />}
 *      label="Label"
 *  />
 *
 * To give `Radio` helper text, use `FormHelperText` inside a `FormControl`:
 *
 * > Note: When grouping `Radio`s together, use the `RadioGroup` to sync multiple
 * > radios together with one `name`, one `onChange`, and even set a `defaultValue`.
 *
 *  <FormControl>
 *      <FormHeading>What color was Gandalf's robes in LotR?</FormHeading>
 *      <RadioGroup
 *          name="gandalf_robe"
 *          defaultValue="gray"
 *      >
 *          <FormControlLabel
 *              control={<Radio id="radio_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Radio id="radio_both" value="both" />}
 *              label="Both"
 *          />
 *      </RadioGroup>
 *      <FormHelperText>Select the right answer</FormHelperText>
 *  </FormControl>
 */
var Radio = /*#__PURE__*/React.forwardRef(function Radio(_ref, ref) {
  var checkedProp = _ref.checked,
      children = _ref.children,
      defaultChecked = _ref.defaultChecked,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      nameProp = _ref.name,
      onChangeProp = _ref.onChange,
      value = _ref.value,
      wrapperProps = _ref.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Radio'); // Use Radio Group Hook to manage Context of <RadioGroup>

  var radioGroup = (0, _useRadioGroup["default"])(); // Chain `checked` and `name` from <RadioGroup>

  var checked = checkedProp;
  var onChange = (0, _createChainedFunction["default"])(onChangeProp, radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.onChange);
  var name = nameProp; // If using <RadioGroup>,

  if (radioGroup) {
    // Sync `checked` value from <RadioGroup>
    if (typeof checked === 'undefined' && typeof defaultChecked === 'undefined') {
      checked = radioGroup.value === value;
    } // Sync `name` value from <RadioGroup>


    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }
  /**
   * Layout:
   *
   *  <RadioWrapper>
   *      <input />
   *      <label />
   *  </RadioWrapper>
   */


  return /*#__PURE__*/React.createElement(_RadioWrapper["default"], wrapperProps, /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
    type: "radio",
    id: id,
    "aria-label": id,
    name: name,
    value: value,
    className: (0, _classnames["default"])("backyard radio", className, checked && "checked", disabled && "disabled"),
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    ref: ref
  }, props)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "radio-indicator"
  }, children));
});
exports.Radio = Radio;
Radio.bdsName = 'Radio';
var _default = Radio;
exports["default"] = _default;