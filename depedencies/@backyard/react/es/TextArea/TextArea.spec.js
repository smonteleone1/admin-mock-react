var _TextArea, _TextArea2, _TextArea4, _TextArea5, _TextArea6, _TextArea7, _TextArea8;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import TextArea from './TextArea';
describe('TextArea Snapshots', () => {
  test('default snapshot', () => {
    const {
      asFragment
    } = render(_TextArea || (_TextArea = /*#__PURE__*/React.createElement(TextArea, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`TextArea ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextArea2 || (_TextArea2 = /*#__PURE__*/React.createElement(TextArea, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: shapes', () => {
    const shapes = ['rounded', 'squared'];
    shapes.forEach(shape => {
      var _TextArea3;

      test(`TextArea ${shape} shape snapshot`, () => {
        const {
          asFragment
        } = render(_TextArea3 || (_TextArea3 = /*#__PURE__*/React.createElement(TextArea, {
          shape: shape
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  test('with helper text and max', () => {
    const {
      asFragment
    } = render(_TextArea4 || (_TextArea4 = /*#__PURE__*/React.createElement(TextArea, {
      helperText: "test text",
      max: 200
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with disabled, default value', () => {
    const {
      asFragment
    } = render(_TextArea5 || (_TextArea5 = /*#__PURE__*/React.createElement(TextArea, {
      disabled: true,
      defaultValue: "test text"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  test('with rows and resizer', () => {
    const {
      asFragment
    } = render(_TextArea6 || (_TextArea6 = /*#__PURE__*/React.createElement(TextArea, {
      rows: 5,
      resizer: true
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('extra props', () => {
    test('TextArea className snapshot', () => {
      const {
        asFragment
      } = render(_TextArea7 || (_TextArea7 = /*#__PURE__*/React.createElement(TextArea, {
        className: "test-class"
      })));
      expect(asFragment()).toMatchSnapshot();
    });
    test('TextArea DOM id, name snapshot', () => {
      const {
        asFragment
      } = render(_TextArea8 || (_TextArea8 = /*#__PURE__*/React.createElement(TextArea, {
        id: "test-id",
        name: "test-name"
      })));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});