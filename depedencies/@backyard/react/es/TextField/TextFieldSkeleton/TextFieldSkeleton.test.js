var _TextFieldSkeleton, _TextFieldSkeleton2, _TextFieldSkeleton3, _TextFieldSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import TextFieldSkeleton from './TextFieldSkeleton';
describe('TextFieldSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_TextFieldSkeleton || (_TextFieldSkeleton = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_TextFieldSkeleton2 || (_TextFieldSkeleton2 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_TextFieldSkeleton3 || (_TextFieldSkeleton3 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_TextFieldSkeleton4 || (_TextFieldSkeleton4 = /*#__PURE__*/React.createElement(TextFieldSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});