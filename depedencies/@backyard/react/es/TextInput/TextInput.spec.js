var _TextInput, _FormControl, _TextInput2, _HomeOutlined, _CreditCard;

import * as React from 'react';
import { HomeOutlined, CreditCard } from '@backyard/icons';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import TextInput from './TextInput';
describe('TextInput Snapshots', () => {
  test('default snapshot', () => {
    const {
      asFragment
    } = render(_TextInput || (_TextInput = /*#__PURE__*/React.createElement(TextInput, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', () => {
    const {
      asFragment
    } = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextInput, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Input Helper"))));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`TextInput ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextInput2 || (_TextInput2 = /*#__PURE__*/React.createElement(TextInput, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', () => {
    const sizes = ['small', 'medium', 'large'];
    sizes.forEach(size => {
      var _TextInput3;

      test(`TextInput ${size} size snapshot`, () => {
        const {
          asFragment
        } = render(_TextInput3 || (_TextInput3 = /*#__PURE__*/React.createElement(TextInput, {
          size: size
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', () => {
    const icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(CreditCard, null))];
    icons.forEach(icon => {
      var _TextInput4;

      test(`TextInput ${typeof icon !== 'undefined' ? icon.type.name : 'default'} icon snapshot`, () => {
        const {
          asFragment
        } = render(_TextInput4 || (_TextInput4 = /*#__PURE__*/React.createElement(TextInput, {
          itemBefore: icon,
          itemAfter: icon
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});