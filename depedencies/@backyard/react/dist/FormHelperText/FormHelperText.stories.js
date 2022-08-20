"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithIcon = exports.Skeleton = exports.DefaultFormHelperText = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _TextField, _ApiLink, _TextField2, _Info, _ApiLink2;

var _default = {
  title: '@backyard/react/FormHelperText',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var states = ['State', {
  undefined: undefined,
  error: 'error'
}, undefined];

var DefaultFormHelperText = function DefaultFormHelperText() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, {
    state: _addonKnobs.select.apply(void 0, states)
  }, _TextField || (_TextField = /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "test-1"
  })), /*#__PURE__*/_react["default"].createElement(_.FormHelperText, null, (0, _addonKnobs.text)('Helper Text', 'Placeholder'))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHelperText"
  })));
};

exports.DefaultFormHelperText = DefaultFormHelperText;

var WithIcon = function WithIcon() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _TextField2 || (_TextField2 = /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "test-1"
  })), /*#__PURE__*/_react["default"].createElement(_.FormHelperText, {
    icon: _Info || (_Info = /*#__PURE__*/_react["default"].createElement(_InfoOutlined["default"], null))
  }, (0, _addonKnobs.text)('Helper Text', 'Placeholder'))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHelperText"
  })));
};

exports.WithIcon = WithIcon;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, /*#__PURE__*/_react["default"].createElement(_.TextFieldSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;