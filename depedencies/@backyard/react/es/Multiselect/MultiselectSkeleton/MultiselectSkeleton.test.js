var _MultiselectSkeleton, _MultiselectSkeleton2, _MultiselectSkeleton3, _MultiselectSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import MultiselectSkeleton from './MultiselectSkeleton';
describe('MultiselectSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_MultiselectSkeleton || (_MultiselectSkeleton = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_MultiselectSkeleton2 || (_MultiselectSkeleton2 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', () => {
    const {
      getByTestId
    } = render(_MultiselectSkeleton3 || (_MultiselectSkeleton3 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_MultiselectSkeleton4 || (_MultiselectSkeleton4 = /*#__PURE__*/React.createElement(MultiselectSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});