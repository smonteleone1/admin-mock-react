var _BreadcrumbMobileSkel, _BreadcrumbMobileSkel2, _BreadcrumbMobileSkel3;

import * as React from 'react';
import { render } from '../../../test-utils';
import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton';
describe('BreadcrumbMobileSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_BreadcrumbMobileSkel || (_BreadcrumbMobileSkel = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render2 = render(_BreadcrumbMobileSkel2 || (_BreadcrumbMobileSkel2 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      animate: true,
      "data-testid": "skeleton-animate"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton-animate');
    expect(skeleton).toBeInTheDocument();
  });
  it('should change in width', function () {
    var _render3 = render(_BreadcrumbMobileSkel3 || (_BreadcrumbMobileSkel3 = /*#__PURE__*/React.createElement(BreadcrumbMobileSkeleton, {
      width: "30rem",
      "data-testid": "skeleton-width"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton-width');
    expect(skeleton).toBeInTheDocument();
  });
});