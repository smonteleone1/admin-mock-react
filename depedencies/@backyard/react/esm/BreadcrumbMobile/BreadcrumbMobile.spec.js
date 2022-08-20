var _BreadcrumbMobile, _React$Fragment;

import * as React from 'react';
import { render } from '../../test-utils';
import ThemeProvider from '../ThemeProvider';
import BreadcrumbMobile from './BreadcrumbMobile';
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
describe('BreadcrumbMobile Snapshots', function () {
  test('BreadcrumbMobile default snapshot', function () {
    var _render = render(_BreadcrumbMobile || (_BreadcrumbMobile = /*#__PURE__*/React.createElement(BreadcrumbMobile, {
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

      test("BreadcrumbMobile ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BreadcrumbMobile, {
          crumbs: crumbs,
          className: "custom-class-name"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});