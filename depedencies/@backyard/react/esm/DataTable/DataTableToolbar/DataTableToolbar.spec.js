var _DataTableToolbar, _DataTableToolbar2, _DataTableToolbar3, _DataTableToolbar4, _DataTableToolbar5;

import * as React from 'react';
import { render } from '../../../test-utils';
import { DataTableToolbar, DataTableProvider, ThemeProvider } from '../../';
describe('DataTableToolbar Snapshots', function () {
  test('DataTableToolbar default snapshot', function () {
    var _render = render( /*#__PURE__*/React.createElement(DataTableProvider, {
      columns: [],
      data: [],
      showToolbar: true
    }, _DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(DataTableToolbar, null)))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('enableFilters', function () {
    var filtering = [true, false];
    filtering.forEach(function (filterEnabled) {
      test("DataTableToolbar enableFilters: ".concat(filterEnabled, " snapshot"), function () {
        var _render2 = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableFilters: filterEnabled
        }, _DataTableToolbar2 || (_DataTableToolbar2 = /*#__PURE__*/React.createElement(DataTableToolbar, null)))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', function () {
    var sizes = ['large', 'medium', 'small', 'custom'];
    sizes.forEach(function (size) {
      test("DataTableToolbar size: ".concat(size, " snapshot"), function () {
        var _render3 = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          size: size
        }, _DataTableToolbar3 || (_DataTableToolbar3 = /*#__PURE__*/React.createElement(DataTableToolbar, null)))),
            asFragment = _render3.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('enableSearch', function () {
    var search = [true, false];
    search.forEach(function (searchEnabled) {
      test("DataTableToolbar enableSearch: ".concat(searchEnabled, " snapshot"), function () {
        var _render4 = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableSearch: searchEnabled
        }, _DataTableToolbar4 || (_DataTableToolbar4 = /*#__PURE__*/React.createElement(DataTableToolbar, null)))),
            asFragment = _render4.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      test("DataTable ".concat(theme, " theme snapshot"), function () {
        var _render5 = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true
        }, _DataTableToolbar5 || (_DataTableToolbar5 = /*#__PURE__*/React.createElement(DataTableToolbar, null))))),
            asFragment = _render5.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});