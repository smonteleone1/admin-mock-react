var _GallerySkeleton, _GallerySkeleton2, _GallerySkeleton3, _GallerySkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import GallerySkeleton from './GallerySkeleton';
describe('GallerySkeleton Tests', () => {
  it('renders', () => {
    const {
      getByTestId
    } = render(_GallerySkeleton || (_GallerySkeleton = /*#__PURE__*/React.createElement(GallerySkeleton, {
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', () => {
    const {
      getByTestId
    } = render(_GallerySkeleton2 || (_GallerySkeleton2 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom thumbnails', () => {
    const {
      getByTestId
    } = render(_GallerySkeleton3 || (_GallerySkeleton3 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      thumbnails: 2,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', () => {
    const {
      getByTestId
    } = render(_GallerySkeleton4 || (_GallerySkeleton4 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      animate: true,
      "data-testid": "skeleton"
    })));
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});