"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.OutlinedStepper = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4, _br5, _br6, _FormHeading3, _br7;

var _default = {
  title: '@backyard/react/Stepper',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  "default": 'default',
  error: 'error'
}, 'default'];

var OutlinedStepper = function OutlinedStepper() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Stepper, {
    label: (0, _addonKnobs.text)('Label', 'Label'),
    step: (0, _addonKnobs.number)('Step', 1),
    roundToStep: (0, _addonKnobs["boolean"])('Round Step', false),
    defaultValue: (0, _addonKnobs.number)('Default Value', 0),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('stepper-change'),
    onBlur: (0, _addonActions.action)('stepper-blur')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Stepper"
  })));
};

exports.OutlinedStepper = OutlinedStepper;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Stepper Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.StepperSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Stepper Skeleton (Hidden Buttons)")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.StepperSkeleton, {
    hideButtons: true,
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br5 || (_br5 = /*#__PURE__*/_react["default"].createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Stepper Skeleton (w/ Label)")), _br7 || (_br7 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.StepperSkeleton, {
    label: true,
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;