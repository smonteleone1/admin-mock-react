var _ThemeProvider;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import AlertSkeleton from './AlertSkeleton';
describe('AlertSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(AlertSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('multiline snapshots', () => {
    const multilines = [false, true];
    multilines.forEach(multiline => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(AlertSkeleton, {
        multiline: multiline
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});