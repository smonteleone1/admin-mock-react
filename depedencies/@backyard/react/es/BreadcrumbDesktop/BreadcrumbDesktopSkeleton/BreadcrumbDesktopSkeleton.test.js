var _BreadcrumbDesktopSke, _BreadcrumbDesktopSke2, _BreadcrumbDesktopSke3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbDesktopSkeleton from './BreadcrumbDesktopSkeleton';
describe('BreadcrumbDesktopSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_BreadcrumbDesktopSke || (_BreadcrumbDesktopSke = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_BreadcrumbDesktopSke2 || (_BreadcrumbDesktopSke2 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      animate: true,
      "data-testid": "skeleton-animate"
    })));
    const skeleton = getByTestId('skeleton-animate');
    expect(skeleton).toBeInTheDocument();
  });
  it('should change in width', () => {
    const {
      getByTestId
    } = render(_BreadcrumbDesktopSke3 || (_BreadcrumbDesktopSke3 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      width: "30rem",
      "data-testid": "skeleton-width"
    })));
    const skeleton = getByTestId('skeleton-width');
    expect(skeleton).toBeInTheDocument();
  });
});