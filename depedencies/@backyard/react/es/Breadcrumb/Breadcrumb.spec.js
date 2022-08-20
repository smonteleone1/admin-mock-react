var _Breadcrumb, _React$Fragment;

import * as React from 'react';
import { render } from '../../test-utils';
import ThemeProvider from '../ThemeProvider';
import Breadcrumb from './Breadcrumb';
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
describe('Breadcrumb Snapshots', () => {
  test('Breadcrumb default snapshot', () => {
    const {
      asFragment
    } = render(_Breadcrumb || (_Breadcrumb = /*#__PURE__*/React.createElement(Breadcrumb, {
      crumbs: crumbs,
      className: "custom-class-name"
    })));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`Breadcrumb ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Breadcrumb, {
          crumbs: crumbs,
          className: "custom-class-name"
        }))))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: render', () => {
    const renders = ['auto', 'desktop', 'mobile'];
    renders.forEach(rend => {
      var _Breadcrumb2;

      test(`Breadcrumb ${rend} 'render' snapshot`, () => {
        const {
          asFragment
        } = render(_Breadcrumb2 || (_Breadcrumb2 = /*#__PURE__*/React.createElement(Breadcrumb, {
          crumbs: crumbs,
          render: rend
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});