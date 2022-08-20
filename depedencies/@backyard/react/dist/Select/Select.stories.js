"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Stacked = exports.Skeleton = exports.SelectOptions = exports.Icon = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink5 = require("../utils/storybook/ApiLink");

var _ = require("..");

var _PhoneOutlined = _interopRequireDefault(require("@backyard/icons/PhoneOutlined"));

var _Option, _Option2, _Option3, _ApiLink, _ApiLink2, _Phone, _Option4, _Option5, _Option6, _Option7, _ApiLink3, _Option8, _Option9, _Option10, _Option11, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/Select',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  "default": 'default',
  error: 'error',
  success: 'success'
}, 'default'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    label: (0, _addonKnobs.text)('Label', 'Label'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('select-change'),
    onClick: (0, _addonActions.action)('select-click'),
    onKeyDown: (0, _addonActions.action)('select-key-down'),
    onFocus: (0, _addonActions.action)('select-focus'),
    onBlur: (0, _addonActions.action)('select-on-blur')
  }, _Option || (_Option = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "1"
  }, "Option 1")), _Option2 || (_Option2 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "2"
  }, "Option 2")), _Option3 || (_Option3 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "3"
  }, "Option 3"))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
  })));
};

exports.Default = Default;

var SelectOptions = function SelectOptions() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    label: (0, _addonKnobs.text)('Label', 'Label'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('select-change'),
    onClick: (0, _addonActions.action)('select-click'),
    onKeyDown: (0, _addonActions.action)('select-key-down'),
    onFocus: (0, _addonActions.action)('select-focus'),
    onBlur: (0, _addonActions.action)('select-on-blur'),
    options: [{
      label: '',
      value: '0',
      hidden: true
    }, {
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
  })));
};

exports.SelectOptions = SelectOptions;

var Icon = function Icon() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    label: (0, _addonKnobs.text)('Label', 'Label'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('select-change'),
    onClick: (0, _addonActions.action)('select-click'),
    onKeyDown: (0, _addonActions.action)('select-key-down'),
    onFocus: (0, _addonActions.action)('select-focus'),
    onBlur: (0, _addonActions.action)('select-on-blur'),
    itemBefore: _Phone || (_Phone = /*#__PURE__*/_react["default"].createElement(_PhoneOutlined["default"], null))
  }, _Option4 || (_Option4 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "",
    hidden: true
  })), _Option5 || (_Option5 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "1"
  }, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "2"
  }, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "3"
  }, "Option 3"))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
  })));
};

exports.Icon = Icon;

var Stacked = function Stacked() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Select, {
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    defaultValue: (0, _addonKnobs.text)('Default Value', ''),
    label: (0, _addonKnobs.text)('Label', 'Label'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    stacked: true,
    onChange: (0, _addonActions.action)('select-change'),
    onClick: (0, _addonActions.action)('select-click'),
    onKeyDown: (0, _addonActions.action)('select-key-down'),
    onFocus: (0, _addonActions.action)('select-focus'),
    onBlur: (0, _addonActions.action)('select-on-blur')
  }, _Option8 || (_Option8 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "",
    hidden: true
  })), _Option9 || (_Option9 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "1"
  }, "Option 1")), _Option10 || (_Option10 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "2"
  }, "Option 2")), _Option11 || (_Option11 = /*#__PURE__*/_react["default"].createElement(_.Option, {
    value: "3"
  }, "Option 3"))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
  })));
};

exports.Stacked = Stacked;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Select Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.SelectSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Select Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.SelectSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;