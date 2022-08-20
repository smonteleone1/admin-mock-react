"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.HelperText = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _FormHelperText, _ApiLink2, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4, _br5, _br6, _FormHeading3, _br7, _br8, _br9, _FormHeading4, _br10;

var _default = {
  title: '@backyard/react/TextArea',
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

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
    id: "outlined-text-area",
    label: "Label",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Text', ''),
    helperText: (0, _addonKnobs.text)('Helper Text', 'Helper Text'),
    rows: (0, _addonKnobs.number)('Rows', 4),
    max: (0, _addonKnobs.number)('Max', 300),
    resizer: (0, _addonKnobs["boolean"])('Resizer', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextArea"
  })));
};

exports.Default = Default;

var HelperText = function HelperText() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, /*#__PURE__*/_react["default"].createElement(_.TextArea, {
    id: "outlined-text-area",
    label: "Label",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Text', ''),
    rows: (0, _addonKnobs.number)('Rows', 4),
    max: (0, _addonKnobs.number)('Max', 300),
    resizer: (0, _addonKnobs["boolean"])('Resizer', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states)
  }), _FormHelperText || (_FormHelperText = /*#__PURE__*/_react["default"].createElement(_.FormHelperText, null, "This is some really long helper text to show that it goes all the way across the input so this is a really super wide input!"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextArea"
  })));
};

exports.HelperText = HelperText;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Area Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextAreaSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    rows: (0, _addonKnobs.number)('Rows', 4),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Area Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextAreaSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    rows: (0, _addonKnobs.number)('Rows', 4),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    helperText: true
  })), _br5 || (_br5 = /*#__PURE__*/_react["default"].createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Area Skeleton w/ Max Counter")), _br7 || (_br7 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextAreaSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    rows: (0, _addonKnobs.number)('Rows', 4),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    max: true
  })), _br8 || (_br8 = /*#__PURE__*/_react["default"].createElement("br", null)), _br9 || (_br9 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading4 || (_FormHeading4 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Area Skeleton w/ Helper Text & Max Counter")), _br10 || (_br10 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextAreaSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    rows: (0, _addonKnobs.number)('Rows', 4),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    helperText: true,
    max: true
  })));
};

exports.Skeleton = Skeleton;