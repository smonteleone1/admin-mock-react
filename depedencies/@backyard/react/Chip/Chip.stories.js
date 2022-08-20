"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.FormGroupChips = exports.DefaultChip = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _ApiLink3 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2, _FormHeading, _br;

var _default = {
  title: '@backyard/react/Chip',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var types = ['Variant', {
  choice: 'choice',
  filter: 'filter',
  input: 'input'
}, 'filter'];

var DefaultChip = function DefaultChip() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Chip, {
    variant: _addonKnobs.select.apply(void 0, types) // checked={boolean('Checked', false)}
    ,
    defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    subdued: (0, _addonKnobs["boolean"])('Subdued', false),
    label: (0, _addonKnobs.text)('Label', 'Placeholder'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    name: (0, _addonKnobs.text)('Name', 'name'),
    id: "chip",
    onChange: (0, _addonActions.action)('chip-changed'),
    onClick: (0, _addonActions.action)('chip-clicked'),
    onDelete: (0, _addonActions.action)('chip-deleted'),
    onKeyUp: (0, _addonActions.action)('chip-key-up'),
    onKeyDown: (0, _addonActions.action)('chip-key-down'),
    onFocus: (0, _addonActions.action)('chip-focused')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Chip"
  })));
};

exports.DefaultChip = DefaultChip;

var FormGroupChips = function FormGroupChips() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormGroup, null, /*#__PURE__*/_react["default"].createElement(_.Chip, {
    id: "chipid1",
    variant: "choice",
    defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    subdued: (0, _addonKnobs["boolean"])('Subdued', false),
    label: (0, _addonKnobs.text)('Label', 'Placeholder'),
    name: (0, _addonKnobs.text)('Name', 'name'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    onChange: (0, _addonActions.action)('chip-changed'),
    onClick: (0, _addonActions.action)('chip-clicked'),
    onDelete: (0, _addonActions.action)('chip-deleted'),
    onKeyUp: (0, _addonActions.action)('chip-key-up'),
    onKeyDown: (0, _addonActions.action)('chip-key-down'),
    onFocus: (0, _addonActions.action)('chip-focused')
  }), /*#__PURE__*/_react["default"].createElement(_.Chip, {
    id: "chipid2",
    variant: "choice",
    defaultChecked: (0, _addonKnobs["boolean"])('Default Checked', false),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    subdued: (0, _addonKnobs["boolean"])('Subdued', false),
    label: (0, _addonKnobs.text)('Label', 'label'),
    name: (0, _addonKnobs.text)('Name', 'name'),
    value: (0, _addonKnobs.text)('Value', 'value'),
    onChange: (0, _addonActions.action)('chip-changed'),
    onClick: (0, _addonActions.action)('chip-clicked'),
    onDelete: (0, _addonActions.action)('chip-deleted'),
    onKeyUp: (0, _addonActions.action)('chip-key-up'),
    onKeyDown: (0, _addonActions.action)('chip-key-down'),
    onFocus: (0, _addonActions.action)('chip-focused')
  })), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink3.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Chip"
  })));
};

exports.FormGroupChips = FormGroupChips;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "Chip Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.ChipSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;