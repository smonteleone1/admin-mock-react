var _ThemeProvider, _ThemeProvider2, _ThemeProvider3, _ThemeProvider4;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import TextAreaSkeleton from './TextAreaSkeleton';
describe('TextAreaSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with helper text', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider2 || (_ThemeProvider2 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        animate: true,
        helperText: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with max', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider3 || (_ThemeProvider3 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        animate: true,
        max: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with max and helper text', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider4 || (_ThemeProvider4 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        animate: true,
        max: true,
        helperText: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('rows snapshots', () => {
    const rows = [4, 8, 12];
    rows.forEach(row => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(TextAreaSkeleton, {
        rows: row
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});