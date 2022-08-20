"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TertiaryIconButton = exports.Skeleton = exports.SecondaryIconButton = exports.PrimaryIconButton = exports.InverseIconButton = exports.GhostIconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _Plus6 = _interopRequireDefault(require("@backyard/icons/Plus"));

var _ApiLink6 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Plus, _ApiLink, _Plus2, _ApiLink2, _Plus3, _ApiLink3, _Plus4, _ApiLink4, _Plus5, _ApiLink5;

var _default = {
  title: '@backyard/react/IconButton',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
var types = ['Type', {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}, 'button'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared',
  circle: 'circle'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];

var PrimaryIconButton = function PrimaryIconButton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "primary",
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    type: _addonKnobs.select.apply(void 0, types),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus || (_Plus = /*#__PURE__*/_react["default"].createElement(_Plus6["default"], null))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};

exports.PrimaryIconButton = PrimaryIconButton;

var SecondaryIconButton = function SecondaryIconButton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "secondary",
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    type: _addonKnobs.select.apply(void 0, types),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus2 || (_Plus2 = /*#__PURE__*/_react["default"].createElement(_Plus6["default"], null))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};

exports.SecondaryIconButton = SecondaryIconButton;

var TertiaryIconButton = function TertiaryIconButton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "tertiary",
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    type: _addonKnobs.select.apply(void 0, types),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus3 || (_Plus3 = /*#__PURE__*/_react["default"].createElement(_Plus6["default"], null))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};

exports.TertiaryIconButton = TertiaryIconButton;

var GhostIconButton = function GhostIconButton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "ghost",
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    type: _addonKnobs.select.apply(void 0, types),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus4 || (_Plus4 = /*#__PURE__*/_react["default"].createElement(_Plus6["default"], null))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};

exports.GhostIconButton = GhostIconButton;

var InverseIconButton = function InverseIconButton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      padding: '3rem',
      backgroundColor: 'var(--bds-color-surface-blue)',
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '-3rem',
      marginLeft: '-3rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.IconButton, {
    variant: "inverse",
    color: _addonKnobs.select.apply(void 0, colors),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    type: _addonKnobs.select.apply(void 0, types),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onClick: (0, _addonActions.action)('button-click'),
    onKeyDown: (0, _addonActions.action)('button-key-down'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, _Plus5 || (_Plus5 = /*#__PURE__*/_react["default"].createElement(_Plus6["default"], null)))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};

exports.InverseIconButton = InverseIconButton;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.IconButtonSkeleton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;