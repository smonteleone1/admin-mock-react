var _TextInput, _FormControl, _TextInput2, _HomeOutlined, _CreditCard;

import * as React from 'react';
import { HomeOutlined, CreditCard } from '@backyard/icons';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import TextInput from './TextInput';
describe('TextInput Snapshots', function () {
  test('default snapshot', function () {
    var _render = render(_TextInput || (_TextInput = /*#__PURE__*/React.createElement(TextInput, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', function () {
    var _render2 = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextInput, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper")))),
        asFragment = _render2.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TextInput ".concat(theme, " theme snapshot"), function () {
        var _render3 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextInput2 || (_TextInput2 = /*#__PURE__*/React.createElement(TextInput, null))))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', function () {
    var sizes = ['small', 'medium', 'large'];
    sizes.forEach(function (size) {
      var _TextInput3;

      test("TextInput ".concat(size, " size snapshot"), function () {
        var _render4 = render(_TextInput3 || (_TextInput3 = /*#__PURE__*/React.createElement(TextInput, {
          size: size
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', function () {
    var icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(CreditCard, null))];
    icons.forEach(function (icon) {
      var _TextInput4;

      test("TextInput ".concat(typeof icon !== 'undefined' ? icon.type.name : 'default', " icon snapshot"), function () {
        var _render5 = render(_TextInput4 || (_TextInput4 = /*#__PURE__*/React.createElement(TextInput, {
          itemBefore: icon,
          itemAfter: icon
        }))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});