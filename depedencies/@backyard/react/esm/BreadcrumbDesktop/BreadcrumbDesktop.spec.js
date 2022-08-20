var _BreadcrumbDesktop, _React$Fragment;

import * as React from 'react';
import { render } from '../../test-utils';
import ThemeProvider from '../ThemeProvider';
import BreadcrumbDesktop from './BreadcrumbDesktop';
var crumbs = [{
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
describe('BreadcrumbDesktop Snapshots', function () {
  test('BreadcrumbDesktop default snapshot', function () {
    var _render = render(_BreadcrumbDesktop || (_BreadcrumbDesktop = /*#__PURE__*/React.createElement(BreadcrumbDesktop, {
      crumbs: crumbs,
      className: "custom-class-name"
    }))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("BreadcrumbDesktop ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BreadcrumbDesktop, {
          crumbs: crumbs,
          className: "custom-class-name"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});