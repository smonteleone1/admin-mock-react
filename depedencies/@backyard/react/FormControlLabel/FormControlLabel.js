"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControlLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _Typography = _interopRequireDefault(require("../Typography"));

var _useFormControl2 = _interopRequireDefault(require("../FormControl/hooks/useFormControl"));

var _FormControlLabelWrapper = _interopRequireDefault(require("./styles/FormControlLabelWrapper"));

var _excluded = ["name", "label", "className", "disabled", "control"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Form Control Label
 *
 *  <FormControlLabel
 *      control={<Radio />}
 *      label="Controlled Radio Label"
 *  />
 *
 * Provides Label to inputs such as
 *  <Checkbox />
 *  <Radio />
 *  <Switch />
 * that allows control over the input for interactions
 * like hovering, clicking, and focusing.
 *
 * Can be used in conjunction with <FormControl> to provide
 * helper text in addition to a controlled label:
 *
 * ```
 *  <FormControl>
 *      <FormControlLabel
 *          control={<Checkbox />}
 *          label="Controlled Label"
 *      />
 *      <FormHelperText>Helper Text for Checkbox</FormHelperText>
 *  </FormControl>
 * ```
 */
var FormControlLabel = /*#__PURE__*/React.forwardRef(function FormControlLabel(_ref, ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'FormControlLabel' : _ref$name,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      className = _ref.className,
      disabledProp = _ref.disabled,
      control = _ref.control,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'FormControlLabel'); // Get props from controlled input

  var controlProps = control.props || {}; // Uses FormControl

  var _useFormControl = (0, _useFormControl2["default"])({
    disabled: disabledProp,
    indent: 'size_36'
  }),
      controlDisabled = _useFormControl.disabled; // Allow FormControl to override props


  var disabled = controlDisabled || disabledProp;
  /**
   * Layout:
   *
   *  <FormControlLabelWrapper>
   *      <Input>
   *      <Typography>
   *  </FormControlLabelWrapper>
   */

  return /*#__PURE__*/React.createElement(_FormControlLabelWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, (disabled || controlProps.disabled) && "disabled"),
    disabled: disabled || controlProps.disabled
  }, props), /*#__PURE__*/React.cloneElement(control, {
    disabled: disabled || controlProps.disabled,
    ref: ref
  }), /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: "label"
  }, label));
});
exports.FormControlLabel = FormControlLabel;
FormControlLabel.bdsName = 'FormControlLabel';
var _default = FormControlLabel;
exports["default"] = _default;