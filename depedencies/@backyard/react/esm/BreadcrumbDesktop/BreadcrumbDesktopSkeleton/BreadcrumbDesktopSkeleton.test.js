var _BreadcrumbDesktopSke, _BreadcrumbDesktopSke2, _BreadcrumbDesktopSke3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbDesktopSkeleton from './BreadcrumbDesktopSkeleton';
describe('BreadcrumbDesktopSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_BreadcrumbDesktopSke || (_BreadcrumbDesktopSke = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render2 = render(_BreadcrumbDesktopSke2 || (_BreadcrumbDesktopSke2 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      animate: true,
      "data-testid": "skeleton-animate"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton-animate');
    expect(skeleton).toBeInTheDocument();
  });
  it('should change in width', function () {
    var _render3 = render(_BreadcrumbDesktopSke3 || (_BreadcrumbDesktopSke3 = /*#__PURE__*/React.createElement(BreadcrumbDesktopSkeleton, {
      width: "30rem",
      "data-testid": "skeleton-width"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton-width');
    expect(skeleton).toBeInTheDocument();
  });
});