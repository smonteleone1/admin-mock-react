var _GallerySkeleton, _GallerySkeleton2, _GallerySkeleton3, _GallerySkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import GallerySkeleton from './GallerySkeleton';
describe('GallerySkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_GallerySkeleton || (_GallerySkeleton = /*#__PURE__*/React.createElement(GallerySkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_GallerySkeleton2 || (_GallerySkeleton2 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom thumbnails', function () {
    var _render3 = render(_GallerySkeleton3 || (_GallerySkeleton3 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      thumbnails: 2,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_GallerySkeleton4 || (_GallerySkeleton4 = /*#__PURE__*/React.createElement(GallerySkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});