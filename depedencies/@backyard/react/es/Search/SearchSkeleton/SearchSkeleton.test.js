var _SearchSkeleton, _SearchSkeleton2, _SearchSkeleton3, _SearchSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import SearchSkeleton from './SearchSkeleton';
describe('SearchSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_SearchSkeleton || (_SearchSkeleton = /*#__PURE__*/React.createElement(SearchSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_SearchSkeleton2 || (_SearchSkeleton2 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_SearchSkeleton3 || (_SearchSkeleton3 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_SearchSkeleton4 || (_SearchSkeleton4 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});