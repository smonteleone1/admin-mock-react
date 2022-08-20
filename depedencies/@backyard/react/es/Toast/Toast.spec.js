var _Toast, _React$Fragment, _Toast4;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Toast from './Toast';
describe('Toast Snapshots', () => {
  test('Toast default snapshot', () => {
    const {
      asFragment
    } = render(_Toast || (_Toast = /*#__PURE__*/React.createElement(Toast, {
      title: "Title",
      timestamp: "Timestamp [00:00:00]"
    }, "Subtitle")));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`Toast ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle"))))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: size', () => {
    const sizes = ['medium', 'jumbo'];
    sizes.forEach(size => {
      var _Toast2;

      test(`Toast ${size} size snapshot`, () => {
        const {
          asFragment
        } = render(_Toast2 || (_Toast2 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          size: size,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle")));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', () => {
    const types = ['info', 'success', 'error', 'warning'];
    types.forEach(type => {
      var _Toast3;

      test(`Toast ${type} type snapshot`, () => {
        const {
          asFragment
        } = render(_Toast3 || (_Toast3 = /*#__PURE__*/React.createElement(Toast, {
          title: "Title",
          type: type,
          timestamp: "Timestamp [00:00:00]"
        }, "Subtitle")));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: date', () => {
    test('Toast date snapshot', () => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(Toast, {
        id: "id",
        className: "classname",
        title: "Title",
        date: new Date('2021-08-06 8:00:00')
      }, "Subtitle"));
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', () => {
    test('Toast DOM props (id, className) snapshot', () => {
      const {
        asFragment
      } = render(_Toast4 || (_Toast4 = /*#__PURE__*/React.createElement(Toast, {
        id: "id",
        className: "classname",
        title: "Title",
        timestamp: "Timestamp [00:00:00]"
      }, "Subtitle")));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});