var _ChipSkeleton, _ChipSkeleton2, _ChipSkeleton3;

import * as React from 'react';
import { render } from '../../../test-utils';
import ChipSkeleton from './ChipSkeleton';
describe('ChipSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_ChipSkeleton || (_ChipSkeleton = /*#__PURE__*/React.createElement(ChipSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_ChipSkeleton2 || (_ChipSkeleton2 = /*#__PURE__*/React.createElement(ChipSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render3 = render(_ChipSkeleton3 || (_ChipSkeleton3 = /*#__PURE__*/React.createElement(ChipSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});