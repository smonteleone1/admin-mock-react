var _SelectSkeleton, _SelectSkeleton2, _SelectSkeleton3, _SelectSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import SelectSkeleton from './SelectSkeleton';
describe('SelectSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_SelectSkeleton || (_SelectSkeleton = /*#__PURE__*/React.createElement(SelectSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_SelectSkeleton2 || (_SelectSkeleton2 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_SelectSkeleton3 || (_SelectSkeleton3 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_SelectSkeleton4 || (_SelectSkeleton4 = /*#__PURE__*/React.createElement(SelectSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});