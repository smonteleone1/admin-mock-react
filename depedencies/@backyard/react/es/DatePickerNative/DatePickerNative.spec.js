var _DatePickerNative, _FormControl, _DatePickerNative2;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import DatePickerNative from './DatePickerNative';
describe('DatePickerNative Snapshots', () => {
  test('default snapshot', () => {
    const {
      asFragment
    } = render(_DatePickerNative || (_DatePickerNative = /*#__PURE__*/React.createElement(DatePickerNative, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', () => {
    const {
      asFragment
    } = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(DatePickerNative, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper"))));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`DatePickerNative ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _DatePickerNative2 || (_DatePickerNative2 = /*#__PURE__*/React.createElement(DatePickerNative, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: dates', () => {
    test(`DatePickerNative dates snapshot`, () => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(DatePickerNative, {
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
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});