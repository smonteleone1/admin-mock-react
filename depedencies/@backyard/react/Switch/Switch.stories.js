"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultSwitch = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink;

var _default = {
  title: '@backyard/react/Switch',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = ['Size', {
  small: 'small',
  large: 'large'
}, 'large'];

var DefaultSwitch = function DefaultSwitch() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Switch, {
    id: "default-switch",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
    size: _addonKnobs.select.apply(void 0, sizes),
    name: (0, _addonKnobs.text)('Value', 'default-radio'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    onChange: (0, _addonActions.action)('switch-change')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Switch"
  })));
};

exports.DefaultSwitch = DefaultSwitch;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.SwitchSkeleton, {
    size: "large",
    withLabel: (0, _addonKnobs["boolean"])('withLabel', false),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  });
};

exports.Skeleton = Skeleton;