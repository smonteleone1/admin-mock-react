var _StubPagination, _StubPagination3;

import * as React from 'react';
import { render } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import StubPagination from './StubPagination';
describe('TablePagination Snapshots', () => {
  test('TablePagination default snapshot', () => {
    const {
      asFragment
    } = render(_StubPagination || (_StubPagination = /*#__PURE__*/React.createElement(StubPagination, null)));
    expect(asFragment()).toMatchSnapshot();
  });
  describe('prop: size', () => {
    const sizes = ['small', 'medium', 'large'];
    sizes.forEach(size => {
      var _StubPagination2;

      test(`TablePagination ${size} size snapshot`, () => {
        const {
          asFragment
        } = render(_StubPagination2 || (_StubPagination2 = /*#__PURE__*/React.createElement(StubPagination, {
          size: size
        })));
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('themes', () => {
    const themes = ['light', 'dark'];
    themes.forEach(theme => {
      var _ThemeProvider;

      test(`TablePagination  ${theme} theme snapshot`, () => {
        const {
          asFragment
        } = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, {
          theme: theme
        }, _StubPagination3 || (_StubPagination3 = /*#__PURE__*/React.createElement(StubPagination, null)))));
      });
    });
  });
});