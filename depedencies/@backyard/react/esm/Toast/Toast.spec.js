var _Toast, _React$Fragment, _Toast4;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Toast from './Toast';
describe('Toast Snapshots', function () {
  test('Toast default snapshot', function () {
    var _render = render(_Toast || (_Toast = /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      timestamp: "Timestamp [00:00:00]"
    }, "Subtitle"))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Toast ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle")))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', function () {
    var sizes = ['medium', 'jumbo'];
    sizes.forEach(function (size) {
      var _Toast2;

      test("Toast ".concat(size, " size snapshot"), function () {
        var _render3 = render(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          size: size,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', function () {
    var types = ['info', 'success', 'error', 'warning'];
    types.forEach(function (type) {
      var _Toast3;

      test("Toast ".concat(type, " type snapshot"), function () {
        var _render4 = render(_Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          type: type,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: date', function () {
    test('Toast date snapshot', function () {
      var _render5 = render( /*#__PURE__*/React.createElement(Toast, {
        id: "id",
        className: "classname",
        title: "Title",
        date: new Date('2021-08-06 8:00:00')
      }, "Subtitle")),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', function () {
    test('Toast DOM props (id, className) snapshot', function () {
      var _render6 = render(_Toast4 || (_Toast4 = /*#__PURE__*/React.createElement(Toast, {
        id: "id",
        className: "classname",
        title: "Title",
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle"))),
          asFragment = _render6.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});