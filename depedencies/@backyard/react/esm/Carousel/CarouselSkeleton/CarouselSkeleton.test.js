var _CarouselSkeleton, _CarouselSkeleton2, _CarouselSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import CarouselSkeleton from './CarouselSkeleton';
describe('CarouselSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_CarouselSkeleton || (_CarouselSkeleton = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_CarouselSkeleton2 || (_CarouselSkeleton2 = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_CarouselSkeleton3 || (_CarouselSkeleton3 = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});