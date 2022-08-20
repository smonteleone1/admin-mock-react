var _BreadcrumbSkeleton, _BreadcrumbSkeleton2, _BreadcrumbSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbSkeleton from './BreadcrumbSkeleton';
describe('BreadcrumbSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_BreadcrumbSkeleton || (_BreadcrumbSkeleton = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render2 = render(_BreadcrumbSkeleton2 || (_BreadcrumbSkeleton2 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      animate: true,
      "data-testid": "skeleton-animate"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton-animate');
    expect(skeleton).toBeInTheDocument();
  });
  it('should change in width', function () {
    var _render3 = render(_BreadcrumbSkeleton3 || (_BreadcrumbSkeleton3 = /*#__PURE__*/React.createElement(BreadcrumbSkeleton, {
      width: "30rem",
      "data-testid": "skeleton-width"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton-width');
    expect(skeleton).toBeInTheDocument();
  });
});