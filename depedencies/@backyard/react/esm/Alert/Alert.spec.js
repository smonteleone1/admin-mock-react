var _Alert, _React$Fragment, _Alert4;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Alert from './Alert';
describe('Alert Snapshots', function () {
  test('Alert default snapshot', function () {
    var _render = render(_Alert || (_Alert = /*#__PURE__*/React.createElement(Alert, {
      title: "Title"
    }))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("Alert ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Alert, {
          title: "Title"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: sizes', function () {
    var sizes = ['medium', 'jumbo'];
    sizes.forEach(function (size) {
      var _Alert2;

      test("Alert ".concat(size, " size snapshot"), function () {
        var _render3 = render(_Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(Alert, {
          multiline: true,
          title: "Title",
          subtitle: "Subtitle",
          action: "Action",
          size: size
        }))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', function () {
    var types = ['info', 'success', 'error', 'warning'];
    types.forEach(function (type) {
      var _Alert3;

      test("Alert ".concat(type, " type snapshot"), function () {
        var _render4 = render(_Alert3 || (_Alert3 = /*#__PURE__*/React.createElement(Alert, {
          subtitle: "Subtitle",
          type: type
        }))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: actionProps', function () {
    test("Alert action snapshot", function () {
      var _render5 = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        action: "Action",
        actionLinkProps: {
          color: 'primary'
        }
      })),
          asFragment = _render5.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', function () {
    test('Alert DOM props (id, className) snapshot', function () {
      var _render6 = render(_Alert4 || (_Alert4 = /*#__PURE__*/React.createElement(Alert, {
        id: "id",
        className: "classname",
        title: "Title"
      }))),
          asFragment = _render6.asFragment;

      expect(asFragment()).toMatchSnapshot();
    });
  });
});