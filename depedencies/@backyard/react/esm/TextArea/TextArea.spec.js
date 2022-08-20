var _TextArea, _TextArea2, _TextArea4, _TextArea5, _TextArea6, _TextArea7, _TextArea8;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import TextArea from './TextArea';
describe('TextArea Snapshots', function () {
  test('default snapshot', function () {
    var _render = render(_TextArea || (_TextArea = /*#__PURE__*/React.createElement(TextArea, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TextArea ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _TextArea2 || (_TextArea2 = /*#__PURE__*/React.createElement(TextArea, null))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: shapes', function () {
    var shapes = ['rounded', 'squared'];
    shapes.forEach(function (shape) {
      var _TextArea3;

      test("TextArea ".concat(shape, " shape snapshot"), function () {
        var _render3 = render(_TextArea3 || (_TextArea3 = /*#__PURE__*/React.createElement(TextArea, {
          shape: shape
        }))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  test('with helper text and max', function () {
    var _render4 = render(_TextArea4 || (_TextArea4 = /*#__PURE__*/React.createElement(TextArea, {
      helperText: "test text",
      max: 200
    }))),
        asFragment = _render4.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with disabled, default value', function () {
    var _render5 = render(_TextArea5 || (_TextArea5 = /*#__PURE__*/React.createElement(TextArea, {
      disabled: true,
      defaultValue: "test text"
    }))),
        asFragment = _render5.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  test('with rows and resizer', function () {
    var _render6 = render(_TextArea6 || (_TextArea6 = /*#__PURE__*/React.createElement(TextArea, {
      rows: 5,
      resizer: true
    }))),
        asFragment = _render6.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('extra props', function () {
    test('TextArea className snapshot', function () {
      var _render7 = render(_TextArea7 || (_TextArea7 = /*#__PURE__*/React.createElement(TextArea, {
        className: "test-class"
      }))),
          asFragment = _render7.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
    test('TextArea DOM id, name snapshot', function () {
      var _render8 = render(_TextArea8 || (_TextArea8 = /*#__PURE__*/React.createElement(TextArea, {
        id: "test-id",
        name: "test-name"
      }))),
          asFragment = _render8.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});