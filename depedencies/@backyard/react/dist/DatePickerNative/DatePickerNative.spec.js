"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var React = _interopRequireWildcard(require("react"));

var _testUtils = require("../../test-utils");

var _ThemeProvider2 = require("../ThemeProvider");

var _FormControl2 = _interopRequireDefault(require("../FormControl"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _DatePickerNative3 = _interopRequireDefault(require("./DatePickerNative"));

var _DatePickerNative, _FormControl, _DatePickerNative2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('DatePickerNative Snapshots', function () {
  test('default snapshot', function () {
    var _render = (0, _testUtils.render)(_DatePickerNative || (_DatePickerNative = /*#__PURE__*/React.createElement(_DatePickerNative3["default"], null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = (0, _testUtils.render)(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(_FormControl2["default"], null, /*#__PURE__*/React.createElement(_DatePickerNative3["default"], null), /*#__PURE__*/React.createElement(_FormHelperText["default"], null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("DatePickerNative ".concat(theme, " theme snapshot"), function () {
        var _render3 = (0, _testUtils.render)(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(_ThemeProvider2.ThemeProvider, {
          theme: theme
        }, _DatePickerNative2 || (_DatePickerNative2 = /*#__PURE__*/React.createElement(_DatePickerNative3["default"], null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: dates', function () {
    test("DatePickerNative dates snapshot", function () {
      var _render4 = (0, _testUtils.render)( /*#__PURE__*/React.createElement(_DatePickerNative3["default"], {
        date: "2020-07-19",
        dates: [{
          label: 'Yesterday 8:00 AM',
          value: '2020-07-18'
        }, {
          label: 'Today 9:15 AM',
          value: '2020-07-19'
        }, {
          label: 'Tomorrow 9:45 AM',
          value: '2020-07-20',
          disabled: true
        }, {
          label: 'Next Day 10:15 AM',
          value: '2020-07-21'
        }]
      })),
          asFragment = _render4.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});