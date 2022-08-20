var _ChipSkeleton, _ChipSkeleton2, _ChipSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import ChipSkeleton from './ChipSkeleton';
describe('ChipSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_ChipSkeleton || (_ChipSkeleton = /*#__PURE__*/React.createElement(ChipSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_ChipSkeleton2 || (_ChipSkeleton2 = /*#__PURE__*/React.createElement(ChipSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_ChipSkeleton3 || (_ChipSkeleton3 = /*#__PURE__*/React.createElement(ChipSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});