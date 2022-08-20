"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InlineSpinner = exports.DefaultSpinner = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _br, _br2, _br3, _br4, _ApiLink2;

// import type { BackyardTheme } from '../ThemeProvider'
var _default = {
  title: '@backyard/react/Spinner',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var colors = ['Color', {
  interactive: 'icon_interactive',
  green: 'icon_green',
  white: 'icon_solid_inverse'
}, 'white'];

var DefaultSpinner = function DefaultSpinner() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Spinner, {
    show: (0, _addonKnobs["boolean"])('show', true),
    small: (0, _addonKnobs["boolean"])('small', false),
    invisible: (0, _addonKnobs["boolean"])('invisible', false) // @todo tokens
    // color={select(...colors) as keyof BackyardTheme['color']}
    ,
    className: 'test-classname'
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Spinner"
  })));
};

exports.DefaultSpinner = DefaultSpinner;

var InlineSpinner = function InlineSpinner() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Row, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Default inline spinner (no provided color)", /*#__PURE__*/_react["default"].createElement(_.Spinner, {
    show: (0, _addonKnobs["boolean"])('show', true),
    small: (0, _addonKnobs["boolean"])('small', true),
    inline: true
  })), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement("div", null, "Inline spinner with text (with provided color)", /*#__PURE__*/_react["default"].createElement(_.Spinner, {
    show: (0, _addonKnobs["boolean"])('show', true) // @todo tokens
    // color={text('spinner color', 'error') as keyof BackyardTheme['color']}
    ,
    small: (0, _addonKnobs["boolean"])('small', true),
    inline: true
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Button, null, "Button", /*#__PURE__*/_react["default"].createElement(_.Spinner, {
    show: (0, _addonKnobs["boolean"])('show', true),
    small: (0, _addonKnobs["boolean"])('small', true),
    inline: true,
    color: _addonKnobs.select.apply(void 0, colors)
  })), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: 'secondary'
  }, "Button", /*#__PURE__*/_react["default"].createElement(_.Spinner, {
    show: (0, _addonKnobs["boolean"])('show', true),
    small: (0, _addonKnobs["boolean"])('small', true),
    inline: true,
    color: _addonKnobs.select.apply(void 0, colors)
  }))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Spinner"
  })));
};

exports.InlineSpinner = InlineSpinner;