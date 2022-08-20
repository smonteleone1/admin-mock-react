"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _FormControl2 = _interopRequireDefault(require("../FormControl"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _TimePickerNative3 = _interopRequireDefault(require("./TimePickerNative"));

var _TimePickerNative, _FormControl, _TimePickerNative2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TimePickerNative Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_TimePickerNative || (_TimePickerNative = /*#__PURE__*/React.createElement(_TimePickerNative3["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = (0, _testUtils.render)(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(_FormControl2["default"], null, /*#__PURE__*/React.createElement(_TimePickerNative3["default"], null), /*#__PURE__*/React.createElement(_FormHelperText["default"], null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TimePickerNative ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _TimePickerNative2 || (_TimePickerNative2 = /*#__PURE__*/React.createElement(_TimePickerNative3["default"], null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: times', function () {
    test("TimePickerNative times snapshot", function () {
      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_TimePickerNative3["default"], {
        defaultValue: "8:00",
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
      })),
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});