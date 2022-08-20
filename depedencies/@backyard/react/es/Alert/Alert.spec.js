var _Alert, _React$Fragment, _Alert4;

import * as React from 'react';
import { render } from '../../test-utils';
import { ThemeProvider } from '../ThemeProvider';
import Alert from './Alert';
describe('Alert Snapshots', () => {
  test('Alert default snapshot', () => {
    const {
      asFragment
    } = render(_Alert || (_Alert = /*#__PURE__*/React.createElement(Alert, {
      title: "Title"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`Alert ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Alert, {
          title: "Title"
        }))))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: sizes', () => {
    const sizes = ['medium', 'jumbo'];
    sizes.forEach(size => {
      var _Alert2;

      test(`Alert ${size} size snapshot`, () => {
        const {
          asFragment
        } = render(_Alert2 || (_Alert2 = /*#__PURE__*/React.createElement(Alert, {
          multiline: true,
          title: "Title",
          subtitle: "Subtitle",
          action: "Action",
          size: size
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: type', () => {
    const types = ['info', 'success', 'error', 'warning'];
    types.forEach(type => {
      var _Alert3;

      test(`Alert ${type} type snapshot`, () => {
        const {
          asFragment
        } = render(_Alert3 || (_Alert3 = /*#__PURE__*/React.createElement(Alert, {
          subtitle: "Subtitle",
          type: type
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: actionProps', () => {
    test(`Alert action snapshot`, () => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(Alert, {
        title: "Title",
        action: "Action",
        actionLinkProps: {
          color: 'primary'
        }
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('extra props', () => {
    test('Alert DOM props (id, className) snapshot', () => {
      const {
        asFragment
      } = render(_Alert4 || (_Alert4 = /*#__PURE__*/React.createElement(Alert, {
        id: "id",
        className: "classname",
        title: "Title"
      })));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});