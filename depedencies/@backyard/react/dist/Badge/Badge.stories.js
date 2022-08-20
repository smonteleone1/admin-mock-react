"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.OutlinedBadge = exports.FilledBadge = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2;

var colors = ['Color', {
  'dark-blue': 'dark-blue',
  'blue': 'blue',
  'light-blue': 'light-blue',
  'interactive': 'interactive',
  'green': 'green',
  'red': 'red',
  'gold': 'gold',
  'lfp-yellow': 'lfp-yellow',
  'neutral': 'neutral'
}, 'dark-blue'];
var arrows = ['Arrow', {
  none: 'none',
  left: 'left',
  right: 'right'
}, 'none'];
var sizes = ['Size', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
var _default = {
  title: '@backyard/react/Badge',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var FilledBadge = function FilledBadge() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Badge, {
    color: _addonKnobs.select.apply(void 0, colors),
    bold: (0, _addonKnobs["boolean"])('bold', false),
    arrow: _addonKnobs.select.apply(void 0, arrows),
    size: _addonKnobs.select.apply(void 0, sizes)
  }, (0, _addonKnobs.text)('Text', 'Badge')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
  })));
};

exports.FilledBadge = FilledBadge;

var OutlinedBadge = function OutlinedBadge() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Badge, {
    variant: "outlined",
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes)
  }, (0, _addonKnobs.text)('Text', 'Badge')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
  })));
};

exports.OutlinedBadge = OutlinedBadge;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.BadgeSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    width: (0, _addonKnobs.text)('Width', ''),
    size: _addonKnobs.select.apply(void 0, sizes)
  }));
};

exports.Skeleton = Skeleton;