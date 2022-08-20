var _ThemeProvider, _ThemeProvider2;

import * as React from 'react';
import { render, act } from '../../../test-utils';
import { ThemeProvider } from '../../ThemeProvider';
import FileUploadSkeleton from './FileUploadSkeleton';
describe('FileUploadSkeleton Snapshots', () => {
  test('renders', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider || (_ThemeProvider = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(FileUploadSkeleton, {
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders as dropzone', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(_ThemeProvider2 || (_ThemeProvider2 = /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(FileUploadSkeleton, {
        variant: "dropzone",
        animate: true
      }))));
    });
    const {
      asFragment
    } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});