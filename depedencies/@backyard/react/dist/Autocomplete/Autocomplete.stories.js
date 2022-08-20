"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("@backyard/icons");

var _ApiLink2 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _OptionsWrapper, _OptionsWrapper2, _DefaultOptions, _FetchOptions, _Search, _ApiLink;

var _default = {
  title: '@backyard/react/Autocomplete',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var OptionsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Autocompletestories__OptionsWrapper",
  componentId: "sc-1qhqo3c-0"
})(["width:100%;height:100%;h4{padding:8px 16px;}li{a{display:flex;align-items:center;padding:12px 16px;color:var(--bds-color-text-secondary);&:hover{cursor:pointer;background:var(--bds-color-surface-subdued);}}}svg{width:20px;height:20px;margin-right:16px;path{fill:var(--bds-color-text-secondary);}}.icon-after{float:right;}"]);

var OptionsItem = _styledComponents["default"].a.withConfig({
  displayName: "Autocompletestories__OptionsItem",
  componentId: "sc-1qhqo3c-1"
})([""]);

var DefaultOptions = function DefaultOptions() {
  return _OptionsWrapper || (_OptionsWrapper = /*#__PURE__*/_react["default"].createElement(OptionsWrapper, null, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h4"
  }, "Trending Searches"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trend, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "Refrigerators"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trend, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "Ceiling Fan"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trend, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "Insulation"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trend, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "2x4x8"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trend, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "Plywood"))))));
};

var FetchOptions = function FetchOptions() {
  return _OptionsWrapper2 || (_OptionsWrapper2 = /*#__PURE__*/_react["default"].createElement(OptionsWrapper, null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "kob", /*#__PURE__*/_react["default"].createElement("b", null, "alt 80v")))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.SubitemArrow, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h6",
    color: "text_interactive",
    regular: true
  }, "in Cordless Electric String Trimmers"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_icons.SubitemArrow, null), ' ', /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h6",
    color: "text_interactive",
    regular: true
  }, "in Cordless Electric Push Lawn Mowers"))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "kob", /*#__PURE__*/_react["default"].createElement("b", null, "alt 24v")))), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(OptionsItem, {
    href: "https://www.lowes.com"
  }, /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h5",
    regular: true
  }, "kob", /*#__PURE__*/_react["default"].createElement("b", null, "alt 40v battery")))))));
};

var Default = function Default() {
  var _React$useState = _react["default"].useState(_DefaultOptions || (_DefaultOptions = /*#__PURE__*/_react["default"].createElement(DefaultOptions, null))),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      options = _React$useState2[0],
      setOptions = _React$useState2[1];

  var onChange = function onChange() {
    setOptions(_FetchOptions || (_FetchOptions = /*#__PURE__*/_react["default"].createElement(FetchOptions, null)));
  };

  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Autocomplete, {
    renderInput: _Search || (_Search = /*#__PURE__*/_react["default"].createElement(_.Search, {
      placeholder: "Placeholder search text here ...",
      autoComplete: "off"
    })),
    options: options,
    onChange: onChange,
    shape: _addonKnobs.select.apply(void 0, shapes),
    isSearch: true
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink2.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Autocomplete"
  })));
};

exports.Default = Default;