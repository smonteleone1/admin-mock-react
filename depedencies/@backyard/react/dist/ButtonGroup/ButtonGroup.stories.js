"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DisabledButtons = exports.DefaultButtonGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _Plus3 = _interopRequireDefault(require("@backyard/icons/Plus"));

var _HeartOutlined3 = _interopRequireDefault(require("@backyard/icons/HeartOutlined"));

var _Edit3 = _interopRequireDefault(require("@backyard/icons/Edit"));

var _Dots3 = _interopRequireDefault(require("@backyard/icons/Dots"));

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Plus, _HeartOutlined, _Edit, _Dots, _ApiLink, _Plus2, _HeartOutlined2, _Edit2, _Dots2, _ApiLink2;

var _default = {
  title: '@backyard/react/ButtonGroup',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var variants = ['Variant', {
  secondary: 'secondary',
  ghost: 'ghost'
}, 'secondary'];
var colors = ['Color', {
  interative: 'interactive',
  neutral: 'neutral'
}, 'interactive'];
var sizes = ['Sizes', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultButtonGroup = function DefaultButtonGroup() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonGroup, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes),
    color: _addonKnobs.select.apply(void 0, colors)
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus || (_Plus = /*#__PURE__*/_react["default"].createElement(_Plus3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _HeartOutlined || (_HeartOutlined = /*#__PURE__*/_react["default"].createElement(_HeartOutlined3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Edit || (_Edit = /*#__PURE__*/_react["default"].createElement(_Edit3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Dots || (_Dots = /*#__PURE__*/_react["default"].createElement(_Dots3["default"], null)))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
  })));
};

exports.DefaultButtonGroup = DefaultButtonGroup;

var DisabledButtons = function DisabledButtons() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonGroup, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: false,
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus2 || (_Plus2 = /*#__PURE__*/_react["default"].createElement(_Plus3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: true,
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _HeartOutlined2 || (_HeartOutlined2 = /*#__PURE__*/_react["default"].createElement(_HeartOutlined3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: true,
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Edit2 || (_Edit2 = /*#__PURE__*/_react["default"].createElement(_Edit3["default"], null))), /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    disabled: false,
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Dots2 || (_Dots2 = /*#__PURE__*/_react["default"].createElement(_Dots3["default"], null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
  })));
};

exports.DisabledButtons = DisabledButtons;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonGroupSkeleton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    width: (0, _addonKnobs.text)('Width', '')
  }));
};

exports.Skeleton = Skeleton;