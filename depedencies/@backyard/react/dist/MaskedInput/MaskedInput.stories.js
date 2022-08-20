"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Phone = exports.Currency = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _default = {
  title: '@backyard/react/MaskedInput',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var Phone = function Phone() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
    id: "phone",
    mask: "phone",
    label: "Phone number",
    onChange: (0, _addonActions.action)('masked-input-change'),
    autoComplete: "tel-national"
  }));
};

exports.Phone = Phone;

var Currency = function Currency() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.MaskedInput, {
    id: "currency",
    mask: "currency",
    label: "Payment amount",
    onChange: (0, _addonActions.action)('masked-input-change')
  }));
};

exports.Currency = Currency;