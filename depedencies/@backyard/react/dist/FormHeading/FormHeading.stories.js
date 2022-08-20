"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DefaultFormHeading = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink;

var _default = {
  title: '@backyard/react/FormHeading',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var DefaultFormHeading = function DefaultFormHeading() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, (0, _addonKnobs.text)('Text', 'text')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHeading"
  })));
};

exports.DefaultFormHeading = DefaultFormHeading;