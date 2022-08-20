var _Breadcrumb, _React$Fragment;

import * as React from 'react';
import { render } from '../../test-utils';
import ThemeProvider from '../ThemeProvider';
import Breadcrumb from './Breadcrumb';
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
describe('Breadcrumb Snapshots', function () {
  test('Breadcrumb default snapshot', function () {
    var _render = render(_Breadcrumb || (_Breadcrumb = /*#__PURE__*/React.createElement(Breadcrumb, {
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

      test("Breadcrumb ".concat(theme, " theme snapshot"), function () {
        var _render2 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _React$Fragment || (_React$Fragment = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Breadcrumb, {
          crumbs: crumbs,
          className: "custom-class-name"
        })))))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('prop: render', function () {
    var renders = ['auto', 'desktop', 'mobile'];
    renders.forEach(function (rend) {
      var _Breadcrumb2;

      test("Breadcrumb ".concat(rend, " 'render' snapshot"), function () {
        var _render3 = render(_Breadcrumb2 || (_Breadcrumb2 = /*#__PURE__*/React.createElement(Breadcrumb, {
          crumbs: crumbs,
          render: rend
        }))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});