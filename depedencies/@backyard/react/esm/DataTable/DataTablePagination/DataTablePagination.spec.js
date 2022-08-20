var _StubPagination, _StubPagination3;

import * as React from 'react';
import { render } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import StubPagination from './StubPagination';
describe('TablePagination Snapshots', function () {
  test('TablePagination default snapshot', function () {
    var _render = render(_StubPagination || (_StubPagination = /*#__PURE__*/React.createElement(StubPagination, null))),
        asFragment = _render.asFragment;

    expect(asFragment()).toMatchSnapshot();
  });
  describe('prop: size', function () {
    var sizes = ['small', 'medium', 'large'];
    sizes.forEach(function (size) {
      var _StubPagination2;

      test("TablePagination ".concat(size, " size snapshot"), function () {
        var _render2 = render(_StubPagination2 || (_StubPagination2 = /*#__PURE__*/React.createElement(StubPagination, {
          size: size
        }))),
            asFragment = _render2.asFragment;

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', function () {
    var themes = ['light', 'dark'];
    themes.forEach(function (theme) {
      var _ThemeProvider;

      test("TablePagination  ".concat(theme, " theme snapshot"), function () {
        var _render3 = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _StubPagination3 || (_StubPagination3 = /*#__PURE__*/React.createElement(StubPagination, null))))),
            asFragment = _render3.asFragment;
      });
    });
  });
});