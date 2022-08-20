"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Toggle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

var _ThemeProvider = require("../ThemeProvider");

var _ToggleProvider = require("./ToggleProvider");

var _excluded = ["children", "className", "defaultValue", "exclusive", "enforceSelected", "buttonProps", "selectedButtonProps", "value", "shape", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ToggleButtonGroup = _ButtonGroup["default"];
/**
 * Backyard React Toggle
 *
 * Toggle wrapper to manage state of a group of `ToggleButton`s
 *
 * Examples:
 *
 * - [Toggle](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Toggle)
 *
 * API:
 *
 * - [Toggle API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Toggle)
 * - inherits [ButtonGroup API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ButtonGroup)
 *
 * - [ToggleButton API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ToggleButton)
 */

var Toggle = /*#__PURE__*/React.forwardRef(function Toggle(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      _ref$exclusive = _ref.exclusive,
      exclusive = _ref$exclusive === void 0 ? false : _ref$exclusive,
      _ref$enforceSelected = _ref.enforceSelected,
      enforceSelected = _ref$enforceSelected === void 0 ? false : _ref$enforceSelected,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? _ToggleProvider.defaultUnselectedButton : _ref$buttonProps,
      _ref$selectedButtonPr = _ref.selectedButtonProps,
      selectedButtonProps = _ref$selectedButtonPr === void 0 ? _ToggleProvider.defaultSelectedButton : _ref$selectedButtonPr,
      value = _ref.value,
      shapeProp = _ref.shape,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Toggle'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(ToggleButtonGroup, (0, _extends2["default"])({
    className: (0, _classnames["default"])('toggle-button-group', className),
    shape: shape,
    color: "neutral"
  }, buttonProps, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_ToggleProvider.ToggleProvider, {
    defaultValue: defaultValue,
    exclusive: exclusive,
    enforceSelected: enforceSelected,
    buttonProps: buttonProps,
    selectedButtonProps: selectedButtonProps,
    value: value,
    onChange: onChange
  }, children));
});
exports.Toggle = Toggle;
Toggle.bdsName = 'Toggle';
var _default = Toggle;
exports["default"] = _default;