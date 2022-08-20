"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCategories = exports["default"] = exports.Skeleton = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _TriangleDown = _interopRequireDefault(require("@backyard/icons/TriangleDown"));

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _IconButton, _ApiLink2, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/Search',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  jumbo: 'jumbo',
  large: 'large',
  medium: 'medium',
  small: 'small'
}, 'medium'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Search, {
    variant: "outlined",
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Placeholder'),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    onSearchClick: (0, _addonActions.action)('search-click'),
    onClearClick: (0, _addonActions.action)('clear-click')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Search"
  })));
};

exports.Default = Default;

var withCategories = function withCategories() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Search, {
    variant: "outlined",
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Placeholder'),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    onSearchClick: (0, _addonActions.action)('search-click'),
    onClearClick: (0, _addonActions.action)('clear-click'),
    itemBefore: _IconButton || (_IconButton = /*#__PURE__*/_react["default"].createElement(_.IconButton, {
      size: "small",
      variant: "tertiary",
      color: "neutral"
    }, /*#__PURE__*/_react["default"].createElement(_TriangleDown["default"], null)))
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Search"
  })));
};

exports.withCategories = withCategories;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Search Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.SearchSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Search Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.SearchSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;