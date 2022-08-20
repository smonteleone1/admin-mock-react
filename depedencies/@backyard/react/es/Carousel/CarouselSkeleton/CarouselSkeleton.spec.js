var _ThemeProvider;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import CarouselSkeleton from './CarouselSkeleton';
describe('CarouselSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(CarouselSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('prop snapshots', () => {
    const props = [{
      hideButtons: true
    }, {
      hideScrollbar: true
    }];
    props.forEach(prop => {
      const {
        asFragment
      } = render( /*#__PURE__*/React.createElement(CarouselSkeleton, prop));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});