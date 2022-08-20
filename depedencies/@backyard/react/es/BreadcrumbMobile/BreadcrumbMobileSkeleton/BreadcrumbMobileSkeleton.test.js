var _BreadcrumbMobileSkel, _BreadcrumbMobileSkel2, _BreadcrumbMobileSkel3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton';
describe('BreadcrumbMobileSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_BreadcrumbMobileSkel || (_BreadcrumbMobileSkel = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_BreadcrumbMobileSkel2 || (_BreadcrumbMobileSkel2 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      animate: true,
      "data-testid": "skeleton-animate"
    })));
    const skeleton = getByTestId('skeleton-animate');
    expect(skeleton).toBeInTheDocument();
  });
  it('should change in width', () => {
    const {
      getByTestId
    } = render(_BreadcrumbMobileSkel3 || (_BreadcrumbMobileSkel3 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      width: "30rem",
      "data-testid": "skeleton-width"
    })));
    const skeleton = getByTestId('skeleton-width');
    expect(skeleton).toBeInTheDocument();
  });
});