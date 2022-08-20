var _SearchSkeleton, _SearchSkeleton2, _SearchSkeleton3, _SearchSkeleton4;

import * as React from 'react';
import { render } from '../../../test-utils';
import SearchSkeleton from './SearchSkeleton';
describe('SearchSkeleton Tests', function () {
  it('renders', function () {
    var _render = render(_SearchSkeleton || (_SearchSkeleton = /*#__PURE__*/React.createElement(SearchSkeleton, {
      "data-testid": "skeleton"
    }))),
        getByTestId = _render.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should have custom width', function () {
    var _render2 = render(_SearchSkeleton2 || (_SearchSkeleton2 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      width: "20rem",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render2.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should accept custom size', function () {
    var _render3 = render(_SearchSkeleton3 || (_SearchSkeleton3 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      size: "small",
      "data-testid": "skeleton"
    }))),
        getByTestId = _render3.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
  it('should animate', function () {
    var _render4 = render(_SearchSkeleton4 || (_SearchSkeleton4 = /*#__PURE__*/React.createElement(SearchSkeleton, {
      animate: true,
      "data-testid": "skeleton"
    }))),
        getByTestId = _render4.getByTestId;

    var skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});