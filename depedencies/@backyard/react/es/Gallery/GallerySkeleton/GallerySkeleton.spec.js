var _ThemeProvider;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import GallerySkeleton from './GallerySkeleton';
describe('GallerySkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(GallerySkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('thumbnails snapshots', () => {
    const thumbs = [5, 2];
    thumbs.forEach(thumbs => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(GallerySkeleton, {
        thumbnails: thumbs
      }));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});