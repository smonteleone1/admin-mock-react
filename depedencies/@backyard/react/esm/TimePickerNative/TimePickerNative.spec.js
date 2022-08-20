var _TimePickerNative, _FormControl, _TimePickerNative2;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import TimePickerNative from './TimePickerNative';
describe('TimePickerNative Snapshots', function () {
  test('default snapshot', function () {
    var _render = render(_TimePickerNative || (_TimePickerNative = /*#__PURE__*/React.createElement(TimePickerNative, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TimePickerNative, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TimePickerNative ".concat(theme, " theme snapshot"), function () {
        var _render3 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TimePickerNative2 || (_TimePickerNative2 = /*#__PURE__*/React.createElement(TimePickerNative, null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: times', function () {
    test("TimePickerNative times snapshot", function () {
      var _render4 = render( /*#__PURE__*/React.createElement(TimePickerNative, {
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