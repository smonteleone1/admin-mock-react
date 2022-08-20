"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.DisabledDates = exports.Default = exports.DatesAsObject = exports.Dates = exports.Calendar = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ = require("../");

var _useAdapter = _interopRequireDefault(require("../Pickers/hooks/useAdapter"));

var _ApiLink6 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/DatePicker',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var states = ['State', {
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
  }, /*#__PURE__*/_react["default"].createElement(_.DatePicker, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    onClear: (0, _addonActions.action)('onClear'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disablePast: (0, _addonKnobs["boolean"])('disablePast', false),
    disableFuture: (0, _addonKnobs["boolean"])('disableFuture', false)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePicker"
  })));
};

exports.Default = Default;

var Dates = function Dates() {
  var adapter = (0, _useAdapter["default"])();
  var today = adapter.date(new Date());
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePicker, {
    id: "dates",
    label: (0, _addonKnobs.text)('Label', 'Installation Date'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    dates: [adapter.addDays(today, -3), adapter.addDays(today, -2), adapter.addDays(today, -1), today, adapter.addDays(today, 1), adapter.addDays(today, 2), adapter.addDays(today, 3), adapter.addDays(today, 4)]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePicker"
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
  }, /*#__PURE__*/_react["default"].createElement(_.DatePicker, {
    id: "dates-object",
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
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePicker"
  })));
};

exports.DatesAsObject = DatesAsObject;

var DisabledDates = function DisabledDates() {
  var adapter = (0, _useAdapter["default"])();
  var today = adapter.date(new Date());
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.DatePicker, {
    id: "disabled-dates",
    label: (0, _addonKnobs.text)('Label', 'Room Booking'),
    state: _addonKnobs.select.apply(void 0, states),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    minDate: adapter.addDays(today, -7),
    maxDate: adapter.addDays(today, 7),
    disableDates: [adapter.addDays(today, -3), adapter.addDays(today, -1), today, adapter.addDays(today, 2), adapter.addDays(today, 3), adapter.addDays(today, 4)]
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePicker"
  })));
};

exports.DisabledDates = DisabledDates;

var Calendar = function Calendar() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.CalendarPicker, {
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disablePast: (0, _addonKnobs["boolean"])('disablePast', false),
    disableFuture: (0, _addonKnobs["boolean"])('disableFuture', false)
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePicker"
  })));
};

exports.Calendar = Calendar;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "DatePicker Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.DatePickerSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "DatePicker Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.DatePickerSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;