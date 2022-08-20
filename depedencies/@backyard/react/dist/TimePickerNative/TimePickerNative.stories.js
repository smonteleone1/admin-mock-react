"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.Ranges = exports.List = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _ApiLink, _ApiLink2, _ApiLink3, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var _default = {
  title: '@backyard/react/TimePickerNative',
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
  }, /*#__PURE__*/_react["default"].createElement(_.TimePickerNative, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
  })));
};

exports.Default = Default;

var List = function List() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TimePickerNative, {
    id: "list",
    label: (0, _addonKnobs.text)('Label', 'Installation Time'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange'),
    time: "09:15",
    times: [{
      label: 'Morning 8:00 AM',
      value: '8:00'
    }, {
      label: 'Morning 9:15 AM',
      value: '9:15'
    }, {
      label: 'Morning 9:45 AM',
      value: '9:45',
      disabled: true
    }, {
      label: 'Morning 10:15 AM',
      value: '10:15'
    }, {
      label: 'Morning 11:15 AM',
      value: '11:15'
    }, {
      label: 'Noon 12:00 PM',
      value: '12:00'
    }, {
      label: 'Afternoon 1:15 PM',
      value: '13:15',
      disabled: true
    }, {
      label: 'Afternoon 1:45 PM',
      value: '13:45'
    }, {
      label: 'Afternoon 3:00 PM',
      value: '15:00',
      disabled: true
    }, {
      label: 'Evening 5:00 PM',
      value: '18:00'
    }, {
      label: 'Evening 5:45 PM',
      value: '18:45'
    }]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
  })));
};

exports.List = List;

var Ranges = function Ranges() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.TimePickerNative, {
    id: "ranges",
    label: (0, _addonKnobs.text)('Label', 'Room Booking'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange'),
    times: [{
      label: 'Morning 8:00 AM - 9:45 AM',
      start: '8:00',
      end: '9:45'
    }, {
      label: 'Morning 10:15 AM - 12:00 PM',
      start: '10:15',
      end: '12:00'
    }, {
      label: 'Afternoon 1:15 PM - 2:30 PM',
      start: '13:15',
      end: '14:30',
      disabled: true
    }, {
      label: 'Afternoon 3:00 PM - 4:15 PM',
      start: '15:00',
      end: '16:15',
      disabled: true
    }, {
      label: 'Evening 5:00 PM - 6:15 PM',
      start: '18:00',
      end: '19:15'
    }]
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
  })));
};

exports.Ranges = Ranges;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "TimePickerNative Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TimePickerNativeSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "TimePickerNative Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.TimePickerNativeSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;