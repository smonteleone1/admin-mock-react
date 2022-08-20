var _TextField, _FormControl, _TextField2, _HomeOutlined, _CreditCard, _TextField4;

import * as React from 'react';
import { HomeOutlined, CreditCard } from '@backyard/icons';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import TextField from './TextField';
describe('TextField Snapshots', function () {
  test('default snapshot', function () {
    var _render = render(_TextField || (_TextField = /*#__PURE__*/React.createElement(TextField, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextField, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Field Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Search ".concat(theme, " theme snapshot"), function () {
        var _render3 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextField2 || (_TextField2 = /*#__PURE__*/React.createElement(TextField, null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', function () {
    var icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(CreditCard, null))];
    icons.forEach(function (icon) {
      var _TextField3;

      test("TextField ".concat(typeof icon !== 'undefined' ? icon.type.name : 'default', " icon snapshot"), function () {
        var _render4 = render(_TextField3 || (_TextField3 = /*#__PURE__*/React.createElement(TextField, {
          icon: icon
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: info', function () {
    test("TextField info snapshot", function () {
      var _render5 = render(_TextField4 || (_TextField4 = /*#__PURE__*/React.createElement(TextField, {
        info: "Some info"
      }))),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});