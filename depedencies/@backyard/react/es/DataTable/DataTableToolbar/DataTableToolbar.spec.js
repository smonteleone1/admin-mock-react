var _DataTableToolbar, _DataTableToolbar2, _DataTableToolbar3, _DataTableToolbar4, _DataTableToolbar5;

import * as React from 'react';
import { render } from '../../../test-utils';
import { DataTableToolbar, DataTableProvider, ThemeProvider } from '../../';
describe('DataTableToolbar Snapshots', () => {
  test('DataTableToolbar default snapshot', () => {
    const {
      asFragment
    } = render( /*#__PURE__*/React.createElement(DataTableProvider, {
      columns: [],
      data: [],
      showToolbar: true
    }, _DataTableToolbar || (_DataTableToolbar = /*#__PURE__*/React.createElement(DataTableToolbar, null))));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('enableFilters', () => {
    const filtering = [true, false];
    filtering.forEach(filterEnabled => {
      test(`DataTableToolbar enableFilters: ${filterEnabled} snapshot`, () => {
        const {
          asFragment
        } = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableFilters: filterEnabled
        }, _DataTableToolbar2 || (_DataTableToolbar2 = /*#__PURE__*/React.createElement(DataTableToolbar, null))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('sizes', () => {
    const sizes = ['large', 'medium', 'small', 'custom'];
    sizes.forEach(size => {
      test(`DataTableToolbar size: ${size} snapshot`, () => {
        const {
          asFragment
        } = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          size: size
        }, _DataTableToolbar3 || (_DataTableToolbar3 = /*#__PURE__*/React.createElement(DataTableToolbar, null))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('enableSearch', () => {
    const search = [true, false];
    search.forEach(searchEnabled => {
      test(`DataTableToolbar enableSearch: ${searchEnabled} snapshot`, () => {
        const {
          asFragment
        } = render( /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true,
          enableSearch: searchEnabled
        }, _DataTableToolbar4 || (_DataTableToolbar4 = /*#__PURE__*/React.createElement(DataTableToolbar, null))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      test(`DataTable ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render( /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/React.createElement(DataTableProvider, {
          columns: [],
          data: [],
          showToolbar: true
        }, _DataTableToolbar5 || (_DataTableToolbar5 = /*#__PURE__*/React.createElement(DataTableToolbar, null)))));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});