var _CarouselSkeleton, _CarouselSkeleton2, _CarouselSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import CarouselSkeleton from './CarouselSkeleton';
describe('CarouselSkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_CarouselSkeleton || (_CarouselSkeleton = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_CarouselSkeleton2 || (_CarouselSkeleton2 = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_CarouselSkeleton3 || (_CarouselSkeleton3 = /*#__PURE__*/React.createElement(CarouselSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});