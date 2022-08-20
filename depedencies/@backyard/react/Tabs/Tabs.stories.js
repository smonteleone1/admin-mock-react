"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DisabledTabs = exports.DefaultTab = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _Tab, _Tab2, _Tab3, _Tab4, _Tab5, _ApiLink, _Tab6, _Tab7, _Tab8, _Tab9, _Tab10, _ApiLink2;

var _default = {
  title: '@backyard/react/Tabs',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultTab = function DefaultTab() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Tabs, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    isOnLayer: (0, _addonKnobs["boolean"])('On Layer', false),
    keepMounted: (0, _addonKnobs["boolean"])('Keep Mounted', false)
  }, _Tab || (_Tab = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-1",
    label: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 1"))), _Tab2 || (_Tab2 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-2",
    label: "Tab 2"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 2"))), _Tab3 || (_Tab3 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-3",
    label: "Tab 3"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 3"))), _Tab4 || (_Tab4 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-4",
    label: "Tab 4"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 4"))), _Tab5 || (_Tab5 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-5",
    label: "Tab 5"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 5")))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tabs"
  })));
};

exports.DefaultTab = DefaultTab;

var DisabledTabs = function DisabledTabs() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/_react["default"].createElement(_.Tabs, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    isOnLayer: (0, _addonKnobs["boolean"])('On Layer', false),
    keepMounted: (0, _addonKnobs["boolean"])('Keep Mounted', false)
  }, _Tab6 || (_Tab6 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-1",
    label: "Tab 1"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 1"))), _Tab7 || (_Tab7 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-2",
    label: "Tab 2",
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 2"))), _Tab8 || (_Tab8 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-3",
    label: "Tab 3"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 3"))), _Tab9 || (_Tab9 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-4",
    label: "Tab 4"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 4"))), _Tab10 || (_Tab10 = /*#__PURE__*/_react["default"].createElement(_.Tab, {
    id: "tab-5",
    label: "Tab 5"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, null, "Hello world 5")))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tabs"
  })));
};

exports.DisabledTabs = DisabledTabs;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.TabsSkeleton, {
    width: (0, _addonKnobs.text)('width', '100%'),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  });
};

exports.Skeleton = Skeleton;