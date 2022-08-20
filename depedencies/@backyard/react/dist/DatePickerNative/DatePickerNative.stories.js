"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DisabledDates = exports.Default = exports.DatesAsObject = exports.Dates = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ = require("../");

var _useAdapter = _interopRequireDefault(require("../Pickers/hooks/useAdapter"));

var _ApiLink5 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/DatePickerNative',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var states = ['States', {
  "default": 'default',
  error: 'error',
  success: 'success'
}, 'default'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'large'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePickerNative, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};

exports.Default = Default;

var Dates = function Dates() {
  var adapter = (0, _useAdapter["default"])();
  var today = adapter.date(new Date());
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePickerNative, {
    id: "dates",
    label: (0, _addonKnobs.text)('Label', 'Installation Date'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    date: today,
    dates: [adapter.addDays(today, -3), adapter.addDays(today, -2), adapter.addDays(today, -1), today, adapter.addDays(today, 1), adapter.addDays(today, 2), adapter.addDays(today, 3), adapter.addDays(today, 4)]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};

exports.Dates = Dates;

var DatesAsObject = function DatesAsObject() {
  var adapter = (0, _useAdapter["default"])();
  var today = adapter.date(new Date());
  var yesterday = adapter.addDays(today, -1);
  var tomorrow = adapter.addDays(today, 1);
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePickerNative, {
    id: "date-object",
    label: (0, _addonKnobs.text)('Label', 'Installation Date'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    date: adapter.format(today, 'yyyy-MM-dd'),
    dates: [{
      label: "Yesterday ".concat(adapter.format(yesterday, 'EEE MMM do, yyyy')),
      value: adapter.format(yesterday, 'yyyy-MM-dd')
    }, {
      label: "Today ".concat(adapter.format(today, 'EEE MMM do, yyyy')),
      value: adapter.format(today, 'yyyy-MM-dd')
    }, {
      label: "Tomorrow ".concat(adapter.format(tomorrow, 'EEE MMM do, yyyy')),
      value: adapter.format(tomorrow, 'yyyy-MM-dd')
    }]
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};

exports.DatesAsObject = DatesAsObject;

var DisabledDates = function DisabledDates() {
  var adapter = (0, _useAdapter["default"])();
  var today = adapter.date(new Date());
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePickerNative, {
    id: "disabled-dates",
    label: (0, _addonKnobs.text)('Label', 'Room Booking'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    min: adapter.format(adapter.addDays(today, -7), 'yyyy-MM-dd'),
    max: adapter.format(adapter.addDays(today, 7), 'yyyy-MM-dd')
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};

exports.DisabledDates = DisabledDates;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "DatePickerNative Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.DatePickerNativeSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "DatePickerNative Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.DatePickerNativeSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;