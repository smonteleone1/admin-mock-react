"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormHelperText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ThemeProvider = require("../ThemeProvider");

var _FormControl = require("../FormControl");

var _FormHelperTextWrapper = _interopRequireDefault(require("./styles/FormHelperTextWrapper"));

var _excluded = ["children", "indent", "icon", "disabled", "state", "className", "typographyProps", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Helper Text
 *
 *  <FormControl>
 *      <TextField />
 *      <FormHelperText>Example Helper Text</FormHelperText>
 *  </FormControl>
 *
 * Text to display as helper with other components.
 * Used with <FormControl> to correctly indent from input `indentHelper`
 */
var FormHelperText = /*#__PURE__*/React.forwardRef(function FormHelperText(_ref, ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'Helper' : _ref$children,
      indentProp = _ref.indent,
      icon = _ref.icon,
      disabledProp = _ref.disabled,
      stateProp = _ref.state,
      className = _ref.className,
      typographyProps = _ref.typographyProps,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'FormHelperText'
  });
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'FormHelperText');

  var _useFormControl = (0, _FormControl.useFormControl)({
    noContext: true
  }),
      disabled = _useFormControl.disabled,
      state = _useFormControl.state,
      indent = _useFormControl.indent; // Props override calculated values


  if (indentProp !== undefined) indent = indentProp;
  if (disabledProp !== undefined) disabled = disabledProp;
  if (stateProp !== undefined) state = stateProp; // Default values

  if (indent === undefined) indent = 'size_16';
  return /*#__PURE__*/React.createElement(_FormHelperTextWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('helper-text', state, className, disabled && "disabled", indent && "indent"),
    style: style
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
    variant: "helper"
  }, typographyProps, {
    style: (0, _extends2["default"])({}, indent ? {
      paddingLeft: typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16
    } : {}, typographyProps === null || typographyProps === void 0 ? void 0 : typographyProps.style)
  }), /*#__PURE__*/React.isValidElement(icon) ? /*#__PURE__*/React.cloneElement(icon, {
    className: 'helper-text-icon',
    size: 'size_12'
  }) : null, children));
});
exports.FormHelperText = FormHelperText;
FormHelperText.bdsName = 'FormHelperText';
var _default = FormHelperText;
exports["default"] = _default;