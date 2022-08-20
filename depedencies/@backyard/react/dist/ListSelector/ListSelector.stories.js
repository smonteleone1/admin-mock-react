"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListSelectorOptions = exports.ListSelectorMultiple = exports.DefaultListSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3;

var _default = {
  title: '@backyard/react/List',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var sizes = ['Size', {
  condensed: 'condensed',
  normal: 'normal'
}, 'normal'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var DefaultListSelector = function DefaultListSelector() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.List, {
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/_react["default"].createElement(_.ListOption, {
    size: _addonKnobs.select.apply(void 0, sizes)
  }, "List Item"), /*#__PURE__*/_react["default"].createElement(_.ListOption, {
    size: _addonKnobs.select.apply(void 0, sizes)
  }, "List Item"), /*#__PURE__*/_react["default"].createElement(_.ListOption, {
    size: _addonKnobs.select.apply(void 0, sizes)
  }, "List Item")), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};

exports.DefaultListSelector = DefaultListSelector;

var ListSelectorOptions = function ListSelectorOptions() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.List, {
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    defaultValue: (0, _addonKnobs.text)('Default Value', undefined),
    label: (0, _addonKnobs.text)('Label', 'label'),
    value: (0, _addonKnobs.text)('Value', undefined),
    onChange: (0, _addonActions.action)('onChange'),
    options: [{
      label: 'List Item 1',
      value: '1'
    }, {
      label: 'List Item 2',
      value: '2'
    }, {
      label: 'List Item 3',
      value: '3'
    }]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};

exports.ListSelectorOptions = ListSelectorOptions;

var ListSelectorMultiple = function ListSelectorMultiple() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.List, {
    multiple: true,
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    defaultValue: (0, _addonKnobs.text)('Default Value', undefined),
    label: (0, _addonKnobs.text)('Label', 'label'),
    value: (0, _addonKnobs.text)('Value', undefined),
    onChange: (0, _addonActions.action)('onChange'),
    options: [{
      label: 'List Item 1',
      value: '1'
    }, {
      label: 'List Item 2',
      value: '2'
    }, {
      label: 'List Item 3',
      value: '3'
    }]
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/List"
  })));
};

exports.ListSelectorMultiple = ListSelectorMultiple;