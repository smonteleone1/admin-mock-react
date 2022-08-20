var _TextField, _FormControl, _TextField2, _HomeOutlined, _CreditCard, _TextField4;

import * as React from 'react';
import { HomeOutlined, CreditCard } from '@backyard/icons';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import FormControl from '../FormControl';
import FormHelperText from '../FormHelperText';
import TextField from './TextField';
describe('TextField Snapshots', () => {
  test('default snapshot', () => {
    const {
      asFragment
    } = render(_TextField || (_TextField = /*#__PURE__*/React.createElement(TextField, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with helper text', () => {
    const {
      asFragment
    } = render(_FormControl || (_FormControl = /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextField, null), /*#__PURE__*/React.createElement(FormHelperText, null, "Text Field Helper"))));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`Search ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextField2 || (_TextField2 = /*#__PURE__*/React.createElement(TextField, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: icon', () => {
    const icons = [undefined, _HomeOutlined || (_HomeOutlined = /*#__PURE__*/React.createElement(HomeOutlined, null)), _CreditCard || (_CreditCard = /*#__PURE__*/React.createElement(CreditCard, null))];
    icons.forEach(icon => {
      var _TextField3;

      test(`TextField ${typeof icon !== 'undefined' ? icon.type.name : 'default'} icon snapshot`, () => {
        const {
          asFragment
        } = render(_TextField3 || (_TextField3 = /*#__PURE__*/React.createElement(TextField, {
          icon: icon
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: info', () => {
    test(`TextField info snapshot`, () => {
      const {
        asFragment
      } = render(_TextField4 || (_TextField4 = /*#__PURE__*/React.createElement(TextField, {
        info: "Some info"
      })));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});