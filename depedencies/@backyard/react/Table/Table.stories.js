"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Specification = exports.DefaultTable = void 0;

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _TableHead, _TableBody, _ApiLink, _TableBody2, _ApiLink2;

var _default = {
  title: '@backyard/react/Table',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var variants = ['Variant', {
  outlined: 'outlined',
  filled: 'filled'
}, 'outlined'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultTable = function DefaultTable() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Table, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    rightRule: (0, _addonKnobs["boolean"])('rightRule', true),
    variant: "filled"
  }, _TableHead || (_TableHead = /*#__PURE__*/_react["default"].createElement(_.TableHead, null, /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Description Name That is Kinda Really Long"), /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Item 1"), /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Item 2")))), _TableBody || (_TableBody = /*#__PURE__*/_react["default"].createElement(_.TableBody, null, /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, {
    info: "hello world"
  }, "Specification"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")))))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Table"
  })));
};

exports.DefaultTable = DefaultTable;

var Specification = function Specification() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Table, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    variant: "outlined"
  }, _TableBody2 || (_TableBody2 = /*#__PURE__*/_react["default"].createElement(_.TableBody, null, /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Too Long of a Description Name That Just Keeps On Going and Going and Going"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, {
    info: "bonjour le monde"
  }, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification Speci ficat ion Specif ication Sp ecific ati on Specification Specification Specification", ' ')), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Description"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")), /*#__PURE__*/_react["default"].createElement(_.TableRow, null, /*#__PURE__*/_react["default"].createElement(_.TableHeader, null, "Description that's kinda long"), /*#__PURE__*/_react["default"].createElement(_.TableCell, null, "Specification")))))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Table"
  })));
};

exports.Specification = Specification;