"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Password = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _QuickviewOutlined = _interopRequireDefault(require("@backyard/icons/QuickviewOutlined"));

var _QuickviewOffOutlined = _interopRequireDefault(require("@backyard/icons/QuickviewOffOutlined"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _ThemeProvider = require("../ThemeProvider");

var _PasswordBase = _interopRequireDefault(require("./styles/PasswordBase"));

var _excluded = ["className", "disabled", "icon", "defaultToggle", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Extend `TextInput` with Password styles
 */
var StyledTextInput = (0, _styledComponents["default"])(_TextInput["default"]).withConfig({
  displayName: "Password__StyledTextInput",
  componentId: "sc-1wm2toe-0"
})(["", ""], _PasswordBase["default"]);
/**
 * Backyard React Password
 *
 * Password text input that extends on TextInput's API
 *
 *  <Password />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Password label="Password" />
 *      <FormHelperText>Enter a password</FormHelperText>
 *  </FormControl>
 */

var Password = /*#__PURE__*/React.forwardRef(function Password(_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      icon = _ref.icon,
      _ref$defaultToggle = _ref.defaultToggle,
      defaultToggle = _ref$defaultToggle === void 0 ? true : _ref$defaultToggle,
      shapeProp = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Password'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Handle view toggle state

  var _React$useState = React.useState(defaultToggle),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      toggle = _React$useState2[0],
      setToggle = _React$useState2[1];
  /**
   * Handles toggle button click...
   */


  var handleToggle = function handleToggle() {
    // If not disabled,
    if (!disabled) {
      // Toggle
      // eslint-disable-next-line no-shadow
      setToggle(function (toggle) {
        return !toggle;
      });
    }
  };
  /**
   * Layout:
   *
   *  <TextInput />
   */


  return /*#__PURE__*/React.createElement(StyledTextInput, (0, _extends2["default"])({
    className: (0, _classnames["default"])('input--password', className),
    disabled: disabled,
    type: toggle ? 'password' : 'text',
    shape: shape,
    itemBefore: icon,
    itemAfter: toggle ? /*#__PURE__*/React.createElement(_QuickviewOutlined["default"], {
      onClick: handleToggle
    }) : /*#__PURE__*/React.createElement(_QuickviewOffOutlined["default"], {
      onClick: handleToggle
    }),
    ref: ref
  }, props));
});
exports.Password = Password;
Password.bdsName = 'Password';
var _default = Password;
exports["default"] = _default;