"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.OutlinedPill = exports.IndicatorPill = exports.FilledPill = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3;

var _default = {
  title: '@backyard/react/Pill',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
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
var shapes = {
  circle: 'circle',
  dot: 'dot'
};
var variants = {
  pill: 'pill',
  indicator: 'indicator'
};
var sizes = ['Sizes', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];

var FilledPill = function FilledPill() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pill, {
    value: (0, _addonKnobs.number)('Value', 1),
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    max: (0, _addonKnobs.number)('Max Value', 10),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: (0, _addonKnobs.select)('Shapes', shapes, 'circle')
  }, (0, _addonKnobs.text)('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};

exports.FilledPill = FilledPill;

var OutlinedPill = function OutlinedPill() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pill, {
    variant: "outlined",
    value: (0, _addonKnobs.number)('Value', 1),
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    max: (0, _addonKnobs.number)('Max Value', 10),
    color: _addonKnobs.select.apply(void 0, colors),
    shape: (0, _addonKnobs.select)('Shapes', shapes, 'circle'),
    size: _addonKnobs.select.apply(void 0, sizes)
  }, (0, _addonKnobs.text)('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};

exports.OutlinedPill = OutlinedPill;

var IndicatorPill = function IndicatorPill() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pill, {
    variant: "indicator",
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    color: _addonKnobs.select.apply(void 0, colors),
    shape: (0, _addonKnobs.select)('Shapes', shapes, 'circle'),
    size: _addonKnobs.select.apply(void 0, sizes)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};

exports.IndicatorPill = IndicatorPill;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.PillSkeleton, {
    variant: (0, _addonKnobs.select)('Variant', variants, 'pill'),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;