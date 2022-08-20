"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithSubMenu = exports.DefaultMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _icons = require("@backyard/icons");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _MenuItem, _MenuItem2, _MenuItem3, _MenuItem4, _ApiLink, _MenuItem5, _MenuItem6, _MenuItem7, _MenuItem8, _SubMenu, _ApiLink2;

var _default = {
  title: '@backyard/react/Menu',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultMenu = function DefaultMenu() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Menu, {
    width: "15rem",
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, _MenuItem || (_MenuItem = /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item")), _MenuItem2 || (_MenuItem2 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item")), _MenuItem3 || (_MenuItem3 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item")), _MenuItem4 || (_MenuItem4 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    color: "red"
  }, "Menu Item"))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Menu"
  })));
};

exports.DefaultMenu = DefaultMenu;

var WithSubMenu = function WithSubMenu() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Menu, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    width: "15rem"
  }, _MenuItem5 || (_MenuItem5 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    color: "interactive",
    iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.HomeOutlined, null)
  }, "Menu Item")), _MenuItem6 || (_MenuItem6 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.NotesOutlined, null)
  }, "Menu Item")), _MenuItem7 || (_MenuItem7 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.DocumentOutlined, null)
  }, "Menu Item")), _MenuItem8 || (_MenuItem8 = /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    color: "red",
    iconBefore: /*#__PURE__*/_react["default"].createElement(_icons.TrashOutlined, null)
  }, "Menu Item")), _SubMenu || (_SubMenu = /*#__PURE__*/_react["default"].createElement(_.SubMenu, {
    label: "More Options",
    listenHover: true
  }, /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, null, "Menu Item"), /*#__PURE__*/_react["default"].createElement(_.MenuItem, {
    color: "red"
  }, "Menu Item")))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Menu"
  })));
};

exports.WithSubMenu = WithSubMenu;