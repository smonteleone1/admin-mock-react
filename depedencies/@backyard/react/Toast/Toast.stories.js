"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _FormHeading, _br;

var _default = {
  title: '@backyard/react/Toast',
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
  standard: 'standard',
  jumbo: 'jumbo'
}, 'standard'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Toast, {
    title: (0, _addonKnobs.text)('Title', 'Title'),
    subtitle: (0, _addonKnobs.text)('Subtitle', 'Subtitle goes here...'),
    size: _addonKnobs.select.apply(void 0, sizes),
    closed: (0, _addonKnobs["boolean"])('Closed', false),
    closeDelay: (0, _addonKnobs.number)('Close Delay', 0),
    noClose: (0, _addonKnobs["boolean"])('No Close', false),
    noTimestamp: (0, _addonKnobs["boolean"])('No Timestamp', false),
    type: _addonKnobs.select.apply(void 0, types),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toast"
  })));
};

exports.Default = Default;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Toast Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ToastSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;