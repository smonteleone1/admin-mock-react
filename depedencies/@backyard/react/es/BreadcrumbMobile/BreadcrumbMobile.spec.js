var _BreadcrumbMobile, _React$Fragment;

import * as React from 'react';
import { render } from '../../test-utils';
import ThemeProvider from '../ThemeProvider';
import BreadcrumbMobile from './BreadcrumbMobile';
const crumbs = [{
  label: 'Appliances',
  to: '/',
  className: 'crumb-1'
}, {
  label: 'Refrigerators',
  to: '/',
  className: 'crumb-2'
}, {
  label: 'French Door Refrigerators',
  to: '/',
  className: 'crumb-3 currentPage'
}];
describe('BreadcrumbMobile Snapshots', () => {
  test('BreadcrumbMobile default snapshot', () => {
    const {
      asFragment
    } = render(_BreadcrumbMobile || (_BreadcrumbMobile = /*#__PURE__*/React.createElement(BreadcrumbMobile, {
      crumbs: crumbs,
      className: "custom-class-name"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`BreadcrumbMobile ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BreadcrumbMobile, {
          crumbs: crumbs,
          className: "custom-class-name"
        }))))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});