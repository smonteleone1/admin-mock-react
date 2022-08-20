"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberedPagination = exports.EllipsisExample = exports.DottedPagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3;

var _default = {
  title: '@backyard/react/Pagination',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = ['Size', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var NumberedPagination = function NumberedPagination() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pagination, {
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    count: (0, _addonKnobs.number)('Count', 5),
    defaultPage: (0, _addonKnobs.number)('Default Page', 1),
    boundaryCount: (0, _addonKnobs.number)('Boundary Count', 2),
    siblingCount: (0, _addonKnobs.number)('Sibling Count', 0),
    hidePrevButton: (0, _addonKnobs["boolean"])('Hide Prev Button', false),
    hideNextButton: (0, _addonKnobs["boolean"])('Hide Next Button', false)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
  })));
};

exports.NumberedPagination = NumberedPagination;

var EllipsisExample = function EllipsisExample() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pagination, {
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    count: (0, _addonKnobs.number)('Count', 8),
    defaultPage: (0, _addonKnobs.number)('Default Page', 1),
    boundaryCount: (0, _addonKnobs.number)('Boundary Count', 1),
    siblingCount: (0, _addonKnobs.number)('Sibling Count', 1),
    hidePrevButton: (0, _addonKnobs["boolean"])('Hide Prev Button', false),
    hideNextButton: (0, _addonKnobs["boolean"])('Hide Next Button', false)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
  })));
};

exports.EllipsisExample = EllipsisExample;

var DottedPagination = function DottedPagination() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Pagination, {
    variant: "dotted",
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    count: (0, _addonKnobs.number)('Count', 5),
    defaultPage: (0, _addonKnobs.number)('Default Page', 1),
    boundaryCount: (0, _addonKnobs.number)('Boundary Count', 2),
    siblingCount: (0, _addonKnobs.number)('Sibling Count', 0),
    hidePrevButton: (0, _addonKnobs["boolean"])('Hide Prev Button', false),
    hideNextButton: (0, _addonKnobs["boolean"])('Hide Next Button', false)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pagination"
  })));
};

exports.DottedPagination = DottedPagination;