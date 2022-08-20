var _TileSkeleton, _TileSkeleton2, _TileSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import TileSkeleton from './TileSkeleton';
describe('TileSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_TileSkeleton || (_TileSkeleton = /*#__PURE__*/React.createElement(TileSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_TileSkeleton2 || (_TileSkeleton2 = /*#__PURE__*/React.createElement(TileSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_TileSkeleton3 || (_TileSkeleton3 = /*#__PURE__*/React.createElement(TileSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});