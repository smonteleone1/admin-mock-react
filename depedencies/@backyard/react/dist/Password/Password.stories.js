"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultPassword = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/Password',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  "default": 'default',
  error: 'error',
  success: 'success'
}, 'default'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'large'];

var DefaultPassword = function DefaultPassword() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Password, {
    id: "outlined-password",
    variant: "outlined",
    label: "Password",
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Password"
  })));
};

exports.DefaultPassword = DefaultPassword;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Password Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.PasswordSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Password Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.PasswordSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;