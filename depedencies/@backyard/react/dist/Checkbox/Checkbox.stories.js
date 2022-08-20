"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DefaultCheckbox = exports.ControlledCheckbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2;

var _default = {
  title: '@backyard/react/Checkbox',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultCheckbox = function DefaultCheckbox() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    control: /*#__PURE__*/_react["default"].createElement(_.Checkbox // checked={boolean('Checked', false)}
    , {
      defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      shape: _addonKnobs.select.apply(void 0, shapes),
      value: (0, _addonKnobs.text)('Value', 'value'),
      name: (0, _addonKnobs.text)('Name', 'name'),
      onChange: (0, _addonActions.action)('checkbox-changed')
    }),
    label: "Checkbox label"
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
  })));
};

exports.DefaultCheckbox = DefaultCheckbox;

var ControlledCheckbox = function ControlledCheckbox() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    control: /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
      checked: (0, _addonKnobs["boolean"])('Checked', false),
      defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      shape: _addonKnobs.select.apply(void 0, shapes),
      value: (0, _addonKnobs.text)('Value', 'value'),
      name: (0, _addonKnobs.text)('Name', 'name'),
      onChange: (0, _addonActions.action)('checkbox-changed')
    }),
    label: "Checkbox label"
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
  })));
};

exports.ControlledCheckbox = ControlledCheckbox;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.CheckboxSkeleton, {
    withLabel: (0, _addonKnobs["boolean"])('withLabel', false),
    labelWidth: (0, _addonKnobs.text)('Label text width', '5rem'),
    withHelper: (0, _addonKnobs["boolean"])('withHelper', false),
    helperWidth: (0, _addonKnobs.text)('Helper text width', '5rem'),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;