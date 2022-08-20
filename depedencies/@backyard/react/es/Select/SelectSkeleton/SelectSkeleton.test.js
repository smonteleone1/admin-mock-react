var _SelectSkeleton, _SelectSkeleton2, _SelectSkeleton3, _SelectSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import SelectSkeleton from './SelectSkeleton';
describe('SelectSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_SelectSkeleton || (_SelectSkeleton = /*#__PURE__*/React.createElement(SelectSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_SelectSkeleton2 || (_SelectSkeleton2 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_SelectSkeleton3 || (_SelectSkeleton3 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_SelectSkeleton4 || (_SelectSkeleton4 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});