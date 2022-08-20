"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TooltipSlider = exports.SliderWithoutDivisibleStep = exports.SliderWithLargeIndivisibleStep = exports.Skeleton = exports.DefaultSlider = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink5 = require("../utils/storybook/ApiLink");

var _addonA11y = require("@storybook/addon-a11y");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4;

var _default = {
  title: '@backyard/react/Slider',
  decorators: [_addonA11y.withA11y, _addonKnobs.withKnobs]
};
exports["default"] = _default;
var orientations = ['Orientation', {
  horizontal: 'horizontal',
  vertical: 'vertical'
}, 'horizontal'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultSlider = function DefaultSlider() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Slider, {
    defaultValue: (0, _addonKnobs.number)('Default Value', 1),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    showInput: (0, _addonKnobs["boolean"])('Show Input', false),
    min: (0, _addonKnobs.number)('Min', 1),
    max: (0, _addonKnobs.number)('Max', 10),
    orientation: _addonKnobs.select.apply(void 0, orientations),
    shape: _addonKnobs.select.apply(void 0, shapes),
    step: (0, _addonKnobs.number)('Step', 1)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};

exports.DefaultSlider = DefaultSlider;

var SliderWithoutDivisibleStep = function SliderWithoutDivisibleStep() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Slider, {
    defaultValue: (0, _addonKnobs.number)('Default Value', 0),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    showInput: (0, _addonKnobs["boolean"])('Show Input', false),
    min: (0, _addonKnobs.number)('Min', 0),
    max: (0, _addonKnobs.number)('Max', 11),
    orientation: _addonKnobs.select.apply(void 0, orientations),
    shape: _addonKnobs.select.apply(void 0, shapes),
    step: (0, _addonKnobs.number)('Step', 3)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};

exports.SliderWithoutDivisibleStep = SliderWithoutDivisibleStep;

var SliderWithLargeIndivisibleStep = function SliderWithLargeIndivisibleStep() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Slider, {
    defaultValue: (0, _addonKnobs.number)('Default Value', 0),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    showInput: (0, _addonKnobs["boolean"])('Show Input', false),
    min: (0, _addonKnobs.number)('Min', 0),
    max: (0, _addonKnobs.number)('Max', 11),
    orientation: _addonKnobs.select.apply(void 0, orientations),
    shape: _addonKnobs.select.apply(void 0, shapes),
    step: (0, _addonKnobs.number)('Step', 6)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};

exports.SliderWithLargeIndivisibleStep = SliderWithLargeIndivisibleStep;

var TooltipSlider = function TooltipSlider() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Slider, {
    defaultValue: (0, _addonKnobs.number)('Default Value', 0),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    showInput: (0, _addonKnobs["boolean"])('Show Input', false),
    min: (0, _addonKnobs.number)('Min', 0),
    max: (0, _addonKnobs.number)('Max', 14),
    orientation: _addonKnobs.select.apply(void 0, orientations),
    shape: _addonKnobs.select.apply(void 0, shapes),
    step: (0, _addonKnobs.number)('Step', 3),
    tooltip: true
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};

exports.TooltipSlider = TooltipSlider;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.SliderSkeleton, {
    orientation: _addonKnobs.select.apply(void 0, orientations),
    showInput: (0, _addonKnobs["boolean"])('showInput', false),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  });
};

exports.Skeleton = Skeleton;