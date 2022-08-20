"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithHelperText = exports.Suffix = exports.Skeleton = exports.ItemBefore = exports.ItemAfter = exports.Default = exports.CustomIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _icons = require("@backyard/icons");

var _lowesIcons = require("@backyard/lowes-icons");

var _ApiLink7 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ApiLink, _EmailOutlined, _ApiLink2, _InfoOutlined, _ApiLink3, _ApiLink4, _Mastercard, _ApiLink5, _Mastercard2, _FormHelperText, _ApiLink6, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/TextField',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  undefined: undefined,
  error: 'error',
  success: 'success'
}, undefined];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'large'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.Default = Default;

var ItemBefore = function ItemBefore() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Email address'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur'),
    itemBefore: _EmailOutlined || (_EmailOutlined = /*#__PURE__*/_react["default"].createElement(_icons.EmailOutlined, null))
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.ItemBefore = ItemBefore;

var ItemAfter = function ItemAfter() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Email address'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur'),
    itemAfter: _InfoOutlined || (_InfoOutlined = /*#__PURE__*/_react["default"].createElement(_icons.InfoOutlined, null))
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.ItemAfter = ItemAfter;

var Suffix = function Suffix() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Weight'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur'),
    suffix: "lbs."
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.Suffix = Suffix;

var CustomIcon = function CustomIcon() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    itemBefore: _Mastercard || (_Mastercard = /*#__PURE__*/_react["default"].createElement(_lowesIcons.Mastercard, null)),
    customIcon: true,
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur')
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.CustomIcon = CustomIcon;

var WithHelperText = function WithHelperText() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, {
    state: _addonKnobs.select.apply(void 0, states)
  }, /*#__PURE__*/_react["default"].createElement(_.TextField, {
    id: "outlined-text-field",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    itemBefore: _Mastercard2 || (_Mastercard2 = /*#__PURE__*/_react["default"].createElement(_lowesIcons.Mastercard, null)),
    customIcon: true,
    onChange: (0, _addonActions.action)('textfield-change'),
    onClick: (0, _addonActions.action)('textfield-click'),
    onFocus: (0, _addonActions.action)('textfield-focus'),
    onBlur: (0, _addonActions.action)('textfield-blur')
  }), _FormHelperText || (_FormHelperText = /*#__PURE__*/_react["default"].createElement(_.FormHelperText, null, "Helper Text"))), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};

exports.WithHelperText = WithHelperText;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Field Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextFieldSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Text Field Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TextFieldSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;