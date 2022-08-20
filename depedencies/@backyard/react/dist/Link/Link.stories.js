"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.IconBeforeLink = exports.IconAfterLink = exports.DefaultLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ChevronLeft, _ApiLink2, _ChevronRight, _ApiLink3;

var _default = {
  title: '@backyard/react/Link',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var colors = ['Color', {
  interactive: 'interactive',
  primary: 'primary',
  inverse: 'inverse'
}, 'text_interactive'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
var underline = ['Underline', {
  never: 'never',
  hover: 'hover',
  always: 'always'
}, 'hover'];

var DefaultLink = function DefaultLink() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    bold: (0, _addonKnobs["boolean"])('Bold', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    underline: _addonKnobs.select.apply(void 0, underline),
    to: (0, _addonKnobs.text)('To', 'to'),
    onClick: (0, _addonActions.action)('link-click'),
    onKeyDown: (0, _addonActions.action)('link-key-down')
  }, (0, _addonKnobs.text)('Text', 'link text!')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};

exports.DefaultLink = DefaultLink;

var IconBeforeLink = function IconBeforeLink() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/_react["default"].createElement(_ChevronLeft2["default"], null)),
    bold: (0, _addonKnobs["boolean"])('Bold', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    underline: _addonKnobs.select.apply(void 0, underline),
    to: (0, _addonKnobs.text)('To', 'to'),
    onClick: (0, _addonActions.action)('link-click'),
    onKeyDown: (0, _addonActions.action)('link-key-down')
  }, (0, _addonKnobs.text)('Text', 'link text!')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};

exports.IconBeforeLink = IconBeforeLink;

var IconAfterLink = function IconAfterLink() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Link, {
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/_react["default"].createElement(_ChevronRight2["default"], null)),
    bold: (0, _addonKnobs["boolean"])('Bold', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    underline: _addonKnobs.select.apply(void 0, underline),
    to: (0, _addonKnobs.text)('To', 'to'),
    onClick: (0, _addonActions.action)('link-click'),
    onKeyDown: (0, _addonActions.action)('link-key-down')
  }, (0, _addonKnobs.text)('Text', 'link text!')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
  })));
};

exports.IconAfterLink = IconAfterLink;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.LinkSkeleton, {
    width: (0, _addonKnobs.text)('Width', '6rem'),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    size: _addonKnobs.select.apply(void 0, sizes)
  }));
};

exports.Skeleton = Skeleton;