"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TooltipWithTooltipPopper = exports.TooltipWithIcon = exports.LowContrastTooltip = exports.HighContrastTooltip = void 0;

var _icons = require("@backyard/icons");

var _ApiLink5 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink, _ApiLink2, _LocationOutlined, _ApiLink3, _LocationOutlined2, _Button, _LocationOutlined3, _Typography, _ApiLink4;

var shadows = ['Shadow', {
  shadow_04: 'shadow_04',
  shadow_05: 'shadow_05'
}, 'shadow_04'];
var arrows = ['Arrow', {
  none: 'none',
  topStart: 'top-start',
  top: 'top',
  topEnd: 'top-end',
  left: 'left',
  right: 'right',
  bottomStart: 'bottom-start',
  bottom: 'bottom',
  bottomEnd: 'bottom-end'
}, 'top'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var _default = {
  title: '@backyard/react/Tooltip',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var LowContrastTooltip = function LowContrastTooltip() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    title: (0, _addonKnobs.text)('Title', 'Title'),
    arrow: _addonKnobs.select.apply(void 0, arrows),
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    shadow: _addonKnobs.select.apply(void 0, shadows),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, (0, _addonKnobs.text)('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};

exports.LowContrastTooltip = LowContrastTooltip;

var HighContrastTooltip = function HighContrastTooltip() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    variant: "high_contrast",
    title: (0, _addonKnobs.text)('Title', 'Title'),
    arrow: _addonKnobs.select.apply(void 0, arrows),
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    shadow: _addonKnobs.select.apply(void 0, shadows),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, (0, _addonKnobs.text)('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};

exports.HighContrastTooltip = HighContrastTooltip;

var TooltipWithIcon = function TooltipWithIcon() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
    variant: "high_contrast",
    icon: _LocationOutlined || (_LocationOutlined = /*#__PURE__*/_react["default"].createElement(_icons.LocationOutlined, null)),
    title: (0, _addonKnobs.text)('Title', 'Title'),
    arrow: _addonKnobs.select.apply(void 0, arrows),
    invisible: (0, _addonKnobs["boolean"])('Invisible', false),
    shadow: _addonKnobs.select.apply(void 0, shadows),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, (0, _addonKnobs.text)('Text', 'Text')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};

exports.TooltipWithIcon = TooltipWithIcon;

var TooltipWithTooltipPopper = function TooltipWithTooltipPopper() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TooltipPopper, {
    tooltip: /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      variant: "high_contrast",
      icon: _LocationOutlined2 || (_LocationOutlined2 = /*#__PURE__*/_react["default"].createElement(_icons.LocationOutlined, null)),
      title: (0, _addonKnobs.text)('Title', 'Title'),
      arrow: _addonKnobs.select.apply(void 0, arrows),
      invisible: (0, _addonKnobs["boolean"])('Invisible', false),
      shadow: _addonKnobs.select.apply(void 0, shadows),
      shape: _addonKnobs.select.apply(void 0, shapes)
    }, (0, _addonKnobs.text)('Text', 'Text'))
  }, _Button || (_Button = /*#__PURE__*/_react["default"].createElement(_.Button, null, "Hover Me")))), /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TooltipPopper, {
    tooltip: /*#__PURE__*/_react["default"].createElement(_.Tooltip, {
      variant: "high_contrast",
      icon: _LocationOutlined3 || (_LocationOutlined3 = /*#__PURE__*/_react["default"].createElement(_icons.LocationOutlined, null)),
      title: (0, _addonKnobs.text)('Title', 'Title'),
      arrow: _addonKnobs.select.apply(void 0, arrows),
      invisible: (0, _addonKnobs["boolean"])('Invisible', false),
      shadow: _addonKnobs.select.apply(void 0, shadows),
      shape: _addonKnobs.select.apply(void 0, shapes)
    }, (0, _addonKnobs.text)('Text', 'Text'))
  }, _Typography || (_Typography = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h1"
  }, "Hover Me")))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Tooltip"
  })));
};

exports.TooltipWithTooltipPopper = TooltipWithTooltipPopper;