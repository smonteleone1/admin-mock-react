"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/Alert',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var types = ['Type', {
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning'
}, 'info'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Alert, {
    title: (0, _addonKnobs.text)('Title', 'Title'),
    subtitle: (0, _addonKnobs.text)('Subtitle', ''),
    type: _addonKnobs.select.apply(void 0, types),
    size: _addonKnobs.select.apply(void 0, sizes),
    multiline: (0, _addonKnobs["boolean"])('Multiline', false),
    elevation: (0, _addonKnobs["boolean"])('Elevation', true),
    noClose: (0, _addonKnobs["boolean"])('No Close', false),
    action: (0, _addonKnobs.text)('Action', 'Action'),
    onClose: (0, _addonActions.action)('close-clicked'),
    onActionClick: (0, _addonActions.action)('action-clicked'),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Alert"
  })));
};

exports.Default = Default;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Alert Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.AlertSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Multiline Alert Skeleton")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.AlertSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    multiline: true
  })));
};

exports.Skeleton = Skeleton;