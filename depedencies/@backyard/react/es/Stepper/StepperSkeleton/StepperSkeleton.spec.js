var _ThemeProvider, _ThemeProvider2, _ThemeProvider3;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import StepperSkeleton from './StepperSkeleton';
describe('StepperSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(StepperSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with hidden buttons', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider2 || (_ThemeProvider2 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(StepperSkeleton, {
        hideButtons: true,
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with label', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider3 || (_ThemeProvider3 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(StepperSkeleton, {
        label: true,
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});